import HomeImage from '@/assets/images/image.png'

class ServiceCard {
  slug: string
  title: string
  description: string
  img: string

  constructor(slug: string, title: string, description: string, img: string) {
    this.slug = slug
    this.title = title
    this.description = description
    this.img = img
  }
}

class ServiceType {
  slug: string
  title: string
  description: string
  benefits: Array<string>

  constructor(slug: string, title: string, description: string, benefits: Array<string>) {
    this.slug = slug
    this.title = title
    this.description = description
    this.benefits = benefits
  }
}

class ServicePage {
  slug: string
  title: string
  description: string
  benefits: Array<ServiceBenefit>
  solutions: Array<ServiceSolution>
  definition: string
  faqs: Array<Faq>
  constructor(
    slug: string,
    title: string,
    description: string,
    benefits: Array<ServiceBenefit>,
    solutions: Array<ServiceSolution>,
    definition: string,
    faqs: Array<Faq>,
  ) {
    this.slug = slug
    this.title = title
    this.description = description
    this.benefits = benefits
    this.solutions = solutions
    this.definition = definition
    this.faqs = faqs
  }
}

class ServiceBenefit {
  title: string
  description: string
  constructor(title: string, description: string) {
    this.title = title
    this.description = description
  }
}

class ServiceSolution extends ServiceBenefit {
  img: string
  constructor(title: string, description: string, img: string) {
    super(title, description)
    this.img = img
  }
}

export class Faq {
  question: string
  answer: string
  constructor(question: string, answer: string) {
    this.question = question
    this.answer = answer
  }
}

class ServiceTypePage {
  slug: string
  title: string
  description: string
  benefits: Array<ServiceSolution>
  faqs: Array<Faq>
  next: string
  prev: string
  constructor(
    slug: string,
    title: string,
    description: string,
    benefits: Array<ServiceSolution>,
    faqs: Array<Faq>,
    next: string,
    prev: string,
  ) {
    this.slug = slug
    this.title = title
    this.description = description
    this.benefits = benefits
    this.faqs = faqs
    this.next = next
    this.prev = prev
  }
}

const websiteDevelopmentPage = new ServicePage(
  'website-development',
  'Website Development',
  'Dengan bantuan tim developer yang berpengalaman, kami selalu memperhitungkan kesesuaian teknologi dengan kebutuhan masing-masing bisnis. Kami memastikan bahwa situs web yang kami bangun tidak hanya cepat, tetapi juga ramah terhadap SEO dan user-friendly.',
  [
    new ServiceBenefit(
      'Website Development',
      'Kami menciptakan kehadiran online yang kuat dan disesuaikan dengan kebutuhan industri Anda. Situs web yang kami buat akan menonjol dan sesuai dengan tujuan bisnis Anda.',
    ),
    new ServiceBenefit(
      'Migration and Upgrade',
      'Kami ahli dalam melakukan migrasi situs web ke teknologi terbaru tanpa hambatan. Kami memastikan transisi yang mulus dan meningkatkan kinerja situs web untuk memberikan pengalaman pengguna yang unggul.',
    ),
    new ServiceBenefit(
      'Website Integration Service',
      'Kami membantu meningkatkan efisiensi operasional dengan mengintegrasikan berbagai fungsi penting, seperti API pihak ketiga, gateway pembayaran, komunikasi dan chat, Single Sign-On (SSO), Layanan Cloud, dan ERP. Integrasi ini membentuk ekosistem digital yang terpadu.',
    ),
    new ServiceBenefit(
      'Website Maintenance and Support',
      'Kami menyediakan layanan pemeliharaan dan dukungan yang dirancang khusus untuk memastikan situs web Anda tetap berjalan lancar. Tim kami secara proaktif memantau, memecahkan masalah, dan mengatasi masalah teknis dengan cepat, sehingga Anda memiliki kehadiran online yang andal.',
    ),
  ],
  [
    new ServiceSolution(
      'Perencanaan Sumber Daya Perusahaan (ERP)',
      'Kami menyediakan pengembangan web untuk membantu Anda mengimplementasikan sistem ERP yang sesuai dengan kebutuhan bisnis Anda.',
      HomeImage,
    ),
    new ServiceSolution(
      'Sistem Manajemen Konten (CMS)',
      'Kami merancang dan mengembangkan CMS yang dapat disesuaikan agar Anda dapat dengan mudah mengelola konten situs web Anda.',
      HomeImage,
    ),
    new ServiceSolution(
      'Platform Penjualan Online (E-Commerce)',
      'Kami menyediakan pengembangan web untuk membantu Anda mengimplementasikan sistem ERP yang sesuai dengan kebutuhan bisnis Anda.',
      HomeImage,
    ),
    new ServiceSolution(
      'Sistem Manajemen Pembelajaran (LMS)',
      'Kami menyediakan solusi pengembangan web untuk membangun sistem LMS yang memungkinkan Anda menyampaikan dan mengelola pelatihan online.',
      HomeImage,
    ),
    new ServiceSolution(
      'API dan Integrasi Khusus',
      'Kami merancang dan mengintegrasikan API khusus sesuai kebutuhan bisnis Anda, memungkinkan integrasi yang mulus dengan berbagai platform.',
      HomeImage,
    ),
    new ServiceSolution(
      'Sistem Manajemen Acara',
      'Kami membantu Anda mengembangkan platform untuk mengelola acara dan tiket secara efisien.',
      HomeImage,
    ),
  ],
  'Layanan Website Development mencakup proses merancang, membangun, dan memelihara situs web. Melibatkan penggunaan berbagai teknologi, bahasa pemrograman, dan kerangka kerja untuk membuat situs web yang sesuai dengan kebutuhan dan tujuan bisnis Anda.',
  [
    new Faq(
      'Apa jenis situs web yang menjadi spesialisasi Diggity?',
      'Di Diggity, kami mengkhususkan diri dalam pengembangan berbagai jenis situs web, termasuk situs web perusahaan, platform e-commerce, sistem manajemen konten (CMS), dan aplikasi web kustom yang disesuaikan dengan kebutuhan spesifik Anda.',
    ),
    new Faq(
      'Bisakah Diggity mendesain ulang situs web yang sudah ada?',
      'Tentu! Tim kami yang berpengalaman dapat mendesain ulang dan memperbarui situs web Anda untuk meningkatkan tampilan, fungsionalitas, dan pengalaman pengguna secara keseluruhan.',
    ),
    new Faq(
      'Teknologi apa yang digunakan oleh tim Diggity untuk pengembangan web?',
      'Kami menggunakan berbagai teknologi dan kerangka kerja seperti HTML5, CSS3, JavaScript, React, Angular, Node.js, dan PHP. Kami memilih teknologi berdasarkan kebutuhan khusus proyek Anda.',
    ),
    new Faq(
      'Bisakah Diggity mengintegrasikan layanan pihak ketiga ke situs web saya?',
      'Ya, kami memiliki pengalaman dalam mengintegrasikan berbagai layanan pihak ketiga, API, dan plugin untuk meningkatkan fungsionalitas situs web Anda, termasuk gateway pembayaran, integrasi media sosial, dan banyak lagi.',
    ),
    new Faq(
      'Bagaimana saya bisa memulai layanan pengembangan web dengan Diggity?',
      'Sangat mudah! Anda dapat menghubungi kami melalui halaman kontak atau mengirimkan pesan melalui WhatsApp. Kami akan menjadwalkan konsultasi untuk membahas proyek Anda, memahami kebutuhan Anda, dan menyusun proposal yang sesuai dengan kebutuhan Anda.',
    ),
  ],
)

