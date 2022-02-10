import React, { useEffect } from 'react';
import './css/sixthsec.css'
import slider from './img/sliderImg.png'
import slider2 from './img/sliderImg2.png'
import slider3 from './img/sliderImg3.png'
import elipse from './img/elipse.png'

export default function SixthSection() {


    return (
        <div>
            <div className='sixthsec' style={{ backgroundColor: '#000', }}>
                <div className='py-5'></div>
                <div className="container py-3">


                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
                                <div>

                                    <span className='fs-1 fw-bold'>
                                        1
                                    </span>
                                    /3
                                </div>
                            </button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"><span className='fs-1 fw-bold'>
                                2
                            </span>
                                /3
                            </button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"><span className='fs-1 fw-bold'>
                                3
                            </span>
                                /3
                            </button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className='text-center pb-5'>
                                    <img src={slider2} alt="" />
                                    <p className='text-white mx-auto carousText'>“A very interesting experience to be shaved at this place
                                        with good quality and the right price, very pleasant thank youvery much to all the team
                                        who  support us so that it will be easier for us to check you”</p>
                                    <p className='fs-5 fw-bold text-white lh-1'>Benjamin Robert</p>
                                    <p className='text-white lh-1'>Business man</p>
                                </div>

                            </div>
                            <div class="carousel-item">
                                <div className='text-center pb-5'>
                                    <img src={slider2} alt="" />
                                    <p className='text-white mx-auto carousText'>“A very interesting experience to be shaved at this place
                                        with good quality and the right price, very pleasant thank youvery much to all the team
                                        who  support us so that it will be easier for us to check you”</p>
                                    <p className='fs-5 fw-bold text-white lh-1'>Benjamin Robert</p>
                                    <p className='text-white lh-1'>Business man</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className='text-center pb-5'>
                                    <img src={slider2} alt="" />
                                    <p className='text-white mx-auto carousText'>“A very interesting experience to be shaved at this place
                                        with good quality and the right price, very pleasant thank youvery much to all the team
                                        who  support us so that it will be easier for us to check you”</p>
                                    <p className='fs-5 fw-bold text-white lh-1'>Benjamin Robert</p>
                                    <p className='text-white lh-1'>Business man</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev d-none" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="py-5"></div>
            </div>
        </div>
    );
}
