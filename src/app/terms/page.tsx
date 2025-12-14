import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
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
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Syarat dan Ketentuan
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
              <CardTitle className="text-2xl text-purple-800">1. Penerimaan Syarat</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Selamat datang di PT ARTISTA MULTI KREATIF. Dengan mengakses atau menggunakan layanan kami, 
                Anda setuju untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan 
                bagian mana pun dari syarat ini, Anda tidak boleh menggunakan layanan kami.
              </p>
              <p>
                Syarat dan Ketentuan ini berlaku untuk semua pengguna layanan PT ARTISTA MULTI KREATIF, 
                termasuk namun tidak terbatas pada klien, mitra bisnis, dan pengunjung website.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">2. Deskripsi Layanan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                PT ARTISTA MULTI KREATIF menyediakan layanan periklanan dan kreatif, termasuk:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Branding dan desain identitas visual</li>
                <li>Photography dan videography</li>
                <li>Digital marketing dan strategi pemasaran</li>
                <li>Social media management</li>
                <li>Content creation dan produksi konten</li>
                <li>Konsultasi marketing dan branding</li>
              </ul>
              <p>
                Kami berhak mengubah, menangguhkan, atau menghentikan layanan kami kapan saja dengan 
                atau tanpa pemberitahuan sebelumnya.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">3. Kewajiban Klien</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>Sebagai klien PT ARTISTA MULTI KREATIF, Anda setuju untuk:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Memberikan informasi yang akurat dan lengkap untuk keperluan proyek</li>
                <li>Memberikan bahan dan materi yang diperlukan tepat waktu</li>
                <li>Memberikan feedback dan persetujuan dalam waktu yang reasonable</li>
                <li>Melakukan pembayaran sesuai dengan kesepakatan yang telah ditetapkan</li>
                <li>Memastikan bahwa semua materi yang disediakan tidak melanggar hak kekayaan intelektual pihak ketiga</li>
                <li>Bertanggung jawab atas konten dan informasi yang disediakan untuk promosi</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">4. Pembayaran dan Biaya</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">Struktur Pembayaran</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Uang muka (DP) minimal 50% dari total proyek</li>
                  <li>Pelunasan sebelum penyerahan final deliverables</li>
                  <li>Biaya tambahan untuk revisi di luar kesepakatan awal</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Metode Pembayaran</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Transfer bank ke rekening perusahaan</li>
                  <li>Pembayaran tunai di kantor</li>
                  <li>Pembayaran elektronik (jika tersedia)</li>
                </ul>
              </div>
              <p>
                Semua pembayaran harus dilakukan dalam mata uang Rupiah (IDR). Keterlambatan pembayaran 
                dapat dikenakan denda sebesar 1% per minggu dari total tagihan.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">5. Kekayaan Intelektual</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">Hak Kekayaan Intelektual PT ARTISTA MULTI KREATIF</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Semua karya asli yang dibuat oleh PT ARTISTA MULTI KREATIF dilindungi oleh hak cipta</li>
                  <li>Template, metodologi, dan proses kerja merupakan milik eksklusif perusahaan</li>
                  <li>Kami berhak menggunakan karya untuk portfolio dan promosi (dengan persetujuan klien)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Hak Kekayaan Intelektual Klien</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Klien memiliki hak penuh atas final deliverables setelah pelunasan pembayaran</li>
                  <li>Klien bertanggung jawab atas keabsahan materi yang disediakan</li>
                  <li>PT ARTISTA MULTI KREATIF tidak bertanggung jawab atas pelanggaran hak kekayaan intelektual dari materi klien</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">6. Kebijakan Revisi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Kami menyediakan proses revisi untuk memastikan kepuasan klien:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maksimal 3 kali revisi mayor untuk setiap tahap proyek</li>
                <li>Revisi minor dapat dilakukan sesuai kebutuhan</li>
                <li>Revisi harus diajukan secara tertulis dengan detail yang jelas</li>
                <li>Revisi di luar kesepakatan akan dikenakan biaya tambahan</li>
                <li>Waktu pengerjaan revisi disesuaikan dengan kompleksitas perubahan</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">7. Pembatalan dan Penghentian</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">Pembatalan oleh Klien</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Pembatalan sebelum pekerjaan dimulai: pengembalian 100% dari uang muka</li>
                  <li>Pembatalan setelah pekerjaan dimulai: uang muka tidak dapat dikembalikan</li>
                  <li>Pembatalan setelah 50% pekerjaan selesai: pembayaran 75% dari total proyek</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Penghentian oleh PT ARTISTA MULTI KREATIF</h3>
                <p>
                  Kami berhak menghentikan proyek jika:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Klien tidak memenuhi kewajiban pembayaran</li>
                  <li>Klien memberikan informasi palsu atau menyesatkan</li>
                  <li>Terjadi konflik kepentingan atau etika</li>
                  <li>Kondisi force majeure yang mempengaruhi pelaksanaan proyek</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">8. Konfidensialitas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Baik PT ARTISTA MULTI KREATIF maupun klien setuju untuk menjaga kerahasiaan:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Informasi bisnis, strategi, dan data klien</li>
                <li>Metodologi kerja dan proses internal PT ARTISTA MULTI KREATIF</li>
                <li>Detail proyek dan spesifikasi teknis</li>
                <li>Informasi keuangan dan komersial</li>
              </ul>
              <p>
                Kewajiban konfidensialitas tetap berlaku setelah penyelesaian proyek.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">9. Penafian Tanggung Jawab</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                PT ARTISTA MULTI KREATIF tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hasil yang tidak tercapai karena faktor di luar kendali kami</li>
                <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                <li>Konten atau materi yang disediakan oleh klien</li>
                <li>Keputusan bisnis yang dibuat berdasarkan rekomendasi kami</li>
                <li>Downtime atau masalah teknis dari platform pihak ketiga</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">10. Force Majeure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                PT ARTISTA MULTI KREATIF tidak bertanggung jawab atas keterlambatan atau kegagalan 
                dalam melaksanakan kewajiban jika disebabkan oleh kejadian force majeure, termasuk:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bencana alam</li>
                <li>Perang, kerusuhan, atau kondisi politik yang tidak stabil</li>
                <li>Pemogokan atau aksi industrial</li>
                <li>Kebijakan pemerintah atau peraturan yang berubah</li>
                <li>Pemadaman listrik atau gangguan infrastruktur</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">11. Hukum yang Berlaku</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                Setiap sengketa yang timbul dari atau berhubungan dengan Syarat dan Ketentuan ini akan 
                diselesaikan melalui negosiasi baik-baik terlebih dahulu.
              </p>
              <p>
                Jika negosiasi gagal, sengketa akan diselesaikan melalui pengadilan yang memiliki 
                yurisdiksi di Kota Kendari, Provinsi Sulawesi Tenggara.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">12. Perubahan Syarat dan Ketentuan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                PT ARTISTA MULTI KREATIF berhak mengubah Syarat dan Ketentuan ini kapan saja. 
                Perubahan akan berlaku efektif setelah dipublikasikan di website kami. 
                Penggunaan berkelanjutan layanan kami setelah perubahan berarti Anda menerima 
                syarat yang diperbarui.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">13. Hubungi Kami</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p><strong>PT ARTISTA MULTI KREATIF</strong></p>
                <p>Jalan Abunawas No. 35, Desa/Kelurahan Korumba</p>
                <p>Kec. Mandonga, Kota Kendari, Provinsi Sulawesi Tenggara</p>
                <p>Kode Pos: 93111</p>
                <p>Email: legal@artistamultikreatif.com</p>
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