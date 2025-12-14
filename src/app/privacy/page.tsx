import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <img src="/logo.png" alt="PT ARTISTA MULTI KREATIF" className="w-8 h-8" />
                <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ARTISTA MULTI KREATIF
                </span>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline" size="sm">
                <Home className="w-4 h-4 mr-2" />
                Beranda
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Kebijakan Privasi
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {' '}PT ARTISTA MULTI KREATIF
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">1. Pendahuluan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Selamat datang di PT ARTISTA MULTI KREATIF. Kami sangat menghargai privasi Anda dan berkomitmen 
                untuk melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, 
                menggunakan, dan melindungi informasi pribadi Anda ketika Anda menggunakan layanan kami.
              </p>
              <p>
                Dengan menggunakan layanan kami, Anda setuju dengan praktik yang dijelaskan dalam kebijakan ini.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">2. Informasi yang Kami Kumpulkan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">Informasi Pribadi</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Nama lengkap</li>
                  <li>Alamat email</li>
                  <li>Nomor telepon</li>
                  <li>Alamat perusahaan atau rumah</li>
                  <li>Informasi pembayaran</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Informasi Teknis</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Alamat IP</li>
                  <li>Jenis browser</li>
                  <li>Sistem operasi</li>
                  <li>Data penggunaan website</li>
                  <li>Cookies dan teknologi serupa</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">3. Cara Kami Menggunakan Informasi Anda</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>Kami menggunakan informasi yang kami kumpulkan untuk:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Menyediakan dan memelihara layanan kami</li>
                <li>Memproses transaksi dan mengirim informasi terkait pembelian</li>
                <li>Mengirimkan informasi teknis, pembaruan, dan pesan administratif</li>
                <li>Menanggapi pertanyaan, komentar, dan permintaan Anda</li>
                <li>Mengembangkan produk dan layanan baru</li>
                <li>Memantau penggunaan dan tren untuk meningkatkan pengalaman pengguna</li>
                <li>Melindungi keamanan dan integritas layanan kami</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">4. Berbagi Informasi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>Kami tidak menjual, memperdagangkan, atau mentransfer informasi pribadi Anda kepada pihak ketiga, 
              kecuali dalam kondisi berikut:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dengan persetujuan Anda yang eksplisit</li>
                <li>Kepada penyedia layanan tepercaya yang membantu kami mengoperasikan bisnis</li>
                <li>Untuk mematuhi kewajiban hukum atau melindungi hak, properti, atau keselamatan kami</li>
                <li>Dalam koneksi dengan merger, akuisisi, atau penjualan aset</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">5. Keamanan Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Kami mengimplementasikan berbagai langkah keamanan untuk melindungi informasi pribadi Anda, 
                termasuk:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Enkripsi data selama transmisi dan penyimpanan</li>
                <li>Akses terbatas ke informasi pribadi</li>
                <li>Audit keamanan reguler</li>
                <li>Pembaruan sistem keamanan berkelanjutan</li>
              </ul>
              <p>
                Namun, harap diingat bahwa tidak ada metode transmisi internet atau penyimpanan elektronik 
                yang 100% aman.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">6. Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Kami menggunakan cookies dan teknologi pelacakan serupa untuk meningkatkan pengalaman 
                pengguna di website kami. Cookies adalah file kecil yang disimpan di browser Anda yang 
                membantu kami memahami preferensi Anda.
              </p>
              <p>
                Anda dapat mengatur browser Anda untuk menolak cookies atau memberi tahu Anda ketika 
                cookies dikirim, namun ini dapat mempengaruhi fungsionalitas website.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">7. Hak Privasi Anda</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>Anda memiliki hak untuk:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                <li>Memperbaiki informasi yang tidak akurat</li>
                <li>Menghapus informasi pribadi Anda (dalam batas yang diizinkan oleh hukum)</li>
                <li>Menolak pemrosesan informasi pribadi Anda</li>
                <li>Meminta transfer data pribadi Anda</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">8. Perubahan Kebijakan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan 
                diberitahukan melalui website kami atau email. Penggunaan berkelanjutan dari layanan 
                kami setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">9. Hubungi Kami</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau praktik privasi kami, 
                silakan hubungi kami:
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p><strong>PT ARTISTA MULTI KREATIF</strong></p>
                <p>Jalan Abunawas No. 35, Desa/Kelurahan Korumba</p>
                <p>Kec. Mandonga, Kota Kendari, Provinsi Sulawesi Tenggara</p>
                <p>Kode Pos: 93111</p>
                <p>Email: privacy@artistamultikreatif.com</p>
                <p>Telepon: 0823-1059-8328</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Link href="/">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}