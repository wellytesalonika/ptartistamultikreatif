'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Menu, 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  Palette, 
  Camera, 
  Video, 
  Megaphone, 
  Globe, 
  TrendingUp,
  Lightbulb,
  Target,
  Zap,
  Star,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const creativeWords = ['Kreatif', 'Inovatif', 'Inspiratif', 'Profesional', 'Berkelas'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % creativeWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Branding & Design',
      description: 'Desain logo, identitas brand, dan materi visual yang memukau',
      color: 'bg-gradient-to-br from-pink-500 to-purple-600'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Photography & Videography',
      description: 'Produksi foto dan video berkualitas tinggi untuk kebutuhan promosi',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: 'Digital Marketing',
      description: 'Strategi pemasaran digital yang efektif dan terukur',
      color: 'bg-gradient-to-br from-orange-500 to-red-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Social Media Management',
      description: 'Pengelolaan media sosial untuk meningkatkan engagement',
      color: 'bg-gradient-to-br from-green-500 to-teal-600'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Content Creation',
      description: 'Pembuatan konten kreatif dan relevan untuk audience Anda',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Marketing Strategy',
      description: 'Perencanaan strategi pemasaran yang komprehensif',
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600'
    }
  ];

  const portfolioItems = [
    { category: 'Branding', title: 'Logo Design for Tech Startup', image: '/api/placeholder/400/300' },
    { category: 'Video', title: 'Commercial Production', image: '/api/placeholder/400/300' },
    { category: 'Digital', title: 'Social Media Campaign', image: '/api/placeholder/400/300' },
    { category: 'Photography', title: 'Product Photography', image: '/api/placeholder/400/300' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="PT ARTISTA MULTI KREATIF" className="w-10 h-10" />
              <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ARTISTA
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Beranda</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Layanan</a>
              <a href="#portfolio" className="text-gray-700 hover:text-purple-600 transition-colors">Portfolio</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">Tentang</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Kontak</a>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Mulai Proyek
              </Button>
            </div>

            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-purple-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Beranda</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Layanan</a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Portfolio</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Tentang</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <Star className="w-4 h-4 mr-1" />
              Creative Advertising Agency
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                PT ARTISTA MULTI KREATIF
              </span>
            </h1>
            <div className="text-2xl md:text-3xl text-gray-700 mb-8 h-8">
              Solusi Periklanan yang{' '}
              <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {creativeWords[currentWordIndex]}
              </span>
            </div>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Kami adalah agency periklanan kreatif yang menghadirkan solusi digital dan branding 
              untuk membantu bisnis Anda berkembang dengan pesat di era modern.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-3">
                Konsultasi Gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-purple-300 text-purple-700 hover:bg-purple-50">
                Lihat Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <Lightbulb className="w-4 h-4 mr-1" />
              Layanan Kami
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Solusi Kreatif untuk
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {' '}Bisnis Anda
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan kreatif untuk membantu brand Anda menonjol di pasar yang kompetitif
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-xl ${service.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <Button variant="ghost" className="mt-4 text-purple-600 hover:text-purple-700 hover:bg-purple-50 p-0">
                    Pelajari lebih lanjut
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <Target className="w-4 h-4 mr-1" />
                Tentang Kami
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Mengapa Memilih
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {' '}ARTISTA MULTI KREATIF?
                </span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                PT ARTISTA MULTI KREATIF adalah perusahaan periklanan yang berbasis di Kendari, 
                Sulawesi Tenggara. Kami berdedikasi untuk menyediakan solusi kreatif yang 
                membantu bisnis mencapai tujuan marketing mereka dengan cara yang inovatif dan efektif.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Tim Kreatif Profesional</h4>
                    <p className="text-gray-600">Didukung oleh tim berpengalaman di industri kreatif dan periklanan</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Hasil Terukur</h4>
                    <p className="text-gray-600">Fokus pada ROI dan hasil yang dapat diukur untuk setiap campaign</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Layanan Lengkap</h4>
                    <p className="text-gray-600">Solusi one-stop untuk semua kebutuhan marketing dan branding Anda</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl transform rotate-3"></div>
              <Card className="relative bg-white p-8 rounded-3xl shadow-xl">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600">500+</div>
                    <div className="text-gray-600">Proyek Selesai</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-pink-600">200+</div>
                    <div className="text-gray-600">Klien Puas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600">5+</div>
                    <div className="text-gray-600">Tahun Pengalaman</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
              <Camera className="w-4 h-4 mr-1" />
              Portfolio Kami
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Karya Terbaik
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {' '}Kami
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lihat bagaimana kami telah membantu berbagai bisnis mencapai tujuan marketing mereka
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-purple-200 to-pink-200 relative">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Button variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Lihat Detail
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Lihat Semua Portfolio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <Mail className="w-4 h-4 mr-1" />
              Hubungi Kami
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Siap Memulai Proyek
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {' '}Kreatif Anda?
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mari diskusikan bagaimana kami dapat membantu bisnis Anda berkembang dengan solusi kreatif kami
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subjek</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"></textarea>
                </div>
                <Button size="lg" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Kirim Pesan
                </Button>
              </form>
            </Card>

            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Alamat</h4>
                    <p className="text-gray-600">
                      Jalan Abunawas No. 35, Desa/Kelurahan Korumba, Kec. Mandonga, 
                      Kota Kendari, Provinsi Sulawesi Tenggara, Kode Pos 93111
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Telepon</h4>
                    <p className="text-gray-600">0823-1059-8328</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@artistamultikreatif.com</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="PT ARTISTA MULTI KREATIF" className="w-8 h-8" />
                <span className="font-bold text-lg">ARTISTA MULTI KREATIF</span>
              </div>
              <p className="text-gray-400">
                Creative advertising agency yang menghadirkan solusi digital dan branding untuk bisnis Anda.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Branding & Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Content Creation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Social Media</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Dapatkan tips dan trik marketing terbaru dari kami</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Email Anda" 
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
                />
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PT ARTISTA MULTI KREATIF. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}