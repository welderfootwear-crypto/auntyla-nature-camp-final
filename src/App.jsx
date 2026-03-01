import React, { useState, useEffect } from 'react';
import { 
  Tent, 
  MapPin, 
  Trees,
  Compass,
  ArrowRight,
  Instagram, 
  MessageCircle,
  Users,
  Check,
  ChevronDown,
  Menu,
  X,
  Truck,
  Bike,
  Home,
  Star,
  Waves,
  Coffee,
  Zap,
  ExternalLink,
  Wifi,
  Wind,
  UtensilsCrossed,
  ParkingCircle,
  Moon,
  AlertCircle,
  Info,
  Clock,
  Sun,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ClipboardList,
  Calendar,
  Loader2,
  Utensils,
  ShieldCheck,
  Headset,
  Mail,
  CreditCard,
  Heart,
  Ban,
  Trash2,
  Volume2,
  Activity,
  Flame
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeGlampingImg, setActiveGlampingImg] = useState(0);
  
  // State slider khusus Rumah Kayu
  const [woodHouseIndices, setWoodHouseIndices] = useState({ 0: 0, 1: 0 });

  // AI States
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState("");
  const [aiMode, setAiMode] = useState(null);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waNumber = "6281292070591";
  const igLink = "https://www.instagram.com/auntylanaturecamp?igsh=MXA1d2ltdmVnZ3M3cA%3D%3D&utm_source=qr";
  const ttLink = "https://www.tiktok.com/@auntyla.naturecamp?_r=1&_t=ZS-93yWwBCg122";
  const mapsLink = "https://maps.google.com?q=AuntyLa%20Camp,%20Tajur%20Halang,%20Cijeruk,%20Bogor%20Regency,%20West%20Java%2016740&ftid=0x2e69cf17ea152247:0x11c3c1d25e2f15c1&entry=gps&shh=CAE&g_st=ic";
  
  const cityLightImg = "https://i.ibb.co.com/tMRWxJhk/IMG-20260217-WA0058.jpg";
  
  const glampingImages = [
    "https://i.ibb.co.com/JRx82rHn/IMG-20260217-WA0036.jpg",
    "https://i.ibb.co.com/zV3xq7X5/IMG-20260217-WA0038.jpg",
    "https://i.ibb.co.com/Txn8Bzv4/IMG-20260217-WA0040.jpg",
    "https://i.ibb.co.com/XxwjjH8J/IMG-20260217-WA0042.jpg"
  ];

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Glamping', href: '#glamping' },
    { name: 'Camping Ceria', href: '#camping-ceria' },
    { name: 'Rumah Kayu', href: '#wood-house' },
    { name: 'Site Camp', href: '#spots' },
    { name: 'Ketentuan', href: '#rules-terms' },
  ];

  const woodHouses = [
    { 
      name: "Rumah Kayu 1 & 3", 
      price: "500.000", 
      capacity: "4 Orang", 
      images: [
        "https://i.ibb.co.com/ynVpPyr6/Chat-GPT-Image-17-Feb-2026-22-30-23.png",
        "https://i.ibb.co.com/DDZCZVt6/Chat-GPT-Image-17-Feb-2026-22-30-40.png",
        "https://i.ibb.co.com/whfHmnSK/Chat-GPT-Image-17-Feb-2026-22-36-54.png",
        "https://i.ibb.co.com/QvFW5VCX/Chat-GPT-Image-17-Feb-2026-22-35-13.png"
      ], 
      desc: "Kabin kayu estetik yang sangat nyaman untuk istirahat dan tempat makan keluarga. Pilihan makan fleksibel bisa di unit atau di Cafe.",
      features: ["Mandi Dalam", "Kapasitas 4 Org", "Free Breakfast", "Extra Bed"] 
    },
    { 
      name: "Rumah Kayu 2", 
      price: "600.000", 
      capacity: "4 Orang", 
      images: [
        "https://i.ibb.co.com/whfHmnSK/Chat-GPT-Image-17-Feb-2026-22-36-54.png",
        "https://i.ibb.co.com/QvFW5VCX/Chat-GPT-Image-17-Feb-2026-22-35-13.png",
        "https://i.ibb.co.com/ynVpPyr6/Chat-GPT-Image-17-Feb-2026-22-30-23.png",
        "https://i.ibb.co.com/DDZCZVt6/Chat-GPT-Image-17-Feb-2026-22-30-40.png"
      ], 
      desc: "Unit lebih besar dengan halaman luas. Sangat lega untuk area makan outdoor pribadi yang asri atau menikmati hidangan di area Cafe.",
      features: ["Halaman Luas", "Unit Lebih Besar", "Free Breakfast", "Extra Bed", "Mandi Dalam"] 
    }
  ];

  const packages = [
    { name: "Site Sindoro", category: "Campervan Park", icon: Truck, price: "300.000", image: "https://i.ibb.co.com/GfzMWLrT/IMG-20260217-WA0004.jpg", desc: "Lahan khusus Campervan dengan akses listrik. Makan santai bisa di Cafe." },
    { name: "Site Ciremai", category: "Campervan Park", icon: Truck, price: "300.000", image: "https://i.ibb.co.com/Df8d3ZYH/IMG-2024.jpg", desc: "Area terbuka dengan pohon peneduh. Akses fasilitas dekat, makan asyik di Cafe." },
    { name: "Site Pangrango", category: "Ground (Lahan)", icon: Tent, price: "50.000", isPerPerson: true, image: "https://i.ibb.co.com/D293ptt/Proyek-4-edit-59014848928493.png", desc: "Lahan camp asri menghadap gunung. Pagi hari bisa sarapan di Cafe." },
    { name: "Site Hambalang", category: "Ground (Lahan)", icon: Tent, price: "50.000", isPerPerson: true, image: "https://i.ibb.co.com/jkVM57fQ/Proyek-3-1-edit-59065312491507.png", desc: "Privasi terjaga dengan sistem berundak. Dekat dengan akses Cafe." },
    { name: "Site Salak", category: "Ground (Lahan)", icon: Tent, price: "50.000", isPerPerson: true, image: "https://i.ibb.co.com/vvTt3kZS/Proyek-6-edit-58996627375892.png", desc: "Spot tertinggi untuk view maksimal. Sempurna untuk ngopi di Cafe." },
    { name: "Site Motocamp", category: "Bike Area", icon: Bike, price: "150.000", image: "https://i.ibb.co.com/6Ry8C1CL/Proyek-3-edit-59084375186295.png", desc: "Parkir motor di samping tenda. Lokasi strategis dekat area Cafe." }
  ];

  const coreFacilities = [
    { icon: Waves, title: "Mountain Pool", desc: "Air pegunungan segar." },
    { icon: Coffee, title: "Nature Cafe", desc: "Wifi & Kopi Bogor." },
    { icon: Zap, title: "Electric Hub", desc: "Colokan tiap site." },
    { icon: Moon, title: "Mushola", desc: "Sarana ibadah bersih." },
    { icon: ParkingCircle, title: "Parking Area", desc: "Motor & Mobil aman." },
    { icon: Wifi, title: "Free Wi-Fi", desc: "Tersedia di area cafe." },
    { icon: UtensilsCrossed, title: "Rental Tools", desc: "Sewa alat camping." }
  ];

  const bookingTerms = [
    "Dp minimal 50% setelah mengisi Form Reservasi",
    "Pelunasan pembayaran Maksimal H-1 kedatangan",
    "Wajib mengirimkan Bukti Transfer untuk konfirmasi",
    "Sewa tenda dilakukan pembayaran full (Batal = Hangus)",
    "Pembatalan reservasi H-2 menyebabkan DP hangus",
    "Pembatalan H-3 dapat reschedule maksimal 1x",
    "Pembatalan tanpa reschedule menyebabkan DP hangus",
    "Check-in (Sabtu-Kamis): Min jam 12.00 WIB",
    "Check-out (Sabtu-Kamis): Max jam 12.00 WIB",
    "Khusus Jumat: In 08.00 WIB, Out Sabtu 10.00 WIB"
  ];

  const campRules = [
    "Dilarang membawa senjata tajam & obat-obatan terlarang",
    "Menjaga ketenangan di atas jam 22.00 WIB",
    "Menjaga kebersihan dan membuang sampah pada tempatnya",
    "Dilarang merusak fasilitas camp & vegetasi sekitar",
    "Dilarang membuat api unggun langsung di atas rumput",
    "Penggunaan listrik harap digunakan dengan bijak"
  ];

  const handleWoodHouseSlide = (id, direction, total) => {
    setWoodHouseIndices(prev => {
      let next = direction === 'next' ? prev[id] + 1 : prev[id] - 1;
      if (next >= total) next = 0;
      if (next < 0) next = total - 1;
      return { ...prev, [id]: next };
    });
  };

  useEffect(() => {
    const glampingInterval = setInterval(() => {
      setActiveGlampingImg((prev) => (prev + 1) % glampingImages.length);
    }, 5000);
    return () => clearInterval(glampingInterval);
  }, [glampingImages.length]);

  const callGemini = async (prompt, mode) => {
    setAiLoading(true);
    setAiResult("");
    setAiMode(mode);
    const systemPrompt = `Anda asisten cerdas Auntyla Nature Camp. View City Light & Gunung Gede. Rumah Kayu include breakfast. Paket Camping Ceria (bawa badan) include tenda Borneo 4, kursi, meja, BBQ grill. Jalan setengah beton setengah aspal. Jawab ramah dengan emoji.`;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          systemInstruction: { parts: [{ text: systemPrompt }] }
        })
      });
      const data = await response.json();
      setAiResult(data.candidates?.[0]?.content?.parts?.[0]?.text || "Maaf, coba lagi nanti.");
    } catch (err) {
      setAiResult("Gagal terhubung ke asisten AI.");
    } finally {
      setAiLoading(false);
    }
  };

  const sendWhatsAppBooking = (packageName) => {
    const message = `Halo AuntyLa Camp!\n\nNama: \nPaket: ${packageName}\n\nSaya ingin reservasi, mohon info harganya.`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const sendWhatsAppGeneral = (subject = "tanya ketersediaan") => {
    const text = `Halo Auntyla Nature Camp! Saya ingin ${subject} di Cijeruk.`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] font-sans text-[#2C332A] selection:bg-[#8BA888] selection:text-white overflow-x-hidden text-[13px] lg:text-[14px]">
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#2C332A] z-[100] transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-end mb-12"><button onClick={() => setIsMenuOpen(false)} className="text-white"><X size={32} /></button></div>
          <div className="flex flex-col gap-8 items-center text-center">
            {navLinks.map((link) => (<a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-2xl font-light text-white uppercase tracking-widest">{link.name}</a>))}
            <button onClick={() => { sendWhatsAppGeneral(); setIsMenuOpen(false); }} className="bg-[#8BA888] text-white px-12 py-4 rounded-full font-black uppercase tracking-widest">Booking WA</button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-stone-100' : 'bg-transparent py-5 lg:py-8'}`}>
        <div className="max-w-6xl mx-auto px-5 lg:px-6 flex justify-between items-center text-white transition-colors duration-300">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <Trees className={`${scrolled ? 'text-[#4A5D45]' : 'text-white'} w-5 h-5 transition-colors`} />
            <span className={`text-sm lg:text-lg font-bold tracking-tight uppercase tracking-widest transition-colors ${scrolled ? 'text-[#2C332A]' : 'text-white'}`}>Auntyla Camp</span>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`text-[9px] font-black hover:text-[#8BA888] transition-colors uppercase tracking-[0.2em] ${scrolled ? 'text-[#2C332A]' : 'text-white'}`}>{link.name}</a>
            ))}
            <button onClick={() => sendWhatsAppGeneral()} className={`px-5 py-2 rounded-full text-[10px] font-black transition-all uppercase tracking-widest ${scrolled ? 'bg-[#4A5D45] text-white' : 'bg-white text-[#2C332A]'}`}>Reservasi</button>
          </div>
          <button className="lg:hidden" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} className={scrolled ? 'text-[#2C332A]' : 'text-white'} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] lg:h-screen flex items-center justify-center overflow-hidden bg-black">
        <img src={cityLightImg} alt="City Light Bogor" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="relative z-10 text-center text-white px-5 mt-10">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full inline-flex items-center gap-2 mb-6 text-stone-100">
            <Clock size={12} className="text-[#8BA888]" />
            <span className="text-[9px] font-black tracking-widest uppercase">30 Menit dari Exit Tol Jagorawi</span>
          </div>
          <h1 className="text-2xl lg:text-5xl font-light tracking-tighter mb-4 leading-tight max-w-2xl mx-auto uppercase">View City Light Terbaik di Bogor <br /> <span className="italic font-serif text-[#8BA888] normal-case text-3xl lg:text-5xl">dengan View Gunung Gede Pangrango.</span></h1>
          <a href="#spots" className="mt-8 bg-[#8BA888] text-white px-8 py-3.5 rounded-sm font-black uppercase tracking-widest text-[10px] inline-block shadow-2xl hover:bg-[#4A5D45] transition-all active:scale-95">Mulai Eksplorasi</a>
        </div>
      </section>

      {/* Glamping Section */}
      <section id="glamping" className="relative flex flex-col lg:flex-row items-stretch min-h-screen bg-[#1A1F18] text-white overflow-hidden border-b border-white/5">
        <div className="w-full lg:w-2/5 p-8 lg:p-24 flex flex-col justify-center z-10 relative">
          <span className="text-[9px] uppercase tracking-[0.5em] text-[#8BA888] font-black mb-4 block tracking-widest">Premium Stay</span>
          <h2 className="text-3xl lg:text-6xl font-light tracking-tighter mb-6 font-sans leading-tight">Seri <br className="hidden lg:block"/><span className="italic font-serif text-[#8BA888]">Glamping</span> Exclusive.</h2>
          <p className="text-xs lg:text-base font-light opacity-70 mb-8 max-w-xs text-stone-200 uppercase tracking-widest leading-relaxed">Nikmati pengalaman menginap mewah di tengah alam dengan fasilitas premium lengkap.</p>
          
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-10">
            {[
              { icon: Users, text: "4 Orang" },
              { icon: Wind, text: "Kipas Angin" },
              { icon: UtensilsCrossed, text: "Alat Masak" },
              { icon: Zap, text: "Listrik Full" },
              { icon: Coffee, text: "Area Cafe" },
              { icon: Waves, text: "Mountain Pool" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-black text-stone-400">
                <item.icon size={14} className="text-[#8BA888]" strokeWidth={2.5} /> {item.text}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
             <div className="flex items-baseline gap-2">
               <span className="text-[10px] text-stone-500 font-black uppercase tracking-widest">Tarif Paket</span>
               <div className="text-2xl font-light text-white tracking-tighter">Rp 650.000</div>
             </div>
             <button onClick={() => sendWhatsAppBooking("Seri Glamping Exclusive")} className="bg-[#8BA888] text-white px-8 py-4 rounded-sm font-black uppercase tracking-widest text-[10px] flex items-center justify-between group transition-all active:scale-95 shadow-xl">
               Reservasi Glamping <ArrowRight size={14} />
             </button>
          </div>
        </div>

        <div className="w-full lg:w-3/5 relative h-[60vh] lg:h-auto overflow-hidden bg-[#0D100D]">
          {glampingImages.map((img, idx) => (
            <div key={idx} className={`absolute inset-0 transition-all duration-1000 transform ${idx === activeGlampingImg ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}>
              <img src={img} alt={`Glamping ${idx}`} className="w-full h-full object-contain" />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#1A1F18] via-transparent to-transparent opacity-40"></div>
            </div>
          ))}
          <div className="absolute bottom-6 right-6 flex gap-3 z-20">
            <button onClick={() => setActiveGlampingImg((prev) => (prev - 1 + glampingImages.length) % glampingImages.length)} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center bg-white/5 active:scale-90 transition-all"><ChevronLeft size={20} /></button>
            <button onClick={() => setActiveGlampingImg((prev) => (prev + 1) % glampingImages.length)} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center bg-white/5 active:scale-90 transition-all"><ChevronRight size={20} /></button>
          </div>
        </div>
      </section>

      {/* Camping Ceria Section */}
      <section id="camping-ceria" className="py-24 px-5 bg-white border-b border-stone-100 text-stone-900">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full relative">
            <div className="aspect-[4/5] bg-stone-100 rounded-sm overflow-hidden shadow-2xl relative group">
              <img src="https://i.ibb.co.com/D293ptt/Proyek-4-edit-59014848928493.png" alt="Camping Ceria" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <div className="bg-[#8BA888] px-3 py-1 rounded-full text-[9px] font-black uppercase mb-3 inline-block">Best Seller</div>
                <h3 className="text-3xl font-serif italic mb-1">Paket Camping Ceria</h3>
                <p className="text-[10px] uppercase font-black opacity-80 tracking-widest">Hanya Bawa Badan Saja</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#8BA888] font-black mb-4 block tracking-widest">Hassle-Free Experience</span>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tighter mb-8 text-stone-900 leading-tight">Camping Tanpa <br /> <span className="italic font-serif text-[#8BA888]">Repot & Ribet.</span></h2>
            <p className="text-sm text-stone-500 mb-10 leading-relaxed uppercase tracking-widest font-bold">
              Kalian cukup bawa badan saja! Seluruh perlengkapan berkualitas tinggi sudah kami siapkan di lokasi. Cocok untuk keluarga atau grup yang ingin seru-seruan tanpa logistik berat.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Tent, title: "Tenda Borneo 4", desc: "Kapasitas 4 orang luas." },
                { icon: Users, title: "4 Kursi Lipat", desc: "Nyaman buat santai." },
                { icon: Flame, title: "BBQ Grill", desc: "Peralatan bakar lengkap." },
                { icon: Moon, title: "Matras & Bantal", desc: "Tidur tetap berkualitas." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-[#FDFCF9] border border-stone-100 rounded-sm">
                  <item.icon size={20} className="text-[#8BA888] shrink-0" />
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-[9px] text-stone-400 font-bold uppercase">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#2C332A] p-8 rounded-sm shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-[9px] text-stone-400 uppercase font-black tracking-widest mb-1">Cek Harga Promo</p>
                <div className="text-2xl text-white font-light uppercase tracking-tighter">Hubungi WhatsApp Kami</div>
              </div>
              <button onClick={() => sendWhatsAppBooking("Paket Camping Ceria (Bawa Badan)")} className="bg-[#8BA888] text-white px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all active:scale-95 shadow-lg">
                Tanya Harga Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rumah Kayu Slider Section */}
      <section id="wood-house" className="py-24 px-5 bg-[#2C332A] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center lg:text-left mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#8BA888] font-black mb-4 block tracking-[0.5em]">Exclusive Cabin</span>
            <h2 className="text-3xl lg:text-5xl font-light tracking-tighter leading-tight uppercase font-sans">Seri Rumah Kayu <br /> <span className="text-sm italic font-serif text-[#8BA888] normal-case text-2xl lg:text-3xl">Dapat Breakfast & Makan di Cafe</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {woodHouses.map((house, i) => (
              <div key={i} className="group flex flex-col bg-white/5 border border-white/10 rounded-sm overflow-hidden transition-all duration-500">
                <div className="relative aspect-[3/4] lg:aspect-[4/3] bg-[#0D100D] overflow-hidden">
                  <img src={house.images[woodHouseIndices[i]]} alt={house.name} className="w-full h-full object-contain transition-all duration-700" />
                  
                  {/* Slider Controls */}
                  <div className="absolute inset-0 flex items-center justify-between px-4 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity pointer-events-none">
                    <button 
                      onClick={() => handleWoodHouseSlide(i, 'prev', house.images.length)} 
                      className="w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#8BA888] transition-colors pointer-events-auto active:scale-90"
                    >
                      <ChevronLeft className="text-white" size={24} />
                    </button>
                    <button 
                      onClick={() => handleWoodHouseSlide(i, 'next', house.images.length)} 
                      className="w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#8BA888] transition-colors pointer-events-auto active:scale-90"
                    >
                      <ChevronRight className="text-white" size={24} />
                    </button>
                  </div>
                  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {house.images.map((_, dotIdx) => (
                      <div key={dotIdx} className={`w-1.5 h-1.5 rounded-full transition-all ${woodHouseIndices[i] === dotIdx ? 'bg-[#8BA888] w-4' : 'bg-white/30'}`}></div>
                    ))}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow bg-white/5 text-white">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-light font-serif italic text-[#8BA888]">{house.name}</h4>
                      <p className="text-[10px] uppercase text-stone-400 mt-1 flex items-center gap-2 font-black tracking-widest"><Utensils size={12} /> Makan di Unit / Cafe</p>
                    </div>
                    <p className="text-2xl font-bold tracking-tighter text-white">Rp {house.price}</p>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed mb-8 italic uppercase tracking-widest">{house.desc}</p>
                  <div className="grid grid-cols-2 gap-4 mt-auto">
                    {house.features.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-[10px] uppercase font-black text-stone-300"><div className="w-1.5 h-1.5 bg-[#8BA888] rounded-full"></div>{f}</div>
                    ))}
                  </div>
                  <button onClick={() => sendWhatsAppBooking(house.name)} className="mt-10 pt-6 border-t border-white/10 flex justify-between items-center group hover:translate-x-1 transition-all">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#8BA888]">Pesan Sekarang</span>
                    <ArrowRight className="text-[#8BA888]" size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center opacity-60 text-[10px] uppercase tracking-widest flex items-center justify-center gap-2">
            <Info size={14} className="text-[#8BA888]" /> Geser gambar untuk melihat interior & area makan
          </div>
        </div>
      </section>

      {/* Sites Catalog Section */}
      <section id="spots" className="py-20 lg:py-32 px-5 bg-white text-stone-900 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#8BA888] font-black mb-4 block tracking-[0.2em]">Our Sites</span>
            <h2 className="text-2xl lg:text-4xl font-light tracking-tighter uppercase">Pilih Lokasi Camp</h2>
            <p className="text-xs text-stone-400 mt-2 uppercase tracking-widest font-bold">Setiap Site memiliki akses dekat ke Cafe untuk makan & santai.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div key={i} className="flex flex-col group border border-stone-100 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm overflow-hidden text-left">
                <div className="aspect-[2/3] lg:aspect-[3/4] overflow-hidden relative cursor-pointer bg-stone-100" onClick={() => sendWhatsAppBooking(pkg.name)}>
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
                    {React.createElement(pkg.icon, { size: 12, className: "text-[#4A5D45]" })}
                    <span className="text-[9px] font-black uppercase tracking-widest text-stone-800">{pkg.category}</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow bg-[#FDFCF9]">
                  <h4 className="text-sm font-black uppercase tracking-widest mb-3 border-b border-stone-100 pb-2">{pkg.name}</h4>
                  <p className="text-[10px] text-stone-400 font-bold mb-8 leading-relaxed flex-grow uppercase tracking-[0.1em]">{pkg.desc}</p>
                  <div className="mb-8">
                    <p className="text-[9px] text-stone-400 font-bold uppercase mb-1">Mulai Dari</p>
                    <span className="text-2xl font-light text-[#2C332A]">Rp {pkg.price}</span>
                    {pkg.isPerPerson && <span className="text-[10px] ml-1 text-stone-400 font-black uppercase">/ Org</span>}
                  </div>
                  <button onClick={() => sendWhatsAppBooking(pkg.name)} className="w-full text-[10px] font-black uppercase bg-white border border-stone-200 py-4 hover:bg-[#4A5D45] hover:text-white transition-all tracking-[0.3em] active:scale-95 shadow-sm">Reservasi WA</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Road Warning Section */}
      <section className="py-24 px-5 bg-white text-stone-900 border-t border-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="flex flex-col items-center">
              <ShieldCheck size={32} className="text-[#8BA888] mb-6" />
              <h4 className="text-[11px] font-black uppercase tracking-widest mb-3">Keamanan 24 Jam</h4>
              <p className="text-[10px] text-stone-400 font-bold leading-relaxed uppercase tracking-tighter">Area camp aman dengan staf yang berjaga siang & malam.</p>
            </div>
            <div className="flex flex-col items-center">
              <Activity size={32} className="text-red-600 mb-6" />
              <h4 className="text-[11px] font-black uppercase tracking-widest mb-3 text-red-600 tracking-widest font-black">Kesehatan Kendaraan</h4>
              <p className="text-[10px] text-stone-400 font-bold leading-relaxed uppercase tracking-tighter">Pastikan mobil/motor Anda dalam kondisi prima sebelum berangkat mendaki.</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin size={32} className="text-[#8BA888] mb-6" />
              <h4 className="text-[11px] font-black uppercase tracking-widest mb-3 tracking-widest">Akses Jalan</h4>
              <p className="text-[10px] text-stone-400 font-bold leading-relaxed uppercase tracking-tighter">Jalan kombinasi setengah beton & setengah aspal yang aman dilalui kendaraan.</p>
            </div>
            <div className="flex flex-col items-center">
              <Coffee size={32} className="text-[#8BA888] mb-6" />
              <h4 className="text-[11px] font-black uppercase tracking-widest mb-3 tracking-widest">Area Cafe Asri</h4>
              <p className="text-[10px] text-stone-400 font-bold leading-relaxed uppercase tracking-tighter">Nikmati kopi lokal dan sajian khas Bogor di Cafe dengan view City Light.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Terms Section */}
      <section id="rules-terms" className="py-24 px-5 bg-[#FDFCF9] border-y border-stone-100 text-stone-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-8">
                <ClipboardList size={20} className="text-[#4A5D45]" />
                <h3 className="text-xl font-black uppercase tracking-widest tracking-widest">Ketentuan Booking</h3>
              </div>
              <div className="space-y-3">
                {bookingTerms.map((term, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 bg-white rounded-sm border border-stone-100 shadow-sm uppercase tracking-tighter">
                    <Check size={14} className="text-[#8BA888] shrink-0 mt-0.5" />
                    <p className="text-[10px] font-black text-stone-600 leading-relaxed tracking-widest">{term}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-8">
                <Ban size={20} className="text-red-800" />
                <h3 className="text-xl font-black uppercase tracking-widest tracking-widest">Aturan Menginap</h3>
              </div>
              <div className="space-y-3">
                {campRules.map((rule, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 bg-white rounded-sm border border-stone-100 shadow-sm uppercase tracking-tighter">
                    <AlertCircle size={14} className="text-stone-400 shrink-0 mt-0.5" />
                    <p className="text-[10px] font-black text-stone-600 leading-relaxed tracking-widest">{rule}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section id="ai-assistant" className="py-24 px-5 bg-white border-b border-stone-100 text-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#8BA888]/10 text-[#4A5D45] px-4 py-1.5 rounded-full mb-4">
            <Sparkles size={16} /> <span className="text-[10px] font-black uppercase tracking-widest">AI Concierge</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-light mb-12 tracking-tighter uppercase">✨ Rencanakan Dengan AI ✨</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#FDFCF9] p-8 border border-stone-100 flex flex-col justify-between rounded-sm shadow-sm">
              <h3 className="text-xl font-serif italic mb-4 uppercase tracking-widest">Itinerary Planner</h3>
              <button onClick={() => callGemini("Buat itinerary camping di Auntyla", "itinerary")} disabled={aiLoading} className="w-full bg-[#2C332A] text-white py-4 font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 active:scale-95 transition-all">
                {aiLoading ? <Loader2 className="animate-spin" size={16} /> : "✨ Buat Jadwal Seru"}
              </button>
            </div>
            <div className="bg-[#FDFCF9] p-8 border border-stone-100 flex flex-col justify-between rounded-sm shadow-sm">
              <h3 className="text-xl font-serif italic mb-4 uppercase tracking-widest">Packing List</h3>
              <button onClick={() => callGemini("Checklist barang camp Bogor", "checklist")} disabled={aiLoading} className="w-full border-2 border-[#2C332A] text-[#2C332A] py-4 font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 active:scale-95 transition-all">
                {aiLoading ? <Loader2 className="animate-spin" size={16} /> : "✨ Cek Perlengkapan"}
              </button>
            </div>
          </div>
          {aiResult && <div className="bg-[#1A1F18] text-white p-8 rounded-sm text-left prose prose-invert max-w-none whitespace-pre-wrap font-sans text-sm animate-in fade-in slide-in-from-bottom-2 duration-500 shadow-2xl">{aiResult}</div>}
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-[#2C332A] text-white">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#8BA888] font-black mb-4 block">Navigasi Lokasi</span>
            <h2 className="text-3xl font-serif italic mb-8 uppercase tracking-widest">Tajurhalang, Cijeruk.</h2>
            <div className="space-y-6 mb-10 text-[11px] font-bold uppercase tracking-widest opacity-80 leading-relaxed">
              <p>Kampung Tajurhalang, Desa Tajurhalang, Cijeruk, Bogor, Jawa Barat 16740</p>
              <div className="bg-white/5 p-6 rounded border border-white/10">
                <p className="flex items-center gap-3 mb-2 font-sans tracking-widest font-black"><Clock size={16} className="text-[#8BA888]" /> 30 Menit dari Exit Tol Jagorawi</p>
                <p className="opacity-80 lowercase font-sans font-black text-[#8BA888] mb-1">Peringatan Akses:</p>
                <p className="opacity-60 lowercase font-sans font-light leading-relaxed">Jalan kombinasi setengah beton & setengah aspal. Harap pastikan kendaraan Anda dalam kondisi sehat & rem berfungsi baik untuk perjalanan mendaki.</p>
              </div>
            </div>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-white text-[#2C332A] px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl active:scale-95 transition-all">Buka Google Maps <MapPin size={16} /></a>
          </div>
          <div className="h-[400px] lg:h-[500px] rounded-sm overflow-hidden grayscale opacity-70 border border-white/10 shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.775363326168!2d106.7797825!3d-6.7001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69cf17ea152247%3A0x11c3c1d25e2f15c1!2sAuntyLa%20Camp!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#1A1F18] text-white pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 border-b border-white/5 pb-20">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2"><Trees className="text-[#8BA888] w-8 h-8" /><span className="text-2xl font-bold uppercase tracking-widest">Auntyla</span></div>
              <p className="text-[11px] font-bold text-stone-400 uppercase leading-relaxed tracking-wider">Harmoni alam Cijeruk, Bogor dengan kenyamanan modern. View terbaik City Light & pegunungan tepat di depan tenda Anda.</p>
              <div className="flex gap-4 mt-2">
                <a href={igLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#8BA888] transition-all"><Instagram size={18} /></a>
                <a href={ttLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#8BA888] transition-all"><MessageCircle size={18} /></a>
              </div>
            </div>
            <div className="flex flex-col gap-6 text-center md:text-left text-stone-300 uppercase font-black">
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#8BA888]">Navigasi</h4>
              <nav className="flex flex-col gap-4">{navLinks.map((link) => (<a key={link.name} href={link.href} className="text-[11px] font-bold tracking-widest hover:text-[#8BA888] transition-colors">{link.name}</a>))}</nav>
            </div>
            <div className="flex flex-col gap-6 text-center md:text-left text-stone-300 uppercase font-black">
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#8BA888]">Operational</h4>
              <div className="flex flex-col gap-4 text-[11px] uppercase font-bold tracking-widest">
                <div><p className="text-stone-500 mb-1">Check-in (Sab-Kam)</p><p>Min 12.00 WIB</p></div>
                <div><p className="text-stone-500 mb-1">Check-out (Sab-Kam)</p><p>Max 12.00 WIB</p></div>
                <div><p className="text-[#8BA888] mb-1 italic">Khusus Jumat</p><p>Check-in 08.00 WIB</p></div>
              </div>
            </div>
            <div className="flex flex-col gap-6 text-center md:text-left text-stone-300 uppercase font-black">
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#8BA888]">Kontak Resmi</h4>
              <div className="flex flex-col gap-4 text-[11px] font-bold tracking-widest leading-relaxed">
                <div className="flex items-center justify-center md:justify-start gap-4"><MessageCircle size={16} className="text-[#8BA888] shrink-0" /><p>0812-9207-0591</p></div>
                <div className="flex items-center justify-center md:justify-start gap-4"><Mail size={16} className="text-[#8BA888] shrink-0" /><p>auntyla.naturecamp@gmail.com</p></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-stone-500">
            <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
              <p className="text-[10px] uppercase tracking-widest font-black">© 2026 Auntyla Nature Camp. All Rights Reserved.</p>
              <p className="text-[10px] flex items-center gap-2 uppercase tracking-widest font-bold">Made with <Heart size={10} className="text-red-500 fill-red-500" /> in Cijeruk, Bogor</p>
            </div>
            <div className="flex items-center gap-6 opacity-30 grayscale hover:grayscale-0 transition-all cursor-default text-stone-100">
              <div className="flex flex-col items-center gap-1"><CreditCard size={20} /><span className="text-[8px] font-black uppercase">Transfer Bank</span></div>
              <div className="flex flex-col items-center gap-1"><MessageCircle size={20} /><span className="text-[8px] font-black uppercase">E-Wallet / QRIS</span></div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-[110]">
        <button 
          onClick={() => sendWhatsAppGeneral()} 
          className="bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-all shadow-green-200"
          aria-label="Contact WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default App;
