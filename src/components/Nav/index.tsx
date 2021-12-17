import { NavLink } from "./NavLink";
// import styles from "./styles.module.scss";

export function Nav() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-nav">
        <NavLink href="/" exact className="nav-item nav-color nav-link">
          Home
        </NavLink>
        <NavLink href="/servidor-add" className="nav-item nav-color nav-link">
          Servidores
        </NavLink>
        <NavLink href="/lotacoes" className="nav-item nav-color nav-link">
          Lotações
        </NavLink>
      </div>
    </nav>
  );
}
