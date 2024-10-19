"use client";

import Image from "next/image";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { notFound } from "next/navigation";
import ReactHtmlParser from "react-html-parser";

const articlesData = {
  1: {
    title: "Cara Kerja Internet Secara Umum",
    content: `
    <p>Internet adalah jaringan global yang menghubungkan miliaran perangkat di seluruh dunia. Internet memungkinkan kita mengakses informasi, berkomunikasi, dan menjalankan berbagai aplikasi. Di balik layar, ada serangkaian proses kompleks yang memungkinkan semua ini terjadi. Berikut adalah penjelasan singkat tentang cara kerja internet:</p> <br>

    <h3><strong>1. Pengguna Mengirim Permintaan (Request)</strong></h3>
    <p>Saat Anda mengakses website atau aplikasi online, perangkat Anda (seperti smartphone, laptop, atau komputer) mengirimkan permintaan ke server di internet. Permintaan ini bisa berupa membuka halaman web, streaming video, atau mengunduh file.</p> <br>
    <h3><strong>2. Proses Melalui Protokol Komunikasi</strong></h3>
    <p>Untuk komunikasi ini terjadi, perangkat menggunakan protokol atau aturan komunikasi. Salah satu protokol yang paling penting adalah TCP/IP (Transmission Control Protocol/Internet Protocol). Protokol ini bertanggung jawab untuk membagi data menjadi paket-paket kecil, mengirimkannya melalui jaringan, dan memastikan paket-paket tersebut sampai dengan benar. TCP mengontrol bagaimana data dibagi menjadi paket dan bagaimana paket tersebut diatur ulang setelah sampai ke tujuan. IP bertugas memberikan alamat ke setiap perangkat yang terhubung ke internet, mirip seperti alamat rumah dalam sistem pos.</p><br>
    <h3><strong>3. Rute Data Melalui Jaringan</strong></h3>
    <p>Setelah data dibagi menjadi paket, paket-paket tersebut melewati berbagai jaringan di sepanjang rute mereka menuju server tujuan. Paket-paket ini bisa melewati banyak perangkat jaringan seperti router dan switch di sepanjang jalan, tergantung pada jalur terbaik yang tersedia. Rute yang ditempuh tidak selalu lurus; data bisa melewati berbagai jalur sebelum sampai di tujuan.</p> <br>
    <h3><strong>4. Server Merespons Permintaan</strong></h3>
    <p>Setelah permintaan sampai di server (misalnya server tempat website berada), server akan memproses permintaan tersebut. Jika Anda meminta untuk membuka halaman web, server akan mengirimkan data halaman tersebut kembali ke perangkat Anda dalam bentuk paket data.</p> <br>
    <h3><strong>5. Paket Data Sampai ke Pengguna</strong></h3>
    <p>Paket-paket data kemudian kembali melalui jaringan internet ke perangkat Anda. TCP/IP kembali bekerja untuk mengatur ulang paket-paket tersebut menjadi informasi yang dapat dibaca oleh perangkat, misalnya halaman web yang lengkap atau video yang siap ditonton.</p> <br>
    <h3><strong>6. DNS: Direktori Internet</strong></h3>
    <p>Untuk menghubungkan nama domain yang mudah diingat (seperti www.example.com) dengan alamat IP server (serangkaian angka seperti 192.168.0.1), internet menggunakan DNS (Domain Name System). DNS berfungsi seperti buku telepon yang mencocokkan nama domain dengan alamat IP server tempat website disimpan.</p> <br>
    <h3><strong>7. Protokol HTTP dan HTTPS</strong></h3>
    <p>Kebanyakan permintaan web menggunakan HTTP (HyperText Transfer Protocol) atau versi amannya, HTTPS. Protokol ini menentukan bagaimana data web ditransfer antara server dan browser Anda. HTTPS menambahkan lapisan keamanan dengan mengenkripsi data yang dikirimkan, sehingga aman dari penyadapan oleh pihak ketiga.</p> <br><br>

    <p>Secara sederhana, internet bekerja dengan mengirimkan dan menerima data dalam bentuk paket-paket kecil yang melalui berbagai jaringan hingga sampai ke tujuan. Protokol komunikasi seperti TCP/IP, DNS, dan HTTP/HTTPS memfasilitasi proses ini. Teknologi yang ada di balik internet memungkinkan kita untuk dengan mudah mengakses informasi, berkomunikasi, dan berbagi data dalam hitungan detik. Dengan memahami cara kerja internet, kita dapat lebih menghargai betapa kompleksnya teknologi yang digunakan untuk menjalankan dunia digital yang kita nikmati sehari-hari.</p>

    `,
    image: "/images/image1.png",
  },
  2: {
    title: "Definisi dan Cara Kerja HTTP dan HTTPS",
    content: `

    <h2><strong>Definisi</strong></h2><br>
    <h3><strong>HTTP (Hypertext Transfer Protocol)</strong><br>
    <p>HTTP adalah protokol yang digunakan untuk mentransfer data di web. Protokol ini mengatur bagaimana pesan dikirim dan diterima antara klien (seperti browser) dan server. HTTP bersifat stateless, yang berarti setiap permintaan dari klien ke server dianggap independen tanpa menyimpan informasi dari permintaan sebelumnya.</p><br><br>
    <h3><strong>HTTPS (Hypertext Transfer Protocol Secure)</strong></h3>
    <p>HTTPS adalah versi aman dari HTTP. Protokol ini menggunakan enkripsi untuk melindungi data yang ditransfer antara klien dan server. Dengan menggunakan HTTPS, informasi yang dikirim, seperti kata sandi atau informasi kartu kredit, dilindungi dari penyadapan dan serangan. HTTPS menggunakan protokol SSL/TLS untuk memastikan keamanan komunikasi.</p><br>

    <h2><strong>Cara Kerja</strong></h2><br>
    <h3><strong>1. Cara Kerja HTTP</strong></h3>
    <ul>
      <li><strong>- Permintaan (Request)</strong>: Ketika pengguna memasukkan URL ke dalam browser, browser mengirimkan permintaan HTTP ke server. Permintaan ini dapat berupa GET, POST, PUT, DELETE, dan lain-lain, tergantung pada tindakan yang diinginkan.<br></li>
      <li><strong>- Respon (Response)</strong>: Server menerima permintaan dan mengirimkan kembali respon HTTP. Respon ini berisi status permintaan (seperti 200 OK atau 404 Not Found) dan data yang diminta, seperti halaman web.<br></li>
      <li><strong>- Stateless</strong>: Setiap permintaan independen, sehingga server tidak menyimpan informasi tentang permintaan sebelumnya.<br></li>
    </ul> <br>

    <h3><strong>2. Cara Kerja HTTPS</strong></h3>
    <ul>
      <li><strong>- Enkripsi</strong>: Saat pengguna mengakses situs web yang menggunakan HTTPS, browser melakukan koneksi yang aman dengan server menggunakan SSL/TLS. Ini melibatkan proses handshake untuk membuat kunci enkripsi.<br></li>
      <li><strong>- Permintaan dan Respon</strong>: Setelah koneksi aman terbentuk, permintaan dan respon HTTP dikirim dalam bentuk terenkripsi. Ini berarti bahwa data yang ditransfer tidak dapat dibaca oleh pihak ketiga.<br></li>
      <li><strong>- Integritas Data</strong>: HTTPS juga memastikan bahwa data yang dikirim tidak diubah selama perjalanan. Jika data terdeteksi telah diubah, koneksi akan dianggap tidak aman.<br></li>
    </ul>

    <h3><strong>Kelebihan HTTPS</strong></h3>
    <ul>
      <li><strong>- Keamanan</strong>: Data yang ditransfer aman dari penyadapan.<br></li>
      <li><strong>- Kepercayaan</strong>: Pengguna lebih cenderung mempercayai situs yang menggunakan HTTPS, terutama saat melakukan transaksi online.<br></li>
      <li><strong>- SEO</strong>: Mesin pencari seperti Google memberikan peringkat lebih baik pada situs yang menggunakan HTTPS.<br></li>
    </ul> <br><br>

    <p>Secara sederhana, HTTP dan HTTPS adalah protokol dasar untuk komunikasi di web. Sementara HTTP mentransfer data tanpa enkripsi, HTTPS menambahkan lapisan keamanan dengan mengenkripsi data, menjadikannya pilihan yang lebih baik untuk situs web yang menangani informasi sensitif.</p>

    `,
    image: "/images/image2.PNG",
  },
  3: {
    title: "Definisi dan Cara Kerja Nama Domain",
    content: `
     <h2><strong>Definisi</strong></h2><br>
      <p><strong>Nama Domain</strong> adalah alamat yang digunakan untuk mengidentifikasi suatu situs web di internet. Nama domain berfungsi sebagai pengganti alamat IP yang sulit diingat. Sebagai contoh, alih-alih mengingat alamat IP seperti 192.168.1.1, pengguna cukup mengetikkan nama domain seperti <a href="https://www.example.com">www.example.com</a> di browser mereka. Nama domain terdiri dari dua bagian utama: <em>nama</em> dan <em>ekstensi</em> (TLD), contohnya <em>example</em> adalah nama dan <em>.com</em> adalah ekstensi.</p><br>

      <h2><strong>Cara Kerja Nama Domain</strong></h2><br>
      <p>Proses pengaksesan nama domain melibatkan beberapa langkah:</p><br>
      <ol>
          <li><strong>1. Permintaan Nama Domain:</strong> Ketika pengguna memasukkan nama domain ke dalam browser, browser akan mengirimkan permintaan ke server DNS untuk menerjemahkan nama domain menjadi alamat IP.</li>
          <li><strong>2. Resolusi DNS:</strong> Server DNS mencari dalam basis datanya untuk menemukan alamat IP yang terkait dengan nama domain yang diminta. Jika alamat IP ditemukan, server DNS akan mengembalikan alamat tersebut ke browser.</li>
          <li><strong>3. Permintaan ke Server Web:</strong> Dengan alamat IP yang diperoleh, browser kemudian mengirimkan permintaan HTTP ke server web untuk mengakses konten situs.</li>
          <li><strong>4. Respon dari Server:</strong> Server menerima permintaan dan mengirimkan kembali data yang diminta, seperti halaman web, ke browser pengguna.</li>
          <li><strong>5. Menampilkan Konten:</strong> Browser menerima data dan menampilkan konten situs web kepada pengguna.</li>
      </ol>

      <h2><strong>Pentingnya Nama Domain</strong></h2><br>
      <p>Nama domain adalah komponen penting dalam pengembangan web, karena memberikan cara yang mudah diingat bagi pengguna untuk mengakses situs. Selain itu, memiliki nama domain yang baik dapat meningkatkan kredibilitas dan profesionalisme suatu bisnis.</p>
    
    `,
    image: "/images/image3.png",
  },
  4: {
    title: "Definisi dan Cara Kerja DNS",
    content: `
      <h2><strong>Definisi</strong></h2><br>
      <p><strong>Domain Name System (DNS)</strong> adalah sistem yang digunakan untuk menerjemahkan nama domain yang mudah diingat menjadi alamat IP yang digunakan oleh komputer untuk berkomunikasi di jaringan. Tanpa DNS, kita harus mengingat alamat IP numerik yang rumit, seperti 192.168.1.1, untuk mengakses situs web. DNS berfungsi seperti buku telepon yang menghubungkan nama pengguna dengan alamat IP server yang sesuai.</p><br>

      <h2><strong>Cara Kerja DNS</strong></h2><br>
      <p>Proses kerja DNS melibatkan beberapa langkah:</p>
      <ol>
        <li><strong>1. Permintaan Nama Domain:</strong> Ketika pengguna memasukkan nama domain ke dalam browser, browser akan mengirimkan permintaan ke server DNS untuk menemukan alamat IP yang terkait dengan nama domain tersebut.</li>
        <li><strong>2. Resolusi DNS:</strong> Server DNS mencari dalam basis datanya untuk menemukan alamat IP. Jika alamat IP tidak tersedia, server DNS dapat menghubungi server DNS lainnya untuk mendapatkan informasi tersebut. Proses ini dikenal sebagai resolusi DNS.</li>
        <li><strong>3. Cache DNS:</strong> Untuk mempercepat proses, hasil dari pencarian alamat IP disimpan dalam cache DNS di server dan perangkat pengguna. Ini berarti bahwa jika nama domain yang sama diminta lagi dalam waktu tertentu, server atau perangkat dapat memberikan alamat IP dari cache tanpa perlu melakukan pencarian ulang.</li>
        <li><strong>4. Pengembalian Alamat IP:</strong> Setelah menemukan alamat IP yang sesuai, server DNS mengembalikannya ke browser. Dengan alamat IP ini, browser dapat mengirimkan permintaan ke server yang sesuai untuk mengakses konten situs web.</li>
        <li><strong>5. Menampilkan Konten:</strong> Browser menerima data dari server dan menampilkan halaman web kepada pengguna.</li>
      </ol>

      <h2><strong>Pentingnya DNS</strong></h2><br>
      <p>DNS sangat penting dalam infrastruktur internet karena:</p>
      <ul>
        <li><strong>1. Mudahkan Akses:</strong> DNS memungkinkan pengguna untuk mengakses situs web menggunakan nama yang mudah diingat daripada menghafal alamat IP.</li>
        <li><strong>2. Efisiensi:</strong> Proses caching membantu mempercepat akses ke situs web yang sering dikunjungi.</li>
        <li><strong>3. Fleksibilitas:</strong> Jika alamat IP server berubah, administrator dapat memperbarui DNS tanpa mengubah nama domain, menjaga aksesibilitas situs web.</li>
      </ul> <br><br>

      <p>Secara keseluruhan, DNS adalah komponen krusial dalam pengalaman pengguna di internet, memungkinkan navigasi yang lebih mudah dan cepat ke berbagai situs web tanpa kerumitan alamat IP.</p>
    `,
    image: "/images/image4.png",
  },
  5: {
    title: "Definisi dan Cara Kerja Hosting",
    content: `
      <h2><strong>Definisi</strong></h2><br>
      <p><strong>Hosting</strong> adalah layanan yang memungkinkan individu atau organisasi untuk mempublikasikan situs web atau aplikasi mereka di internet. Dengan menggunakan layanan hosting, data situs web, termasuk file, gambar, dan konten lainnya, disimpan di server yang dapat diakses oleh pengguna dari seluruh dunia. Hosting adalah elemen penting dalam mengoperasikan situs web, karena tanpa hosting, situs web tidak dapat diakses secara online.</p><br>

      <h2><strong>Cara Kerja Hosting</strong></h2><br>
      <p>Proses kerja hosting melibatkan beberapa langkah berikut:</p>
      <ol>
        <li><strong>1. Pendaftaran Nama Domain:</strong> Sebelum memulai layanan hosting, pengguna perlu mendaftarkan nama domain yang akan menjadi alamat situs web. Nama domain adalah identitas unik yang digunakan untuk mengakses situs web, seperti www.example.com.</li>
        <li><strong>2. Pemilihan Layanan Hosting:</strong> Setelah mendapatkan nama domain, pengguna memilih penyedia layanan hosting. Penyedia hosting menawarkan berbagai paket hosting, seperti shared hosting, VPS (Virtual Private Server), atau dedicated hosting, tergantung pada kebutuhan situs web.</li>
        <li><strong>3. Penyimpanan Data:</strong> Penyedia hosting menyimpan semua file yang terkait dengan situs web pengguna, termasuk kode sumber, database, dan media. Server hosting terhubung ke internet 24/7, memastikan bahwa situs web selalu dapat diakses oleh pengguna kapan saja.</li>
        <li><strong>4. Pengaturan Server:</strong> Penyedia hosting bertanggung jawab untuk mengelola dan mengatur server. Ini termasuk menginstal perangkat lunak yang diperlukan, mengkonfigurasi pengaturan keamanan, dan memastikan server berjalan dengan baik.</li>
        <li><strong>5. Transfer Data:</strong> Ketika pengguna mengakses situs web melalui browser, permintaan akan dikirim ke server hosting. Server akan memproses permintaan ini, mengambil data yang diperlukan, dan mengirimkan informasi kembali ke browser pengguna. Proses ini memungkinkan halaman web ditampilkan kepada pengguna.</li>
        <li><strong>6. Keamanan dan Pemeliharaan:</strong> Penyedia hosting juga biasanya menawarkan fitur keamanan, seperti perlindungan terhadap serangan DDoS, backup data, dan pemeliharaan server untuk memastikan kinerja optimal dan keamanan situs web.</li>
      </ol> <br><br>

      <h2><strong>Pentingnya Hosting</strong></h2><br>
      <p>Hosting memiliki peran krusial dalam pengoperasian situs web karena:</p>
      <ul>
        <li><strong>1. Aksesibilitas:</strong> Hosting memungkinkan situs web diakses oleh pengguna di seluruh dunia setiap saat.</li>
        <li><strong>2. Kinerja:</strong> Layanan hosting yang baik akan memastikan situs web berjalan dengan cepat dan responsif.</li>
        <li><strong>3. Keamanan:</strong> Penyedia hosting memberikan fitur keamanan untuk melindungi situs web dari ancaman online.</li>
        <li><strong>4. Dukungan Teknis:</strong> Banyak penyedia hosting menawarkan dukungan teknis untuk membantu pengguna mengatasi masalah yang mungkin terjadi.</li>
      </ul><br><br>

      <p>Secara keseluruhan, hosting adalah komponen penting yang memungkinkan situs web berfungsi dan diakses oleh pengguna di seluruh dunia. Memilih penyedia layanan hosting yang tepat sangat penting untuk kesuksesan dan keamanan situs web Anda.</p>
    `,
    image: "/images/image5.png",
  },
  6: {
    title: "Definisi dan Cara Kerja Browser",
    content: `
      <h2><strong>Definisi</strong></h2><br>
      <p><strong>Browser</strong> adalah perangkat lunak yang digunakan untuk mengakses dan menampilkan konten di internet. Browser memungkinkan pengguna untuk menjelajahi situs web, mengunduh file, dan berinteraksi dengan berbagai aplikasi web. Beberapa browser populer termasuk Google Chrome, Mozilla Firefox, Microsoft Edge, dan Safari.</p><br>

      <h2><strong>Cara Kerja Browser</strong></h2><br>
      <p>Browser bekerja melalui beberapa langkah berikut:</p>
      <ol>
        <li><strong>1. Permintaan (Request):</strong> Ketika pengguna memasukkan URL (Uniform Resource Locator) atau mengklik tautan, browser mengirimkan permintaan HTTP (Hypertext Transfer Protocol) ke server tempat situs web berada. Permintaan ini berisi informasi tentang konten yang diinginkan.</li>
        <li><strong>2. Resolusi DNS:</strong> Sebelum mengirimkan permintaan, browser perlu menerjemahkan nama domain (seperti www.example.com) menjadi alamat IP yang dapat dipahami oleh jaringan. Proses ini dilakukan oleh DNS (Domain Name System) yang mencocokkan nama domain dengan alamat IP server.</li>
        <li><strong>3. Menerima Respon:</strong> Setelah server menerima permintaan, server memprosesnya dan mengirimkan kembali respon yang berisi data yang diminta. Respon ini biasanya dalam bentuk file HTML, CSS, JavaScript, dan media lainnya.</li>
        <li><strong>4. Rendering Halaman:</strong> Setelah menerima respon, browser mulai merender halaman. Proses rendering melibatkan pengolahan file HTML untuk membangun DOM (Document Object Model), yang merupakan representasi struktur halaman. Kemudian, CSS diaplikasikan untuk menentukan tampilan dan tata letak halaman, dan JavaScript dieksekusi untuk menambahkan interaktivitas.</li>
        <li><strong>5. Menampilkan Konten:</strong> Setelah proses rendering selesai, browser menampilkan konten di layar pengguna. Pengguna dapat berinteraksi dengan halaman melalui tautan, formulir, dan elemen interaktif lainnya.</li>
        <li><strong>6. Pengelolaan Cache:</strong> Browser juga menyimpan salinan file yang diunduh dalam cache untuk mempercepat pemuatan halaman di kunjungan berikutnya. Jika halaman yang sama diminta kembali, browser dapat menggunakan file dari cache daripada mengunduh ulang dari server.</li>
      </ol><br>

      <h2><strong>Pentingnya Browser</strong></h2><br>
      <p>Browser memainkan peran kunci dalam pengalaman berselancar di internet karena:</p>
      <ul>
        <li><strong>1. Aksesibilitas:</strong> Browser memungkinkan pengguna untuk mengakses informasi dan layanan online dengan mudah.</li>
        <li><strong>2. Antarmuka Pengguna:</strong> Browser menyediakan antarmuka yang ramah pengguna untuk menjelajahi konten, memungkinkan pengguna untuk mencari informasi dengan cepat.</li>
        <li><strong>3. Keamanan:</strong> Browser modern dilengkapi dengan fitur keamanan untuk melindungi pengguna dari situs web berbahaya dan ancaman online.</li>
        <li><strong>4. Ekstensi dan Add-ons:</strong> Banyak browser mendukung ekstensi yang memungkinkan pengguna menambahkan fitur tambahan, seperti pemblokir iklan, manajer kata sandi, dan alat produktivitas lainnya.</li>
      </ul><br><br>

      <p>Secara keseluruhan, browser adalah jendela utama ke dunia digital, memfasilitasi akses informasi dan interaksi online. Memahami cara kerja browser membantu pengguna menghargai teknologi yang memungkinkan pengalaman berselancar yang cepat dan aman.</p>
    `,
    image: "/images/image6.png",
  },
};

const Article = ({ params }) => {
  const { id } = params;
  const article = articlesData[id];

  if (!article) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-5 px-32 py-12">
      <KeyboardArrowLeftRoundedIcon
        fontSize="large"
        onClick={() => window.history.back()}
        className="border-2 rounded-full hover:border-black hover:cursor-pointer"
      />
      <div className="px-12">
        <h1 className="font-bold text-5xl ">{article.title}</h1>
        <div className="border-b-2 m-2"></div>
        <Image
          src={article.image}
          width={800}
          height={800}
          alt={article.title}
        />
        <div className="text-xl text-justify p-5">
          {ReactHtmlParser(article.content)}
        </div>
      </div>
    </div>
  );
};

export default Article;
