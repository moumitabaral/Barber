import React from 'react';
import './css/Home.css'
import './css/slider.css'
import Navbar from './Navbar';
import img from './img/hero1.png'
import vector from './img/Vector.png'
import vector1 from './img/Vector1.png'
import play from './img/play.png'
import secondsec from './img/secondsec.png'
import thirdSec from './img/thirdSec.png'
import card1 from './img/card1.png'
import card2 from './img/card2.png'
import card3 from './img/card3.png'
import image3 from './img/image3.png'
import image4 from './img/image4.png'
import image17 from './img/Image17.png'
import FourthSection from './FourthSection';
import FifthSection from './FifthSection';
import SixthSection from './SixthSection';
import Footer from './Footer';


export default function Home() {
    return (
        <div>
            <div className="header w-100 px-0 mx-0" style={{ position: 'relative' }}>
                {/* Navbar */}
                <Navbar />
                {/* Navbar end */}
                <div className="container-fluid px-0 mx-0">
                    {/* hero */}
                    <div className="container">

                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className='me-0 pe-0 me-lg-5 pe-lg-5'>
                                    <p className='navLink homeText'>Männer-Styling</p>
                                    <p className='fs-2 text-white homeBanText'>HAARSTYLES FÜR MÄNNER
                                        FÜR JEDES ALTER
                                    </p>
                                    <p className='homePara'>Lorem ipsum dolor sit amet, adipisicing elit, sed
                                        do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. enim ad minim.
                                    </p>
                                    <div className='py-3'>
                                        <button className="btn btn-sm btnLink px-3" style={{ background: '#BDA78A', color: '#222124' }} type="submit">Read More</button>
                                        <img src={vector} className="px-3" alt="" srcset="" />
                                        <img src={play} alt="" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-xxl-6 px-0">
                        <div className="cssanimation sequence fadeInBottom widt d-none d-md-block" style={{ position: 'absolute', right: 0 }}>
                            <img src={img} className="img-fluid Img" alt="..." />

                        </div>
                    </div>
                    {/* hero end */}

                </div>
            </div>
            {/* second section */}
            <div className="">

                <div className='homesecondsec' style={{ position: 'relative' }}>
                    <div className="container-fluid">
                        <div className="py-5"></div>
                        <div className="container">
                            <div className="row pb-lg-5">
                                <div className="col-md-12 col-lg-6 col-xl-5 ">
                                    {/* <div className="d-block d-lg-none">
                                        <img src={secondsec} className="img-fluid mx-auto" style={{ height: '100%' }} alt="" />
                                    </div> */}
                                    <div className='widtt d-none d-lg-block' style={{ position: 'absolute', left: 0 }}>
                                        <img src={secondsec} className="img-fluid" style={{ height: '700px' }} alt="" />

                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6 ">
                                    <div className='py-5 mt-3 ps-md-5 ps-lg-3 pe-md-4'>
                                        <p className='btnLink text-white mb-0'>Unsere Einführung</p>
                                        <img src={vector1} alt="" />
                                        <h2 className='text-white fw-bold'>BARBER-LÖSUNGEN FÜR IHREN LOOK</h2>
                                        <p className='py-3 text-white'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look. It has survived not only five centuries.</p>
                                        <ul className='pb-3 text-white  listt'>
                                            <li className='pb-2'>Wir sind professionelle und zertifizierte Friseure</li>
                                            <li className='pb-2'>Wir verwenden hochwertige Produkte, damit Sie perfekt aussehen</li>
                                            <li className='pb-2'>Wir kümmern uns um die Zufriedenheit unserer Kunden</li>
                                        </ul>
                                        <button className="btn btn-sm btnLink px-3" style={{ background: '#BDA78A', color: '#222124' }} type="submit">Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='py-5'></div>
                    </div>
                </div>
            </div>

            {/* end second section */}
            {/* third section */}
            <div>
                <div className="homeThirdSec">
                    <div className="py-5"></div>
                    <div className="container pb-5">
                        <div className="row">
                            <div className="col-md-6">
                                <p className='btnLink fw-bold mb-0'>WAS WIR BIETEN</p>
                                <img src={vector1} alt="" />
                                <h2 style={{ fontWeight: '900' }}>FRISEUR DIENSTLEISTUNGEN</h2>
                            </div>
                            <div className="col-md-6">
                                <p style={{ color: '#222124', fontSize: '18px', fontWeight: '500' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                        </div>
                        <div className="row py-5">
                            <div className="col-md-4">
                                <div>
                                    <div className="card rounded-0" style={{ backgroundColor: '#E1E1E1' }} >
                                        <img src={card1} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className='card-title fw-bold text-dark'>HAARE ​​SCHNEIDEN</p>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                            <a href="#" className="card-link text-decoration-none" style={{ color: '#BDA78A', fontWeight: '700' }}>Buchen Sie jetzt</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-3 mt-md-0">
                                <div>
                                    <div className="card rounded-0" style={{ backgroundColor: '#E1E1E1' }} >
                                        <img src={card2} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className='card-title fw-bold text-dark'>RASIEREN</p>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                            <a href="#" className="card-link text-decoration-none" style={{ color: '#BDA78A', fontWeight: '700' }}>Buchen Sie jetzt</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-3 mt-md-0">
                                <div>
                                    <div className="card rounded-0" style={{ backgroundColor: '#E1E1E1' }} >
                                        <img src={card3} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className='card-title fw-bold text-dark'>HAARE ​​FÄRBEN</p>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
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
            <FourthSection />
            {/* end fourth section */}
            <FifthSection />
            {/* end fifth section */}
            <SixthSection />
            {/* end sixth section */}
            <Footer />
        </div >
    );
}
