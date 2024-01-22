import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>about us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quas magni pariatur est accusantium voluptas enim nemo facilis sit
              debitis.
            </p>
          </div>
          <div className="box">
            <h3>branch locations</h3>
            <a href="#">india</a>
            <a href="#">USA</a>
            <a href="#">japan</a>
            <a href="#">france</a>
          </div>
          <div className="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">book</a>
            <a href="#">packages</a>
            <a href="#">services</a>
            <a href="#">gallery</a>
            <a href="#">review</a>
            <a href="#">contact</a>
          </div>
          <div className="box">
            <h3>follow us</h3>
            <a href="#">facebook</a>
            <a href="#">instagram</a>
            <a href="#">twitter</a>
            <a href="#">linkedin</a>
          </div>
        </div>

        <h1 className="credit">
          {" "}
          Copyright<span> @2023 </span>| all rights reserved!{" "}
        </h1>
      </section>
    </div>
  );
};

export default Footer;
