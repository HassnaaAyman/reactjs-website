import React from 'react';
import Service from '../Service/Service.js';


const Services = () => {

  let services = [
    {
      title: "E-Commerce", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
      icon: "fa-shopping-cart"
    },

    {
      title: "Responsive Design", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
      icon: "fa-laptop"
    },

    {
      title: "Web Security", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
      icon: "fa-lock"
    }
]


  return (
    <section class="page-section" id="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Services</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div class="row text-center">
          {services.map((item , index)=>(
            <Service 
              key={index}
              title={item.title}
              description = {item.description}
              icon = {item.icon}
            />
          ))
          }
        </div>
      </div>
    </section>
  );
};

export default Services;
