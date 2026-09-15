import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  Wifi, Bell, MapPin, Shield, BarChart3, Cpu,
  CheckCircle, Download, Smartphone, ArrowRight,
  Activity, Server, Database
} from 'lucide-react'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

// --- Section: Hero ---
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#eff6ff] via-[#f0fdff] to-[#fafafa] pt-16">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">
        {/* Text */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-1.5 mb-6 shadow-subtle">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="font-body text-sm font-600 text-text-secondary">
              Real-time IoT Monitoring
            </span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            Pantau Perangkat
            <br />
            <span className="text-blue-600">IoT Anda</span>
            <br />
            Kapan Saja
          </motion.h1>

          <motion.p variants={fadeInUp} className="font-body text-lg text-text-secondary leading-relaxed mb-8 max-w-md">
            TAGANA menghubungkan, memantau, dan memberikan peringatan cerdas untuk
            semua perangkat IoT Anda secara real-time — dari mana saja.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-body font-bold text-base px-7 py-3.5 rounded-full transition-colors glow-primary"
            >
              <Download size={18} />
              Download Gratis
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-[#EFF6FF] font-body font-bold text-base px-7 py-3.5 rounded-full transition-colors"
            >
              Lihat Fitur
              <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div variants={fadeInUp} className="flex items-center gap-6 mt-10">
            {[
              { val: '500+', label: 'Perangkat Terhubung' },
              { val: '99.9%', label: 'Uptime' },
              { val: '24/7', label: 'Monitoring' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-heading font-bold text-2xl text-primary">{s.val}</div>
                <div className="font-body text-xs text-text-muted">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <AppMockup />
        </motion.div>
      </div>
    </section>
  )
}

// CSS-only app mockup — no images needed
function AppMockup() {
  return (
    <motion.div 
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="relative w-64 md:w-72"
    >
      {/* Phone frame */}
      <div className="bg-[#111] rounded-[40px] p-3 shadow-large border-4 border-[#222]">
        <div className="bg-[#1a1a2e] rounded-[32px] overflow-hidden relative">
          {/* Status bar */}
          <div className="bg-[#111] px-6 py-3 flex justify-between items-center z-20 relative">
            <span className="font-mono text-xs text-gray-400">9:41</span>
            <div className="w-20 h-4 bg-[#111] rounded-full mx-auto" />
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`w-1 rounded-sm bg-white`} style={{ height: `${(i + 1) * 3 + 2}px`, opacity: i < 3 ? 1 : 0.3 }} />
              ))}
            </div>
          </div>

          {/* App content */}
          <div className="px-4 pb-6 pt-2 bg-[#0f0f1a] relative z-10 min-h-[400px]">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 mt-2">
              <div>
                <p className="font-body text-[10px] text-gray-400 mb-0.5">Selamat datang</p>
                <p className="font-heading text-sm font-bold text-white">Dashboard</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5">
                 <div className="w-full h-full bg-[#111] rounded-full" />
              </div>
            </div>

            {/* Status cards */}
            {[
              { name: 'Sensor Suhu', val: '28.5°C', color: 'text-secondary', active: true },
              { name: 'Detektor Gas', val: 'Normal', color: 'text-green-400', active: true },
              { name: 'CCTV Gate', val: 'Online', color: 'text-primary', active: true },
            ].map((d, idx) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (idx * 0.1) }}
                key={d.name} 
                className="bg-[#1a1a2e] border border-white/5 rounded-xl p-3 mb-3 flex justify-between items-center shadow-md"
              >
                <div>
                  <p className="font-body text-[9px] text-gray-500 mb-1">{d.name}</p>
                  <p className={`font-heading text-sm font-bold ${d.color}`}>{d.val}</p>
                </div>
                <div className={`w-2 h-2 rounded-full ${d.active ? 'bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]' : 'bg-gray-600'}`} />
              </motion.div>
            ))}

            {/* Mini chart */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-[#1a1a2e] border border-white/5 rounded-xl p-3 mt-4"
            >
              <p className="font-body text-[9px] text-gray-500 mb-3">Aktivitas 24 Jam</p>
              <div className="flex items-end gap-1.5 h-12">
                {[4,6,5,8,7,9,6,8,10,7,9,8].map((h, i) => (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${h * 4}px` }}
                    transition={{ delay: 1 + (i * 0.05), duration: 0.5 }}
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      background: i === 8 ? '#2563EB' : 'rgba(37,99,235,0.3)',
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating notification badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        className="absolute -right-6 top-1/3 bg-white rounded-2xl shadow-large px-3 py-2.5 flex items-center gap-3 border border-gray-100 z-30"
      >
        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
          <Bell size={14} className="text-primary" />
        </div>
        <div>
          <p className="font-heading text-[11px] font-bold text-gray-800">Peringatan!</p>
          <p className="font-body text-[9px] text-text-muted">Suhu melebihi batas</p>
        </div>
      </motion.div>

      {/* Floating status */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.7, type: "spring" }}
        className="absolute -left-8 bottom-1/4 bg-white rounded-2xl shadow-large px-4 py-2.5 flex items-center gap-2 border border-gray-100 z-30"
      >
        <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
        <span className="font-body text-[11px] font-bold text-gray-800">3 Perangkat Online</span>
      </motion.div>
    </motion.div>
  )
}

// --- Section: Features ---
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
    color: 'bg-tertiary/10 text-blue-600',
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

function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block font-body text-xs font-bold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full mb-3">Fitur Unggulan</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Semua yang Anda Butuhkan</h2>
          <p className="font-body text-text-secondary max-w-xl mx-auto text-lg">
            TAGANA hadir dengan fitur lengkap untuk memastikan perangkat IoT Anda selalu terpantau
            dan beroperasi optimal.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div variants={fadeInUp} key={f.title} className="bg-white border border-gray-100 rounded-2xl p-8 card-hover shadow-subtle group">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${f.color}`}>
                <f.icon size={26} />
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">{f.title}</h3>
              <p className="font-body text-text-secondary leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// --- Section: How It Works ---
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

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-[#eff6ff] to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="text-center mb-20"
        >
          <span className="inline-block font-body text-xs font-bold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full mb-3">Cara Kerja</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Mulai dalam 3 Langkah</h2>
          <p className="font-body text-text-secondary max-w-md mx-auto text-lg">
            Tidak perlu keahlian teknis. Mulai memantau perangkat IoT Anda dalam hitungan menit.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-14 left-[calc(16.67%+1px)] right-[calc(16.67%+1px)] h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30" />

          {steps.map((s) => (
            <motion.div variants={fadeInUp} key={s.num} className="flex flex-col items-center text-center group">
              <div className="relative z-10 w-28 h-28 rounded-full bg-white border border-gray-100 shadow-large flex flex-col items-center justify-center mb-6 transition-transform group-hover:-translate-y-2">
                <span className="font-mono text-xs font-bold text-gray-400 mb-1">{s.num}</span>
                <s.icon size={32} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">{s.title}</h3>
              <p className="font-body text-text-secondary leading-relaxed max-w-xs">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// --- Section: Stats ---
const stats = [
  { val: '500+', label: 'Perangkat Terhubung', color: 'text-white' },
  { val: '99.9%', label: 'Uptime Terjamin', color: 'text-secondary' },
  { val: '24/7', label: 'Monitoring Aktif', color: 'text-white' },
  { val: '<1s', label: 'Latency Alert', color: 'text-secondary' },
]

function Stats() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
            Dipercaya untuk Keandalan
          </h2>
          <p className="font-body text-gray-400">
            Angka yang berbicara tentang performa TAGANA
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
        >
          {stats.map((s) => (
            <motion.div variants={fadeInUp} key={s.label} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className={`font-heading text-4xl md:text-5xl font-bold mb-2 ${s.color}`}>{s.val}</div>
              <div className="font-body text-sm text-gray-400 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// --- Section: Tech Stack ---
function TechStack() {
  return (
    <section className="py-16 bg-white border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-xs font-bold uppercase tracking-widest text-gray-400 text-center mb-10">
          Powered By Teknologi Terpercaya
        </p>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {[
            { icon: Database, label: 'Supabase', color: 'text-green-600' },
            { icon: Bell, label: 'Firebase FCM', color: 'text-yellow-500' },
            { icon: Server, label: 'Real-time API', color: 'text-secondary' },
            { icon: Shield, label: 'Enkripsi End-to-End', color: 'text-primary' },
          ].map((t) => (
            <motion.div variants={fadeInUp} key={t.label} className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
              <t.icon size={22} className={t.color} />
              <span className="font-heading font-bold text-base text-gray-800">{t.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// --- Section: Download CTA ---
function DownloadCTA() {
  return (
    <section id="download" className="py-28 bg-gradient-to-br from-primary via-primary-hover to-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-1.5 mb-8 border border-white/30">
            <Download size={14} className="text-white" />
            <span className="font-body text-sm font-semibold text-white">Tersedia Sekarang</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Mulai Monitoring
            <br />Perangkat Anda Hari Ini
          </h2>
          <p className="font-body text-white/90 text-lg mb-12 max-w-lg mx-auto">
            Download TAGANA gratis dan rasakan kemudahan memantau semua perangkat IoT dari genggaman tangan Anda.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.button variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center gap-3 bg-white text-primary font-body font-bold text-lg px-8 py-4 rounded-full transition-transform shadow-large">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.4.07 2.37.74 3.18.78 1.2-.24 2.35-.93 3.61-.84 1.54.12 2.7.72 3.47 1.84-3.14 1.88-2.39 5.98.63 7.13-.59 1.51-1.37 3-2.89 3.97zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            App Store
          </motion.button>
          <motion.button variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-body font-bold text-lg px-8 py-4 rounded-full transition-transform">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.3.17.65.19.98.07l12.41-7.17-2.73-2.73-10.66 9.83zM.41 1.5C.15 1.84 0 2.3 0 2.88v18.24c0 .58.15 1.04.42 1.38l.07.07 10.22-10.22v-.24L.48 1.43l-.07.07zM19.84 10.32l-2.59-1.5-3.06 3.06 3.06 3.07 2.61-1.51c.74-.43.74-1.13-.02-1.56v-.06zM4.16.24l12.41 7.17-2.73 2.73-9.68-9.9z"/>
            </svg>
            Google Play
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }} viewport={{ once: true }}
          className="flex justify-center gap-6 mt-10"
        >
          {[
            { icon: CheckCircle, label: 'Gratis selamanya' },
            { icon: CheckCircle, label: 'Tanpa iklan' },
            { icon: CheckCircle, label: 'Privasi terjaga' },
          ].map((i) => (
            <div key={i.label} className="flex items-center gap-1.5">
              <i.icon size={16} className="text-white/80" />
              <span className="font-body text-sm font-medium text-white/90">{i.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash)
      if (el) {
        setTimeout(() => el.scrollIntoView(), 100)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Stats />
        <TechStack />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  )
}

