import Body from "./Body";
import Header from "./Header";
import About from './About';
import Projects from "./Projects";
import '../styles/Home.css';
import githubLogo from '../resources/github.png';

const Home = () => {
    const links = [
        { to: "home-section", label: "Home" },
        { to: "about-section", label: "About" },
        { to: "projects-section", label: "Projects" }
    ];
    return (
        <div className="App">
            <Header 
                siteName="S Dev Aravind" 
                links={links} 
                githubUrl="https://github.com/devaravinds" 
                githubLogo={githubLogo} 
            />
            <Body />
            <About />
            <Projects />
        </div>
    );
};

export default Home