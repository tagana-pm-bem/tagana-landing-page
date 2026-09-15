import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ChevronRight, ShieldCheck, Lock, Server, Key, EyeOff, Activity, FileText } from 'lucide-react'

const safetySections = [
  {
    id: 'arsitektur',
    title: 'Arsitektur Infrastruktur',
    icon: Server,
    content: (
      <>
        <p className="font-body text-text-secondary leading-relaxed mb-4">
          Infrastruktur TAGANA dibangun di atas fondasi cloud modern menggunakan layanan terkelola Supabase (PostgreSQL). Kami mengadopsi prinsip <em>Security by Design</em> di setiap lapisan arsitektur kami untuk meminimalisasi vektor serangan.
        </p>
        <ul className="list-disc pl-5 font-body text-text-secondary space-y-2">
          <li><strong>Isolasi Jaringan:</strong> Database kami tidak terekspos secara langsung ke internet publik. Semua akses dilakukan melalui API Gateway yang diamankan dan dibatasi.</li>
          <li><strong>Proteksi DDoS:</strong> Lapisan API kami dilindungi oleh Web Application Firewall (WAF) standar industri untuk mencegah serangan <em>Distributed Denial of Service</em> dan injeksi SQL.</li>
          <li><strong>Ketersediaan Tinggi (HA):</strong> Sistem dirancang dengan redundansi untuk memastikan uptime 99.9%, mencegah hilangnya data telemetri kritis saat terjadi lonjakan trafik.</li>
        </ul>
      </>
    )
  },
  {
    id: 'enkripsi',
    title: 'Protokol Enkripsi Data',
    icon: Lock,
    content: (
      <>
        <p className="font-body text-text-secondary leading-relaxed mb-4">
          Perlindungan kriptografi diterapkan pada semua fase siklus hidup data Anda, baik saat sedang ditransmisikan (<em>in transit</em>) maupun saat disimpan (<em>at rest</em>).
        </p>
        <ul className="list-disc pl-5 font-body text-text-secondary space-y-2">
          <li><strong>Data in Transit:</strong> Semua komunikasi antara perangkat IoT, aplikasi mobile, dan server kami diwajibkan menggunakan protokol HTTPS/TLS 1.2 atau yang lebih tinggi. Tidak ada data yang dikirim dalam bentuk <em>plaintext</em>.</li>
          <li><strong>Data at Rest:</strong> Data yang berdiam di dalam database dan cadangan (backup) server kami dienkripsi menggunakan standar AES-256 (Advanced Encryption Standard).</li>
          <li><strong>Manajemen Kunci:</strong> Kunci enkripsi dirotasi secara berkala dan disimpan dalam Key Management Service (KMS) yang terisolasi.</li>
        </ul>
      </>
    )
  },
  {
    id: 'akses',
    title: 'Identitas & Kontrol Akses (IAM)',
    icon: Key,
    content: (
      <>
        <p className="font-body text-text-secondary leading-relaxed mb-4">
          Sistem autentikasi kami mencegah akses tidak sah ke data perangkat maupun akun personal Anda. Kami menerapkan prinsip <em>Least Privilege</em> (hak akses minimal).
        </p>
        <ul className="list-disc pl-5 font-body text-text-secondary space-y-2">
          <li><strong>Row Level Security (RLS):</strong> Pada level database, kebijakan RLS memastikan bahwa seorang pengguna hanya dapat membaca dan memodifikasi data dari perangkat IoT yang telah didaftarkan pada akunnya sendiri. Data antar-pengguna terisolasi secara mutlak (<em>multi-tenant isolation</em>).</li>
          <li><strong>JSON Web Tokens (JWT):</strong> Sesi login diamankan menggunakan token JWT berbatas waktu. Token ini divalidasi secara kriptografis pada setiap permintaan API.</li>
          <li><strong>Brute-force Protection:</strong> Endpoint login dilengkapi dengan mekanisme pembatasan laju (<em>rate-limiting</em>) untuk mencegah serangan penebakan kata sandi.</li>
        </ul>
      </>
    )
  },
  {
    id: 'telemetri',
    title: 'Pemrosesan Data IoT',
    icon: Activity,
    content: (
      <>
        <p className="font-body text-text-secondary leading-relaxed mb-4">
          Perangkat IoT terus mengirimkan data telemetri (seperti suhu, status gerbang, dsb.). Kami memisahkan data operasional ini dari data pribadi Anda.
        </p>
        <ul className="list-disc pl-5 font-body text-text-secondary space-y-2">
          <li><strong>Anonimisasi Perangkat:</strong> ID Perangkat disamarkan di tingkat log sistem. Log error hanya mencatat anomali teknis tanpa mengaitkannya dengan identitas pengguna secara langsung.</li>
          <li><strong>Validasi Payload:</strong> Setiap paket data yang masuk dari perangkat IoT divalidasi dengan ketat untuk memastikan integritas data dan mencegah <em>buffer overflow</em> atau injeksi payload berbahaya.</li>
        </ul>
      </>
    )
  },
  {
    id: 'kepatuhan',
    title: 'Kepatuhan Hukum & Privasi',
    icon: EyeOff,
    content: (
      <>
        <p className="font-body text-text-secondary leading-relaxed mb-4">
          TAGANA berkomitmen mematuhi regulasi privasi yang berlaku, termasuk prinsip-prinsip perlindungan data pribadi (UU PDP).
        </p>
        <ul className="list-disc pl-5 font-body text-text-secondary space-y-2">
          <li><strong>Right to be Forgotten:</strong> Anda memiliki hak penuh untuk menghapus akun Anda beserta seluruh riwayat data IoT dan telemetri Anda. Penghapusan ini bersifat permanen dari database utama kami.</li>
          <li><strong>Non-Disclosure:</strong> Kami tidak pernah memperjualbelikan, menyewakan, atau membagikan data operasional IoT Anda kepada pihak ketiga untuk tujuan periklanan atau komersialisasi.</li>
        </ul>
      </>
    )
  },
  {
    id: 'notifikasi',
    title: 'Pihak Ketiga & Notifikasi',
    icon: FileText,
    content: (
      <>
        <p className="font-body text-text-secondary leading-relaxed mb-4">
          Kami menggunakan infrastruktur pihak ketiga secara minimal, hanya untuk fungsionalitas kritis yang tidak dapat dibangun di dalam sistem (misalnya: Push Notification).
        </p>
        <ul className="list-disc pl-5 font-body text-text-secondary space-y-2">
          <li><strong>Firebase Cloud Messaging (FCM):</strong> Digunakan semata-mata untuk mengirimkan peringatan real-time ke smartphone Anda. Payload notifikasi didesain sesingkat mungkin dan tidak memuat kata sandi atau data sensitif yang tidak dienkripsi.</li>
          <li><strong>Pemrosesan Eksternal Terbatas:</strong> Mitra penyedia layanan cloud kami terikat oleh Perjanjian Pemrosesan Data (DPA) yang ketat dan tersertifikasi ISO 27001 / SOC 2.</li>
        </ul>
      </>
    )
  }
]

