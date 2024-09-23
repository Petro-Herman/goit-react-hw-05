import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

function getNavLinkClass(isActive) {
  return clsx(css.link, isActive && css.isActive);
}

export default function Navigation() {
  return (
    <header className={css.header}>
      <ul className={css.list}>
        <li>
          <NavLink className={getNavLinkClass} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={getNavLinkClass} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
