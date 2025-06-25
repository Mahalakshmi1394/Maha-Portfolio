import React from "react";
import { testimonials } from "../data";

const Testimonials = () => {
  return (
    <section className="section__wrapper">
      <h2 className="section__header">Testimonials</h2>
      <div className="flex">
        {testimonials.map((item, index) => (
          <div key={index} className="card" style={{ flex: "1 1 250px", textAlign: "center" }}>
            <img src={item.avatar} alt={item.name} style={{ width: "80px", height: "80px", borderRadius: "50%", marginBottom: "10px" }} />
            <h3>{item.name}</h3>
            <p>{item.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
