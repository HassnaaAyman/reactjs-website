import React from 'react';
import SinglePortfolio from '../SinglePortfolio/SinglePortfolio';

const Portfolios = () => {
  let portfolios = [
    { title: "Threads", description: "Illustration", image: "img/portfolio/01-thumbnail.jpg" },
    { title: "Explore", description: "Graphic Design", image: "img/portfolio/02-thumbnail.jpg" },
    { title: "Finish", description: "Identity", image: "img/portfolio/03-thumbnail.jpg" },
    { title: "Lines", description: "Branding", image: "img/portfolio/04-thumbnail.jpg" },
    { title: "Southwest", description: "Website Design", image: "img/portfolio/05-thumbnail.jpg" },
    { title: "Window", description: "Photography", image: "img/portfolio/06-thumbnail.jpg" },
  ]
  return (
    <section class="bg-light page-section" id="portfolio">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Portfolio</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div class="row">
          {portfolios.map((item,index)=>(
            <SinglePortfolio
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
};

export default Portfolios;
