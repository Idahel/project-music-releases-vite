import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";

export const Album = ({ album }) => {
  
    return (
      
      <div>
        <CoverImage imageUrls={album.images} />
        <AlbumName albumName={album.name} />
        <ArtistName artists={album.artists} />
      </div>
    );
  };
  