import Body from "./Body";
import Header from "./Header";
import About from './About';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="App">
            <Header />
            <Body />
            <About />
        </div>
    );
};

export default Home