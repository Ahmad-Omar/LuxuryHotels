import React from "react";
import { NavLink } from "react-router-dom";
import { NavMenuItems } from "./NavMenuItems";
import "./style.css";

function NavMenu() {
  return (
    <div className="nav-menu">
      <ul>
        {NavMenuItems.map((item) => {
          return (
            <li key={item.id}>
              <NavLink exact to={item.liLink}>
                {item.liName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavMenu;
