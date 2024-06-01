import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
    <div className="container mx-auto flex justify-between items-center text-center text-gray-300">
      <div className="flex flex-col items-start">
        <img src="https://smktibazma.sch.id/static/media/logo-smk.148a1890.png" alt="Logo SMK TI Bazma" className="h-16 mb-2" />
        <p>Jl. Raya Cikampak Cicadas RT. 001/RW 001.</p>
        <p>Kecamatan Ciampea, Kabupaten Bogor.</p>
        <p>Jawa Barat 16620</p>
      </div>
      <div className="flex flex-col items-start">
        <p>Email: <a href="mailto:info@smktibazma.sch.id" className="text-blue-500 hover:underline">info@smktibazma.sch.id</a></p>
        <p>Nomor Telepon: <a href="tel:08111144339" className="text-blue-500 hover:underline">08111144339</a></p>
      </div>
      <div className="text-sm">
        &copy; {new Date().getFullYear()} IMF. All rights reserved.
      </div>
    </div>
  </footer>
      
  
  );
};

export default Footer;