const mobileAppDevelopmentPage = new ServicePage(
  'mobile-app-development',
  'Mobile App Development',
  'Optimalkan mobilitas dan reputasi merek bisnis Anda melalui pengembangan aplikasi mobile (Android & iOS). Capai lebih banyak pelanggan dan persiapkan bisnis Anda untuk bersaing di era digital saat ini.',
  [
    new ServiceBenefit(
      'Mobile App Development',
      'Tim profesional kami siap membantu Anda menciptakan aplikasi seluler yang dirancang khusus untuk memenuhi kebutuhan dan persyaratan bisnis Anda, dengan fokus pada memberikan pengalaman pengguna yang unik dan personal.',
    ),
    new ServiceBenefit(
      'iOS and Android App Development',
      'Kami mengembangkan aplikasi seluler yang kompatibel dengan platform iOS dan Android, sehingga Anda dapat menjangkau audiens yang lebih luas di berbagai perangkat.',
    ),
    new ServiceBenefit(
      'Cross-Platform Development',
      'Kami mengembangkan aplikasi yang dapat berjalan lancar di berbagai platform, mengurangi waktu dan biaya pengembangan serta menjaga kualitas.',
    ),
    new ServiceBenefit(
      'App Maintenance and Support',
      'Kami menyediakan dukungan berkelanjutan setelah peluncuran, termasuk penanganan masalah, penerapan pembaruan, dan memastikan kelancaran operasi aplikasi seluler Anda.',
    ),
  ],
  [
    new ServiceSolution(
      'Aplikasi Keuangan dan Perbankan',
      'Kami memiliki pengalaman dalam mengembangkan aplikasi seluler untuk industri keuangan dan perbankan, membantu perusahaan menyediakan layanan perbankan digital yang aman dan mudah digunakan bagi para pengguna.',
      HomeImage,
    ),
    new ServiceSolution(
      'Pengembangan Aplikasi Seluler Enterprise',
      'Kami menyediakan layanan pengembangan aplikasi seluler khusus untuk perusahaan, membantu meningkatkan produktivitas dan efisiensi melalui solusi digital yang disesuaikan dengan kebutuhan bisnis.',
      HomeImage,
    ),
    new ServiceSolution(
      'Pengembangan Aplikasi Seluler E-Commerce',
      'Kami dapat membantu Anda mengembangkan aplikasi seluler e-commerce yang menarik dan mudah digunakan, memungkinkan pelanggan untuk menjelajahi dan berbelanja produk dengan nyaman di perangkat seluler mereka.',
      HomeImage,
    ),
    new ServiceSolution(
      'Pengembangan Aplikasi Kesehatan dan Kebugaran',
      'Dengan pengalaman dalam pengembangan aplikasi kesehatan dan kebugaran, kami membantu organisasi dan profesional di industri ini untuk menyediakan solusi digital yang mendukung gaya hidup sehat dan aktif.',
      HomeImage,
    ),
    new ServiceSolution(
      'Aplikasi IoT (Internet of Things)',
      'Kami memiliki keahlian dalam mengembangkan aplikasi seluler yang terhubung dengan perangkat IoT, memungkinkan pengguna untuk mengontrol dan memantau perangkat mereka dari jarak jauh melalui aplikasi seluler.',
      HomeImage,
    ),
    new ServiceSolution(
      'Pengembangan Aplikasi Pendidikan',
      'Kami menyediakan layanan pengembangan aplikasi seluler untuk pendidikan, membantu lembaga pendidikan dan organisasi pembelajaran menyediakan platform digital yang inovatif dan interaktif bagi para siswa dan pengajar.',
      HomeImage,
    ),
  ],
  'Layanan Mobile App Development adalah proses merancang, mengembangkan, dan memelihara aplikasi untuk perangkat seluler seperti ponsel pintar dan tablet. Melibatkan pembuatan aplikasi untuk platform seperti iOS dan Android. Tim pengembang bekerja untuk membangun aplikasi yang sesuai dengan kebutuhan klien, mulai dari aplikasi konsumen hingga aplikasi bisnis.',
  [
    new Faq(
      'Apa jenis aplikasi seluler yang dikembangkan oleh Diggity?',
      'Kami memiliki keahlian dalam mengembangkan berbagai aplikasi seluler, termasuk aplikasi iOS dan Android, solusi lintas platform, dan aplikasi web progresif. Kami berpengalaman dalam berbagai industri, mulai dari e-commerce hingga layanan kesehatan dan hiburan.',
    ),
    new Faq(
      'Bagaimana Diggity memastikan keamanan aplikasi seluler?',
      'Keamanan merupakan prioritas kami. Kami menerapkan praktik terbaik industri, melakukan audit keamanan menyeluruh, dan menggunakan teknik enkripsi untuk melindungi data pengguna. Selain itu, kami terus memantau perkembangan tren keamanan terkini untuk menghadirkan perlindungan yang kuat terhadap potensi ancaman.',
    ),
    new Faq(
      'Teknologi dan kerangka pengembangan apa yang digunakan oleh Diggity?',
      'Kami memanfaatkan teknologi dan kerangka kerja mutakhir, termasuk React Native, Flutter, Swift, Kotlin, dan Xamarin. Tim pengembangan kami selalu mengikuti perkembangan terbaru untuk menghasilkan aplikasi seluler berkinerja tinggi dan kaya fitur.',
    ),
    new Faq(
      'Apa model penetapan harga Diggity untuk layanan pengembangan seluler?',
      'Harga kami disesuaikan dengan kebutuhan spesifik setiap proyek. Kami menawarkan model penetapan harga yang transparan dan kompetitif, termasuk harga tetap dan tarif per jam. Silakan hubungi kami untuk penawaran terperinci berdasarkan kebutuhan proyek Anda.',
    ),
    new Faq(
      'Bagaimana cara memulai layanan pengembangan seluler dengan Diggity?',
      'Untuk memulai, cukup hubungi kami melalui halaman kontak atau minta konsultasi. Tim kami akan segera menghubungi Anda untuk mendiskusikan proyek Anda, memberikan wawasan, dan membimbing Anda melalui langkah-langkah selanjutnya dalam mewujudkan visi aplikasi seluler Anda.',
    ),
  ],
)

const mvpDevelopmentPage = new ServicePage(
  'mvp-development',
  'Product Development',
  'Mendapatkan wawasan bisnis dari setiap ide dan konsep melalui pengembangan Minimum Viable Product (MVP). Bangun produk MVP bersama kami untuk menemukan solusi untuk setiap peluang bisnis di pasar digital saat ini.',
  [
    new ServiceBenefit(
      'Conceptualization',
      'Pada tahap awal proyek kami, kami melakukan riset pasar menyeluruh untuk menemukan kesenjangan, terlibat dalam sesi curah pendapat yang komprehensif untuk menentukan fitur dan fungsi sistem inovatif kami, sekaligus menentukan kebutuhan spesifik dari persona pengguna target kami.',
    ),
    new ServiceBenefit(
      'Prototyping and Design',
      'Selama tahap awal pengembangan produk, kami membuat prototipe untuk memvisualisasikan antarmuka pengguna dan arsitektur sistem. Dengan menggunakan umpan balik dari prototipe ini, kami mengembangkan spesifikasi desain rinci, dan kemudian menyelesaikan desain tersebut.',
    ),
    new ServiceBenefit(
      'Regulatory Compliance',
      'Tim kami memulai dengan membuat prototipe untuk antarmuka pengguna dan arsitektur sistem, menggunakan wawasan dari prototipe tersebut untuk mengembangkan spesifikasi desain terperinci secara cermat. Hal ini memastikan keselarasan dengan standar dan peraturan industri, sehingga menghasilkan desain produk yang lebih baik.',
    ),
    new ServiceBenefit(
      'Market Strategy',
      'Ini melibatkan pengenalan audiens dan persaingan, menciptakan nilai yang berbeda, dan menggunakan pemasaran dan penjualan yang efektif untuk menarik klien, yang bertujuan untuk menjadikan perusahaan sebagai pemimpin industri, beradaptasi dengan perubahan, dan mencapai pertumbuhan berkelanjutan melalui layanan pengembangan produk yang berkualitas.',
    ),
  ],
  [
    new ServiceSolution(
      'Aplikasi Manajemen Tugas',
      'Platform ini membantu Anda mengatur dan melacak tugas-tugas Anda dengan lebih efisien, memungkinkan kolaborasi tim, penjadwalan, dan pemantauan progres.',
      HomeImage,
    ),
    new ServiceSolution(
      'Pelacak Kesehatan dan Kebugaran',
      'Melalui aplikasi ini, Anda dapat memantau aktivitas fisik Anda, mengatur program latihan, dan melacak kemajuan Anda dalam mencapai tujuan kesehatan dan kebugaran Anda.',
      HomeImage,
    ),
    new ServiceSolution(
      'Platform Pembelajaran Bahasa',
      'Platform ini menyediakan berbagai sumber belajar untuk membantu Anda meningkatkan kemampuan berbahasa Anda, termasuk kelas online, latihan, dan ujian.',
      HomeImage,
    ),
    new ServiceSolution(
      'Aplikasi Pencatat Pengeluaran',
      'Dengan aplikasi ini, Anda dapat mencatat dan melacak pengeluaran Anda secara teratur, mengelompokkannya berdasarkan kategori, dan memantau anggaran keuangan Anda.',
      HomeImage,
    ),
    new ServiceSolution(
      'Platform Acara Virtual',
      'Platform ini memungkinkan Anda untuk mengadakan acara dan pertemuan secara online, termasuk konferensi, seminar, atau pertemuan bisnis, dengan fitur-fitur seperti siaran langsung, ruang obrolan, dan area pameran virtual.',
      HomeImage,
    ),
    new ServiceSolution(
      'Alat Penyunting Dokumen Kolaboratif',
      'Alat ini memfasilitasi kolaborasi dalam pengeditan dan peninjauan dokumen secara bersama-sama oleh tim Anda, memungkinkan Anda untuk bekerja secara efisien dalam proyek-proyek yang melibatkan banyak kontributor.',
      HomeImage,
    ),
  ],
  'Layanan Product Development adalah proses menciptakan, merancang, dan menyempurnakan suatu produk mulai dari konsepsi hingga peluncuran pasar. Hal ini penting bagi bisnis karena memastikan inovasi berkelanjutan, kemampuan beradaptasi terhadap kebutuhan pasar, dan pertumbuhan berkelanjutan dengan memberikan solusi yang berharga.',
  [
    new Faq(
      'Industri apa yang Diggity layani untuk pengembangan produk?',
      'Kami melayani beragam industri, termasuk namun tidak terbatas pada perawatan kesehatan, keuangan, e-commerce, dan teknologi. Tim kami dilengkapi untuk menangani berbagai domain, memastikan solusi yang disesuaikan untuk kebutuhan spesifik industri Anda.',
    ),
    new Faq(
      'Teknologi apa yang menjadi spesialisasi Diggity untuk pengembangan produk?',
      'Tim kami mahir dalam beragam teknologi, termasuk namun tidak terbatas pada Python, JavaScript, Java, React, dan banyak lagi. Kami selalu mengikuti perkembangan tren industri terkini untuk memberikan solusi mutakhir untuk produk Anda.',
    ),
    new Faq(
      'Bagaimana Diggity dapat membantu pengembangan produk?',
      'Rumah perangkat lunak kami berspesialisasi dalam pengembangan produk ujung ke ujung. Kami menawarkan layanan mulai dari pembuatan ide, pembuatan prototipe, dan desain hingga pengkodean, pengujian, dan penerapan, memastikan proses pengembangan yang lancar dan efisien.',
    ),
    new Faq(
      'Bagaimana cara memulai layanan pengembangan produk?',
      'Memulainya mudah. Cukup hubungi kami melalui halaman kontak, dan tim kami akan menjadwalkan konsultasi untuk mendiskusikan proyek Anda, tujuan, dan cara terbaik untuk mendukung kebutuhan pengembangan produk Anda.',
    ),
  ],
)

