const MahanContactForm = ({ setFullName, setEmail, setMessage }) => {
  return (
    <div className="mahan__contact__form">
      <form>
        <div>
          <input
            type="text"
            placeholder="Full Name"
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="E-Mail"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Message"
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default MahanContactForm;
