import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
      <div className="container-fluid">
        <div class="container-fluid">
          <Link class="navbar-brand" href="/">
            Movies DB
          </Link>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" href="/movies">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/series">
              Series
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
