import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>c</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>
        </h1>

        <div className="row">
          <div className="image">
            <img src="images/contact-img.svg" alt="" />
          </div>

          <form action="">
            <div className="inputBox">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="inputBox">
              <input type="number" placeholder="Number" />
              <input type="text" placeholder="Subject" />
            </div>
            <textarea
              placeholder="Message"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" className="btn" value="send message" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
