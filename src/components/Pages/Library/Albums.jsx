import SongDetails from "../../Layouts/Main/SongDetails";

const cards = [];
for (let i = 0; i < 20; i++) {
  cards.push(<SongDetails key={i} />);
}

function Albums() {
  return (
    <>
      <nav className="list-length">
        <span className="fs-small">(66 albums)</span>
      </nav>
      <div className="albums-container">{/* <SongDetails /> */}</div>
    </>
  );
}

export default Albums;
