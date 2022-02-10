import React from 'react';
import './css/footer.css'
import footer from './img/Footer.png'
import submit from './img/arrowSubmit.png'
import fb from './img/facebook.png'
import insta from './img/insta.png'
import twitter from './img/twitter.png'

export default function Footer() {
    return (
        <div>
            <div style={{ backgroundColor: '#222124' }}>
                <div className='py-5'></div>
                <div className="container pb-5 ">
                    <div className="row">
                        <div className="col-md-4">
                            <div >
                                <img src={footer} alt="" />
                                <p className='text-white pe-5' style={{ fontSize: '14px' }}>Style with the hair of your choice and
                                    be the maximum handsome</p>
                                <div>
                                    <img src={fb}  className="img-fluid " alt=""  style={{opacity:'.6'}} />
                                    <img src={insta} className="img-fluid mx-3" alt="" style={{opacity:'.6'}}  />
                                    <img src={twitter} className="img-fluid " alt="" style={{opacity:'.6'}}  />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-6">
                            <div>
                                <p className='text-white' style={{ fontSize: '18px', fontWeight: '700' }}>Services</p>
                                <ul className='list-unstyled' style={{ color: '#757476' }}>
                                    <li>Hair styling</li>
                                    <li>Massage</li>
                                    <li>Shaving</li>
                                    <li>Creambath</li>
                                    <li>Kuarams</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className=''>
                                <p className='text-white' style={{ fontSize: '18px', fontWeight: '700' }}>Demir Barbier</p>
                                <ul className=' list-unstyled' style={{ color: '#757476' }}>
                                    <li>Testimonial</li>
                                    <li>Online Support</li>
                                    <li>Best Services</li>
                                    <li>Experienced</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='text-left'>
                                <p className='text-white' style={{ fontSize: '18px', fontWeight: '700' }}>Get In Touch</p>
                                <div>
                                    <div class="input-group rounded-0 mb-3">
                                        <input type="text" class="form-control rounded-0 border-end-0" style={{backgroundColor:'#BDA78A'}} placeholder="Book now" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <button class="btn  rounded-0 border-start-0" style={{backgroundColor:'#BDA78A'}} type="button" id="button-addon2"><img src={submit} alt="" srcset="" /></button>
                                    </div>
                                </div>
                                <div style={{ color: '#757476' }}>Cukur@email.com</div>
                                <div style={{ color: '#757476' }}>(704) 555-0127</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
