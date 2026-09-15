import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Smartphone, Wifi, Activity } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Smartphone,
    title: 'Daftar & Buat Akun',
    desc: 'Daftar dengan nomor telepon atau email. Akun Anda langsung aktif dan siap digunakan.',
  },
  {
    num: '02',
    icon: Wifi,
    title: 'Hubungkan Perangkat',
    desc: 'Tambahkan perangkat IoT Anda dengan kode unik. Proses pairing cepat dan mudah.',
  },
  {
    num: '03',
    icon: Activity,
    title: 'Pantau & Terima Alert',
    desc: 'Dashboard real-time aktif langsung. Terima notifikasi setiap ada perubahan kondisi.',
  },
]

export default function CaraKerja() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-24 bg-gradient-to-b from-[#eff6ff] to-white min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-primary">Cara Kerja</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-4">Mulai dalam 3 Langkah</h1>
            <p className="font-body text-text-secondary max-w-md mx-auto">
              Tidak perlu keahlian teknis. Mulai memantau perangkat IoT Anda dalam hitungan menit.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-14 left-[calc(16.67%+1px)] right-[calc(16.67%+1px)] h-0.5 bg-gradient-to-r from-primary via-secondary to-primary" />

            {steps.map((s) => (
              <div key={s.num} className="flex flex-col items-center text-center">
                <div className="relative z-10 w-28 h-28 rounded-full bg-white border-2 border-primary/20 shadow-medium flex flex-col items-center justify-center mb-5">
                  <span className="font-mono text-xs font-bold text-primary mb-1">{s.num}</span>
                  <s.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{s.title}</h3>
                <p className="font-body text-sm text-text-secondary leading-relaxed max-w-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

