import { ulStyle } from "../style";
function Header() {
  return (
    <div className="header">
      <h1>Logo</h1>
      <nav>
        <ul style={ulStyle}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header