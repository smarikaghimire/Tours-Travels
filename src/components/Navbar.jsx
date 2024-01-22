import React from "react";

import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";



function SignInButton() {
  const clerk = useClerk();

  return (

    <i className="fas fa-user" id="login-btn" onClick={() => clerk.openSignIn({})}></i>

  );
}

const Navbar = () => {
  return (
    <div>
      <header>
        <div id="menu-bar" className="fas fa-bars"></div>

        <a href="#" className="logo"><span>T</span>ravel</a>

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#book">Book</a>
          <a href="#packages">Packages</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="icons">
          <i className="fas fa-search" id="search-btn"></i>


          <SignedOut>

            <SignInButton />

          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

        </div>

        <div className="search-bar-container">
          <input type="search" id="search-bar" placeholder="search here..." />
          <label htmlFor="search-bar" className="fas fa-search"></label>
        </div>

      </header>
    </div>
  );
};

export default Navbar;
