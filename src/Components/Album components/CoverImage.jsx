

export const CoverImage = ({ imageUrls }) => {
  return (
    <div className="album-cover">
      {imageUrls.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={`Album Cover ${index + 1}`}
          width={image.width}
          height={image.height}
        />
      ))}
    </div>
  );
};
