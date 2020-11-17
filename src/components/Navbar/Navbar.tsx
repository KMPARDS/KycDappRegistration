import React, { useContext } from "react";

export const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        
      {/* <a className="navbar-brand" href="#">Navbar</a> */}

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button type="button" className="btn btn-link" data-toggle="modal" data-target="#myModal">Resolve Address</button>
          </li>
          <li className="nav-item">
            <button type="button" className="btn btn-link" data-toggle="modal" data-target="#myModal">Resolve Username</button>
          </li>
        </ul>
      </div>
    </nav>

    </header>
  );
};
