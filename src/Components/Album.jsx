import CoverImage from "./Album components/CoverImage";
import AlbumName from "./Album components/AlbumName";
import ArtistName from "./Album components/ArtistName";
import data from "/src/data.json";

const Album = () => {
  const albums = data.albums.items; 

  return (
    <section className="album-list">
      {albums.map((album, index) => (
        <div className="album" key={index}>
          <CoverImage imageUrls={album.images} />
          <AlbumName name={album.name} />
          <div className="artist-names">
            <ArtistName artists={album.artists} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Album;