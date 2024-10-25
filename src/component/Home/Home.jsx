import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../services/Services";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className="mx-6 lg:mx-20 sm:my-12 overflow-x-hidden">
            <Banner></Banner>
            <Portfolio />
            <Contact />
            <Blogs />
             <Services />
            <About/>
        </div>
    );
};

export default Home;