export default function DataSafety() {
  const [activeId, setActiveId] = useState('arsitektur')

  // Scroll to top on mount
  useEffect(() => { window.scrollTo(0, 0) }, [])

  // Intersection Observer for scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    safetySections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#eff6ff] via-[#f0fdff] to-[#fafafa] pt-28 pb-12 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex items-center gap-2 font-body text-sm text-text-muted mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Beranda</Link>
            <ChevronRight size={14} />
            <span className="text-text-primary">Data Safety</span>
          </nav>

          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center">
              <ShieldCheck size={28} />
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold">
              Keamanan <span className="gradient-text">Data</span>
            </h1>
          </div>
          <p className="font-body text-text-secondary mt-4 max-w-2xl text-lg leading-relaxed">
            Dokumen ini menguraikan standar keamanan teknis, protokol kriptografi, serta arsitektur infrastruktur yang kami terapkan untuk menjamin kerahasiaan dan integritas data Anda.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-full text-xs font-body font-semibold text-gray-500">
            Terakhir Diperbarui: 16 September 2026
          </div>
        </div>
      </div>

      {/* Content Layout */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 flex flex-col lg:flex-row gap-12">
        
        {/* Sticky Sidebar */}
        <aside className="hidden lg:block w-72 flex-shrink-0">
          <div className="sticky top-28 bg-white border border-border rounded-xl p-5 shadow-sm">
            <h3 className="font-heading font-bold text-sm text-text-muted uppercase tracking-wider mb-4">Navigasi Keamanan</h3>
            <nav className="flex flex-col gap-1.5">
              {safetySections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`flex items-center gap-2.5 font-body text-sm py-2 px-3 rounded-md transition-colors ${
                    activeId === s.id
                      ? 'text-primary bg-[#EFF6FF] font-bold'
                      : 'text-text-secondary hover:text-primary hover:bg-[#EFF6FF]'
                  }`}
                >
                  <s.icon size={16} className={activeId === s.id ? 'text-primary' : 'text-gray-400'} />
                  {s.title}
                </a>
              ))}
            </nav>
            
            <div className="mt-6 pt-6 border-t border-border">
              <p className="font-body text-xs text-text-muted leading-relaxed mb-3">
                Memiliki laporan kerentanan (vulnerability)? Hubungi tim keamanan kami.
              </p>
              <a href="mailto:security@tagana.com" className="font-body text-sm font-semibold text-primary hover:underline">
                security@tagana.com
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 max-w-3xl">
          {safetySections.map((s) => (
            <section key={s.id} id={s.id} className="mb-14 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700">
                  <s.icon size={20} />
                </div>
                <h2 className="font-heading text-2xl font-bold text-text-primary">{s.title}</h2>
              </div>
              
              <div className="text-base">
                {s.content}
              </div>
            </section>
          ))}
          
          <div className="bg-[#FAFAFA] border border-border rounded-xl p-6 md:p-8 mt-8 flex flex-col md:flex-row gap-6 items-center">
            <ShieldCheck size={48} className="text-primary opacity-20 flex-shrink-0" />
            <div>
              <h3 className="font-heading font-bold text-lg mb-2">Komitmen Keamanan Transparan</h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed mb-0">
                Keamanan adalah proses yang berkelanjutan. Kami terus mengaudit sistem kami dan mengikuti standar industri (OWASP, NIST) untuk memastikan aplikasi TAGANA aman dari ancaman siber terbaru.
              </p>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}