const customSoftwareDevelopmentPage = new ServicePage(
  'custom-software-development',
  'Custom Software Development',
  'Optimalkan perkembangan bisnis dengan mengembangkan platform digital yang sesuai dan cocok dengan kebutuhan perusahaan Anda. Tingkatkan efisiensi setiap langkah bisnis untuk mempermudah dan mempercepat prosesnya.',
  [
    new ServiceBenefit(
      'Prototyping and Design',
      'Selama tahap awal pengembangan produk, kami membuat prototipe untuk memvisualisasikan antarmuka pengguna dan arsitektur sistem. Dengan menggunakan umpan balik dari prototipe ini, kami mengembangkan spesifikasi desain rinci, dan kemudian menyelesaikan desain tersebut.',
    ),
    new ServiceBenefit(
      'Custom Website Development',
      'Kami menciptakan kehadiran online yang kuat dan disesuaikan dengan kebutuhan industri Anda. Situs web yang kami buat akan menonjol dan sesuai dengan tujuan bisnis Anda.',
    ),
    new ServiceBenefit(
      'Custom Mobile App Development',
      'Tim profesional kami siap membantu Anda menciptakan aplikasi seluler yang dirancang khusus untuk memenuhi kebutuhan dan persyaratan bisnis Anda, dengan fokus pada memberikan pengalaman pengguna yang unik dan personal.',
    ),
    new ServiceBenefit(
      'Maintenance and Support',
      'Kami menyediakan layanan pemeliharaan dan dukungan yang dirancang khusus untuk memastikan sistem Anda tetap berjalan lancar. Tim kami secara proaktif memantau, memecahkan masalah, dan mengatasi masalah teknis dengan cepat, sehingga Anda memiliki perangkat lunak yang andal.',
    ),
  ],
  [
    new ServiceSolution(
      'Perencanaan Sumber Daya Perusahaan (ERP)',
      'Kami menyediakan pengembangan web untuk membantu Anda mengimplementasikan sistem ERP yang sesuai dengan kebutuhan bisnis Anda.',
      HomeImage,
    ),
    new ServiceSolution(
      'Sistem Manajemen Konten (CMS)',
      'Kami merancang dan mengembangkan CMS yang dapat disesuaikan agar Anda dapat dengan mudah mengelola konten situs web Anda.',
      HomeImage,
    ),
    new ServiceSolution(
      'Platform Penjualan Online (E-Commerce)',
      'Kami membantu membangun platform e-commerce yang dapat meningkatkan kehadiran online bisnis Anda dan meningkatkan penjualan.',
      HomeImage,
    ),
    new ServiceSolution(
      'Aplikasi Keuangan dan Perbankan',
      'Kami memiliki pengalaman dalam mengembangkan aplikasi seluler untuk industri keuangan dan perbankan, membantu perusahaan menyediakan layanan perbankan digital yang aman dan mudah digunakan bagi para pengguna.',
      HomeImage,
    ),
    new ServiceSolution(
      'Pengembangan Aplikasi Kesehatan dan Kebugaran',
      'Dengan pengalaman dalam pengembangan aplikasi kesehatan dan kebugaran, kami membantu organisasi dan profesional di industri ini untuk menyediakan solusi digital yang mendukung gaya hidup sehat dan aktif.',
      HomeImage,
    ),
    new ServiceSolution(
      'Pengembangan Aplikasi Pendidikan',
      'Kami menyediakan layanan pengembangan aplikasi seluler untuk pendidikan, membantu lembaga pendidikan dan organisasi pembelajaran menyediakan platform digital yang inovatif dan interaktif bagi para siswa dan pengajar.',
      HomeImage,
    ),
  ],
  'Layanan Custom Software Development adalah proses menciptakan solusi perangkat lunak yang dibuat khusus untuk memenuhi kebutuhan bisnis tertentu. Ini melibatkan perancangan, pengkodean, pengujian, dan penerapan aplikasi perangkat lunak yang dibuat secara unik untuk organisasi atau proyek tertentu.',
  [
    new Faq(
      'Mengapa saya harus memilih pengembangan perangkat lunak khusus dibandingkan solusi siap pakai?',
      'Pengembangan perangkat lunak khusus menawarkan solusi terpersonalisasi yang sesuai dengan kebutuhan bisnis Anda, memberikan fleksibilitas, skalabilitas, dan efisiensi yang lebih besar. Tidak seperti solusi siap pakai, perangkat lunak khusus dirancang untuk beradaptasi dengan kebutuhan Anda yang terus berkembang dan dapat memberi Anda keunggulan kompetitif.',
    ),
    new Faq(
      'Berapa lama waktu yang dibutuhkan untuk mengembangkan perangkat lunak khusus?',
      'Jangka waktu pengembangan perangkat lunak khusus bervariasi tergantung pada kompleksitas dan cakupan proyek. Tim kami bekerja sama dengan klien untuk menentukan jadwal dan pencapaian yang jelas, memastikan pengiriman tepat waktu tanpa mengurangi kualitas.',
    ),
    new Faq(
      'Industri apa yang menjadi spesialisasi Diggity untuk pengembangan perangkat lunak khusus?',
      'Kami memiliki pengalaman luas dalam melayani beragam industri, termasuk namun tidak terbatas pada perawatan kesehatan, keuangan, e-commerce, pendidikan, dan manufaktur. Tim kami menyesuaikan keahliannya ke berbagai sektor, memastikan solusi yang disesuaikan untuk setiap klien.',
    ),
    new Faq(
      'Bagaimana cara memulai layanan pengembangan perangkat lunak khusus?',
      'Cukup hubungi tim kami melalui formulir kontak di situs web kami, dan kami akan menjadwalkan konsultasi gratis untuk mendiskusikan kebutuhan proyek Anda, sasaran, dan pendekatan terbaik untuk mengembangkan solusi khusus yang disesuaikan dengan kebutuhan bisnis Anda.',
    ),
  ],
)

