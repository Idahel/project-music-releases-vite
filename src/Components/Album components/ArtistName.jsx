export const ArtistName = ({ artists }) => {
    return (
      <div>
        <h3>{artists.map((artist) => artist.name).join(', ')}</h3>
      </div>
    );
  };
  