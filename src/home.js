import React from 'react';
import "./App.css";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen" id='Home'>
      {/* Hero Section */}
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://smktibazma.sch.id/static/media/hero-1.2803f83852406277b6cd.jpg)', }}>
        <div className="text-center text-white" >
          <div className='text  '>
            <h1 className="text-8xl font-bold pt-[480px]" >SMK TI BAZMA</h1>
            <p className="mt-4 text-lg">Merajut Asa, Menjejak & Menebar Manfaat</p>
            <a href="#Home" className="mt-8 inline-block bg-red-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-red-400">Klik Disini</a>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[70px]">
        <div class="flex items-center justify-center flex-col text-6xl mt-[30px]">
          <span class="text-green-500 font-bold font-[Futura Bk.Bt]">Islamic Boarding School</span>
          <span class="text-green-500 font-bold font-[Futura Bk.Bt] mt-[10px]">SMK TI BAZMA</span>
        </div>
        {/* <div>
          <h2 className="text-4xl mt-[50px] font-semibold mb-4 ml-[200px]">Islamic Boarding School</h2>
          <h2 className="text-4xl mt-[50px] font-semibold mb-4 ml-[200px]"> SMK TI BAZMA</h2>
        </div> */}
        <div className="col-8 justify-center">
          <p className="text-gray-600 text-xl mt-[20px] justify-center">
            Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA)
            merupakan sekolah unggulan berasrama yang diperuntukkan bagi anak-anak
            tidak mampu. Pembangunan sekolah, baik fasilitas maupun operasional
            didanai dari hasil pengelolaan wakaf dan sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh masyarakat
          </p>
          <p className="text-gray-600 text-2xl mt-[20px] mr-[20px] justify-center">
            SMK TI BAZMA menyelenggarakan program pembelajaran yang ditempuh selama 4 tahun
            dengan siswa-siswa yang berasal dari berbagai daerah di seluruh Indonesia. SMK 
            TI Bazma menyelenggarakan pendidikan dengan jurusan SIJA (Sistem Informatika, Jaringan & Aplikasi) dengan kombinasi kurikulum berbasis asrama.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
