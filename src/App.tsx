import { motion } from "motion/react";
import { 
  Dumbbell, 
  Users, 
  Calendar, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter, 
  ChevronRight,
  CheckCircle2,
  Clock,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Nosotros", href: "#about" },
    { name: "Instalaciones", href: "#facilities" },
    { name: "Clases", href: "#classes" },
    { name: "Membresías", href: "#pricing" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-brand-dark/90 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-brand-primary p-1.5 rounded-sm transform group-hover:rotate-12 transition-transform">
            <Dumbbell className="text-brand-dark w-6 h-6" />
          </div>
          <span className="font-display text-2xl tracking-wider uppercase">El Templo</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium uppercase tracking-widest hover:text-brand-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#pricing" 
            className="bg-brand-primary text-brand-dark px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 active:scale-95"
          >
            Únete Ahora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium uppercase tracking-widest hover:text-brand-primary"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#pricing" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-brand-primary text-brand-dark px-6 py-3 rounded-full text-center font-bold uppercase tracking-widest"
          >
            Únete Ahora
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Background" 
          className="w-full h-full object-cover opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-primary font-bold tracking-[0.3em] uppercase mb-4 block">
              Bienvenido al Olimpo del Fitness
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display uppercase leading-[0.9] mb-8">
              Tu Cuerpo es <br />
              <span className="text-brand-primary">Tu Templo</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-10 font-light leading-relaxed">
              Entrénalo con la intensidad que merece. Instalaciones de élite, comunidad inquebrantable y resultados garantizados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#pricing" 
                className="bg-brand-primary text-brand-dark px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 group"
              >
                Empezar Hoy <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#facilities" 
                className="border border-white/30 hover:border-brand-primary px-10 py-5 rounded-full font-bold uppercase tracking-widest transition-all flex items-center justify-center"
              >
                Ver Instalaciones
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Text */}
      <div className="absolute -bottom-10 -right-20 opacity-5 select-none pointer-events-none hidden lg:block">
        <span className="text-[20rem] font-display uppercase text-stroke">TEMPLO</span>
      </div>
    </section>
  );
};

