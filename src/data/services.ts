export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faq: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: 'pendirian-pt',
    title: 'Legalitas & Pendirian Usaha',
    shortTitle: 'Pendirian Usaha',
    description:
      'Kami membantu Anda mendirikan badan usaha (PT, CV, Firma) secara legal dan sesuai regulasi terbaru, termasuk pengurusan NIB melalui OSS.',
    longDescription:
      'Memulai usaha dengan fondasi hukum yang kuat adalah investasi jangka panjang. IZINKU hadir untuk memandu Anda melalui setiap tahap pendirian badan usaha — mulai dari pemilihan bentuk entitas yang paling sesuai, penyusunan akta pendirian, hingga pengurusan seluruh perizinan yang diperlukan.\n\nTim kami berpengalaman menangani pendirian PT (Perseroan Terbatas), CV (Commanditaire Vennootschap), dan Firma untuk berbagai sektor industri. Kami juga memastikan Nomor Induk Berusaha (NIB) Anda terbit melalui sistem OSS (Online Single Submission) dengan cepat dan tanpa hambatan.',
    icon: 'building',
    benefits: [
      'Proses cepat — akta pendirian selesai dalam 7-14 hari kerja',
      'Konsultasi gratis untuk pemilihan bentuk badan usaha yang tepat',
      'Pengurusan NIB, SIUP, TDP, dan NPWP Badan sekaligus',
      'Pendampingan hingga izin usaha sepenuhnya terbit',
      'Dokumen legal yang sah dan sesuai regulasi terkini',
    ],
    process: [
      {
        step: 1,
        title: 'Konsultasi Awal',
        description:
          'Diskusi kebutuhan usaha Anda, pemilihan jenis badan hukum, dan persiapan dokumen pendukung.',
      },
      {
        step: 2,
        title: 'Penyusunan Dokumen',
        description:
          'Tim legal kami menyusun akta pendirian, anggaran dasar, dan seluruh dokumen yang diperlukan.',
      },
      {
        step: 3,
        title: 'Pengesahan & Perizinan',
        description:
          'Pengesahan akta di Kemenkumham, pendaftaran NPWP Badan, dan pengurusan NIB melalui OSS.',
      },
      {
        step: 4,
        title: 'Serah Terima',
        description:
          'Seluruh dokumen asli diserahkan kepada Anda, lengkap dengan panduan kepatuhan hukum pasca-pendirian.',
      },
    ],
    faq: [
      {
        question: 'Berapa lama proses pendirian PT dari awal hingga selesai?',
        answer:
          'Proses pendirian PT umumnya memakan waktu 7-14 hari kerja, tergantung kelengkapan dokumen dan jadwal pengesahan di Kemenkumham.',
      },
      {
        question: 'Apa saja dokumen yang harus saya siapkan?',
        answer:
          'Dokumen dasar yang diperlukan meliputi: KTP dan NPWP seluruh pendiri dan pengurus, alamat domisili usaha, serta rencana nama PT (minimal 3 pilihan nama).',
      },
      {
        question: 'Berapa modal minimum untuk mendirikan PT?',
        answer:
          'Sejak berlakunya UU Cipta Kerja, tidak ada lagi batasan minimal modal dasar untuk PT. Namun, kami menyarankan modal yang realistis sesuai skala bisnis Anda.',
      },
    ],
  },
  {
    slug: 'mou-kontrak',
    title: 'Penyusunan MoU & Kontrak Bisnis',
    shortTitle: 'MoU & Kontrak',
    description:
      'Lindungi kepentingan bisnis Anda dengan MoU dan kontrak yang disusun secara profesional oleh tim hukum berpengalaman.',
    longDescription:
      'Setiap kerja sama bisnis membutuhkan landasan hukum yang jelas. MoU (Memorandum of Understanding) dan kontrak bisnis yang disusun dengan baik akan melindungi hak dan kewajiban semua pihak, mencegah potensi sengketa, dan memberikan kepastian hukum.\n\nIZINKU menyediakan layanan penyusunan berbagai jenis dokumen perjanjian — mulai dari MoU kerja sama, kontrak distribusi, perjanjian jual beli, NDA (Non-Disclosure Agreement), hingga perjanjian kerja (PKWT/PKWTT). Setiap dokumen kami susun dengan bahasa hukum yang presisi namun tetap mudah dipahami.',
    icon: 'document',
    benefits: [
      'Dokumen disusun oleh advokat berpengalaman di bidang hukum bisnis',
      'Review & revisi tanpa batas hingga Anda puas dengan hasilnya',
      'Klausul perlindungan menyeluruh untuk meminimalkan risiko hukum',
      'Tersedia dalam versi bilingual (Indonesia - Inggris)',
      'Konsultasi mendalam sebelum penyusunan untuk memahami kebutuhan Anda',
    ],
    process: [
      {
        step: 1,
        title: 'Analisis Kebutuhan',
        description:
          'Kami mempelajari detail kerja sama, pihak-pihak yang terlibat, dan tujuan bisnis Anda.',
      },
      {
        step: 2,
        title: 'Drafting Dokumen',
        description:
          'Tim legal menyusun draft MoU/kontrak dengan klausul yang komprehensif dan sesuai hukum yang berlaku.',
      },
      {
        step: 3,
        title: 'Review & Revisi',
        description:
          'Anda mereview draft, memberikan masukan, dan kami melakukan revisi hingga dokumen final disepakati.',
      },
      {
        step: 4,
        title: 'Finalisasi & Tanda Tangan',
        description:
          'Dokumen final disiapkan untuk penandatanganan. Kami juga dapat memfasilitasi legalisasi notaris jika diperlukan.',
      },
    ],
    faq: [
      {
        question: 'Apa perbedaan antara MoU dan kontrak?',
        answer:
          'MoU adalah kesepahaman awal antar pihak yang bersifat lebih fleksibel, sedangkan kontrak adalah perjanjian mengikat secara hukum dengan konsekuensi hukum yang jelas jika dilanggar.',
      },
      {
        question: 'Berapa lama proses penyusunan kontrak?',
        answer:
          'Draft awal biasanya selesai dalam 3-5 hari kerja. Proses revisi tergantung kompleksitas dan feedback dari klien, namun umumnya seluruh proses selesai dalam 1-2 minggu.',
      },
    ],
  },
  {
    slug: 'konsultasi-hukum',
    title: 'Konsultasi Hukum & Retainer',
    shortTitle: 'Konsultasi Hukum',
    description:
      'Dapatkan pendampingan hukum berkelanjutan dengan layanan retainer bulanan yang disesuaikan dengan kebutuhan bisnis Anda.',
    longDescription:
      'Tidak semua masalah hukum bisnis membutuhkan solusi satu kali. Banyak pelaku UMKM yang memerlukan pendampingan hukum secara berkala — untuk mereview kontrak, memahami regulasi baru, atau mendapatkan second opinion atas keputusan bisnis.\n\nLayanan Konsultasi Hukum & Retainer dari IZINKU dirancang khusus untuk kebutuhan ini. Dengan biaya bulanan yang terjangkau, Anda mendapatkan akses langsung ke tim advokat kami kapan pun Anda membutuhkan. Kami menjadi perpanjangan tim legal Anda tanpa beban biaya rekrutmen.',
    icon: 'scale',
    benefits: [
      'Akses konsultasi tak terbatas selama masa retainer',
      'Respons prioritas dalam 24 jam untuk setiap pertanyaan hukum',
      'Legal check-up berkala untuk memastikan kepatuhan bisnis Anda',
      'Diskon khusus untuk layanan tambahan (pendirian usaha, drafting kontrak)',
      'Laporan ringkasan hukum bulanan untuk manajemen Anda',
    ],
    process: [
      {
        step: 1,
        title: 'Konsultasi Gratis',
        description:
          'Sesi konsultasi awal 30 menit tanpa biaya untuk memahami kebutuhan hukum bisnis Anda.',
      },
      {
        step: 2,
        title: 'Proposal Retainer',
        description:
          'Kami menyusun proposal layanan retainer yang disesuaikan dengan skala dan kebutuhan bisnis Anda.',
      },
      {
        step: 3,
        title: 'Onboarding',
        description:
          'Tim kami mempelajari bisnis Anda secara mendalam — struktur, kontrak yang ada, dan potensi risiko hukum.',
      },
      {
        step: 4,
        title: 'Pendampingan Berkelanjutan',
        description:
          'Akses konsultasi kapan saja, review dokumen rutin, dan legal update yang relevan untuk industri Anda.',
      },
    ],
    faq: [
      {
        question: 'Apa yang termasuk dalam paket retainer?',
        answer:
          'Paket retainer mencakup konsultasi hukum tak terbatas (via telepon, email, atau meeting), review hingga 5 dokumen per bulan, dan legal check-up kuartalan.',
      },
      {
        question: 'Apakah bisa konsultasi secara online?',
        answer:
          'Tentu! Kami melayani konsultasi via Zoom, Google Meet, atau WhatsApp video call. Klien kami tersebar di seluruh Indonesia.',
      },
      {
        question: 'Berapa biaya retainer bulanan?',
        answer:
          'Biaya retainer bervariasi tergantung skala bisnis dan kebutuhan. Hubungi kami untuk mendapatkan penawaran yang disesuaikan — konsultasi awal gratis.',
      },
    ],
  },
];
