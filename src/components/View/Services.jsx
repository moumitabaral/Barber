import React from 'react';
import './css/About.css'
import './css/slider.css'
import Navbar from './Navbar';
import vector1 from './img/Vector1.png'
import card1 from './img/card1.png'
import card2 from './img/card2.png'
import card3 from './img/card3.png'
import secondsec from './img/secondsec.png'
import FifthSection from './FifthSection';
import SixthSection from './SixthSection';
import Footer from './Footer';


export default function Services() {
    return (
        <div>
            <div className="header px-0 mx-0">
                {/* Navbar */}
                <Navbar />
                {/* Navbar end */}
                <div className="">
                    {/* hero */}
                    <div className="container">

                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className='text-center'>
                                    <h1 className='homeText text-white fw-bold'>Services</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* hero end */}

                </div>
            </div>
            {/* third section */}
            <div className=''>
                <div className="secondsection">
                    <div className="py-5"></div>
                    <div className="container pb-5">
                        <div className="row">
                            <div className="col-md-6">
                                <p className='btnLink text-white fw-bold mb-0'>WAS WIR BIETEN</p>
                                <img src={vector1} alt="" />
                                <h2 className='text-white' style={{ fontWeight: '900' }}>FRISEUR DIENSTLEISTUNGEN</h2>
                            </div>
                            <div className="col-md-6">
                                <p className='text-white' style={{ color: '#222124', fontSize: '18px', fontWeight: '500' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                        </div>
                        <div className="row py-5">
                            <div className="col-md-4">
                                <div>
                                    <div className="card rounded-0" style={{ backgroundColor: '#222124' }} >
                                        <img src={card1} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className='card-title fw-bold text-white'>HAARE ​​SCHNEIDEN</p>
                                            <p className="card-text text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                            <a href="#" className="card-link text-decoration-none" style={{ color: '#BDA78A', fontWeight: '700' }}>Buchen Sie jetzt</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-3 mt-md-0">
                                <div>
                                    <div className="card rounded-0" style={{ backgroundColor: '#222124' }} >
                                        <img src={card2} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className='card-title fw-bold text-white'>RASIEREN</p>
                                            <p className="card-text text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                            <a href="#" className="card-link text-decoration-none" style={{ color: '#BDA78A', fontWeight: '700' }}>Buchen Sie jetzt</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-3 mt-md-0">
                                <div>
                                    <div className="card rounded-0" style={{ backgroundColor: '#222124' }} >
                                        <img src={card3} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className='card-title fw-bold text-white'>HAARE ​​FÄRBEN</p>
                                            <p className="card-text text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                            <a href="#" className="card-link text-decoration-none" style={{ color: '#BDA78A', fontWeight: '700' }}>Buchen Sie jetzt</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row py-0 py-md-5">
                            <div className="col-md-4">
                                <div>
                                    <div className="card rounded-0" style={{ backgroundColor: '#222124' }} >
                                        <img src={card1} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className='card-title fw-bold text-white'>HAARE ​​SCHNEIDEN</p>
                                            <p className="card-text text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                            <a href="#" className="card-link text-decoration-none" style={{ color: '#BDA78A', fontWeight: '700' }}>Buchen Sie jetzt</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-3 mt-md-0">
                                <div>
                                    <div className="card rounded-0" style={{ backgroundColor: '#222124' }} >
                                        <img src={card2} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className='card-title fw-bold text-white'>RASIEREN</p>
                                            <p className="card-text text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                            <a href="#" className="card-link text-decoration-none" style={{ color: '#BDA78A', fontWeight: '700' }}>Buchen Sie jetzt</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-3 mt-md-0">
                                <div>
                                    <div className="card rounded-0" style={{ backgroundColor: '#222124' }} >
                                        <img src={card3} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className='card-title fw-bold text-white'>HAARE ​​FÄRBEN</p>
                                            <p className="card-text text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                            <a href="#" className="card-link text-decoration-none" style={{ color: '#BDA78A', fontWeight: '700' }}>Buchen Sie jetzt</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end third section */}
            {/* <FifthSection /> */}
            {/* end fifth section */}
            <SixthSection />
            {/* end sixth section */}
            <Footer />
        </div >
    );
}
