import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <div className="main-banner-area main-banner-area-three">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-text">
                                    <h1>Secure IT Solutions For A More Secure Environment</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus commodo</p>	
                                    
                                    <div className="banner-btn">
                                        <Link href="/about-1" legacyBehavior>
                                            <span className="default-btn">
                                                Learn More
                                            </span>
                                        </Link>

                                        <div
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            className="default-btn active popup-youtube"
                                        > 
                                            <i className="bx bx-play"></i> How it work?
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                {/* Main Image */}
                                <div className="banner-main-img banner-one-main-img">
                                    <img  loading="lazy" src="/images/home-three/main-img3.png" alt="Image" />
                                </div>

                                {/* Banner Shape Images */}
                                <div className="banner-img">
                                    <img  loading="lazy" className="animate__animated animate__fadeInDown animate__fast" src="/images/home-three/shape1.png" alt="Image" />
                                    <img  loading="lazy" className="animate__animated animate__fadeInDown animate__fast" src="/images/home-three/shape2.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shape Images */}
                    <div className="over-shape">
                        <img  loading="lazy" src="/images/home-one/shape/animate1.png" alt="Image" />
                        <img  loading="lazy" src="/images/home-one/shape/animate1.png" alt="Image" />
                        <img  loading="lazy" src="/images/home-one/shape/animate2.png" alt="Image" />
                        <img  loading="lazy" src="/images/home-one/shape/animate2.png" alt="Image" />
                        <img  loading="lazy" src="/images/home-one/shape/animate3.png" alt="Image" />
                    </div>

                    <div className="white-shape">
                        <img  loading="lazy" src="/images/home-three/bottom-shape.png" alt="Image" />
                    </div>
                </div>
            
                {/* If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </>
        );
    }
}

export default MainBanner;