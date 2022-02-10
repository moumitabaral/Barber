import React, { useState } from 'react';
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
import Menu from './data/menu'


export default function Gallery() {
    const [items, setItems] = useState([
        {
            id: 1,
            image: 'images/1.jpg',
            category: 'Beards'
        },
        {
            id: 2,
            image: 'images/2.jpg',
            image1: 'images/5.jpg',
            category: 'Beards'
        },
        {
            id: 3,
            image: 'images/3.jpg',
            category: 'Cuts'
        },
        {
            id: 4,
            image: 'images/4.jpg',
            category: 'Mushtaches'
        },
        {
            id: 5,
            image: 'images/2.jpg',
            image1: 'images/5.jpg',
            category: 'Mushtaches'
        },

        {
            id: 6,
            image: 'images/6.jpg',
            category: 'Cuts'
        },

        {
            id: 7,
            image: 'images/7.jpg',
            category: 'Cuts'
        },

        {
            id: 8,
            image: 'images/8.jpg',
            image1: 'images/8.jpg',
            category: 'Mushtaches'
        },


    ])
    const [anotheritems, setAnotherItems] = useState([
        {
            id: 1,
            image: 'images/1.jpg',
            category: 'Beards'
        },
        {
            id: 2,
            image: 'images/2.jpg',
            image1: 'images/5.jpg',
            category: 'Beards'
        },
        {
            id: 3,
            image: 'images/3.jpg',
            category: 'Cuts'
        },
        {
            id: 4,
            image: 'images/4.jpg',
            category: 'Mushtaches'
        },
        {
            id: 5,
            image: 'images/2.jpg',
            image1: 'images/5.jpg',
            category: 'Mushtaches'
        },

        {
            id: 6,
            image: 'images/6.jpg',
            category: 'Cuts'
        },

        {
            id: 7,
            image: 'images/7.jpg',
            category: 'Cuts'
        },

        {
            id: 8,
            image: 'images/8.jpg',
            image1: 'images/8.jpg',
            category: 'Mushtaches'
        },


    ])
    let className = "nav-link text-white navLinkGal"
    const filterGal = (cat, id) => {
        let nab = document.getElementById(id)
        console.log(nab)
        className = "nav-link text-white navLinkGal" + "active"
        const updatedGal = anotheritems.filter(item => item.category === cat);
        setItems(updatedGal)
    }



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
                                    <h1 className='homeText text-white fw-bold'>Gallery</h1>
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
                            <div className="col-md-12">
                                <div className="text-center">
                                    <p className='btnLink fw-bold mb-0' style={{ color: '#BDA78A' }}>Terminbuchung</p>
                                    <h2 className='text-white' style={{ fontWeight: '900' }}>PLANEN SIE IHREN NÄCHSTEN BESUCH</h2>
                                    <p className='text-white'>Wenn Sie sich nach einem Arbeitstag gestresst fühlen, bereiten wir Ihnen gerne einen genussvollen Tag
                                        und gesunde Lösung, um Ihr Gleichgewicht wiederzufinden.</p>

                                </div>
                                <div className='mt-5'>
                                    <nav className="nav justify-content-center">
                                        <a id='all' className={`${className} actived`} aria-current="page" onClick={() => setItems(anotheritems)}>All</a>
                                        <a id='beard' className={className} onClick={() => filterGal("Beards", "#beard")}>Beards</a>
                                        <a id='cut' className={className} onClick={() => filterGal("Cuts", "#cut")}>Cuts</a>
                                        <a id='mustach' className={className} onClick={() => filterGal("Mushtaches", "#mustach")}>Mustaches</a>
                                    </nav>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-11 mx-auto">

                                <div className="row">
                                    {
                                        items.map(item => {
                                            const { image, image1, category } = item
                                            return (
                                                <div className="col-md-6 col-lg-4 my-3 gal" style={{ transition: 'all 0.3s ease' }} key={item.id}>
                                                    <div class="card border-0" style={{ backgroundColor: 'transparent' }}>
                                                        <img src={image} className="d-block mb-2 w-100" alt="..." />
                                                        

                                                        <div class="card-overlay">
                                                            <div class="card-overlay-inner">
                                                                Lorem ipsum dolor sit amet consectetur adipiscing
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card border-0" style={{ backgroundColor: 'transparent' }}>
                                                        {
                                                            image1 && <img src={image1} className="d-block w-100" alt="..." />
                                                        }

                                                        <div class="card-overlay">
                                                            <div class="card-overlay-inner">
                                                                Lorem ipsum dolor sit amet consectetur adipiscing
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
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
