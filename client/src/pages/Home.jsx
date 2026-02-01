import Intro from '../components/Intro';
import About from '../components/About';
import LifeLately from '../components/LifeLately';
import W_E from '../components/W_E'
import Skills from  '../components/Skills';

function Home(){
    return(
        <>
            <Intro />
            <About />
            <LifeLately />
            <W_E />
            <Skills />
        </>
    )
}

export default Home;