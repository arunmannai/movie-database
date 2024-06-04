import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => setCollapsed(!collapsed);
  const collapse = () => setCollapsed(true);

  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/" onClick={collapse}>
          Movies DB
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse ${collapsed && 'collapse'}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/movies" onClick={collapse}>
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/series" onClick={collapse}>
                Series
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;