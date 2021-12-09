// #region React
import React from 'react';
// #endregion

const SidebarSearch = () => (
  <div className="widget-search-box">
    <form method="post">
      <input
        name="search"
        type="text"
        id="search"
        placeholder="Type &amp; Hit Enter..."
      />
    </form>
  </div>
);

export default SidebarSearch;
