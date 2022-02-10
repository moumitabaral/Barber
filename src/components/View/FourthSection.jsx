import React from 'react';
import thirdSec from './img/thirdSec.png'
import image3 from './img/image3.png'
import image4 from './img/image4.png'
import image17 from './img/Image17.png'
import vector from './img/Vector.png'
import vector1 from './img/Vector1.png'

export default function FourthSection() {
    return (
        <div>
            {/* fourth section */}
            <div className="">

                <div className='homesecondsec' style={{ position: 'relative' }}>
                    <div className="container-fluid">
                        <div className="py-md-5"></div>
                        <div className="container">
                            <div className="row pb-5">
                                <div className="col-md-12 col-lg-6 ">
                                    <div className='py-5 mt-3 ps-md-5 ps-lg-3 pe-md-4'>
                                        <p className='btnLink text-white mb-0'>HOHE QUALITÄT</p>
                                        <img src={vector1} alt="" />
                                        <h2 className='text-white fw-bold'>WARUM Demir Barbier WÄHLEN</h2>
                                        <p className='py-3' style={{ color: '#BDA78A' }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look. It has survived not only five centuries.</p>
                                        <ul className='pb-3 text-white list-unstyled'>
                                            <li className='pb-4'>
                                                <div className="row">
                                                    <div className="col-lg-2 pe-0">
                                                        <img src={image3} alt="" />
                                                    </div>
                                                    <div className="col-lg-10 px-0">
                                                        <div className='fw-bold'>HAARSTYLE-TRENDS</div> When an unknown printer took a galley of type scrambled it to make a type specimen lorem book. It has survived not only five centuries.
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='pb-2'>
                                                <div className="row">
                                                    <div className="col-lg-2 ">
                                                        <img src={image4} alt="" />
                                                    </div>
                                                    <div className="col-lg-10 px-0">
                                                        <div className='fw-bold'>HAARSTYLE-TRENDS</div> When an unknown printer took a galley of type scrambled it to make a type specimen lorem book. It has survived not only five centuries.
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6  ">
                                    <div className='d-block d-lg-none text-center'>
                                        <img src={thirdSec} className="img-fluid " style={{ height: '100%' }} alt="" />
                                    </div>

                                    <div className='widtt d-none d-lg-block' style={{ position: 'absolute', right: 0 }}>
                                        <img src={thirdSec} className="img-fluid" style={{ height: '700px' }} alt="" />

                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* end fourth section */}

        </div>
    );
}
