import React from "react";
import Link from "./Link";
import { navLinks } from "../../../constants/constants";

function NavLinks() {
  return (
    <div className="links">
      {navLinks.map((link, idx) => (
        <Link {...link} key={idx} />
      ))}
    </div>
  );
}

export default NavLinks;
