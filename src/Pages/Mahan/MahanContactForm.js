import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <p>Your message has been successfully sent. Mahan will contact you soon.</p>
  );
};

const MahanContactForm = (props) => {
  const [result, showResult] = useState(false);
  const sendEmail = (form) => {
    form.preventDefault();

    emailjs
      .sendForm(
        "service_3q55o6d",
        "template_pn2wyeb",
        form.target,
        "user_UXxlkdkHPcUpu07334A1t"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.target.reset();
    showResult(true);
  };

  // Hide Result

  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <form className="mahan__contact__form" action="" onSubmit={sendEmail}>
      <div className="mahan_form_word">
        <h2 className="contact__mahan">Contact Mahan</h2>
        <span className="mahan_full_name">Full Name</span>
        <br />
        <input className="input100" type="text" name="fullName" required />
        <br />
        <span className="mahan_phone_number">Phone Number</span>
        <br />
        <input className="input100" type="text" name="phone" required />
        <br />
        <span className="mahan_enter_email">Enter Email</span>
        <br />
        <input className="input100" type="text" name="email" required />
      </div>
      <div className="mahan_formWord">
        <span>Message</span>
        <br />
        <textarea name="message" required></textarea>
        <br />
        <button className="mahan__submit__button">SUBMIT</button>
        <div className="mahan_row">{result ? <Result /> : null} </div>
      </div>
    </form>
  );
};

export default MahanContactForm;
