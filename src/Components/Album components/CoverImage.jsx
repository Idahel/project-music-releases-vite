const CoverImage = ({ imageUrls }) => {
  // Check if imageUrls is an array and contains at least one image
  if (Array.isArray(imageUrls) && imageUrls.length > 0) {
    const firstImage = imageUrls[0]; // Get the first image

    return (
      <div className="album-cover">
        <img
          src={firstImage.url}
          alt={`Album Cover`}
          width={firstImage.width}
          height={firstImage.height}
        />
      </div>
    );
  }

  // Return null or a placeholder image if there are no images to display
  return null;
};

export default CoverImage;