const uiuxDesignPage = new ServicePage(
  'ui-ux-design',
  'UI/UX Design',
  'Layanan ini ditujukan bagi Anda yang menganggap komunikasi visual sebagai elemen krusial dalam menyampaikan pesan, visi, dan misi perusahaan Anda. Efektivitas pengalaman pengguna dalam menggunakan produk Anda akan memengaruhi tingkat konversi tindakan yang dilakukan oleh pengguna tersebut.',
  [
    new ServiceBenefit(
      'User Research and Analysis',
      'Melakukan riset menyeluruh dan analisis pengguna kami bertujuan untuk memahami audiens target dan kebutuhan mereka, serta mengidentifikasi area yang perlu ditingkatkan melalui analisis perilaku pengguna.',
    ),
    new ServiceBenefit(
      'Wireframing and Prototyping',
      'Mengembangkan wireframe terperinci dan prototipe interaktif, tim UI/UX bertujuan untuk memvisualisasikan alur pengguna dengan jelas.',
    ),
    new ServiceBenefit(
      'User Interface Design',
      'Dalam membuat antarmuka pengguna, kami fokus pada kejelasan visual dan intuitif, menjaga konsistensi di berbagai layar dan perangkat untuk pengalaman pengguna yang lancar.',
    ),
    new ServiceBenefit(
      'User Experience Testing',
      'Melalui pengujian kegunaan dan umpan balik pengguna, kami terus memperbaiki desain untuk meningkatkan pengalaman pengguna secara berkelanjutan.',
    ),
  ],
  [
    new ServiceSolution(
      'Desain Visual',
      'Kami menciptakan tampilan yang menarik dan estetis untuk produk Anda, memastikan kesesuaian dengan identitas merek dan preferensi pengguna.',
      HomeImage,
    ),
    new ServiceSolution(
      'Desain Responsif',
      'Kami memastikan bahwa desain yang kami buat dapat menyesuaikan diri dengan berbagai perangkat dan ukuran layar, memberikan pengalaman yang konsisten dan optimal bagi pengguna.',
      HomeImage,
    ),
    new ServiceSolution(
      'Riset Pengguna',
      'Melalui riset yang mendalam, kami memahami kebutuhan, preferensi, dan perilaku pengguna untuk mengarahkan pengembangan desain yang sesuai dengan kebutuhan mereka.',
      HomeImage,
    ),
    new ServiceSolution(
      'Desain Interaksi',
      'Kami merancang interaksi antara pengguna dan produk Anda agar intuitif, efisien, dan memikat, memperkuat pengalaman pengguna secara keseluruhan.',
      HomeImage,
    ),
    new ServiceSolution(
      'Pengujian Kegunaan',
      'Kami melakukan pengujian fungsionalitas produk secara menyeluruh untuk memastikan bahwa desain yang kami buat benar-benar bermanfaat dan mudah digunakan oleh pengguna.',
      HomeImage,
    ),
    new ServiceSolution(
      'Penyelarasan Merek',
      'Kami menyelaraskan desain dengan identitas merek Anda, memastikan konsistensi visual yang memperkuat citra merek Anda di mata pengguna.',
      HomeImage,
    ),
  ],
  'Layanan UI/UX Design mengacu pada antarmuka pengguna dan pengalaman pengguna, fokus pada pembuatan antarmuka yang visual menarik, ramah pengguna, dan intuitif. Penting untuk proyek perangkat lunak Anda karena meningkatkan kepuasan pengguna, keterlibatan, dan kegunaan secara keseluruhan, yang berkontribusi pada kesuksesan aplikasi Anda.',
  [
    new Faq(
      'Apa manfaat desain UI/UX bagi bisnis atau produk saya?',
      'Desain UI/UX yang efektif meningkatkan kredibilitas merek, meningkatkan retensi pengguna, dan memperbaiki kepuasan pelanggan. Ini juga dapat menghasilkan konversi yang lebih tinggi, mengurangi tingkat pentalan, dan meningkatkan interaksi pengguna, yang pada akhirnya berdampak pada kesuksesan bisnis Anda.',
    ),
    new Faq(
      'Bagaimana proses desain UI/UX dilakukan?',
      'Proses desain UI/UX kami mencakup penelitian, wireframing, pembuatan prototipe, desain visual, dan pengujian. Kami bekerja sama dengan klien untuk memahami visi, audiens target, dan tujuan bisnis mereka, memastikan desain sesuai dengan kebutuhan mereka.',
    ),
    new Faq(
      'Apakah Diggity menyediakan layanan desain UI/UX untuk aplikasi seluler?',
      'Ya, layanan desain UI/UX kami mencakup aplikasi web dan seluler. Kami menyesuaikan desain kami untuk mencocokkan karakteristik unik dan pengalaman pengguna berbagai platform.',
    ),
    new Faq(
      'Bagaimana saya bisa memulai dengan layanan desain UI/UX Diggity?',
      'Memulainya mudah! Hubungi kami melalui situs web kami atau langsung menghubungi tim kami. Kami akan mengatur konsultasi untuk membahas proyek Anda, tujuan, dan bagaimana layanan desain UI/UX kami dapat memberikan nilai tambah bagi bisnis Anda.',
    ),
  ],
)

const devopsSolutionPage = new ServicePage(
  'devops-solution',
  'DevOps Solutions',
  'Kami hadir untuk meningkatkan efisiensi dan keandalan proyek Anda. Bersiaplah untuk menyederhanakan pengiriman perangkat lunak Anda dengan kolaborasi bersama kami. Mari bergandengan tangan dalam menciptakan saluran yang siap menghadapi masa depan. Mulailah perjalanan DevOps Anda sekarang!',
  [
    new ServiceBenefit(
      'Custom DevOps Solutions',
      'Kami menyadari bahwa setiap bisnis memiliki kebutuhan dan tantangan yang unik. Oleh karena itu, kami menawarkan solusi DevOps yang dirancang khusus untuk memenuhi kebutuhan dan tantangan spesifik Anda. Tim kami akan berkolaborasi erat dengan Anda untuk merancang solusi yang sesuai dengan alur kerja Anda.',
    ),
    new ServiceBenefit(
      'Automated Testing Services',
      'Perkuat strategi pengujian Anda dengan layanan pengujian otomatis kami. Kami akan menerapkan kerangka kerja otomatisasi pengujian, melakukan pengujian kinerja, dan mengintegrasikan pengujian dengan lancar ke dalam saluran CI/CD Anda.',
    ),
    new ServiceBenefit(
      'Training and Consultation',
      'Pelatihan dan Konsultasi: Kami akan berdayakan tim Anda dengan pelatihan langsung dalam praktik DevOps. Para pakar kami akan memberikan konsultasi untuk menyelaraskan proses Anda dengan praktik terbaik industri, memastikan transisi yang lancar ke budaya DevOps.',
    ),
    new ServiceBenefit(
      'Security and Compliance',
      'Keamanan dan Kepatuhan: Keamanan adalah prioritas utama kami. Kami akan menerapkan praktik terbaik untuk mengamankan infrastruktur dan aplikasi Anda, serta memastikan kepatuhan terhadap standar dan peraturan industri.',
    ),
  ],
  [
    new ServiceSolution(
      'Continuous Integration (CI)',
      'Praktik yang memungkinkan pengembang untuk secara otomatis menggabungkan kode yang baru ditambahkan ke repositori bersama. Ini membantu untuk mendeteksi dan memperbaiki konflik kode lebih awal dalam siklus pengembangan.',
      HomeImage,
    ),
    new ServiceSolution(
      'Continuous Delivery (CD)',
      'Metode pengiriman perangkat lunak yang mengotomatiskan proses rilis, pengujian, dan penerapan perubahan kode ke lingkungan produksi. Ini memungkinkan pengembang untuk menerapkan perubahan ke lingkungan produksi dengan cepat dan lebih sering.',
      HomeImage,
    ),
    new ServiceSolution(
      'Infrastructure as Code (IaC)',
      'Pendekatan untuk mengelola infrastruktur IT dengan cara yang sama seperti mengelola kode sumber aplikasi. Dengan menggunakan kode, infrastruktur dapat didefinisikan, dikelola, dan disebarkan secara otomatis dan konsisten.',
      HomeImage,
    ),
    new ServiceSolution(
      'Monitoring and Logging',
      'Proses untuk mengamati dan mencatat perilaku sistem dan aplikasi. Ini memungkinkan pengembang untuk memantau kesehatan aplikasi, mendeteksi masalah, dan menganalisis kinerja secara real-time.',
      HomeImage,
    ),
    new ServiceSolution(
      'Containerization and Orchestration',
      'Containerization adalah teknologi yang memungkinkan pengemasan dan menjalankan aplikasi serta semua dependensinya ke dalam wadah yang terisolasi. Orkestrasi adalah pengelolaan dan otomatisasi penempatan, penjadwalan, dan penyebaran aplikasi kontainer.',
      HomeImage,
    ),
    new ServiceSolution(
      'Microservices Architecture',
      'Pendekatan pengembangan perangkat lunak di mana aplikasi dibangun sebagai serangkaian layanan independen yang berjalan dalam kontainer dan berkomunikasi melalui protokol jaringan standar. Ini memungkinkan skalabilitas, fleksibilitas, dan perbaikan yang lebih mudah pada aplikasi.',
      HomeImage,
    ),
  ],
  'Layanan DevOps Solutions adalah serangkaian solusi dan praktik terintegrasi yang dirancang untuk meningkatkan efisiensi, kecepatan, dan kualitas dalam siklus pengembangan dan penerapan perangkat lunak. Ini mencakup otomatisasi proses, kolaborasi tim lintas fungsional, dan integrasi antara pengembangan (development) dan operasi (operations) untuk mencapai pengiriman perangkat lunak yang lebih cepat dan andal.',
  [
    new Faq(
      'Apa yang dimaksud dengan DevOps dan bagaimana manfaatnya bagi proses pengembangan perangkat lunak saya?',
      'DevOps adalah pendekatan kolaboratif yang menggabungkan pengembangan dan operasi, bertujuan untuk mempercepat pengiriman perangkat lunak, meningkatkan kolaborasi, dan memastikan penerapan yang efisien. Ini menghasilkan peningkatan siklus pengembangan secara keseluruhan.',
    ),
    new Faq(
      'Bagaimana DevOps dapat meningkatkan keandalan aplikasi saya?',
      'Dengan menerapkan pipeline integrasi berkelanjutan dan pengiriman berkelanjutan (CI/CD), DevOps memastikan kode Anda diuji, diintegrasikan, dan diterapkan secara konsisten. Ini mengurangi kesalahan, meningkatkan kualitas kode, dan menyediakan proses yang andal dan berulang untuk merilis perangkat lunak.',
    ),
    new Faq(
      'Alat dan teknologi apa yang Diggity gunakan untuk implementasi DevOps?',
      'Kami menggunakan serangkaian alat dan teknologi berstandar industri seperti Docker, Kubernetes, Jenkins, Ansible, dan Terraform untuk mengotomatisasi dan menyederhanakan berbagai aspek siklus hidup pengembangan dan penerapan.',
    ),
    new Faq(
      'Apakah DevOps cocok untuk proyek kecil, atau hanya cocok untuk perusahaan berskala besar?',
      'Prinsip DevOps dapat diterapkan pada proyek dengan segala ukuran. Meskipun penerapannya mungkin berbeda, manfaat peningkatan kolaborasi, pengiriman yang lebih cepat, dan peningkatan keandalan sangat berharga baik untuk proyek skala kecil maupun besar.',
    ),
    new Faq(
      'Bagaimana cara memulai layanan DevOps dari Diggity?',
      'Anda dapat menghubungi tim kami melalui halaman kontak atau mengatur konsultasi gratis. Kami akan mengevaluasi kebutuhan Anda, membahas solusi potensial, dan menyusun strategi DevOps yang sesuai dengan tujuan pengembangan Anda.',
    ),
  ],
)

