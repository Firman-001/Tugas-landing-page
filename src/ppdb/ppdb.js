// src/components/FormPendaftaran.js
import React, { useState } from 'react';

const FormPendaftaran = () => {
  const [nama, setNama] = useState('');
  const [alamat, setAlamat] = useState('');
  const [sekolahAsal, setSekolahAsal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Data Pendaftar:\nNama: ${nama}\nAlamat: ${alamat}\nSekolah Asal: ${sekolahAsal}`);
  };

  return (
    <div className="container mx-auto mt-4 p-4" id='PPDB'>
      <div class="card-body p-5">
        <img src="https://ppdb.smktibazma.sch.id/img/tahapan-seleksi-ppdb.png" alt="" width="100%"></img>
      </div>
      <h2 className="text-7xl font-bold mb-4 text-center mt-[30px]">Informasi Pendaftaran</h2>
      <div class="card-body p-5 bg-slate-800 text-white rounded ">
        <p>
          SMK Teknologi Informasi berasrama dengan kualitas bagus tapi gratis? Emang boleeeh?🤯
          <br /><br />
          Biaya pendidikan bukan lagi hambatan buat kamu yang memiliki minat dan bakat di bidang digital! SMK TI BAZMA membuka peluang dan kesempatan ini untuk kamu!
          <br /><br />
          𝗗𝗔𝗙𝗧𝗔𝗥 𝗦𝗘𝗚𝗘𝗥𝗔!
          𝗣𝗲𝗻𝗲𝗿𝗶𝗺𝗮𝗮𝗻 𝗣𝗲𝘀𝗲𝗿𝘁𝗮 𝗗𝗶𝗱𝗶𝗸 𝗕𝗮𝗿𝘂 (𝗣𝗣𝗗𝗕) 𝗜𝘀𝗹𝗮𝗺𝗶𝗰 𝗕𝗼𝗮𝗿𝗱𝗶𝗻𝗴 𝗦𝗰𝗵𝗼𝗼𝗹 𝗦𝗠𝗞 𝗧𝗜 𝗕𝗔𝗭𝗠𝗔 𝗧𝗣 𝟮𝟬𝟮𝟰/𝟮𝟬𝟮𝟱
          <br /><br />
          SMK TI BAZMA Islamic Boarding School merupakan sekolah vokasi berasrama yang fasilitas maupun operasionalnya didanai dari pengelolaan ZISWAF dan sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh masyarakat.
          <br /><br />
          Kami membuka Penerimaan Peserta Didik Baru (PPDB) Angkatan 4 Tahun Pelajaran 2024/2025. Disediakan beasiswa hingga 100%.
          <br /><br />
          Kompetensi Keahlian :<br />
          SIJA (Sistem Informatika, Jaringan &amp; Aplikasi) dengan kombinasi kurikulum berbasis asrama yang ditempuh selama 4 tahun (3 tahun pembelajaran di sekolah dan 1 tahun Praktik kerja Lapang).
          <br /><br />

          📍Persyaratan Calon Siswa :
        </p><ol>
          <li>Laki-laki Muslim dan mampu membaca Al-Qur'an dengan baik;</li>
          <li>Berasal dari keluarga tidak mampu (dibuktikan dengan SKTM dari Masjid terdekat);</li>
          <li>Lulus jenjang SMP/MTs/Sederajat pada TP 2023 atau 2024;</li>
          <li>Usia maksimal 17 tahun pada tanggal 30 Juni 2024;</li>
          <li>Sehat jasmani dan rohani (tidak buta warna, tidak merokok dan tidak mempunyai penyakit menular);</li>
          <li>Mendapat persetujuan Orangtua/Wali untuk tinggal di asrama selama masa pendidikan;</li>
          <li>Memiliki minat yang tinggi terhadap dunia digital dan teknologi informasi.</li>
        </ol>

        🔔 Upload Dokumen Pendukung :
        <ol>
          <li>Kartu Keluarga;</li>
          <li>Pas foto berwarna terbaru;</li>
          <li>SKTM dari Masjid Setempat <i><a href="https://drive.google.com/uc?export=donwload&amp;id=1YcNhyzV7zS7xfHP8SzxIg0aZS_c14_Uh" target="_blank" class="text-danger">(Download Template)</a></i>;</li>
          <li>Surat rekomendasi Kepala Sekolah/Wali Kelas/Guru SMP <i><a href="https://drive.google.com/uc?export=donwload&amp;id=1S6cwf5rDzOOWDyyZXEKEWGRFCBrawdtn" target="_blank" class="text-danger">(Download Template)</a></i>;</li>
          <li>Foto berwarna rumah yang ditempati (tampak depan, tampak samping, kamar tidur, ruang tamu, dapur, dan kamar mandi);</li>
          <li>Membuat esai/karangan bebas tentang “Peran saya sebagai pemuda di Era Digital” <i><a href="https://drive.google.com/uc?export=donwload&amp;id=1FRPRFF3OMk9ckz8obCZJDmXYuLUIu7jU" target="_blank" class="text-danger">(Download Ketentuan)</a></i>;</li>
          <li>Input nilai rapor semester 3-5.</li>
        </ol>

        ⏳Pengisian formulir dan upload berkas maksimal 31 Januari 2024 (pukul 23.59)
        <br /><br />
        <i>
          Keterbatasan dalam mengakses formulir online dapat menghubungi narahubung <b>Pak Dzikri</b> : 0812-1593-1522
          <br />
          <a class="btn btn-success px-4 me-sm-3 mt-2" href="https://wa.me/6281215931522" target="_blank">
            <i class="bi bi-whatsapp"></i>&nbsp; WhatsApp
          </a>
        </i>
        <br /><br />
        Terima Kasih,<br />
        TIM SELEKSI PPDB<br />
        SMK TI BAZMA<br />
        _____<br />
        Narahubung :<br />
        WA : 08 1111 4433 9<br />
        IG&nbsp;:&nbsp;@smktibazma<br />
        <p></p>
        <hr class="horizontal dark mb-4 mt-4"></hr>
        <div class="d-grid gap-2">
          <a href="daftar" class="btn btn-primary btn-lg">Daftar Sekarang</a>
        </div>
      </div>
    </div>
  );
};

export default FormPendaftaran;
