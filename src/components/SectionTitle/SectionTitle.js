import React from "react";

import "./SectionTitle.css";

function SectionTitle({ children }) {
  return <h3 className="section-title textstroke">{children}</h3>;
}

export default SectionTitle;
