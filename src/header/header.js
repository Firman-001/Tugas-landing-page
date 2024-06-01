import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav className="bg-gray-800 shadow-lg ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className= "navbar logo">
            <img src="https://res.cloudinary.com/dhyq9uts4/image/upload/v1676360444/logo_v09np1.png" class="logo-image" alt="Logo SMK TI Bazma" height="100" width='200' color='wh'></img>
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8 mt-3">
              <a href="#Home" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#profil-sekolah" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Profil Sekolah</a>
              <a href="#Kemitraan" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Kemitraan</a>
              <a href="#Donasi" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Donasi</a>
              <a href="#PPDB" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">PPDB</a>
            </div>
          </div>
        </div>
      </nav>
    );
  };

}

export default Header;
