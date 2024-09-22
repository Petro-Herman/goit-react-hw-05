import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

function getNavLinkC1(props) {
  return clsx(css.link, props.isActive && css.isActive);
}

export default function Navigation() {
  return (
    <header className={css.header}>
      <ul className={css.list}>
        <li>
          <NavLink className={getNavLinkC1} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={getNavLinkC1} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
