import React from 'react'
import Landing from './landing'
import AboutUs from './about-us'
import Features from './features'
import Footer from '../layout/footer'
import Helmet from 'react-helmet'

export default function Index() {
    return (
        <div className='pt-20 mx-auto'>
            <Helmet>
                <title>Twifo</title>
                <meta name='description' content='Twifo, Twitter hesabınızı analiz ederek çeşitli eğlenceli istatistikler sunan bir web uygulamasıdır.' />
            </Helmet>
            <Landing />
            <AboutUs />
            <Features />
            <Footer />
        </div>
    )
}