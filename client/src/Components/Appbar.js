import { Link } from "react-router-dom";

function Appbar() {
  const fetcher = async () => {
    const info = await fetch("http://localhost:3001/");
    const info2 = await info.json();
    console.log(info2);
  };

  return (
    <div>
      <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <button onClick={fetcher}>click</button>
        </li>
      </ul>
    </div>
  );
}
export default Appbar;
