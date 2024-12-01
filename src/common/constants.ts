import HomeImage from '@/assets/images/image.png'

class ServiceCard {
  title: string
  description: string
  img: string

  constructor(title: string, description: string, img: string) {
    this.title = title
    this.description = description
    this.img = img
  }
}

class ServiceType {
  title: string
  description: string
  benefits: Array<string>

  constructor(title: string, description: string, benefits: Array<string>) {
    this.title = title
    this.description = description
    this.benefits = benefits
  }
}

export default class Constants {
  static serviceCards: Array<ServiceCard> = [
    new ServiceCard(
      'Website Development',
      'Dengan bantuan tim developer yang berpengalaman, kami selalu memperhitungkan kesesuaian teknologi dengan kebutuhan masing-masing bisnis. Kami memastikan bahwa situs web yang kami bangun tidak hanya cepat, tetapi juga ramah terhadap SEO dan user-friendly.',
      HomeImage,
    ),
    new ServiceCard(
      'Mobile App Development',
      'Optimalkan mobilitas dan reputasi merek bisnis Anda melalui pengembangan aplikasi mobile (Android & iOS). Capai lebih banyak pelanggan dan persiapkan bisnis Anda untuk bersaing di era digital saat ini.',
      HomeImage,
    ),
    new ServiceCard(
      'MVP Development',
      'Mendapatkan wawasan bisnis dari setiap ide dan konsep melalui pengembangan Minimum Viable Product (MVP). Bangun produk MVP bersama kami untuk menemukan solusi untuk setiap peluang bisnis di pasar digital saat ini.',
      HomeImage,
    ),
    new ServiceCard(
      'Custom Software Development',
      'Optimalkan perkembangan bisnis dengan mengembangkan platform digital yang sesuai dan cocok dengan kebutuhan perusahaan Anda. Tingkatkan efisiensi setiap langkah bisnis untuk mempermudah dan mempercepat prosesnya.',
      HomeImage,
    ),
    new ServiceCard(
      'UI/UX Design',
      'Layanan ini ditujukan bagi Anda yang menganggap komunikasi visual sebagai elemen krusial dalam menyampaikan pesan, visi, dan misi perusahaan Anda. Efektivitas pengalaman pengguna dalam menggunakan produk Anda akan memengaruhi tingkat konversi tindakan yang dilakukan oleh pengguna tersebut.',
      HomeImage,
    ),
    new ServiceCard(
      'DevOps Solution',
      'Kami hadir untuk meningkatkan efisiensi dan keandalan proyek Anda. Bersiaplah untuk menyederhanakan pengiriman perangkat lunak Anda dengan kolaborasi bersama kami. Mari bergandengan tangan dalam menciptakan saluran yang siap menghadapi masa depan. Mulailah perjalanan DevOps Anda sekarang!',
      HomeImage,
    ),
    new ServiceCard(
      'System Testing',
      'Dengan keahlian pengujian kami, kami memastikan bahwa perangkat lunak Anda siap untuk mengatasi berbagai tantangan. Jika Anda siap untuk meningkatkan kekuatan kode Anda, mari kita bekerja sama untuk memastikan kualitasnya!',
      HomeImage,
    ),
    new ServiceCard(
      'Big Data Services',
      'Optimalkan pendapatan bisnis Anda dengan keputusan yang didukung oleh data. Layanan Big Data kami memberi Anda kekuatan untuk mengekstrak wawasan yang dapat diambil tindakan, meningkatkan efisiensi operasional, dan membuat keputusan berdasarkan informasi yang mengarah pada kesuksesan jangka panjang dalam era data yang sangat penting saat ini.',
      HomeImage,
    ),
    new ServiceCard(
      'Digital Marketing',
      'Mendukung beragam jenis bisnis Anda, mulai dari skala kecil seperti bisnis rumahan dan UMKM, hingga bisnis rintisan (startup) dan perusahaan besar, dalam menerapkan strategi pemasaran digital yang efektif.',
      HomeImage,
    ),
  ]
  static ServiceTypeCards: Array<ServiceType> = [
    new ServiceType('Project Based', 'Tenaga kerja yang dikhususkan untuk menangani proyek Anda', [
      'Tim eksklusif yang hanya bekerja untuk Anda.',
      'Mengurangi biaya manajemen sumber daya manusia (SDM).',
      'Menghilangkan kebutuhan untuk mengurus proses perekrutan.',
      'Cocok untuk pengembangan platform digital yang dinamis.',
    ]),
    new ServiceType(
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
}
