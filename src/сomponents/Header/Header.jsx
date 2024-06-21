import "./Header.scss";

export default function Header() {
  return (
    <header>
      <div>
        <span className="logo">Learning Words</span>
        <ul className="nav">
          <li>Registration</li>
          <li>Profile</li>
        </ul>
      </div>
      <div className="presentation"></div>
    </header>
  );
}
