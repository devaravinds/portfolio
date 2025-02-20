import '../styles/ImageCard.css';
import StarImage from "../resources/stars.png";
import LinesImage from "../resources/lines.png";


const ImageCard = ({ imageSrc }) => {
  return (
    <div className="image-card">
      {/* Decorative Elements */}
      <div className="decorative top-right">
        <img src={StarImage}></img>
      </div>

      <div className="decorative bottom-left">
        <img src={LinesImage}></img>
      </div>

      {/* Image with Frame */}
      <div className="image-frame">
        <img src={imageSrc} alt="Styled" />
      </div>
    </div>
  );
};

export default ImageCard;
