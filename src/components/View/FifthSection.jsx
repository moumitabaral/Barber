import React from 'react';
import image17 from './img/Image17.png'
import vector1 from './img/Vector1.png'
import fifthSlider from './img/fifthSlider.png'

export default function FifthSection() {
    return (
        <div>
            {/* fifth section */}
            <div className="">

                <div className='' style={{ backgroundColor: '#222124' }}>
                    <div className="container-fluid">
                        <div className="py-5"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="row">
                                                    <div className="col-lg-6">

                                                        <div class="card border-0">

                                                            <img src={image17} className="d-block Imge w-100" alt="..." />
                                                            <div class="card-overlay">
                                                                <div class="card-overlay-inner">
                                                                    Lorem ipsum dolor sit amet consectetur adipiscing
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div class="card border-0">

                                                            <img src={fifthSlider} className="d-none d-lg-block w-100" alt="..." />
                                                            <div class="card-overlay">
                                                                <div class="card-overlay-inner">
                                                                    Lorem ipsum dolor sit amet consectetur adipiscing
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                            <div className="carousel-item">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div class="card border-0">

                                                            <img src={image17} className="d-block Imge w-100" alt="..." />
                                                            <div class="card-overlay">
                                                                <div class="card-overlay-inner">
                                                                    Lorem ipsum dolor sit amet consectetur adipiscing
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div class="card border-0">

                                                            <img src={fifthSlider} className="d-none d-lg-block w-100" alt="..." />
                                                            <div class="card-overlay">
                                                                <div class="card-overlay-inner">
                                                                    Lorem ipsum dolor sit amet consectetur adipiscing
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="carousel-item">
                <img src="..." className="d-block" alt="..." />
            </div> */}
                                        </div>
                                        <button className="carousel-control-prev control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        {/* <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button> */}
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className='py-xl-5 mt-lg-3 ps-md-5 ps-lg-3 pe-md-4'>
                                        <p className='btnLink text-white mb-0'>HOHE QUALITÄT</p>
                                        <img src={vector1} alt="" />
                                        <h2 className='text-white fw-bold'>WARUM Demir Barbier WÄHLEN</h2>
                                        <p className='py-3' style={{ color: '#BDA78A' }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look. It has survived not only five centuries.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-5"></div>
                    </div>
                </div>
            </div>
            {/* end fifth section */}
        </div>
    );
}
