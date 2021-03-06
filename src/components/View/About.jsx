import React from 'react';
import './css/About.css'
import './css/slider.css'
import Navbar from './Navbar';
import vector1 from './img/Vector1.png'
import secondsec from './img/secondsec.png'
import FifthSection from './FifthSection';
import SixthSection from './SixthSection';
import Footer from './Footer';


export default function About() {
    return (
        <div>
            <div className="header w-100 px-0 mx-0" style={{ minHeight: '500px' }}>
                {/* Navbar */}
                <Navbar />
                {/* Navbar end */}
                <div className="container-fluid px-0 mx-0">
                    {/* hero */}
                    <div className="container">

                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className='text-center'>
                                    <h1 className='homeText text-white fw-bold'>About Us</h1>


                                </div>
                            </div>
                        </div>
                    </div>

                    {/* hero end */}

                </div>
            </div>
            {/* second section */}
            <div className="">

                <div className='secondsection' style={{ position: 'relative' }}>
                    <div className="container-fluid">
                        <div className="py-md-5"></div>
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
                                        <p className='btnLink text-white mb-0'>Unsere Einf??hrung</p>
                                        <img src={vector1} alt="" />
                                        <h2 className='text-white fw-bold'>BARBER-L??SUNGEN F??R IHREN LOOK</h2>
                                        <p className='py-3 text-white'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don???t look. It has survived not only five centuries.</p>
                                        <ul className='pb-3 text-white  listt'>
                                            <li className='pb-2'>Wir sind professionelle und zertifizierte Friseure</li>
                                            <li className='pb-2'>Wir verwenden hochwertige Produkte, damit Sie perfekt aussehen</li>
                                            <li className='pb-2'>Wir k??mmern uns um die Zufriedenheit unserer Kunden</li>
                                        </ul>
                                        <button className="btn btn-sm btnLink px-3" style={{ background: '#BDA78A', color: '#222124' }} type="submit">Learn More</button>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="d-block d-lg-none text-center">
                                        <img src={secondsec} className="img-fluid mx-auto" style={{ height: '100%' }} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='py-5'></div>
                    </div>
                </div>
            </div>

            {/* end second section */}
            {/* <FourthSection /> */}
            {/* end fourth section */}
            <FifthSection />
            {/* end fifth section */}
            <SixthSection />
            {/* end sixth section */}
            <Footer />
        </div >
    );
}
