import React from 'react';
import ImageCard from '../footer/imgCard'

const ProfileSekolah = () => {
  return (
    <div id="profil-sekolah" className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8 mt-[50px]"><a class="underline decoration-pink-500">Profil Sekolah</a></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="navbar logo">
              <img src="https://smktibazma.sch.id/static/media/main-logo-2.7b74690f86ab4e9a4743.png" class="logo-image" alt="Logo SMK TI Bazma" height="100" width='500' color='wh'></img>
            </div>
          </div>
          <div>
            <h2 className="text-lg text-gray-600 mb-4 mt-[50px] justify-center"><a className='font-semibold'>Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA)</a>
              merupakan sekolah unggulan berasrama yang diperuntukkan bagi anak-anak tidak mampu. Pembangunan sekolah, baik fasilitas maupun
              operasional didanai dari hasil pengelolaan wakaf dan sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh masyarakat.</h2>
            <p className="text-lg text-gray-600">
              Misi sekolah merupakan langkah-langkah yang akan diambil untuk mewujudkan visi yang telah ditetapkan oleh pihak sekolah.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className='bg-slate-800 text-white rounded'>
              <h2 className="text-2xl font-semibold mb-4 m-[30px] ">Visi</h2>
              <p className="text-lg m-[30px] ">
                Menjadi sekolah yang melahirkan generasi berkarakter unggul, berkepribadian Islami, mandiri, beprestasi dan menebar manfaat.
              </p>
            </div>
            <div className='bg-slate-800 text-white rounded'>
              <h2 className="text-2xl font-semibold  mb-4 m-[30px]">Misi</h2>
              <p className="text-lg m-[30px]">
                1.Menyelenggarkan Sekolah Menengah Kejuruan (SMK) yang berkualitas,
                2.Melahirkan lulusan yang berkarakter unggul siap kerja,<br></br>
                3.Mewujudkan generasi SDM yang berdaya saing global.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-[200px]">
          <div className="grid grid-cols-4 gap-4">
            <ImageCard
              image="https://smktibazma.sch.id/static/media/r_kelas.b550b814ba15f4fff81a.jpg"
              title="Card 1"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <ImageCard
              image="https://smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg"
              title="Card 2"
              text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <ImageCard
              image="https://smktibazma.sch.id/static/media/asrama.d1fa6eec69bfc5732828.jpg"
              title="Card 3"
              text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <ImageCard
              image="https://smktibazma.sch.id/static/media/lapangan.8feef39bc2c2eaa90525.jpg"
              title="Card 3"
              text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSekolah;
