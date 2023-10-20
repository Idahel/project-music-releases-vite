import CoverImage from "./CoverImage";
import AlbumName from "./AlbumName";
import ArtistName from "./ArtistName";

const Album = ({ album }) => {
  const { name, images, artists } = album;

  return (
    <div className="album">
      <CoverImage imageUrls={images} />
      <AlbumName name={name} />
      <div className="artist-names">
        {artists.map((artist) => (
          <ArtistName key={artist.id} artist={artist} />
       ) )}
      </div>
    </div>
  );
};

export default Album;