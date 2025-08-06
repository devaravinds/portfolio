import '../styles/Body.css';
import ImageCard from './Image';
import sampleImage from "../resources/dp.jpg";
import resumeImage from "../resources/resume_logo.png";

const Body = () => {
    return (
        <div className='body'>
            <div className='main-content'>
                <div className="text-content">
                    <p className="dev-intro">
                        Hello I'm Dev
                    </p>
                    <h1 className="dev-designation">
                        Full Stack <br/>
                        Developer
                    </h1>
                    <p className="dev-description">
                        based in Bengaluru, India.
                    </p>
                </div>
                <div className='image-container'>
                    <ImageCard imageSrc={sampleImage} />
                </div>
            </div>
            <a href="https://drive.google.com/file/d/1T6v2-Fh6i1YcEQrhgPty_bBzwr0YO-8E/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="resume-logo-container">
                <img src={resumeImage} alt="resume" className="resume-logo"/>
            </a>
        </div>
    );    
}

export default Body;
