import { cn } from "@/utils/mergeClassNames";
import { useState } from "react";
import Accordion from "@/components/ui/Accordion";

const postpaidFaq = [
  {
    title: "Apa yang dimaksud dengan PRIME?",
    description:
      "PRIME adalah paket terbaik dari IM3 untuk segala prioritasmu: Kuota Besar Internetan di Semua Jaringan hingga 200 GB, Nelpon ke operator lain hingga 300 menit dan Bebas Akses Aplikasi Favorit Semuanya dapat diperoleh di paket PRIME mulai Rp70.000/bulan.",
  },
  {
    title: "Apa yang baru di Prime?",
    description:
      "Ya, sekarang pelanggan PRIME bisa menikmati kemudahan pembayaran yang sesuai dengan kebutuhan pelanggan",
  },
  {
    title: "Apakah kelebihan dari PRIME?",
    description:
      "Kelebihan dari PRIME adalah: Beragam paket pilihan dengan harga terjangkau Kuota internet besar Nelpon ke semua operator Gratis akses berbagai ragam aplikasi popular Dan beragam benefit Lifestyle Prioritas Jaringan Prioritas Layanan Call Center 185 dan Gerai Indosat Ooredoo Hutchison 1X Poin Loyalty Reward IMPoin Data Rollover Diskon Layanan Roaming dan Telp SMS Internasional Berlangganan Amazon Prime Pilihan voucher atau bonus",
  },
  {
    title: "Apa itu Bebas Akses Aplikasi Favorit?",
    description:
      "Bebas Akses Aplikasi Favorit ke aplikasi Whatsapp, Wechat, Skype, Line, Zoom, Facebook, Instagram, Twitter, Youtube, Tiktok, Vidio, Amazon Prime, Shoppe, Tokopedia, Lazada, Bukalapak, Garena (Free Fire, CODM, AOV, Fantasy Town), Mobile Legends, Spotify, Joox, Google Classroom, Edu Apps, Ruangguru.",
  },
  {
    title: "Apa yang dimaksud dengan fasilitas Prioritas Jaringan?",
    description:
      "Prioritas jaringan adalah fasilitas yang diberikan kepada Pelanggan Indosat Ooredoo Hutchison PRIME yang memenuhi syarat dan ketentuan dari Indosat Ooredoo Hutchison yang memungkinkan Pelanggan untuk mendapatkan prioritas untuk layanan internet terbaik.",
  },
  {
    title: "Apakah paket Prime ini memiliki pilihan paket Kontrak?",
    description:
      "Betul, Prime tersedia juga dalam paket Prime Kontrak selain Prime Bulanan.",
  },
  {
    title: "Apa yang dimaksud dengan Prioritas Layanan?",
    description:
      "Prioritas Layanan adalah fasilitas yang diberikan kepada Pelanggan Indosat Ooredoo Hutchison PRIME yang memenuhi syarat dan ketentuan dari Indosat Ooredoo Hutchison yang memungkinkan Pelanggan mendapatkan Prioritas Layanan Call Center 185 dan Gerai Indosat Ooredoo Hutchison.",
  },
  {
    title: "Apa itu benefit 2X Reward Loyalty IMPoin?",
    description:
      "Pelanggan Indosat Ooredoo Hutchison PRIME Postpaid akan mendapatkan poin sampai dengan 2 kali lebih banyak dalam Program Loyalitas IM3 IMPoin ketika melakukan pembayaran tagihan dan melakukan pembelian paket. Hanya berlaku bagi Pelanggan PRIME-300 atau Prime 450.",
  },
];

const prabayarFaq = [
  {
    title: "Apa itu Kartu Perdana Freedom Internet?",
    description:
      "Kartu Perdana Freedom Internet adalah kartu prabayar yang dijual khusus di im3.id/shop dengan 100% kuota utama yang dapat digunakan 24 jam secara Nasional dengan berbagai nomor cantik yang tersedia untukmu.",
  },
  {
    title:
      "Apa perbedaan Kartu Perdana Freedom Internet yang dibeli melalui im3.id/shop dengan tempat Lainnya?",
    description:
      "Kartu Perdana Freedom Internet memiliki varian quota dengan harga yang kompetitif. Kartu Perdana juga dapat diterima langsung di rumahmu.",
  },
  {
    title:
      "Bagaimana cara untuk mendapatkan Kartu Perdana Freedom Internet ini?",
    description:
      "Kamu bisa mendapatkan Kartu Perdana Freedom Internet ini melalui website IM3, klik : im3.id/shop.",
  },
  {
    title: "Apakah kuota Kartu Perdana Freedom Internet ini berlaku 24 jam?",
    description:
      "Ya, kuota kartu Perdana Freedom Internet dapat digunakan 24 jam.",
  },
  {
    title:
      "Apakah jika kuota Kartu Perdana Freedom Internet ini habis akan memotong pulsa?",
    description:
      "Tidak, ketika kuota habis dan Kamu tidak berlangganan paket data lainnya maka akan berlaku ketentuan Pulsa Safe. Kamu masih bisa akses data dengan batas pemakaian wajar hingga 200MB dengan kecepatan akses data yang disesuaikan hingga 64kbps. Setelah mencapai batas pemakaian wajar, akses data akan dinonaktifkan",
  },
  {
    title:
      "Bagaimana jika kuota Kartu Perdana Freedom Internet ini habis sebelum waktunya?",
    description:
      "Kamu dapat membeli paket Freedom Internet lainnya di myIM3 atau *123#.",
  },
  {
    title:
      "Apa keuntungan pembelian Kartu Perdana Freedom Internet via Online ?",
    description:
      "Untuk setiap pembelian Kartu Perdana Freedom Internet via Online, Kamu dapat gratis telpon sepuasnya ke sesama pengguna IM3 dan Tri. Kamu juga bisa mendapatkan potongan harga Kartu Perdana atau tambahan kuota aplikasi (Social Media, Video & Streaming dan Games) selama periode promosi.",
  },
  {
    title:
      "Bagaimana cara mendapatkan gratis nelpon sepuasnya ke sesama IM3 dan Tri di Kartu Perdana Freedom Internet via Online ?",
    description:
      "Kamu cukup melakukan aktivasi Kartu Perdana dan langsung mendapatkan gratis nelpon dengan masa aktif mengikuti kuota yang berlaku dan dapat digunakan di mana saja (Nasional).",
  },
];

const tabs = [
  {
    label: "Postpaid",
    content: <Accordion content={postpaidFaq} />,
  },
  {
    label: "Prabayar",
    content: <Accordion content={prabayarFaq} />,
  },
];

const Tabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex gap-4">
        {tabs.map(({ label }, index) => (
          <button
            key={label}
            onClick={() => setTabIndex(index)}
            className={cn(
              "text-ioh-red-600 border border-ioh-red-600 bg-ioh-red-50 rounded-md px-6 py-3 transition ease-in-out duration-300 transform",
              tabIndex !== index
                ? "text-ioh-neutral-800 bg-[#fff] border-none"
                : ""
            )}
          >
            {label}
          </button>
        ))}
      </div>
      {tabs[tabIndex].content}
    </div>
  );
};

export default Tabs;