const systemTestingPage = new ServicePage(
  'system-testing',
  'System Testing',
  'Dengan keahlian pengujian kami, kami memastikan bahwa perangkat lunak Anda siap untuk mengatasi berbagai tantangan. Jika Anda siap untuk meningkatkan kekuatan kode Anda, mari kita bekerja sama untuk memastikan kualitasnya!',
  [
    new ServiceBenefit(
      'Test Automation Framework Development',
      'Membantu menyederhanakan proses pengujian dengan mengotomatiskan tugas-tugas pengujian berulang, menghasilkan hasil yang lebih cepat dan akurat.',
    ),
    new ServiceBenefit(
      'Security Testing and Audits',
      'Memprioritaskan keamanan perangkat lunak dengan melakukan penilaian menyeluruh untuk mengidentifikasi dan mengatasi potensi kerentanan. Ini membantu melindungi data Anda dari ancaman dunia maya dan memastikan kepercayaan pengguna.',
    ),
    new ServiceBenefit(
      'User Acceptance Testing (UAT)',
      'Memungkinkan pengguna atau pemangku kepentingan nyata untuk memvalidasi aplikasi di lingkungan dunia nyata, memastikan bahwa perangkat lunak Anda memberikan pengalaman luar biasa bagi pengguna akhir dan selaras dengan tujuan bisnis Anda.',
    ),
    new ServiceBenefit(
      'Continuous Integration/Continuous Deployment (CI/CD) Testing',
      'Mempercepat proses pengembangan dan mempertahankan stabilitas kode dengan mengintegrasikan pengujian otomatis ke dalam jalur integrasi dan penerapan berkelanjutan.',
    ),
  ],
  [
    new ServiceSolution(
      'Automated Testing',
      'Mengotomatiskan pengujian perangkat lunak untuk meningkatkan efisiensi dan akurasi. Ini melibatkan penggunaan alat dan skrip otomatis untuk menjalankan pengujian fungsional, pengujian integrasi, dan pengujian kinerja secara otomatis.',
      HomeImage,
    ),
    new ServiceSolution(
      'Functional Testing',
      'Memastikan bahwa perangkat lunak berfungsi sesuai dengan spesifikasi fungsional yang ditentukan. Ini mencakup pengujian fitur-fitur individu untuk memastikan bahwa setiap fitur berperilaku seperti yang diharapkan.',
      HomeImage,
    ),
    new ServiceSolution(
      'Performance Testing',
      'Mengevaluasi kinerja dan responsivitas perangkat lunak dalam berbagai kondisi beban kerja. Ini mencakup pengujian kecepatan, respons waktu, skalabilitas, dan efisiensi penggunaan sumber daya.',
      HomeImage,
    ),
    new ServiceSolution(
      'Security Testing',
      'Mengidentifikasi dan mengatasi kerentanan keamanan dalam perangkat lunak. Ini mencakup pengujian kerentanan, pengujian penetrasi, dan pengujian enkripsi untuk melindungi perangkat lunak dari ancaman keamanan eksternal dan internal.',
      HomeImage,
    ),
    new ServiceSolution(
      'Usability Testing',
      'Mengevaluasi seberapa mudah perangkat lunak digunakan oleh pengguna akhir. Ini mencakup pengujian antarmuka pengguna, navigasi, pemahaman, dan responsivitas untuk memastikan pengalaman pengguna yang optimal.',
      HomeImage,
    ),
    new ServiceSolution(
      'Regression Testing',
      'Memastikan bahwa perubahan yang dilakukan dalam perangkat lunak tidak mempengaruhi fungsi yang sudah ada. Ini melibatkan pengujian kembali fitur-fitur yang sudah ada setelah perubahan atau pembaruan dilakukan untuk memastikan bahwa mereka masih berfungsi dengan benar.',
      HomeImage,
    ),
  ],
  'Layanan System Testing adalah proses pengujian yang dilakukan pada sistem secara keseluruhan untuk memastikan bahwa sistem tersebut berfungsi sesuai dengan persyaratan yang ditetapkan. Ini melibatkan pengujian integrasi antara komponen-komponen sistem, fungsionalitas sistem secara keseluruhan, serta performa dan keandalan sistem dalam kondisi yang mirip dengan lingkungan produksi. Layanan ini bertujuan untuk mengidentifikasi cacat atau masalah dalam sistem sebelum dirilis ke lingkungan produksi.',
  [
    new Faq(
      'Peran apa yang dimainkan Pengujian Sistem dalam proses pengembangan perangkat lunak?',
      'Pengujian Sistem memainkan peran penting dalam memastikan kualitas dan keandalan produk perangkat lunak. Tugas mereka mencakup analisis persyaratan, perencanaan pengujian, dan implementasi strategi untuk mengidentifikasi serta mengatasi cacat, sehingga memastikan produk akhir yang kuat dan berkinerja tinggi.',
    ),
    new Faq(
      'Bagaimana mempekerjakan Pengujian Sistem bermanfaat bagi proses pengembangan perangkat lunak kami?',
      'Mempekerjakan seorang analis sistem memastikan bahwa perangkat lunak Anda menjalani pengujian yang ketat, yang menghasilkan peningkatan kualitas produk, pengurangan kerusakan, dan peningkatan kepuasan pengguna. Pendekatan proaktif ini membantu mengidentifikasi dan menyelesaikan masalah di awal siklus pengembangan, menghemat waktu dan sumber daya.',
    ),
    new Faq(
      'Jenis metodologi pengujian apa yang digunakan Pengujian Sistem Anda?',
      'Analis sistem kami berpengalaman dalam berbagai metodologi pengujian, termasuk pengujian fungsional, regresi, kinerja, dan keamanan. Mereka menyesuaikan pendekatannya sesuai dengan kebutuhan dan persyaratan spesifik setiap proyek untuk memastikan pengujian yang komprehensif dan efektif.',
    ),
    new Faq(
      'Bagaimana Anda memastikan keamanan data sensitif selama proses pengujian?',
      'Kami memperlakukan keamanan data dengan serius. Pengujian Sistem kami mematuhi protokol dan pedoman keamanan yang ketat untuk melindungi informasi sensitif selama proses pengujian. Kami juga melakukan pengujian keamanan menyeluruh untuk mengidentifikasi dan mengatasi potensi kerentanan.',
    ),
    new Faq(
      'Bagaimana kami dapat menggunakan layanan Pengujian Sistem Anda untuk proyek kami?',
      'Memulainya mudah. Cukup hubungi kami melalui halaman kontak, dan tim kami akan segera merespons untuk mendiskusikan kebutuhan proyek Anda, memberikan solusi yang disesuaikan, dan memulai proses kolaborasi dengan analis sistem kami yang terampil.',
    ),
  ],
)
const bigDataServicePage = new ServicePage(
  'big-data-services',
  'Big Data Service',
  'Optimalkan pendapatan bisnis Anda dengan keputusan yang didukung oleh data. Layanan Big Data kami memberi Anda kekuatan untuk mengekstrak wawasan yang dapat diambil tindakan, meningkatkan efisiensi operasional, dan membuat keputusan berdasarkan informasi yang mengarah pada kesuksesan jangka panjang dalam era data yang sangat penting saat ini.',
  [
    new ServiceBenefit(
      'Data Sourcing and Management',
      'Fokus pada mengumpulkan data dari berbagai sumber, menggabungkannya, dan menerapkan solusi penyimpanan yang dapat diskalakan, sambil memperhatikan kualitas data, keamanan, dan kontrol akses.',
    ),
    new ServiceBenefit(
      'Data Processing and Analysis',
      'Menggunakan teknologi mutakhir untuk memproses, menganalisis, dan mentransformasi data dengan hati-hati untuk mengungkap wawasan penting, serta merancang model dan algoritme analitik untuk mendukung keputusan bisnis.',
    ),
    new ServiceBenefit(
      'Integration and Interoperability',
      'Menyatukan data dari berbagai sumber untuk memberikan perspektif yang terpadu, serta memastikan komunikasi yang lancar antara sistem data dan aplikasi.',
    ),
    new ServiceBenefit(
      'Infrastructure Scalability and Optimization',
      'Membangun sistem yang dapat mengelola volume data yang semakin besar, meningkatkan kinerja pemrosesan data, dan menyediakan pemantauan dan pemeliharaan yang andal untuk kestabilan dan keamanan sistem.',
    ),
  ],
  [
    new ServiceSolution(
      'Data Warehousing',
      'Penyimpanan data dalam format yang dioptimalkan untuk analisis, memungkinkan akses cepat dan efisien ke data historis.',
      HomeImage,
    ),
    new ServiceSolution(
      'Predictive Analytics',
      'Menggunakan data historis untuk membangun model statistik dan machine learning yang memprediksi perilaku atau kejadian di masa depan, membantu organisasi membuat keputusan yang lebih baik.',
      HomeImage,
    ),
    new ServiceSolution(
      'Real-time Data Processing',
      'Mengelola dan menganalisis data secara instan saat itu terjadi, memungkinkan pengambilan keputusan berdasarkan informasi yang terbaru dan relevan.',
      HomeImage,
    ),
    new ServiceSolution(
      'Customer Segmentation',
      'Memecah basis data pelanggan menjadi kelompok-kelompok yang homogen berdasarkan karakteristik tertentu, seperti perilaku pembelian atau preferensi produk, untuk menyediakan layanan yang lebih tepat sasaran.',
      HomeImage,
    ),
    new ServiceSolution(
      'Fraud Detection and Prevention',
      'Menggunakan analisis data untuk mengidentifikasi pola anomali atau tanda-tanda kecurangan dalam transaksi keuangan atau perilaku pengguna, sehingga meminimalkan risiko kerugian.',
      HomeImage,
    ),
    new ServiceSolution(
      'Financial Analytics',
      'Menganalisis data keuangan untuk mendapatkan wawasan yang mendalam tentang kinerja keuangan perusahaan, memahami tren pasar, dan mengidentifikasi peluang investasi atau risiko potensial.',
      HomeImage,
    ),
  ],
  'Layanan Big Data mencakup serangkaian solusi yang bertujuan untuk mengelola, memproses, dan menganalisis data kompleks dalam jumlah besar. Ini termasuk integrasi data, analitik, pergudangan data, visualisasi, dan lainnya, yang semuanya bertujuan untuk mengekstraksi wawasan berharga dari berbagai kumpulan data.',
  [
    new Faq(
      'Apa manfaat Layanan Big Data bagi bisnis saya?',
      'Layanan Big Data membantu bisnis memanfaatkan potensi data mereka secara maksimal, mendukung pengambilan keputusan yang tepat, meningkatkan pengalaman pelanggan, dan mendorong inovasi di berbagai sektor industri.',
    ),
    new Faq(
      'Layanan spesifik apa yang Anda tawarkan di bawah Layanan Big Data?',
      'Layanan Big Data kami mencakup Integrasi Data, Analisis Big Data, Pergudangan Data, Visualisasi Data, Pemrosesan Data Real-time, Keamanan Big Data, Konsultasi Hadoop, Pembelajaran Mesin dan Integrasi AI, Solusi Berbasis Cloud, serta Tata Kelola dan Kualitas Data.',
    ),
    new Faq(
      'Industri apa yang Anda layani dengan Layanan Big Data Anda?',
      'Solusi Big Data kami dapat diterapkan di berbagai industri, termasuk keuangan, layanan kesehatan, e-commerce, manufaktur, dan banyak lagi. Layanan kami dapat disesuaikan untuk mengatasi tantangan dan mencapai tujuan spesifik dalam berbagai sektor.',
    ),
    new Faq(
      'Bagaimana cara memulai Layanan Big Data Anda?',
      'Memulainya mudah! Hubungi tim kami melalui halaman kontak atau jadwalkan konsultasi. Kami akan meninjau kebutuhan Anda, mengevaluasi lanskap data Anda, dan menawarkan solusi yang disesuaikan untuk mencapai tujuan bisnis Anda.',
    ),
  ],
)

