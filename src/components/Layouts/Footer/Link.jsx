import { NavLink } from "react-router-dom";

function Link({ title, to, icon: Icon }) {
  return (
    <NavLink to={to} className={`${to?.replace("/", "")}`}>
      <div className="icon nav-icon">
        <Icon size={23} stroke="rgba(4, 4, 161, 0.938)" />
      </div>
      <span className="link-title fw-small">{title}</span>
    </NavLink>
  );
}

export default Link;
