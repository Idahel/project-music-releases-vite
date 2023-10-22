import CoverImage from "./Album components/CoverImage";
import AlbumName from "./Album components/AlbumName";
import ArtistName from "./Album components/ArtistName";

import data from "/src/data.json";

const Album = () => {
  const albums = data.albums.items; 

  return (
    <section className = "album-list">
      {albums.map((album, index) => (
        <div className = "album" key = {index}>
          <CoverImage imageUrls = {album.images} />
          <div className = "album-details">
          <div className = "album-name">
            <AlbumName name = {album.name} externalUrl = {album.external_urls.spotify} />
          </div>
          <div className = "artist-names">
            <ArtistName artists = {album.artists} />
          </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Album;