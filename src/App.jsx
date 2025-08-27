import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Zap, 
  FileText, 
  Settings, 
  Wrench, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram,
  MessageCircle,
  Menu,
  X,
  PhoneCall,
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import './App.css';

// Imagens
import logoImage from './assets/images/an_engenharia_logo.png';
import bannerImage from './assets/images/energia_solar_uol.jpeg';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // ========= HELPER DE CONVERSÃO GOOGLE ADS =========
  // Dispara a conversão e só então abre o WhatsApp (com fallback em 1,5s)
  const openWhatsAppWithConversion = React.useCallback((waUrl, target = '_blank') => {
    const openNav = () => {
      if (target === '_self') {
        window.location.href = waUrl;
      } else {
        window.open(waUrl, target);
      }
    };

    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17409470512/p3b5CObelosbELDgve1A',
        event_callback: openNav,
      });
      // Fallback caso o callback não dispare (rede/bloqueadores)
      setTimeout(openNav, 1500);
    } else {
      openNav();
    }
  }, []);
  // ==================================================

  const services = [
    {
      icon: Sun,
      title: "Sistemas Fotovoltaicos",
      description: "Soluções completas em energia solar, desde o projeto personalizado até a instalação e manutenção de sistemas fotovoltaicos para residências, comércios e indústrias."
    },
    {
      icon: Zap,
      title: "Instalações Elétricas",
      description: "Execução de instalações elétricas completas com segurança e qualidade, seguindo todas as normas técnicas vigentes."
    },
    {
      icon: FileText,
      title: "Laudos Técnicos e ARTs",
      description: "Elaboração de laudos técnicos especializados e emissão de Anotações de Responsabilidade Técnica (ARTs) para projetos elétricos."
    },
    {
      icon: Settings,
      title: "Projetos Elétricos",
      description: "Desenvolvimento de projetos elétricos detalhados para diferentes tipos de edificações, garantindo eficiência e conformidade."
    },
    {
      icon: Wrench,
      title: "Manutenções Elétricas",
      description: "Serviços de manutenção preventiva e corretiva em sistemas elétricos, garantindo o funcionamento seguro e eficiente."
    },
    {
      icon: Users,
      title: "Consultoria em Energia",
      description: "Consultoria técnica especializada para otimização do consumo energético e implementação de soluções sustentáveis."
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Serviço excelente, atenciosos e com ótimo custo-benefício. Recomendo!",
      avatar: "MS"
    },
    {
      name: "João Santos",
      text: "Profissionais competentes e pontuais. Minha instalação solar está funcionando perfeitamente.",
      avatar: "JS"
    },
    {
      name: "Ana Costa",
      text: "Equipe muito profissional. Fizeram um projeto elétrico completo para minha empresa.",
      avatar: "AC"
    }
  ];

  const regions = [
    "Ipatinga, MG", "Timóteo, MG", "Coronel Fabriciano, MG", "Caratinga, MG",
    "Engenheiro Caldas, MG", "Governador Valadares, MG", "Iapu, MG", "Mutum, MG",
    "Inhapim, MG", "Ipanema, MG", "Alpercata, MG", "Dom Cavati, MG", "Belo Horizonte, MG"
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const Header = () => (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={logoImage} alt="AN Engenharia" className="h-12 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('home')} className="nav-item text-foreground hover:text-primary transition-colors px-3 py-2 rounded-full relative">Início</button>
            <button onClick={() => scrollToSection('about')} className="nav-item text-foreground hover:text-primary transition-colors px-3 py-2 rounded-full relative">Sobre</button>
            <button onClick={() => scrollToSection('services')} className="nav-item text-foreground hover:text-primary transition-colors px-3 py-2 rounded-full relative">Serviços</button>
            <button onClick={() => scrollToSection('portfolio')} className="nav-item text-foreground hover:text-primary transition-colors px-3 py-2 rounded-full relative">Portfólio</button>
            <button onClick={() => scrollToSection('testimonials')} className="nav-item text-foreground hover:text-primary transition-colors px-3 py-2 rounded-full relative">Depoimentos</button>
            <button onClick={() => scrollToSection('contact')} className="nav-item text-foreground hover:text-primary transition-colors px-3 py-2 rounded-full relative">Contato</button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t pt-4"
          >
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition-colors">Início</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left text-foreground hover:text-primary transition-colors">Portfólio</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-foreground hover:text-primary transition-colors">Depoimentos</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary transition-colors">Contato</button>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );

  const Hero = () => (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/80">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${bannerImage})` }}
      />
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Seu sol, sua energia, seu futuro.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Soluções completas em energia solar e projetos elétricos com excelência técnica e responsabilidade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4 flex items-center gap-2"
              onClick={() => scrollToSection('contact')}
            >
              <MessageCircle size={20} />
              Solicite um Orçamento
            </Button>
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4 flex items-center gap-2"
              onClick={() => scrollToSection("services")}
            >
              <Zap size={20} style={{display: 'inline-block', opacity: 1, visibility: 'visible'}} />
              Nossos Serviços
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );

  const About = () => (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Sobre a AN Engenharia</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Somos uma empresa especializada em soluções elétricas e energéticas, comprometida em levar 
            excelência técnica e inovação para nossos clientes em Minas Gerais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="text-center h-full">
              <CardHeader>
                <CardTitle className="text-primary">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Levar soluções elétricas e energéticas com excelência técnica, proporcionando economia e sustentabilidade para nossos clientes.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="text-center h-full">
              <CardHeader>
                <CardTitle className="text-primary">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Ser referência em energia limpa e instalações profissionais em Minas Gerais, contribuindo para um futuro mais sustentável.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="text-center h-full">
              <CardHeader>
                <CardTitle className="text-primary">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Ética, segurança, inovação e responsabilidade guiam todas as nossas ações e relacionamentos com clientes.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );

  const Services = () => (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em engenharia elétrica e energia solar, 
            sempre com foco na qualidade e segurança.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mb-4">
                    {service.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => scrollToSection('contact')}
                  >
                    Fale conosco
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const Portfolio = () => (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Portfólio</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos realizados com excelência e dedicação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              title: "Residência – Ipatinga/MG",
              description: "Sistema fotovoltaico residencial para geração de 700 kWh/mês.",
              image: "/projetos/ipatinga.jpg",
            },
            {
              id: 2,
              title: "Comércio – Ipatinga/MG",
              description: "Projeto solar de alta potência para empresa com uma geração de 4.000 kWh/mês.",
              image: "/projetos/cacique.jpg",
            },
            {
              id: 3,
              title: "Residência – Dom Cavati/MG",
              description: "Sistema fotovoltaico residencial para geração de 1.000 kWh/mês.",
              image: "/projetos/dom-cavati.jpg",
            },
            {
              id: 4,
              title: "Residência – Ipatinga/MG",
              description: "Sistema fotovoltaico residencial para geração de 1.300 kWh/mês.",
              image: "/projetos/ipatinga2.jpg",
            },
            {
              id: 5,
              title: "Residência – Belo Horizonte/MG",
              description: "Sistema fotovoltaico residencial para geração de 500 kWh/mês.",
              image: "/projetos/BH1.jpg",
            },
            {
              id: 6,
              title: "Residência – São Candido/MG",
              description: "Sistema fotovoltaico residencial para geração de 500 kWh/mês.",
              image: "/projetos/SC1.jpg",
            },
          ].map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const Testimonials = () => (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Depoimentos</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Veja o que nossos clientes dizem sobre nossos serviços.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {testimonial.avatar}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const Contact = () => {
    const [formData, setFormData] = React.useState({
      name: '',
      phone: '',
      message: ''
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    // Submete via WhatsApp e dispara conversão
    const handleWhatsAppSubmit = () => {
      const { name, phone, message } = formData;
      if (!name || !phone || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
      }
      
      const whatsappMessage = `Olá! Meu nome é ${name}. Telefone: ${phone}. Mensagem: ${message}`;
      const whatsappUrl = `https://wa.me/5531995702102?text=${encodeURIComponent(whatsappMessage)}`;
      openWhatsAppWithConversion(whatsappUrl, '_blank');
    };

    return (
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Entre em Contato</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Solicite seu orçamento sem compromisso. Nossa equipe está pronta para atender você.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Envie sua mensagem</CardTitle>
                  <CardDescription>
                    Preencha o formulário e entraremos em contato em breve.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input 
                    name="name"
                    placeholder="Seu nome" 
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <Input 
                    name="phone"
                    placeholder="Seu telefone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <Textarea 
                    name="message"
                    placeholder="Sua mensagem" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  <Button 
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    onClick={handleWhatsAppSubmit}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Enviar via WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Informações de Contato</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>(31) 99570-2102</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Instagram className="h-5 w-5 text-primary" />
                    <span>@anengenharia.solar</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Ipatinga – MG</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Horário de Atendimento</h3>
                <p className="text-muted-foreground">Segunda a sábado, das 08h às 18h30</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Regiões Atendidas</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  {regions.slice(0, 8).map((region, index) => (
                    <div key={index}>{region}</div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  E todas as cidades em um raio de até 200km
                </p>
              </div>

              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => openWhatsAppWithConversion('https://wa.me/5531995702102', '_blank')}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://www.instagram.com/anengenharia.solar/', '_blank')}
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  Instagram
                </Button>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Localização</h3>
                <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2669.4671053404445!2d-42.57136662652819!3d-19.466576124041833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xafffc03011b053%3A0x87e4cbcec655a29d!2sAv.%20Esperan%C3%A7a%2C%20860%20-%20101%20-%20Esperan%C3%A7a%2C%20Ipatinga%20-%20MG%2C%2035162-257!5e1!3m2!1spt-BR!2sbr!4v1753829897843!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização AN Engenharia - Ipatinga, MG"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  const Footer = () => (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logoImage} alt="AN Engenharia" className="h-10 w-auto" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2 text-sm">
              <button onClick={() => scrollToSection('home')} className="block hover:text-accent transition-colors">Início</button>
              <button onClick={() => scrollToSection('about')} className="block hover:text-accent transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('services')} className="block hover:text-accent transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('contact')} className="block hover:text-accent transition-colors">Contato</button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-sm">
              <p>(31) 99570-2102</p>
              <p>@anengenharia.solar</p>
              <p>anservicoseng@gmail.com</p>
              <p>Ipatinga – MG</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <div className="space-y-2 text-sm">
              <p>AN Serviços Elétricos LTDA</p>
              <p>CNPJ: 61.757.408/0001-05</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 AN Engenharia – Todos os direitos reservados.</p>
          <p className="mt-2">
            <a 
              href="/privacy-policy.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Política de Privacidade
            </a>
          </p>
        </div>
      </div>
    </footer>
  );

  const WhatsAppFloat = () => (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="lg"
        className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg"
        onClick={() => openWhatsAppWithConversion('https://wa.me/5531995702102', '_blank')}
      >
        <PhoneCall className="h-6 w-6" />
      </Button>
    </motion.div>
  );

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default App;
