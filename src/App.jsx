import data from "./data.json";
import {Header} from "./Components/Header.jsx";
import {Album} from "./Components/Album components/Album.jsx";

export const App = () => {
  const { items } = data.albums;
  return (
    <div className="App">
      <Header />
      {items.map((album, id) => (
        <Album key={id} album={album} />
      ))}
    </div>
  );
}