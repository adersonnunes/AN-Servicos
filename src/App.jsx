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
            <button onClick={() => scroll
