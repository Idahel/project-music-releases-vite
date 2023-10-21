const Albumname = ({ items }) => {
  const albumNames = items.map((name) => items.name);

  return (
    <div className="album-name"> 
    <a href={items[0].external_urls.spotify} target="_blank" rel="noopener noreferrer">
    </a>
    </div>
  );
};

export default AlbumName;