import { Buttons } from "./Buttons";

const CoverImage = ({ imageUrls }) => {
  if (Array.isArray (imageUrls) && imageUrls.length > 0) {
    const firstImage = imageUrls[0];

    return (
      <div className = "album-cover">
        <img
          src = {firstImage.url}
          alt = {`Album Cover`}
        />
        <Buttons />
      </div>
    );
  }

  return null;
};

export default CoverImage;