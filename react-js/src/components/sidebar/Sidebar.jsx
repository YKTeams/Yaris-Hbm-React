import React from "react";

import { Link } from "react-router-dom";

import "./sidebar.css";

import logo from "../../assets/images/logo.png";

import sidebar_items from "../../assets/JsonData/sidebar_routes.json";

const SidebarItem = (props) => {
  const active = props.active ? "active" : "";

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = (props) => {
  const activeItem = sidebar_items.findIndex(
    (item) => item.route === props.location.pathname
  );

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="company logo" />
      </div>
      
        {sidebar_items.map((item, index) =>
          index === 0 || index === 1|| index===5 || index===4 ? (
            <Link  to={item.route} key={index}>
              <SidebarItem 
                title={item.display_name}
                icon={item.icon}
                active={index === activeItem}
              />
            </Link>
          ) : null || (activeItem === 1 && index<=5) ? (
            <div className="deneme">
            <Link  to={item.route} key={index}>
              <SidebarItem 
                title={item.display_name}
                icon={item.icon}
                active={index === activeItem}
              />
            </Link>
            </div>
          ) : null
        )}
      

      <h4>Powered By PM Robot Engineers</h4>
    </div>
  );
};

export default Sidebar;
