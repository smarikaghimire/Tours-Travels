import React from "react";

const Service = () => {
  return (
    <div>
      <section className="services" id="services">
        <h1 className="heading">
          <span>s</span>
          <span>e</span>
          <span>r</span>
          <span>v</span>
          <span>i</span>
          <span>c</span>
          <span>e</span>
          <span>s</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <i className="fas fa-hotel"></i>
            <h3>affordable hotels</h3>
            <p>
              We have lots of affordable hotels for you all over the world!! So
              what are you waiting for, Just Enjoy Your Life WITHOUT SPENDING
              MUCH.
            </p>
          </div>
          <div className="box">
            <i className="fas fa-utensils"></i>
            <h3>food and drinks</h3>
            <p>
              You will get all kinds of food and drinks like Mexican, Indian,
              Chinese, Italian... at very reasonable prices.
            </p>
          </div>
          <div className="box">
            <i className="fas fa-bullhorn"></i>
            <h3>safty guide</h3>
            <p>
              Travelling with us has never been safer. We always ensure our
              customers are secure and practice caution and safeguarding
              measures when travelling.
            </p>
          </div>
          <div className="box">
            <i className="fas fa-globe-asia"></i>
            <h3>around the world</h3>
            <p>
              When it comes to destinations, the only limit is your imagination
              as we have expanded our services to being able to fly customers
              anywhere they want in the world.
            </p>
          </div>
          <div className="box">
            <i className="fas fa-plane"></i>
            <h3>fastest travel</h3>
            <p>
              Long, tedious flights not your thing? No worries! Some of the
              fastest flights we have can take you to a luxury, serene location
              in just one hour!
            </p>
          </div>
          <div className="box">
            <i className="fas fa-hiking"></i>
            <h3>adventures</h3>
            <p>
              Life is too short to not take the opportunity of having an
              adventure when it comes along and we can guarantee you will never
              regret your decision.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
