'use client';

import Intro from '../components/Intro';
import About from '../components/About';
import LifeLately from '../components/LifeLately';
import W_E from '../components/W_E'
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Opinios from '../components/Opinions';
import MusicStack from '../components/MusicStack/MusicStack';
import Movies from '../components/Movies/Movies';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer';
import SocialDock from '../components/SocialDock';

export default function Home() {
    return (
        <>
            <SocialDock />
            <Intro />
            <About />
            <LifeLately />
            <W_E />
            <Skills />
            <Certifications />
            <Projects />
            <Opinios />
            <MusicStack />
            <Movies />
            <Footer />
        </>
    )
}
