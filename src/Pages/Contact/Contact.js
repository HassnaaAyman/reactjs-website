import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const Contact = () => {
  const ContactForm = Yup.object().shape({
    name: Yup.string()
      .min(4, "Too Short!")
      .max(50, "Too Long!")
      .required("* Requierd"),

    email: Yup.string()
      .email("Invalid email!")
      .required("* Requierd"),

    phone: Yup.string()
      .required("Requierd"),

    message: Yup.string()
      .min(10, "Too short!")
      .max(300, "Too long!")
      .required("* Requierd")
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("done!")
  }


  return (
    <section class="page-section" id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Contact Us</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <form id="contactForm" name="sentMessage" noValidate="novalidate">
              <div class="row">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                  }}
                  validationSchema={ContactForm}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div class="col-md-6">
                        <div class="form-group">
                          <Field class="form-control"
                            id="name"
                            type="text"
                            placeholder="Your Name *"
                            required="required"
                            data-validation-required-message="Please enter your name."
                            name="name"
                          />
                          <p class="help-block text-danger"></p>
                          {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                          ) : null}
                        </div>
                        <div class="form-group">
                          <Field class="form-control"
                            id="email"
                            type="email"
                            placeholder="Your Email *"
                            required="required"
                            data-validation-required-message="Please enter your email."
                            name="email"
                          />
                          <p class="help-block text-danger"></p>
                          {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                          ) : null}
                        </div>
                        <div class="form-group">
                          <Field class="form-control"
                            id="phone"
                            type="number"
                            placeholder="Your Phone Number *"
                            required="required"
                            data-validation-required-message="Please enter your phone."
                            name="phone"
                          />
                          <p class="help-block text-danger"></p>
                          {errors.phone && touched.phone ? (
                            <div>{errors.phone}</div>
                          ) : null}
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <textarea class="form-control"
                            id="message"
                            type="textarea"
                            placeholder="Type Your Message *"
                            required="required"
                            data-validation-required-message="Please enter a message."
                            name="message"
                          >
                          </textarea>
                        </div>
                        <p class="help-block text-danger"></p>
                        {errors.message && touched.message ? (
                            <div>{errors.message}</div>
                          ) : null}
                      </div>
                      <div class="clearfix"></div>
                      <div class="col-lg-12 text-center">
                        <div id="success"></div>
                        <button
                          id="sendMessageButton"
                          class="btn btn-primary btn-xl text-uppercase"
                          type="submit"
                        >Send Message</button>
                      </div>
                      </Form>
                  )}
                </Formik>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Contact;
