import React from "react";

const Navbar = ({connect, account}) => {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="nav-menu d-flex col-md-6 flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav-menu me-lg-auto mb-2 justify-content-center mb-md-0">
            <li className="nav-menu"><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
          </ul>
        </div>
        <div className="nav-menu col-md-6 col-lg-auto text-right">
          <button type="button" onClick={connect} className="btn btn-outline-light me-2">{account || "Connect" }</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;