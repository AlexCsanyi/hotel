import React from "react";

export default function Tabs() {
  return (
    <div className="tabbed">
      <input type="radio" name="tabs" id="tab-nav-1" defaultChecked></input>
      <label htmlFor="tab-nav-1">Details</label>
      <input type="radio" name="tabs" id="tab-nav-2"></input>
      <label htmlFor="tab-nav-2">Info</label>
      <input type="radio" name="tabs" id="tab-nav-3"></input>
      <label htmlFor="tab-nav-3">Extras</label>
      <div className="tabs">
        <div>
          <h2>Details</h2>
          <p>More is coming</p>
        </div>
        <div>
          <h2>Info</h2>
          <p>Info will be here</p>
        </div>
        <div>
          <h2>Extras</h2>
          <p>Extras will be listed</p>
        </div>
      </div>
    </div>
  );
}
