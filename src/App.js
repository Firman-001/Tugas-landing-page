import './App.css';
import React from 'react';
import Header from './header/header';
import Footer  from './footer/footer';
import 'flowbite/dist/flowbite.css';
import Home from './home';
import ProfileSekolah from './profile/profileSekolah';
import FormPendaftaran from './ppdb/ppdb';

import Kemitraan from './kenmitraan/kemitraan';


class Apps extends React.Component {
  render() {
    return (
      <div className="bg-gray-100 min-h-screen">
        < Header/>
        < Home/>
        < ProfileSekolah/>
        <Kemitraan/>
        <FormPendaftaran/>
        < Footer/>
      </div>
    );
  }
}

export default Apps;
