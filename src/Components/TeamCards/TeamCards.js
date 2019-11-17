import React from 'react';
import TeamCard from '../TeamCard/TeamCard';

const TeamCards = () => {
  let team = [
    { name: "Kay Garland", position: "Lead Designer", image: "img/team/1.jpg" },
    { name: "Larry Parker", position: "Lead Marketer", image: "img/team/2.jpg" },
    { name: "Diana Pertersen", position: "Lead Developer", image: "img/team/3.jpg" }
  ]
  return (
    <section class="bg-light page-section" id="team">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div class="row">
          {team.map((item,index)=>(
            <TeamCard
              key={index}
              name={item.name}
              position={item.position}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
};

export default TeamCards;
