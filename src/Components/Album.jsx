import CoverImage from "./Album components/CoverImage";
import AlbumName from "./Album components/AlbumName";
import ArtistName from "./Album components/ArtistName";

const Album = ({ album }) => {
  const { name, images, artists } = album;

  return (
    <div className="album">
      <CoverImage imageUrls={images} />
      <AlbumName name={name} />
      <div className="artist-names">
        <ArtistName artists={artists} />
      </div>
    </div>
  );
};

export default Album;