const About = () => {
  const stats = [
    { label: "Metros Cuadrados", value: "2500+" },
    { label: "Equipos de Élite", value: "150+" },
    { label: "Socios Activos", value: "1200+" },
    { label: "Entrenadores PRO", value: "15+" },
  ];

  return (
    <section id="about" className="py-24 bg-brand-gray relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
                alt="Gym Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-brand-primary text-brand-dark p-8 rounded-2xl hidden md:block">
              <span className="text-5xl font-display block">10+</span>
              <span className="font-bold uppercase tracking-wider text-sm">Años de Excelencia</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl uppercase mb-8 leading-tight">
              Más que un Gimnasio, <br />
              <span className="text-brand-primary">Una Filosofía</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              En El Templo, creemos que el entrenamiento físico es la base de la fortaleza mental. No somos solo un lugar para levantar pesas; somos una comunidad dedicada a la superación personal constante.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="text-3xl font-display text-brand-primary block">{stat.value}</span>
                  <span className="text-sm uppercase tracking-widest text-white/50">{stat.label}</span>
                </div>
              ))}
            </div>
            <button className="flex items-center gap-4 group">
              <span className="font-bold uppercase tracking-widest group-hover:text-brand-primary transition-colors">Nuestra Historia</span>
              <div className="w-12 h-px bg-white/30 group-hover:bg-brand-primary transition-all"></div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Facilities = () => {
  const items = [
    { title: "Zona Musculación", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" },
    { title: "Área de Cardio", img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop" },
    { title: "Peso Libre", img: "https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?q=80&w=2070&auto=format&fit=crop" },
    { title: "Box CrossFit", img: "https://images.unsplash.com/photo-1534367507873-d2d7e249a3fe?q=80&w=2070&auto=format&fit=crop" },
    { title: "Sala Yoga/Pilates", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop" },
    { title: "Vestuarios VIP", img: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=1928&auto=format&fit=crop" },
  ];

  return (
    <section id="facilities" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl uppercase mb-4">Nuestras Instalaciones</h2>
          <p className="text-white/50 uppercase tracking-[0.2em] text-sm">Equipamiento de última generación para resultados de élite</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-display uppercase tracking-wider">{item.title}</h3>
                <div className="w-0 group-hover:w-full h-1 bg-brand-primary transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Classes = () => {
  const classes = [
    { name: "CrossFit", time: "07:00 - 08:30", instructor: "Alex Rivera", level: "Avanzado" },
    { name: "Spinning", time: "09:00 - 10:00", instructor: "Elena Sanz", level: "Todos" },
    { name: "Powerlifting", time: "11:00 - 12:30", instructor: "Marco 'Toro'", level: "Intermedio" },
    { name: "Yoga Flow", time: "17:00 - 18:00", instructor: "Lucía M.", level: "Todos" },
    { name: "Boxeo", time: "19:00 - 20:30", instructor: "Dani 'Iron'", level: "Intermedio" },
    { name: "HIIT", time: "20:30 - 21:30", instructor: "Sara K.", level: "Avanzado" },
  ];

  return (
    <section id="classes" className="py-24 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl uppercase mb-4">Clases Grupales</h2>
            <p className="text-white/60 text-lg">Entrena en equipo y lleva tu motivación al siguiente nivel con nuestros instructores certificados.</p>
          </div>
          <button className="bg-white text-brand-dark px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-primary transition-all">
            Ver Horario Completo
          </button>
        </div>

        <div className="grid gap-4">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-brand-primary transition-all group"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark transition-all">
                  <Users />
                </div>
                <div>
                  <h3 className="text-2xl font-display uppercase tracking-wider">{cls.name}</h3>
                  <span className="text-white/40 text-sm uppercase tracking-widest">{cls.instructor}</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-2 text-white/60">
                  <Clock size={18} />
                  <span className="font-medium">{cls.time}</span>
                </div>
                <div className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-white/40">
                  {cls.level}
                </div>
                <button className="text-brand-primary font-bold uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                  Reservar <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { 
      name: "Pase Diario", 
      price: "15€", 
      features: ["Acceso total 1 día", "Uso de vestuarios", "Sin permanencia"],
      popular: false
    },
    { 
      name: "Mensual PRO", 
      price: "49€", 
      features: ["Acceso ilimitado", "Todas las clases grupales", "App de entrenamiento", "1 Sesión PT/mes"],
      popular: true
    },
    { 
      name: "Anual Élite", 
      price: "450€", 
      features: ["Ahorro de 2 meses", "Acceso ilimitado", "Todas las clases", "Matrícula gratis", "Pack bienvenida"],
      popular: false
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl uppercase mb-4">Membresías</h2>
          <p className="text-white/50 uppercase tracking-[0.2em] text-sm">Elige el plan que mejor se adapte a tus objetivos</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative p-10 rounded-3xl border ${plan.popular ? "border-brand-primary bg-brand-primary/5" : "border-white/10 bg-brand-gray"} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-brand-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Más Popular
                </div>
              )}
              <h3 className="text-2xl font-display uppercase mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-display text-brand-primary">{plan.price}</span>
                {plan.name !== "Anual Élite" && <span className="text-white/40 font-medium">/mes</span>}
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 size={18} className="text-brand-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-full font-bold uppercase tracking-widest transition-all ${plan.popular ? "bg-brand-primary text-brand-dark hover:bg-white" : "border border-white/20 hover:border-brand-primary hover:text-brand-primary"}`}>
                Seleccionar Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl uppercase mb-8">Hablemos</h2>
            <p className="text-white/60 text-lg mb-12">¿Tienes dudas? Nuestro equipo está listo para ayudarte a dar el primer paso hacia tu mejor versión.</p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-primary">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Ubicación</h4>
                  <p className="text-white/60">Calle del Acero 42, Polígono Industrial, Madrid</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-primary">
                  <Phone />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Teléfono / WhatsApp</h4>
                  <p className="text-white/60">+34 912 345 678</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-primary">
                  <Clock />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Horarios</h4>
                  <p className="text-white/60">L-V: 06:00 - 23:00 | S-D: 08:00 - 20:00</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="glass p-10 rounded-3xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Nombre</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors" placeholder="tu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Asunto</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors appearance-none">
                  <option className="bg-brand-dark">Información General</option>
                  <option className="bg-brand-dark">Reserva de Clase</option>
                  <option className="bg-brand-dark">Entrenamiento Personal</option>
                  <option className="bg-brand-dark">Otros</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Mensaje</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors" placeholder="¿Cómo podemos ayudarte?"></textarea>
              </div>
              <button className="w-full bg-brand-primary text-brand-dark py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-brand-primary p-1 rounded-sm">
              <Dumbbell className="text-brand-dark w-5 h-5" />
            </div>
            <span className="font-display text-xl tracking-wider uppercase">El Templo</span>
          </div>
          
          <div className="text-white/40 text-sm text-center">
            © {new Date().getFullYear()} El Templo - Gimnasio Elite. Todos los derechos reservados.
          </div>

          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <Classes />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
