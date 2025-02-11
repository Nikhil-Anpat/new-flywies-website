import Navbar from '../components/Layouts/Navbar'
import MainBanner from '../components/HomeOne/MainBanner'
import Features from '../components/HomeOne/Features'
import About from '../components/HomeOne/About'
import WhyChooseUs from '../components/HomeOne/WhyChooseUs'
import Services from '../components/HomeOne/Services'
import MakeYourBusiness from '../components/Common/MakeYourBusiness'
import WhatWeOffer from '../components/HomeOne/WhatWeOffer'
import Testimonials from '../components/Common/Testimonials'
import News from '../components/Common/News'
import Footer from '../components/Layouts/Footer'
import ModernWebsite from '../components/HomeOneNew/modernWebsite/page'
import Leverage from '../components/HomeOneNew/leverage/page'
import StrategyForm from '../components/HomeOneNew/bookStrategy/page'
import Technologies from '../components/HomeOneNew/technologies/page'
import Industries from '../components/HomeOneNew/industries/page'
import CustomSolutions from '../components/HomeOneNew/customSolutions/page'
import WebDevelopmentBanner from '../components/HomeOneNew/webDevelopmentBanner/page'
import EngagementModels from '../components/HomeOneNew/engagementModels/page'
import BusinessesWorldwide from '../components/HomeOneNew/businessesWorldwide/page'
import TestimonialSlider from '../components/HomeOneNew/testimonialSlider/page'
import BannerSection from '../components/HomeOneNew/banner/page'

const Index = () => {
    return (
        <>
            <Navbar />
            <BannerSection />
            {/* <MainBanner /> */}
            <ModernWebsite />
            <StrategyForm />
            <Leverage />
            <Technologies />
            <Industries />
            <CustomSolutions />
            <WebDevelopmentBanner />
            <EngagementModels />
            <TestimonialSlider />
            <BusinessesWorldwide />
            <StrategyForm />


            {/* <Features />
            <About />
            <WhyChooseUs />
            <Services />
            <MakeYourBusiness />
            <WhatWeOffer />
            <Testimonials />
            <News /> */}
            <Footer />
        </>
    )
}

export default Index