const digitalMarketingPage = new ServicePage(
  'digital-marketing',
  'Digital Marketing',
  'Mendukung beragam jenis bisnis Anda, mulai dari skala kecil seperti bisnis rumahan dan UMKM, hingga bisnis rintisan (startup) dan perusahaan besar, dalam menerapkan strategi pemasaran digital yang efektif.',
  [
    new ServiceBenefit(
      'Test Automation Framework Development',
      'Membantu menyederhanakan proses pengujian dengan mengotomatiskan tugas-tugas pengujian berulang, menghasilkan hasil yang lebih cepat dan akurat.',
    ),
    new ServiceBenefit(
      'Security Testing and Audits',
      'Memprioritaskan keamanan perangkat lunak dengan melakukan penilaian menyeluruh untuk mengidentifikasi dan mengatasi potensi kerentanan. Ini membantu melindungi data Anda dari ancaman dunia maya dan memastikan kepercayaan pengguna.',
    ),
    new ServiceBenefit(
      'User Acceptance Testing (UAT)',
      'Memungkinkan pengguna atau pemangku kepentingan nyata untuk memvalidasi aplikasi di lingkungan dunia nyata, memastikan bahwa perangkat lunak Anda memberikan pengalaman luar biasa bagi pengguna akhir dan selaras dengan tujuan bisnis Anda.',
    ),
    new ServiceBenefit(
      'Continuous Integration/Continuous Deployment (CI/CD) Testing',
      'Mempercepat proses pengembangan dan mempertahankan stabilitas kode dengan mengintegrasikan pengujian otomatis ke dalam jalur integrasi dan penerapan berkelanjutan.',
    ),
  ],
  [
    new ServiceSolution(
      'Automated Testing',
      'Mengotomatiskan pengujian perangkat lunak untuk meningkatkan efisiensi dan akurasi. Ini melibatkan penggunaan alat dan skrip otomatis untuk menjalankan pengujian fungsional, pengujian integrasi, dan pengujian kinerja secara otomatis.',
      HomeImage,
    ),
    new ServiceSolution(
      'Functional Testing',
      'Memastikan bahwa perangkat lunak berfungsi sesuai dengan spesifikasi fungsional yang ditentukan. Ini mencakup pengujian fitur-fitur individu untuk memastikan bahwa setiap fitur berperilaku seperti yang diharapkan.',
      HomeImage,
    ),
    new ServiceSolution(
      'Performance Testing',
      'Mengevaluasi kinerja dan responsivitas perangkat lunak dalam berbagai kondisi beban kerja. Ini mencakup pengujian kecepatan, respons waktu, skalabilitas, dan efisiensi penggunaan sumber daya.',
      HomeImage,
    ),
    new ServiceSolution(
      'Security Testing',
      'Mengidentifikasi dan mengatasi kerentanan keamanan dalam perangkat lunak. Ini mencakup pengujian kerentanan, pengujian penetrasi, dan pengujian enkripsi untuk melindungi perangkat lunak dari ancaman keamanan eksternal dan internal.',
      HomeImage,
    ),
    new ServiceSolution(
      'Usability Testing',
      'Mengevaluasi seberapa mudah perangkat lunak digunakan oleh pengguna akhir. Ini mencakup pengujian antarmuka pengguna, navigasi, pemahaman, dan responsivitas untuk memastikan pengalaman pengguna yang optimal.',
      HomeImage,
    ),
    new ServiceSolution(
      'Regression Testing',
      'Memastikan bahwa perubahan yang dilakukan dalam perangkat lunak tidak mempengaruhi fungsi yang sudah ada. Ini melibatkan pengujian kembali fitur-fitur yang sudah ada setelah perubahan atau pembaruan dilakukan untuk memastikan bahwa mereka masih berfungsi dengan benar.',
      HomeImage,
    ),
  ],
  'Layanan Digital Marketing adalah strategi promosi produk, layanan, atau bisnis Anda secara online. Mencakup berbagai strategi seperti SEO, iklan PPC, pemasaran media sosial, dan konten berkualitas. Penting untuk memiliki tim pemasaran yang memahami tujuan Anda dan dapat merancang strategi yang efektif.',
  [
    new Faq(
      'Mengapa saya memerlukan pemasaran digital untuk bisnis saya?',
      'Pemasaran digital memungkinkan bisnis Anda untuk bersaing di ruang online yang kompetitif. Dengan strategi yang tepat, Anda dapat menarik pengunjung baru ke situs web Anda, yang berpotensi menjadi pelanggan baru. Ini membuka peluang pertumbuhan dan ROI yang lebih baik daripada strategi periklanan tradisional.',
    ),
    new Faq(
      'Apakah ada kontrak untuk layanan pemasaran digital Anda?',
      'Kami menawarkan kontrak enam bulan dan dua belas bulan, dengan diskon untuk periode yang lebih lama. Tidak ada kontrak bulanan karena kami butuh waktu untuk persiapan dan penelitian yang diperlukan. Setiap pelanggan kami mendapatkan proposal khusus sesuai dengan kebutuhan bisnis mereka.',
    ),
    new Faq(
      'Berapa biaya yang harus dikeluarkan untuk pemasaran digital?',
      'Biaya pemasaran digital umumnya sekitar 10-20% dari pendapatan total bisnis Anda. Kami akan membantu Anda menentukan ROI yang diharapkan dan menyediakan proposal khusus untuk bisnis Anda.',
    ),
    new Faq(
      'Apa jenis dukungan yang Diggity berikan untuk bisnis saya?',
      'Kami menyediakan dukungan personal dari tim ahli kami dan dasbor pelaporan canggih untuk memantau kampanye Anda. Kami siap memberikan saran jujur dan informasi yang Anda butuhkan.',
    ),
    new Faq(
      'Bagaimana cara memulai layanan Digital Marketing Diggity?',
      'Untuk memulai, hubungi kami melalui halaman kontak. Tim kami akan merespons untuk mendiskusikan kebutuhan pemasaran Anda, memberikan solusi yang disesuaikan, dan memulai proses kerja sama dengan digital marketer kami yang terampil.',
    ),
  ],
)

