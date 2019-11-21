import React from 'react';

const FormField = (props) => {
  return (
    <div class="form-group">
      {props.elementName === "input" ?
        <input class="form-control"
          id={props.name}
          type={props.type}
          placeholder={props.placeholder}
          required="required"
          data-validation-required-message="Please enter your name." 
          value={props.value}
          onChange={e=>props.onChange(e)}
          />
        :
        <textarea class="form-control"
          id={props.name}
          type={props.type}
          placeholder={props.placeholder}
          required="required"
          data-validation-required-message="Please enter a message."
          value={props.value}   
          onChange={e=>props.onChange(e)}
          >
        </textarea>
      }
      <p class="help-block text-danger"></p>
    </div>
  )
};

export default FormField;
