const ArtistName = ({ artist }) => {
  const { name, external_urls } = artist;

  return (
    <a href={external_urls.spotify} target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  );
};

export default ArtistName;