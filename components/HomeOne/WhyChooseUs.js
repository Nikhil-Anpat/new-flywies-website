import EnquiryForm from "../enquiryForm";

const WhyChooseUs = () => {
    return (
        <section className="choose-ue-area pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="choose-title">
                            <h2>We just don’t create websites - we provide end-to-end services for your business.</h2>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6">
                        <div className="choose-content">
                            <ul>
                                <li>
                                    <span>
                                        01 <i className="flaticon-technical-support"></i>
                                    </span>
                                    <h3>Security</h3>
                                    <p>Our websites and apps are highly secure and we use the latest encryption techniques to secure the flow of data</p>
                                </li>

                                <li className="ml">
                                    <span>
                                        02 <i className="flaticon-shield"></i>
                                    </span>
                                    <h3>Deployment</h3>
                                    <p>Post development, we deploy the solution onto your hosting server and manage all dependencies to ensure smoothness</p>
                                </li>

                                <li className="ml-25">
                                    <span>
                                        03 <i className="flaticon-support"></i>
                                    </span>
                                    <h3>Maintenance and Support</h3>
                                    <p>We offer ongoing maintenance and support to keep your website up to date and performing optimally</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-5" >
                        <div className="choose-img" >
                        
                        <EnquiryForm  />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;