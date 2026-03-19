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
  Music,
  Star,
  MessageSquare
} from 'lucide-react';

const App = () => {
  const musiadaptaLinks = [
    {
      title: "Sitio Web Oficial",
      subtitle: "Centro de Estimulación y Musicoterapia",
      url: "http://www.musiadapta.com/",
      icon: <Globe className="w-5 h-5" />,
      primary: true,
      colorClass: "bg-[#8E298B] text-white border-[#8E298B] shadow-xl shadow-[#8E298B]/20 hover:-translate-y-1 hover:shadow-[#8E298B]/40"
    },
    {
      title: "Instagram MUSIADAPTA",
      subtitle: "@gabymusiadapta_micuroci",
      url: "https://www.instagram.com/gabymusiadapta_micuroci/",
      icon: <Instagram className="w-5 h-5" />,
      colorClass: "bg-white/90 backdrop-blur-xl border-[#8E298B]/15 hover:border-[#8E298B]/40 hover:shadow-xl hover:-translate-y-1 group-hover:text-[#8E298B]"
    },
    {
      title: "Facebook",
      subtitle: "Centro de Estimulación y Musicoterapia",
      url: "https://www.facebook.com/centrodestimulacionymusicoterapia",
      icon: <Facebook className="w-5 h-5" />,
      colorClass: "bg-white/90 backdrop-blur-xl border-[#8E298B]/15 hover:border-[#8E298B]/40 hover:shadow-xl hover:-translate-y-1 group-hover:text-[#8E298B]"
    },
    {
      title: "Google Maps",
      subtitle: "Ubicación en Sevilla",
      url: "https://share.google/r6GcVEi9kwEBp7w9T",
      icon: <MapPin className="w-5 h-5" />,
      colorClass: "bg-white/90 backdrop-blur-xl border-[#8E298B]/15 hover:border-[#8E298B]/40 hover:shadow-xl hover:-translate-y-1 group-hover:text-[#8E298B]"
    },
    {
      title: "Musiadapta - Reseñas",
      subtitle: "Queremos saber tu opinión. Publica una reseña.",
      url: "https://g.page/r/CRjS4P6CsClrEAE/review",
      icon: <Star className="w-5 h-5" />,
      colorClass: "bg-white/90 backdrop-blur-xl border-[#8E298B]/15 hover:border-[#8E298B]/40 hover:shadow-xl hover:-translate-y-1 group-hover:text-[#8E298B]"
    },
    {
      title: "Ver reseñas",
      subtitle: "Descubre lo que dicen de nosotros",
      url: "https://www.google.com/search?q=Musiadapta+Rese%C3%B1as",
      icon: <MessageSquare className="w-5 h-5" />,
      colorClass: "bg-white/90 backdrop-blur-xl border-[#8E298B]/15 hover:border-[#8E298B]/40 hover:shadow-xl hover:-translate-y-1 group-hover:text-[#8E298B]"
    }
  ];

  const asociacionLinks = [
    {
      title: "Dona 1€ en Teaming",
      subtitle: "Apoya la asociación hoy",
      url: "https://www.teaming.net/asociacionavanzamosjuntos-musicoterapia",
      icon: <Heart className="w-6 h-6 animate-pulse" />,
      primary: true,
      colorClass: "bg-[#1E9895] text-white border-[#1E9895] shadow-xl shadow-[#1E9895]/30 hover:-translate-y-1 hover:shadow-[#1E9895]/40 scale-100 lg:scale-105"
    },
    {
      title: "Instagram Asociación",
      subtitle: "@asociacionavanzamosjuntos",
      url: "https://www.instagram.com/asociacionavanzamosjuntos/",
      icon: <Instagram className="w-5 h-5" />,
      colorClass: "bg-white/90 backdrop-blur-xl border-[#1E9895]/15 hover:border-[#1E9895]/40 hover:shadow-xl hover:-translate-y-1 group-hover:text-[#1E9895]"
    },
    {
      title: "Apoya este proyecto",
      subtitle: "Colabora con la asociación",
      url: "https://www.migranodearena.org/reto/un-grano-de-musicoterapia-para-pediatria",
      icon: <Heart className="w-5 h-5" />,
      colorClass: "bg-white/90 backdrop-blur-xl border-[#1E9895]/15 hover:border-[#1E9895]/40 hover:shadow-xl hover:-translate-y-1 group-hover:text-[#1E9895]"
    }
  ];

  const LinkCard = ({ link }) => (
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
        <div className={`${link.primary ? 'text-white/90' : 'text-black/40'} group-hover:scale-110 transition-transform`}>
          {link.icon}
        </div>
        <div className="text-left">
          <span className="block font-black text-sm tracking-wide">{link.title}</span>
          <span className={`block text-[10px] uppercase tracking-widest mt-1 opacity-80 font-bold`}>
            {link.subtitle}
          </span>
        </div>
      </div>
      <ArrowRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ${link.primary ? 'text-white' : 'text-black/30'}`} />
    </a>
  );

  return (
    <div className="min-h-screen font-sans bg-[#FDFDFD] text-[#222] flex flex-col selection:bg-[#8E298B] selection:text-white relative overflow-hidden">
      
      {/* BACKGROUND IMAGE overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/musiadapta_fondo.png" 
          alt="" 
          className="w-full h-full object-cover fixed z-0"
          onError={(e) => e.target.style.display = 'none'}
        />
        {/* Un blend transparente permite ver los colores fuertes de abajo sin perder contexto */}
        <div className="absolute inset-0 bg-white/40 fixed z-10" />
      </div>

      <div className="relative z-10 w-full flex flex-col min-h-screen">
        {/* Header Section */}
        <div className="w-full p-8 md:p-16 lg:px-24 lg:pt-20 lg:pb-12 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="relative group">
              <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white transition-transform duration-700 group-hover:scale-105 flex items-center justify-center relative">
                <img 
                  src="/musiadapta_foto.jpeg" 
                  alt="Gabriela Rodríguez" 
                  className="w-full h-full object-cover absolute z-0"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                <div className="hidden z-10">
                  <Music className="w-16 h-16 text-[#8E298B]/20" />
                </div>
              </div>
              
              {/* Optional smaller Musiadapta Logo next to profile */}
              <img 
                  src="/musiadapta_logo.png" 
                  alt="Musiadapta" 
                  className="absolute -bottom-2 -right-4 w-20 h-20 rounded-full bg-white border border-white shadow-lg object-contain p-1 hover:scale-110 transition-transform"
                  onError={(e) => e.target.style.display = 'none'}
              />
            </div>

            {/* Este bloque envuelve el texto con un cristal claro para mantener el contraste ante un fondo colorido */}
            <div className="bg-white/50 backdrop-blur-[6px] p-6 lg:p-8 rounded-[2rem] border border-white shadow-sm flex-1 max-w-2xl">
              <h1 className="text-4xl lg:text-5xl font-extralight tracking-[0.2em] uppercase leading-tight font-serif mb-2 text-slate-900">
                Gabriela <br className="hidden lg:block"/> Rodríguez
              </h1>
              <p className="text-xs sm:text-sm tracking-[0.3em] uppercase font-black text-[#8E298B]">
                Musiadapta & Avanzamos Juntos
              </p>
              <p className="text-[10px] sm:text-xs tracking-widest uppercase font-bold text-slate-600 mt-2">
                Musicoterapeuta acreditada (MTAE) nº 232
              </p>
              
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 mt-6 font-bold text-slate-800">
                <a href="mailto:micuroci@hotmail.com" className="flex items-center gap-2 hover:opacity-100 hover:text-[#8E298B] transition-colors justify-center lg:justify-start bg-white/40 p-2.5 px-4 rounded-full border border-white hover:bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.1)]">
                  <Mail className="w-4 h-4 text-[#8E298B]" />
                  <span className="text-xs tracking-widest">micuroci@hotmail.com</span>
                </a>
                <a href="tel:+34687682752" className="flex items-center gap-2 hover:opacity-100 hover:text-[#1E9895] transition-colors justify-center lg:justify-start bg-white/40 p-2.5 px-4 rounded-full border border-white hover:bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.1)]">
                  <Phone className="w-4 h-4 text-[#1E9895]" />
                  <span className="text-xs tracking-widest">+34 687 68 27 52</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout Block */}
        <div className="flex flex-col lg:flex-row w-full px-6 md:px-16 lg:px-24 gap-10 lg:gap-12 mb-20 max-w-7xl mx-auto relative z-20">
          
          {/* Empresa Column */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#8E298B]/20 pt-2">
              <div className="p-2.5 bg-white/80 backdrop-blur-md rounded-xl shadow-sm border border-white">
                <Music className="w-6 h-6 text-[#8E298B]" />
              </div>
              <h2 className="text-base font-black tracking-[0.3em] uppercase text-[#8E298B]">Musiadapta</h2>
            </div>
            <div className="flex flex-col gap-4">
              {musiadaptaLinks.map((link, i) => <LinkCard key={`empresa-${i}`} link={link} />)}
            </div>
            {/* Address text */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white shadow-sm mt-2">
              <h4 className="text-[11px] font-black uppercase text-[#8E298B] tracking-widest mb-3">Sede Oficial</h4>
              <div className="text-xs opacity-90 text-slate-700 tracking-wide text-center lg:text-left leading-relaxed font-bold">
                Parque Empresarial Torneo, Edificio Vilamar 1<br/>
                Calle Tecnología 26, Planta 3-Módulo 12-20<br/>
                Sevilla, 41015
              </div>
            </div>
          </div>

          {/* Asociacion Column */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#1E9895]/20 pt-2">
              <div className="p-1 bg-white/80 backdrop-blur-md rounded-xl shadow-sm border border-white">
                <img 
                  src="/asociacion_logo.png" 
                  alt="Asociación Logo" 
                  className="w-10 h-10 object-contain rounded-lg" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                <Heart className="w-6 h-6 text-[#1E9895] hidden p-1" />
              </div>
              <h2 className="text-base font-black tracking-[0.3em] uppercase text-[#1E9895]">Asociación</h2>
            </div>
            <div className="flex flex-col gap-4">
              {asociacionLinks.map((link, i) => <LinkCard key={`aso-${i}`} link={link} />)}
            </div>
          </div>

        </div>

        {/* Footer Contact */}
        <div className="mt-auto p-8 md:px-16 lg:px-24 border-t border-white/40 flex flex-wrap gap-10 items-center bg-white/40 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none">
          <a href="https://wa.me/34687682752" className="flex items-center gap-3 group bg-white/60 p-2 pr-5 rounded-full hover:bg-white transition-all shadow-sm border border-white">
            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-all text-slate-800">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-black tracking-[0.2em] uppercase text-slate-800">687 68 27 52</span>
          </a>
          <div className="flex-grow"></div>
          <p className="text-[10px] opacity-70 text-slate-800 uppercase tracking-[0.3em] font-black hidden sm:block bg-white/60 px-4 py-2 rounded-full border border-white">
            © 2026 Gabriela Rodríguez
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/34687682752"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#1E9895] text-white rounded-full flex items-center justify-center shadow-xl shadow-[#1E9895]/30 hover:shadow-2xl hover:shadow-[#1E9895]/50 hover:-translate-y-1 transition-all duration-500 z-50 group border border-white/40"
        title="Contactar por WhatsApp"
      >
        <svg className="w-7 h-7 fill-current opacity-100 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
           <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </div>
  );
};

export default App;