export default class Constants {
  static serviceCards: Array<ServiceCard> = [
    new ServiceCard(
      'website-development',
      'Website Development',
      'Dengan bantuan tim developer yang berpengalaman, kami selalu memperhitungkan kesesuaian teknologi dengan kebutuhan masing-masing bisnis. Kami memastikan bahwa situs web yang kami bangun tidak hanya cepat, tetapi juga ramah terhadap SEO dan user-friendly.',
      HomeImage,
    ),
    new ServiceCard(
      'mobile-app-development',
      'Mobile App Development',
      'Optimalkan mobilitas dan reputasi merek bisnis Anda melalui pengembangan aplikasi mobile (Android & iOS). Capai lebih banyak pelanggan dan persiapkan bisnis Anda untuk bersaing di era digital saat ini.',
      HomeImage,
    ),
    new ServiceCard(
      'mvp-development',
      'MVP Development',
      'Mendapatkan wawasan bisnis dari setiap ide dan konsep melalui pengembangan Minimum Viable Product (MVP). Bangun produk MVP bersama kami untuk menemukan solusi untuk setiap peluang bisnis di pasar digital saat ini.',
      HomeImage,
    ),
    new ServiceCard(
      'custom-software-development',
      'Custom Software Development',
      'Optimalkan perkembangan bisnis dengan mengembangkan platform digital yang sesuai dan cocok dengan kebutuhan perusahaan Anda. Tingkatkan efisiensi setiap langkah bisnis untuk mempermudah dan mempercepat prosesnya.',
      HomeImage,
    ),
    new ServiceCard(
      'ui-ux-design',
      'UI/UX Design',
      'Layanan ini ditujukan bagi Anda yang menganggap komunikasi visual sebagai elemen krusial dalam menyampaikan pesan, visi, dan misi perusahaan Anda. Efektivitas pengalaman pengguna dalam menggunakan produk Anda akan memengaruhi tingkat konversi tindakan yang dilakukan oleh pengguna tersebut.',
      HomeImage,
    ),
    new ServiceCard(
      'devops-solution',
      'DevOps Solution',
      'Kami hadir untuk meningkatkan efisiensi dan keandalan proyek Anda. Bersiaplah untuk menyederhanakan pengiriman perangkat lunak Anda dengan kolaborasi bersama kami. Mari bergandengan tangan dalam menciptakan saluran yang siap menghadapi masa depan. Mulailah perjalanan DevOps Anda sekarang!',
      HomeImage,
    ),
    new ServiceCard(
      'system-testing',
      'System Testing',
      'Dengan keahlian pengujian kami, kami memastikan bahwa perangkat lunak Anda siap untuk mengatasi berbagai tantangan. Jika Anda siap untuk meningkatkan kekuatan kode Anda, mari kita bekerja sama untuk memastikan kualitasnya!',
      HomeImage,
    ),
    new ServiceCard(
      'big-data-services',
      'Big Data Services',
      'Optimalkan pendapatan bisnis Anda dengan keputusan yang didukung oleh data. Layanan Big Data kami memberi Anda kekuatan untuk mengekstrak wawasan yang dapat diambil tindakan, meningkatkan efisiensi operasional, dan membuat keputusan berdasarkan informasi yang mengarah pada kesuksesan jangka panjang dalam era data yang sangat penting saat ini.',
      HomeImage,
    ),
    new ServiceCard(
      'digital-marketing',
      'Digital Marketing',
      'Mendukung beragam jenis bisnis Anda, mulai dari skala kecil seperti bisnis rumahan dan UMKM, hingga bisnis rintisan (startup) dan perusahaan besar, dalam menerapkan strategi pemasaran digital yang efektif.',
      HomeImage,
    ),
  ]

  static ServiceTypeCards: Array<ServiceType> = [
    new ServiceType(
      'project-based',
      'Project Based',
      'Tenaga kerja yang dikhususkan untuk menangani proyek Anda',
      [
        'Tim eksklusif yang hanya bekerja untuk Anda.',
        'Mengurangi biaya manajemen sumber daya manusia (SDM).',
        'Menghilangkan kebutuhan untuk mengurus proses perekrutan.',
        'Cocok untuk pengembangan platform digital yang dinamis.',
      ],
    ),
    new ServiceType(
      'dedicated-team',
      'Dedicated Team',
      'Tim ahli untuk mengembangkan platform digital bisnis perusahaan Anda.',
      [
        'Proyek disesuaikan dengan tujuan bisnis Anda.',
        'Harga dan jadwal pengerjaan yang transparan.',
        'Menawarkan garansi kualitas selama satu bulan.',
        'Ideal untuk pengembangan platform digital baru.',
      ],
    ),
    new ServiceType(
      'on-demand',
      'On Demand',
      'Tim yang siap untuk menangani segala permasalahan dan kebutuhan platform digital Anda.',
      [
        'Lebih fleksibel dalam menanggapi kebutuhan Anda.',
        'Pengerjaan didasarkan pada permintaan yang diajukan.',
        'Menawarkan biaya yang lebih terjangkau.',
        'Ideal untuk pengembangan fitur dan pemeliharaan platform.',
      ],
    ),
  ]

  static servicePages: Array<ServicePage> = [
    websiteDevelopmentPage,
    mobileAppDevelopmentPage,
    mvpDevelopmentPage,
    customSoftwareDevelopmentPage,
    uiuxDesignPage,
    devopsSolutionPage,
    systemTestingPage,
    bigDataServicePage,
    digitalMarketingPage,
  ]

