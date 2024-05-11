import "./SectionTitle.css";

import React from "react";

function SectionTitle({ children }) {
  return <h3 className="section-title textstroke">{children}</h3>;
}

export default SectionTitle;
