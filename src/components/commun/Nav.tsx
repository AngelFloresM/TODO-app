import React, { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Nav.css";

function Nav() {
  const [search, setSearch] = useState("");

  return (
    <nav className="navbar">
      <p className="logo">
        Note<span className="logo-bold">Tionary</span>
      </p>
      <form className="note-search">
        <div className="note-search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input
          type="text"
          id="search-note"
          placeholder="Search note..."
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setSearch(event.target.value)
          }
          value={search}
        />
      </form>
    </nav>
  );
}

export default Nav;
