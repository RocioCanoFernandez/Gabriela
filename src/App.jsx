import React from 'react';
import { 
  Instagram, 
  Facebook, 
  MapPin, 
  Globe, 
  Heart, 
  Mail, 
  Phone,
  ArrowRight,
  Music
} from 'lucide-react';

const App = () => {
  const musiadaptaLinks = [
    {
      title: "Sitio Web Oficial",
      subtitle: "Centro de Estimulación y Musicoterapia",
      url: "http://www.musiadapta.com/",
      icon: <Globe className="w-5 h-5" />,
      primary: true,
      colorClass: "bg-[#2A4365] text-white border-[#2A4365] shadow-2xl shadow-blue-900/20 hover:-translate-y-1 hover:shadow-blue-900/40"
    },
    {
      title: "Instagram MUSIADAPTA",
      subtitle: "@gabymusiadapta_micuroci",
      url: "https://www.instagram.com/gabymusiadapta_micuroci/",
      icon: <Instagram className="w-5 h-5" />,
      colorClass: "bg-white/80 backdrop-blur-md border-black/5 hover:border-black/20 hover:shadow-xl hover:-translate-y-1 group-hover:text-[#2A4365]"
    },
    {
      title: "Facebook",
      subtitle: "Centro de Estimulación y Musicoterapia",
      url: "https://www.facebook.com/centrodestimulacionymusicoterapia",
      icon: <Facebook className="w-5 h-5" />,
      colorClass: "bg-white/80 backdrop-blur-md border-black/5 hover:border-black/20 hover:shadow-xl hover:-translate-y-1 group-hover:text-[#2A4365]"
    },
    {
      title: "Google Maps",
      subtitle: "Ubicación en Sevilla",
      url: "https://share.google/r6GcVEi9kwEBp7w9T",
      icon: <MapPin className="w-5 h-5" />,
      colorClass: "bg-white/80 backdrop-blur-md border-black/5 hover:border-black/20 hover:shadow-xl hover:-translate-y-1 group-hover:text-[#2A4365]"
    }
  ];

  const asociacionLinks = [
    {
      title: "Dona 1€ en Teaming",
      subtitle: "Apoya la asociación hoy",
      url: "https://www.teaming.net/asociacionavanzamosjuntos-musicoterapia",
      icon: <Heart className="w-6 h-6 animate-pulse" />,
      primary: true,
      colorClass: "bg-[#059669] text-white border-[#059669] shadow-2xl shadow-emerald-900/30 hover:-translate-y-1 hover:shadow-emerald-900/50 scale-100 lg:scale-105"
    },
    {
      title: "Instagram Asociación",
      subtitle: "@asociacionavanzamosjuntos",
      url: "https://www.instagram.com/asociacionavanzamosjuntos/",
      icon: <Instagram className="w-5 h-5" />,
      colorClass: "bg-white/80 backdrop-blur-md border-black/5 hover:border-black/20 hover:shadow-xl hover:-translate-y-1 group-hover:text-[#059669]"
    }
  ];

  const LinkCard = ({ link, isAssociation }) => (
    <a 
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 w-full
        ${link.colorClass}
      `}
    >
      <div className="flex items-center gap-4">
        <div className={`${link.primary ? 'text-white/80' : 'text-black/40'} group-hover:scale-110 transition-transform`}>
          {link.icon}
        </div>
        <div className="text-left">
          <span className="block font-bold text-sm tracking-wide">{link.title}</span>
          <span className={`block text-[10px] uppercase tracking-widest mt-0.5 opacity-60 font-medium`}>
            {link.subtitle}
          </span>
        </div>
      </div>
      <ArrowRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ${link.primary ? 'text-white' : 'text-black/30'}`} />
    </a>
  );

  return (
    <div className="min-h-screen font-sans bg-[#f4f7f6] text-[#222] flex flex-col selection:bg-[#2A4365] selection:text-white relative overflow-hidden">
      
      {/* BACKGROUND IMAGE overlay */}
      <div className="absolute inset-0 z-0 bg-[#FDFBF7]">
        <img 
          src="/musiadapta_fondo.jpg" 
          alt="" 
          className="w-full h-full object-cover fixed z-0"
          onError={(e) => e.target.style.display = 'none'}
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] fixed z-10" />
      </div>

      <div className="relative z-10 w-full flex flex-col min-h-screen">
        {/* Header Section */}
        <div className="w-full p-8 md:p-16 lg:px-24 lg:pt-20 lg:pb-12 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="relative group">
              <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white transition-transform duration-700 group-hover:scale-105 flex items-center justify-center relative">
                <img 
                  src="/musiadapta_foto.jpg" 
                  alt="Gabriela Rodríguez" 
                  className="w-full h-full object-cover absolute z-0"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                <div className="hidden z-10">
                  <Music className="w-16 h-16 text-black/20" />
                </div>
              </div>
              {/* Optional smaller logo overlay if it exists */}
              <img 
                  src="/musiadapta_logo.png" 
                  alt="Logo" 
                  className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-white border border-black/5 shadow-lg object-contain p-2 hover:scale-110 transition-transform"
                  onError={(e) => e.target.style.display = 'none'}
              />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-extralight tracking-[0.2em] uppercase leading-tight font-serif mb-2 text-[#2A4365]">
                Gabriela <br className="hidden lg:block"/> Rodríguez
              </h1>
              <p className="text-xs sm:text-sm tracking-[0.3em] uppercase opacity-60 font-medium">
                Musiadapta & Avanzamos Juntos
              </p>
              
              <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6 mt-6 opacity-70">
                <a href="mailto:micuroci@hotmail.com" className="flex items-center gap-2 hover:opacity-100 transition-opacity justify-center lg:justify-start">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm tracking-widest">micuroci@hotmail.com</span>
                </a>
                <span className="hidden lg:block opacity-30">•</span>
                <a href="tel:+34687682752" className="flex items-center gap-2 hover:opacity-100 transition-opacity justify-center lg:justify-start">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm tracking-widest">+34 687 68 27 52</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout Block */}
        <div className="flex flex-col lg:flex-row w-full px-6 md:px-16 lg:px-24 gap-10 lg:gap-12 mb-20 max-w-7xl mx-auto">
          
          {/* Empresa Column */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-3 pb-2 border-b border-[#2A4365]/20">
              <Music className="w-5 h-5 text-[#2A4365]" />
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[#2A4365]">Musiadapta</h2>
            </div>
            <div className="flex flex-col gap-4">
              {musiadaptaLinks.map((link, i) => <LinkCard key={`empresa-${i}`} link={link} isAssociation={false} />)}
            </div>
            {/* Address text */}
            <div className="text-xs opacity-50 tracking-wide text-center lg:text-left leading-relaxed mt-2 px-4 lg:px-0">
              Parque Empresarial Torneo, Edificio Vilamar 1<br/>
              Calle Tecnología 26, Planta 3-Modulo 12-20<br/>
              Sevilla, 41015
            </div>
          </div>

          {/* Asociacion Column */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-3 pb-2 border-b border-[#059669]/20">
              <Heart className="w-5 h-5 text-[#059669]" />
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[#059669]">Asociación Avanzamos Juntos</h2>
            </div>
            <div className="flex flex-col gap-4">
              {asociacionLinks.map((link, i) => <LinkCard key={`aso-${i}`} link={link} isAssociation={true} />)}
            </div>
          </div>

        </div>

        {/* Footer Contact */}
        <div className="mt-auto p-8 md:px-16 lg:px-24 border-t border-black/5 flex flex-wrap gap-10 items-center bg-white/40 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none">
          <a href="https://wa.me/34687682752" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white group-hover:border-[#25D366] transition-all">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase">687 68 27 52</span>
          </a>
          <div className="flex-grow"></div>
          <p className="text-[10px] opacity-30 uppercase tracking-[0.3em] font-medium hidden sm:block">© 2024 Gabriela Rodríguez</p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/34687682752"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-2xl hover:shadow-[#25D366]/40 hover:-translate-y-1 transition-all duration-500 z-50 group border border-white/20"
        title="Contactar por WhatsApp"
      >
        <svg className="w-7 h-7 fill-current opacity-90 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </div>
  );
};

export default App;
