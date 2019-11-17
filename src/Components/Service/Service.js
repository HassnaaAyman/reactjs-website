import React from 'react';

const Service = (props) => {
  return (
    <div class="col-md-4">
      <span class="fa-stack fa-4x">
        <i class="fas fa-circle fa-stack-2x text-primary"></i>
        <i class={`fas ${props.icon} fa-stack-1x fa-inverse`}></i>
      </span>
      <h4 class="service-heading">{props.title}</h4>
      <p class="text-muted">{props.description}</p>
    </div>
  )
};

export default Service;