  static serviceTypePage: Array<ServiceTypePage> = [
    new ServiceTypePage(
      'dedicated-team',
      'Dedicated Team',
      'Kami menawarkan akses mudah dan cepat ke talenta IT terbaik yang secara khusus didedikasikan untuk proyek digital Anda. Kami fleksibel dalam memenuhi setiap kebutuhan digitalisasi bisnis perusahaan Anda.',
      [
        new ServiceSolution(
          'Kandidat Berkualitas Tinggi',
          'Kami melakukan seleksi ketat untuk memastikan setiap kandidat yang kami rekrut memiliki kualitas yang tinggi dalam menyelesaikan tantangan digital Anda.',
          HomeImage,
        ),
        new ServiceSolution(
          'Interview Langsung',
          'Anda memiliki kesempatan untuk melakukan wawancara langsung dengan calon karyawan kami, sehingga Anda dapat memastikan bahwa mereka sesuai dengan kebutuhan digital bisnis Anda.',
          HomeImage,
        ),
        new ServiceSolution(
          'Didedikasikan untuk Proyek Anda',
          'Setiap sumber daya yang kami sediakan sepenuhnya didedikasikan untuk proyek Anda, memberi Anda fleksibilitas dalam mengatur prioritas digital bisnis Anda.',
          HomeImage,
        ),
        new ServiceSolution(
          'Profesionalisme yang Terbukti',
          'Dengan pengalaman sejak tahun 2019, kami telah dipercaya oleh berbagai perusahaan di seluruh dunia, menunjukkan dedikasi kami dalam memenuhi kebutuhan digital dengan profesionalisme yang tinggi.',
          HomeImage,
        ),
        new ServiceSolution(
          'Transparansi dalam Pembayaran',
          'Biaya yang Anda bayarkan sesuai dengan penggunaan sumber daya, dihitung berdasarkan jumlah hari kerja dan diberikan tagihan secara bulanan, sehingga Anda dapat melihat jelas apa yang Anda bayar.',
          HomeImage,
        ),
        new ServiceSolution(
          'Fleksibilitas Layanan',
          'Layanan tim yang didedikasikan memberikan Anda kebebasan untuk memilih, menyesuaikan jumlah, dan mengelola sumber daya sesuai kebutuhan bisnis perusahaan Anda.',
          HomeImage,
        ),
      ],
      [
        new Faq(
          'Apa yang dimaksud dengan model kerjasama dedicated team?',
          'Model kerjasama dedicated team adalah ketika tim pengembangan, yang terdiri dari satu atau beberapa developer, ditugaskan secara eksklusif untuk bekerja pada satu proyek tertentu dalam periode waktu yang telah ditentukan. Tim ini biasanya terdiri dari developer, tester, dan proyek manager yang bekerja sama untuk menyelesaikan proyek tersebut.',
        ),
        new Faq(
          'Apakah Diggity menyediakan layanan outsourcing?',
          'Ya, Diggity menyediakan layanan outsourcing TI dengan model kerjasama tim khusus. Untuk detail lebih lanjut, hubungi tim penjualan & pemasaran Diggity melalui tombol WhatsApp di situs web kami.',
        ),
        new Faq(
          'Bagaimana mekanisme model kerjasama dedicated team di Diggity?',
          'Mekanisme model kerjasama dedicated team di Diggity meliputi: Klien menyampaikan detail kebutuhan resource developer kepada Diggity. Diggity memberikan rekomendasi teknologi yang cocok dengan kebutuhan klien. Klien menentukan durasi atau masa kontrak tim yang didedikasikan sesuai kebutuhan. Diggity menyediakan CV kandidat kepada klien. Klien melakukan seleksi dan wawancara terhadap kandidat. Jika kandidat disetujui, dilakukan kesepakatan kontrak.',
        ),
        new Faq(
          'Berapa lama durasi kontrak untuk model kerjasama dedicated team?',
          'Durasi kontrak minimum untuk model kerjasama dedicated team di Diggity adalah 3 bulan, namun dapat diperpanjang sesuai kebutuhan klien.',
        ),
        new Faq(
          'Bagaimana metode pembayaran untuk model kerjasama dedicated team?',
          'Pembayaran untuk model kerjasama dedicated team dilakukan setiap bulan atau sesuai dengan termin yang telah disepakati sebelumnya, sesuai dengan nilai kontrak.',
        ),
        new Faq(
          'Apakah klien bisa memilih kandidat sendiri?',
          'Diggity menyediakan beberapa CV kandidat untuk seleksi klien. Klien dapat melakukan tes teknis, wawancara, dan menolak kandidat yang tidak sesuai.',
        ),
        new Faq(
          'Bagaimana jika resource yang diinginkan klien tidak tersedia?',
          'Diggity akan membantu klien dengan proses perekrutan yang memakan waktu sekitar 2-4 minggu untuk mencari kandidat yang sesuai.',
        ),
        new Faq(
          'Apa keuntungan memilih model kerjasama dedicated team di Diggity?',
          'Beberapa keuntungan memilih model kerjasama dedicated team di Diggity termasuk: Fokus dan efisiensi tim dalam menyelesaikan proyek. Klien memiliki kontrol penuh atas proyek. Tidak ada biaya tambahan untuk menambah task selama periode kontrak. Kemampuan untuk mengubah task dan prioritas sesuai kebutuhan selama periode kontrak. Dengan model kerjasama dedicated team di Diggity, Anda mendapatkan akses ke tim yang fokus dan dapat disesuaikan dengan kebutuhan proyek Anda.',
        ),
      ],
      'Project Based',
      'On Demand',
    ),
    new ServiceTypePage(
      'project-based',
      'Project Based',
      'Dengan tim profesional lebih dari 100 anggota dan kepercayaan yang telah diberikan oleh sejumlah perusahaan di Indonesia, Diggity hadir untuk memberikan bantuan dalam merancang, mendesain, dan mengembangkan platform digital yang cocok dengan kebutuhan bisnis perusahaan Anda.',
      [
        new ServiceSolution(
          'Garansi 30 Hari',
          'Anda mendapatkan jaminan 30 hari untuk layanan perbaikan, penanganan bug, dan dukungan IT lainnya setelah platform digital Anda diluncurkan bersama kami.',
          HomeImage,
        ),
        new ServiceSolution(
          'Harga Konsisten',
          'Harga layanan kami tetap stabil sepanjang proses pengembangan platform digital Anda, kecuali jika terjadi perubahan signifikan dalam alur kerja atau fitur yang telah disetujui sebelumnya.',
          HomeImage,
        ),
        new ServiceSolution(
          'Tim Profesional',
          'Tim berpengalaman dari Diggity, yang terdiri dari manajer proyek, pengembang, desainer UI/UX, ahli devops, dan quality assurance, bahkan digital marketer, akan mendampingi Anda dalam mengembangkan platform digital Anda.',
          HomeImage,
        ),
      ],
      [
        new Faq(
          'Apa itu model kerjasama project-based?',
          'Model kerjasama project-based adalah ketika perusahaan mengerjakan proyek yang ditugaskan oleh klien, dengan tanggung jawab menyelesaikan proyek sesuai dengan kualitas dan waktu yang telah disepakati bersama.',
        ),
        new Faq(
          'Bagaimana mekanisme model kerjasama project-based di Diggity?',
          'Beberapa mekanisme model kerjasama project-based di Diggity meliputi: Klien memberikan detail flow bisnis sistem dan referensi teknologi. Diggity memberikan saran teknologi jika diperlukan. Tim Diggity melakukan project quotation untuk menentukan durasi dan biaya proyek. Setelah kesepakatan harga dan timeline, tim Diggity mulai mengerjakan proyek sesuai specification document.',
        ),
        new Faq(
          'Siapa yang akan terlibat dalam pengerjaan proyek menggunakan model kerjasama project-based?',
          'Klien akan mendapatkan full team untuk pengembangan proyek sesuai dengan proposal kerjasama, termasuk developer, devops, designer, quality assurance, dan project manager.',
        ),
        new Faq(
          'Bagaimana metode pembayaran untuk model kerjasama project-based?',
          'Pembayaran proyek dibagi menjadi termin sesuai kesepakatan. Jika pembayaran tidak tepat waktu, pengerjaan proyek dapat dihentikan sementara.',
        ),
        new Faq(
          'Apakah ada garansi yang diberikan Diggity untuk model kerjasama project-based?',
          'Ya, klien mendapatkan garansi bug fixing dan maintenance selama 1 bulan setelah proyek dirilis.',
        ),
        new Faq(
          'Bagaimana jika ada perubahan workflow di tengah pengerjaan proyek?',
          'Perubahan workflow di luar specification document akan dikenakan biaya tambahan yang dijelaskan dalam proposal change request.',
        ),
        new Faq(
          'Bagaimana klien dapat mengontrol pengerjaan proyek?',
          'Klien dan Diggity menetapkan jadwal komunikasi dan menerima progress report secara teratur untuk memastikan klien selalu terinformasi mengenai kemajuan proyek.',
        ),
        new Faq(
          'Apa keuntungan memilih model kerjasama project-based di Diggity?',
          'Beberapa keuntungan memilih model kerjasama project-based di Diggity termasuk: Mendapatkan full team untuk pengembangan proyek. Timeline yang jelas dan disesuaikan dengan target bisnis klien. Harga proyek yang tetap, kecuali ada perubahan workflow. Garansi bug fixing dan maintenance selama 1 bulan setelah proyek dirilis.',
        ),
      ],
      'On Demand',
      'Dedicated Team',
    ),
    new ServiceTypePage(
      'on-demand',
      'On Demand',
      'Tidak ada platform digital yang benar-benar sempurna. Itulah mengapa Diggity hadir sebagai solusi cepat untuk meningkatkan performa platform digital perusahaan Anda. Kami siap membantu dalam menangani perbaikan bug dan penyesuaian fitur agar platform Anda dapat berjalan lebih optimal.',
      [
        new ServiceSolution(
          'Pelayanan Utama untuk Klien yang Sudah Ada',
          'Kami mengutamakan pelayanan bagi klien yang telah menjadi bagian dari  kami, untuk memastikan setiap kebutuhan dan tantangan yang muncul pada platform digital mereka diperhatikan dengan seksama. Mencakup perbaikan bug serta pengembangan fitur yang sesuai dengan kebutuhan.',
          HomeImage,
        ),
        new ServiceSolution(
          'Sumber Daya yang Disesuaikan',
          'Dengan beragam sumber daya yang tersedia, Diggity dapat menyesuaikan tim yang tepat untuk menangani setiap masalah yang dihadapi pada platform digital Anda. Kami memastikan bahwa penanganan masalah tersebut dilakukan oleh tenaga ahli yang kompeten.',
          HomeImage,
        ),
        new ServiceSolution(
          'Biaya yang Terjangkau',
          'Kami menawarkan opsi biaya yang bersahabat dengan menghitung penggunaan sumber daya sesuai dengan perkiraan waktu pengerjaan. Pembayaran dilakukan secara bulanan, memberikan keterbukaan dan kejelasan dalam pengeluaran.',
          HomeImage,
        ),
        new ServiceSolution(
          'Pengerjaan yang Fleksibel',
          'Kami memberikan kebebasan kepada Anda untuk memprioritaskan proyek berdasarkan kebutuhan bisnis Anda. Ini memastikan fleksibilitas dan efisiensi dalam penyelesaian proyek Anda sesuai dengan waktu dan prioritas yang ditetapkan.',
          HomeImage,
        ),
      ],
      [
        new Faq(
          'Apa Apa itu model kerjasama on-demand?',
          'Model kerjasama on-demand adalah ketika Diggity menyediakan jasa pengembangan perangkat lunak sesuai dengan kebutuhan klien. Dalam model ini, klien dapat memesan jasa pengembangan sesuai kebutuhan tanpa harus menentukan jangka waktu atau volume proyek tertentu.',
        ),
        new Faq(
          'Bagaimana mekanisme model kerjasama on-demand di Diggity?',
          'Beberapa mekanisme model kerjasama on-demand di Diggity adalah sebagai berikut: Klien memberikan detail tentang flow bisnis sistem atau platform yang akan dikembangkan, termasuk fitur dan maintenance. Diggity melakukan estimasi kebutuhan, termasuk timeline dan biaya. Setelah kesepakatan harga dan timeline, tim Diggity mulai mengerjakan proyek sesuai dengan specification document yang disepakati.',
        ),
        new Faq(
          'Siapa yang akan terlibat dalam pengerjaan proyek menggunakan model kerjasama on-demand?',
          'Proyek on-demand umumnya melibatkan project-manager untuk memantau pengembangan proyek, serta developer atau staf IT lainnya yang mengerjakan proyek tersebut.',
        ),
        new Faq(
          'Berapa biaya pengerjaan proyek menggunakan model kerjasama on-demand?',
          'Biaya pengerjaan proyek hanya berdasarkan waktu yang dibutuhkan oleh tim untuk menyelesaikannya, biasanya dihitung berdasarkan jam pengerjaan.',
        ),
        new Faq(
          'Apa keuntungan memilih model kerjasama on-demand di Diggity?',
          'Beberapa keuntungan memilih model kerjasama on-demand di Diggity meliputi: Biaya yang lebih murah karena dibayar berdasarkan waktu pengerjaan proyek saja. Fleksibilitas karena pengerjaan proyek disesuaikan dengan tiket yang diberikan oleh klien. Dapat disesuaikan dengan kebutuhan dan prioritas bisnis klien. Cocok untuk kebutuhan maintenance maupun pengembangan fitur platform digital.',
        ),
      ],
      'Dedicated Team',
      'Project Based',
    ),
  ]
}
