import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Activity, Bell, MapPin, Shield, BarChart3, Cpu } from 'lucide-react'

const features = [
  {
    icon: Activity,
    color: 'bg-primary/10 text-primary',
    title: 'Monitoring Real-Time',
    desc: 'Pantau status, data sensor, dan aktivitas semua perangkat IoT Anda secara langsung tanpa delay.',
  },
  {
    icon: Bell,
    color: 'bg-secondary/10 text-secondary',
    title: 'Push Notification Cerdas',
    desc: 'Terima peringatan instan via Firebase Cloud Messaging saat kondisi abnormal terdeteksi.',
  },
  {
    icon: MapPin,
    color: 'bg-tertiary/10 text-yellow-600',
    title: 'Pelacakan Lokasi',
    desc: 'Ketahui posisi setiap perangkat Anda dengan data lokasi real-time yang akurat.',
  },
  {
    icon: Shield,
    color: 'bg-green-100 text-green-600',
    title: 'Keamanan Data',
    desc: 'Data Anda dilindungi dengan enkripsi dan autentikasi aman via Supabase.',
  },
  {
    icon: BarChart3,
    color: 'bg-primary/10 text-primary',
    title: 'Riwayat & Analitik',
    desc: 'Lihat riwayat lengkap aktivitas perangkat dan analisis tren untuk pengambilan keputusan.',
  },
  {
    icon: Cpu,
    color: 'bg-secondary/10 text-secondary',
    title: 'Multi-Perangkat',
    desc: 'Kelola banyak perangkat IoT sekaligus dari satu dashboard yang terintegrasi.',
  },
]

export default function Fitur() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-24 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-primary">Fitur Unggulan</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-4">Semua yang Anda Butuhkan</h1>
            <p className="font-body text-text-secondary max-w-xl mx-auto">
              TAGANA hadir dengan fitur lengkap untuk memastikan perangkat IoT Anda selalu terpantau
              dan beroperasi optimal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-[#FAFAFA] border border-border rounded-lg p-6 card-hover">
                <div className={`w-11 h-11 rounded-md flex items-center justify-center mb-4 ${f.color}`}>
                  <f.icon size={22} />
                </div>
                <h3 className="font-heading text-base font-semibold mb-2">{f.title}</h3>
                <p className="font-body text-sm text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

