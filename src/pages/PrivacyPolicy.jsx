import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ChevronRight } from 'lucide-react'

// All 11 sections from plan.md
const sections = [
  { id: 'sec-1', title: '1. Informasi yang Kami Kumpulkan' },
  { id: 'sec-2', title: '2. Cara Kami Menggunakan Informasi' },
  { id: 'sec-3', title: '3. Penyedia Layanan Pihak Ketiga' },
  { id: 'sec-4', title: '4. Penyimpanan dan Keamanan Data' },
  { id: 'sec-5', title: '5. Berbagi Informasi' },
  { id: 'sec-6', title: '6. Penyimpanan Data' },
  { id: 'sec-7', title: '7. Penghapusan Akun dan Data' },
  { id: 'sec-8', title: '8. Hak Pengguna' },
  { id: 'sec-9', title: '9. Privasi Anak' },
  { id: 'sec-10', title: '10. Perubahan Kebijakan Privasi' },
  { id: 'sec-11', title: '11. Kontak' },
]

function TOC({ activeId }) {
  return (
    <nav className="sticky top-24 bg-white border border-border rounded-lg p-5 shadow-subtle">
      <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-text-muted mb-4">
        Daftar Isi
      </h3>
      <ul className="flex flex-col gap-1">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`flex items-center gap-1.5 font-body text-sm py-1 px-2 rounded-md transition-colors ${
                activeId === s.id
                  ? 'text-primary bg-[#EFF6FF] font-semibold'
                  : 'text-text-secondary hover:text-primary hover:bg-[#EFF6FF]'
              }`}
            >
              {activeId === s.id && <ChevronRight size={12} />}
              <span className="line-clamp-1">{s.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function SectionBlock({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 mb-12">
      <h2 className="font-heading text-xl font-bold mb-4 text-text-primary border-l-4 border-primary pl-4">
        {title}
      </h2>
      <div className="font-body text-base text-text-secondary leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  )
}

function SubSection({ title, children }) {
  return (
    <div className="mt-5">
      <h3 className="font-heading text-base font-semibold text-text-primary mb-2">{title}</h3>
      {children}
    </div>
  )
}

function BulletList({ items }) {
  return (
    <ul className="list-none space-y-1.5 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function NumberedList({ items }) {
  return (
    <ol className="space-y-2 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="font-heading font-bold text-sm text-primary mt-0.5 w-5 flex-shrink-0">{i + 1}.</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  )
}

function InfoBadge({ label }) {
  return (
    <span className="inline-block bg-secondary/10 text-secondary font-heading font-semibold text-sm px-3 py-1 rounded-md">
      {label}
    </span>
  )
}

// --- Content ---
function PrivacyContent() {
  return (
    <>
      <SectionBlock id="sec-1" title="1. Informasi yang Kami Kumpulkan">
        <p>
          Ketika Anda menggunakan TAGANA, kami mengumpulkan informasi yang diperlukan untuk menyediakan
          layanan pemantauan IoT yang optimal.
        </p>

        <SubSection title="A. Informasi Akun dan Profil">
          <p>Ketika Anda membuat atau menggunakan akun TAGANA, kami dapat mengumpulkan:</p>
          <BulletList items={[
            'Nama pengguna',
            'Nomor telepon',
            'Alamat email, apabila diberikan atau digunakan dalam profil',
            'Foto profil/avatar, apabila pengguna menambahkannya',
            'Informasi teknis yang diperlukan untuk autentikasi dan pengelolaan akun',
          ]} />
          <p className="mt-3">
            Informasi tersebut digunakan untuk membuat akun, mengidentifikasi pengguna, menyediakan
            fitur aplikasi, serta mengelola akses terhadap perangkat yang terhubung.
          </p>
        </SubSection>

        <SubSection title="B. Informasi Perangkat IoT">
          <p>Ketika pengguna menghubungkan perangkat TAGANA/IoT ke aplikasi, kami dapat memproses:</p>
          <BulletList items={[
            'Kode atau identitas perangkat',
            'Nama perangkat',
            'Status perangkat',
            'Versi firmware',
            'Waktu pendaftaran dan pembaruan perangkat',
            'Informasi koneksi atau status perangkat yang diperlukan untuk menyediakan fitur pemantauan',
          ]} />
        </SubSection>

        <SubSection title="C. Data Lokasi">
          <p>
            TAGANA dapat memproses informasi lokasi yang berkaitan dengan perangkat atau sistem yang
            digunakan untuk fungsi pemantauan. Data lokasi digunakan untuk menyediakan fitur yang
            membutuhkan informasi posisi perangkat, seperti pemantauan lokasi dan informasi terkait
            perangkat. TAGANA hanya menggunakan data lokasi sejauh diperlukan oleh fitur aplikasi
            yang bersangkutan.
          </p>
        </SubSection>

        <SubSection title="D. Data Sensor dan Aktivitas Perangkat">
          <p>TAGANA dapat menerima dan menyimpan data yang dikirimkan oleh perangkat IoT yang telah terdaftar. Data tersebut digunakan untuk:</p>
          <BulletList items={[
            'Menampilkan kondisi perangkat',
            'Melakukan pemantauan',
            'Membantu mendeteksi kondisi atau kejadian tertentu',
            'Menyediakan riwayat dan informasi yang relevan bagi pengguna',
          ]} />
        </SubSection>

        <SubSection title="E. Push Notification">
          <p>
            TAGANA menggunakan layanan <InfoBadge label="Firebase Cloud Messaging (FCM)" /> untuk
            mengirimkan notifikasi kepada pengguna. Untuk keperluan tersebut, TAGANA dapat menyimpan{' '}
            <strong>FCM token</strong> yang terkait dengan perangkat pengguna, yang digunakan untuk
            mengirimkan notifikasi seperti informasi perangkat, peringatan, atau pemberitahuan lain
            yang berkaitan dengan layanan TAGANA.
          </p>
        </SubSection>
      </SectionBlock>

      <SectionBlock id="sec-2" title="2. Cara Kami Menggunakan Informasi">
        <p>Informasi yang dikumpulkan digunakan untuk:</p>
        <NumberedList items={[
          'Membuat dan mengelola akun pengguna.',
          'Melakukan autentikasi pengguna.',
          'Menghubungkan pengguna dengan perangkat IoT yang terdaftar.',
          'Menampilkan status, lokasi, aktivitas, dan data perangkat.',
          'Mengirimkan notifikasi dan peringatan.',
          'Menyediakan, memelihara, dan meningkatkan layanan TAGANA.',
          'Mendeteksi serta menangani kesalahan dan masalah teknis.',
          'Menjaga keamanan aplikasi dan mencegah penggunaan yang tidak sah.',
        ]} />
        <p className="mt-4">
          Kami tidak menggunakan informasi pengguna untuk tujuan yang tidak berkaitan dengan
          penyediaan dan pengoperasian layanan TAGANA tanpa dasar atau persetujuan yang sesuai.
        </p>
      </SectionBlock>

      <SectionBlock id="sec-3" title="3. Penyedia Layanan Pihak Ketiga">
        <p>TAGANA menggunakan beberapa layanan pihak ketiga untuk mendukung pengoperasian aplikasi:</p>

        <SubSection title="Supabase">
          <p>
            TAGANA menggunakan <InfoBadge label="Supabase" /> untuk layanan backend dan penyimpanan
            data aplikasi, termasuk database dan layanan autentikasi. Data yang diproses melalui
            layanan tersebut digunakan untuk menyediakan fungsi akun, penyimpanan data, dan fitur
            aplikasi TAGANA.
          </p>
        </SubSection>

        <SubSection title="Firebase Cloud Messaging">
          <p>
            TAGANA menggunakan <InfoBadge label="Firebase Cloud Messaging (FCM)" /> untuk
            menyediakan push notification. Layanan pihak ketiga tersebut dapat memproses informasi
            teknis yang diperlukan untuk menjalankan fungsi yang mereka sediakan sesuai dengan
            kebijakan privasi masing-masing.
          </p>
        </SubSection>
      </SectionBlock>

      <SectionBlock id="sec-4" title="4. Penyimpanan dan Keamanan Data">
        <p>
          Kami menerapkan langkah-langkah teknis dan administratif yang wajar untuk melindungi
          informasi pengguna dari akses, perubahan, pengungkapan, atau penggunaan yang tidak sah.
          Akses terhadap data aplikasi dibatasi berdasarkan kebutuhan dan hak akses yang sesuai.
        </p>
        <p>
          Namun, tidak ada metode transmisi atau penyimpanan data melalui internet yang dapat
          dijamin 100% aman. Oleh karena itu, kami tidak dapat menjamin keamanan absolut seluruh
          informasi.
        </p>
      </SectionBlock>

      <SectionBlock id="sec-5" title="5. Berbagi Informasi">
        <p>
          Kami <strong>tidak menjual</strong> informasi pribadi pengguna.
        </p>
        <p>
          Informasi pengguna hanya dapat diproses atau dibagikan kepada penyedia layanan yang
          diperlukan untuk mengoperasikan TAGANA, seperti penyedia backend, autentikasi, database,
          dan push notification.
        </p>
        <p>
          Kami juga dapat mengungkapkan informasi apabila diwajibkan oleh hukum atau diperlukan
          untuk memenuhi kewajiban hukum yang berlaku.
        </p>
      </SectionBlock>

      <SectionBlock id="sec-6" title="6. Penyimpanan Data">
        <p>
          Kami menyimpan informasi selama diperlukan untuk menyediakan layanan TAGANA, memenuhi
          tujuan yang dijelaskan dalam Kebijakan Privasi ini, atau memenuhi kewajiban hukum yang
          berlaku.
        </p>
        <p>
          Apabila informasi tidak lagi diperlukan, kami dapat menghapus atau menganonimkan
          informasi tersebut sesuai dengan kebijakan dan kebutuhan operasional kami.
        </p>
      </SectionBlock>

      <SectionBlock id="sec-7" title="7. Penghapusan Akun dan Data">
        <p>
          Sesuai dengan ketentuan keamanan data, pengguna dapat meminta penghapusan akun dan seluruh data pribadi yang terkait dengan akun TAGANA. 
          Saat ini, permintaan penghapusan akun diproses secara manual dengan menghubungi tim kami secara langsung melalui:
        </p>
        <div className="bg-[#EFF6FF] border border-blue-100 rounded-lg p-4 my-4">
          <ul className="list-disc pl-5 font-body text-sm text-text-secondary space-y-1">
            <li><strong>Email:</strong> taganahiliriset@gmail.com</li>
            <li><strong>WhatsApp:</strong> (Melalui kontak resmi TAGANA)</li>
          </ul>
        </div>
        <p>
          Setelah permintaan diterima dan identitas Anda berhasil diverifikasi, kami akan memproses penghapusan seluruh data pribadi, kredensial login, dan riwayat perangkat IoT Anda dari sistem kami secara permanen.
        </p>
        <p>
          Beberapa data log teknis mungkin dipertahankan sementara secara anonim untuk jangka waktu tertentu apabila diwajibkan oleh hukum atau diperlukan untuk tujuan keamanan dan penyelesaian sengketa, namun data tersebut tidak akan lagi terkait dengan identitas Anda.
        </p>
      </SectionBlock>

      <SectionBlock id="sec-8" title="8. Hak Pengguna">
        <p>Sesuai dengan ketentuan yang berlaku, pengguna dapat memiliki hak untuk:</p>
        <BulletList items={[
          'Mengetahui informasi pribadi yang diproses',
          'Memperbarui atau memperbaiki informasi yang tidak akurat',
          'Meminta penghapusan akun dan data',
          'Meminta informasi mengenai pemrosesan data pribadi',
          'Menyampaikan pertanyaan atau keluhan mengenai privasi',
        ]} />
        <p className="mt-3">
          Untuk menggunakan hak tersebut, pengguna dapat menghubungi kami melalui kontak yang
          tersedia di bawah.
        </p>
      </SectionBlock>

      <SectionBlock id="sec-9" title="9. Privasi Anak">
        <p>TAGANA tidak ditujukan secara khusus kepada anak-anak.</p>
        <p>
          Kami tidak dengan sengaja mengumpulkan informasi pribadi dari anak-anak tanpa dasar atau
          persetujuan yang sesuai dengan ketentuan yang berlaku.
        </p>
        <p>
          Apabila Anda mengetahui bahwa seorang anak telah memberikan informasi pribadi kepada kami
          tanpa persetujuan yang sesuai, silakan hubungi kami agar informasi tersebut dapat ditinjau
          dan ditangani.
        </p>
      </SectionBlock>

      <SectionBlock id="sec-10" title="10. Perubahan Kebijakan Privasi">
        <p>
          Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan
          perubahan pada aplikasi, layanan, teknologi, atau ketentuan yang berlaku.
        </p>
        <p>
          Tanggal <strong>"Terakhir diperbarui"</strong> di bagian atas dokumen akan diperbarui
          apabila terdapat perubahan.
        </p>
        <p>Kami menyarankan pengguna untuk meninjau Kebijakan Privasi ini secara berkala.</p>
      </SectionBlock>

      <SectionBlock id="sec-11" title="11. Kontak">
        <p>
          Apabila Anda memiliki pertanyaan, permintaan, atau keluhan mengenai Kebijakan Privasi
          TAGANA atau pengelolaan data pribadi, silakan hubungi:
        </p>
        <div className="mt-4 bg-[#EFF6FF] border border-primary/20 rounded-lg p-5">
          <p className="font-heading font-bold text-text-primary">TAGANA</p>
          <a
            href="mailto:taganahiliriset@gmail.com"
            className="text-primary hover:text-primary-hover font-semibold transition-colors"
          >
            taganahiliriset@gmail.com
          </a>
        </div>
      </SectionBlock>

      {/* Footer note */}
      <div className="border-t border-border pt-6 mt-6">
        <p className="font-body text-sm text-text-muted italic">
          Dengan menggunakan aplikasi TAGANA, Anda mengakui bahwa Anda telah membaca dan memahami
          Kebijakan Privasi ini.
        </p>
      </div>
    </>
  )
}

export default function PrivacyPolicy() {
  const [activeId, setActiveId] = useState(sections[0].id)

  // Intersection observer for TOC highlight
  useEffect(() => {
    const observers = []
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { rootMargin: '-20% 0px -70% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // Scroll to top on mount
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#eff6ff] via-[#f0fdff] to-[#fafafa] pt-28 pb-12 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-body text-sm text-text-muted mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Beranda</Link>
            <ChevronRight size={14} />
            <span className="text-text-primary">Kebijakan Privasi</span>
          </nav>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Kebijakan <span className="gradient-text">Privasi</span>
          </h1>
          <p className="font-body text-text-secondary">
            Terakhir diperbarui:{' '}
            <span className="font-semibold text-text-primary">15 September 2026</span>
          </p>
          <p className="font-body text-text-secondary mt-3 max-w-2xl">
            TAGANA menghargai privasi pengguna. Kebijakan Privasi ini menjelaskan bagaimana kami
            mengumpulkan, menggunakan, menyimpan, dan melindungi informasi ketika Anda menggunakan
            aplikasi TAGANA.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex gap-10">
          {/* TOC sidebar — desktop only */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <TOC activeId={activeId} />
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            <PrivacyContent />
          </main>
        </div>
      </div>

      <Footer />
    </>
  )
}

