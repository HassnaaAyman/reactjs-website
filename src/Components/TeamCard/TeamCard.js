import React from 'react';

const TeamCard = (props) => {
  return(
    <div class="col-sm-4">
    <div class="team-member">
      <img class="mx-auto rounded-circle" src={props.image} alt=""/>
      <h4>{props.name}</h4>
      <p class="text-muted">{props.position}</p>
      <ul class="list-inline social-buttons">
        <li class="list-inline-item">
          <a href=" ">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a href=" ">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a href=" ">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
  )
};

export default TeamCard;
