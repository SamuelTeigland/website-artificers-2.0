import { Hero, Fix, Review, Benefits, Services, Pricing, ContactUs, Facebook, Google } from './components/components';
import ReactGA from 'react-ga4';
import { Analytics } from "@vercel/analytics/react"

export default function HomePage() {
    ReactGA.initialize('G-BY6RR52CSJ');

    ReactGA.send({
        hitType: "pageview",
        page: "/",
        title: "Home Page",
    })

    return (
        <div className='home__container'>
            <Analytics />
            <Google />
            <Facebook />
            <Hero />
            <Fix />
            <Review />
            <Benefits />
            <Services />
            <Pricing />
            <ContactUs />
        </div>
    )
}