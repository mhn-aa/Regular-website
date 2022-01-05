const MahanContactForm = ({
  submitHandler,
  setFullName,
  setEmail,
  setMessage,
  email,
  message,
  fullName,
}) => {
  return (
    <div className="div_mahan_form">
      <h3 className="contact__mahan">Contact Mahan</h3>
      <form className="mahan_form_main" onSubmit={submitHandler}>
        <div>
          <input
            value={fullName}
            className="mahan_full_name"
            type="text"
            placeholder="Full Name"
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div>
          <input
            value={email}
            className="mahan_enter_email"
            type="text"
            placeholder="E-Mail"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <textarea
            value={message}
            className="mahan_message"
            type="text"
            placeholder="Message"
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <button className="mahan__submit__button">SUBMIT</button>
      </form>
    </div>
  );
};

export default MahanContactForm;
