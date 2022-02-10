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
import map from './img/map.png'


export default function BookingNow() {
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
                                    <h1 className='homeText text-white fw-bold'>Booking Now</h1>
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
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="text-center">
                                    <p className='btnLink fw-bold mb-0' style={{ color: '#BDA78A' }}>Terminbuchung</p>
                                    <h2 className='text-white' style={{ fontWeight: '900' }}>PLANEN SIE IHREN NÄCHSTEN BESUCH</h2>
                                    <p className='text-white'>Wenn Sie sich nach einem Arbeitstag gestresst fühlen, bereiten wir Ihnen gerne einen genussvollen Tag
                                        und gesunde Lösung, um Ihr Gleichgewicht wiederzufinden.</p>

                                    <div className="row py-4">
                                        <div className="col-md-4">
                                            <div className='text-center  pe-2 border-end'>
                                                <p className='btnLink fw-bold mb-0' style={{ color: '#BDA78A' }}>UNSERE POSITION</p>
                                                <p className='text-white'>9779 Woodside Drive
                                                    Granger, IN 46530</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className='text-center pe-2  border-end'>
                                                <p className='btnLink fw-bold mb-0' style={{ color: '#BDA78A' }}>UNSERE POSITION</p>
                                                <p className='text-white'>9779 Woodside Drive
                                                    Granger, IN 46530</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className='text-center  pe-2 '>
                                                <p className='btnLink fw-bold mb-0' style={{ color: '#BDA78A' }}>UNSERE POSITION</p>
                                                <p>
                                                    <span style={{ color: '#C4C4C4' }}>Mon - Sat:</span> <span className='text-white'>10AM - 7PM</span> <br />
                                                    <span style={{ color: '#C4C4C4' }}>Sun:</span> <span className='text-white'>11AM - 7PM</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>

                        <div className='row pt-5'>
                            <div className="col-md-1"></div>
                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className='Imge'>
                                            <img src={map} className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='pt-5 pt-lg-0'>
                                            <p className='text-white fw-bold btnLink'>MELDE DICH</p>
                                            <p className='text-white'>Möchten Sie Kontakt aufnehmen? Wir würden uns freuen, von Ihnen zu hören!</p>
                                            <div class="form-floating mb-3">
                                                <input type="text" style={{ backgroundColor: 'transparent', color:'white' }} class="form-control form-control-sm rounded-0" id="floatingInput" />
                                                <label for="floatingInput" className='text-white '>Your Name</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="text" style={{ backgroundColor: 'transparent', color:'white' }} class="form-control form-control-sm rounded-0" id="floatingPassword" />
                                                <label for="floatingPassword" className='text-white '>Phone Number</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="text" style={{ backgroundColor: 'transparent', color:'white' }} class="form-control form-control-sm rounded-0" id="floatingPassword" />
                                                <label for="floatingPassword" className='text-white '>Message</label>
                                            </div>
                                            <button className="btn btn-sm btnLink rounded-0 px-3" style={{ background: '#BDA78A', color: '#222124' }} type="submit">Submit</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
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
