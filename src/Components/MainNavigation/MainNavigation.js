import classes from "./MainNavigation.module.css";

import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <nav className={classes.nav}>
      <ul className={classes.navigation}>
        <li className={classes.listItem}>
          <NavLink
            className={classes.link}
            to="/"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "#ffffff" } : {}
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li className={classes.listItem}>
          <NavLink
            className={classes.link}
            to="/Profile"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "#ffffff" } : {}
            }
            end
          >
            Profile
          </NavLink>
        </li>
        <li className={classes.listItem}>
          <NavLink
            className={classes.link}
            to="/Contact"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "#ffffff" } : {}
            }
            end
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
