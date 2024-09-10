import { cn } from "@/utils/mergeClassNames";
import { useState } from "react";

const tabs = [
  {
    label: "Postpaid",
    content: (
      <ul>
        <li>
          <dl>
            <dt>Apa yang dimaksud dengan PRIME?</dt>
            <dd>
              PRIME adalah paket terbaik dari IM3 untuk segala prioritasmu :
              Kuota Besar Internetan di Semua Jaringan hingga 200 GB, Nelpon ke
              operator lain hingga 300 menit dan Bebas Akses Aplikasi Favorit
              Semuanya dapat diperoleh di paket PRIME mulai Rp70.000/bulan.
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>Apa yang baru di Prime?</dt>
            <dd>
              Ya, sekarang pelanggan PRIME bisa menikmati kemudahan pembayaran
              yang sesuai dengan kebutuhan pelanggan
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>Apakah kelebihan dari PRIME?</dt>
            <dd>
              Kelebihan dari PRIME adalah: Beragam paket pilihan dengan harga
              terjangkau Kuota internet besar Nelpon ke semua operator Gratis
              akses berbagai ragam aplikasi popular Dan beragam benefit
              Lifestyle Prioritas Jaringan Prioritas Layanan Call Center 185 dan
              Gerai Indosat Ooredoo Hutchison 1X Poin Loyalty Reward IMPoin Data
              Rollover Diskon Layanan Roaming dan Telp SMS Internasional
              Berlangganan Amazon Prime Pilihan voucher atau bonus
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>Apa itu Bebas Akses Aplikasi Favorit?</dt>
            <dd>
              Bebas Akses Aplikasi Favorit ke aplikasi Whatsapp, Wechat, Skype,
              Line, Zoom, Facebook, Instagram, Twitter, Youtube, Tiktok, Vidio,
              Amazon Prime, Shoppe, Tokopedia, Lazada, Bukalapak, Garena (Free
              Fire, CODM, AOV, Fantasy Town), Mobile Legends, Spotify, Joox,
              Google Classroom, Edu Apps, Ruangguru.
            </dd>
          </dl>
        </li>
      </ul>
    ),
  },
  {
    label: "Prabayar",
    content: (
      <ul>
        <li>
          <dl>
            <dt>Apa itu Kartu Perdana Freedom Internet?</dt>
            <dd>
              Kartu Perdana Freedom Internet adalah kartu prabayar yang dijual
              khusus di im3.id/shop dengan 100% kuota utama yang dapat digunakan
              24 jam secara Nasional dengan berbagai nomor cantik yang tersedia
              untukmu.
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>
              Apa perbedaan Kartu Perdana Freedom Internet yang dibeli melalui
              im3.id/shop dengan tempat Lainnya?
            </dt>
            <dd>
              Kartu Perdana Freedom Internet memiliki varian quota dengan harga
              yang kompetitif. Kartu Perdana juga dapat diterima langsung di
              rumahmu.
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>
              Bagaimana cara untuk mendapatkan Kartu Perdana Freedom Internet
              ini?
            </dt>
            <dd>
              Kamu bisa mendapatkan Kartu Perdana Freedom Internet ini melalui
              website IM3, klik : im3.id/shop
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>
              Apakah kuota Kartu Perdana Freedom Internet ini berlaku 24 jam
            </dt>
            <dd>
              Ya, kuota kartu Perdana Freedom Internet dapat digunakan 24 jam
            </dd>
          </dl>
        </li>
      </ul>
    ),
  },
];

const Tabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="flex flex-col items-center">
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
