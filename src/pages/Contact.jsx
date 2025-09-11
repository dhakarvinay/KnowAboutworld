export const Contact = () => {
  const handleFormSubmit = (formData) => {
      // console.log(formData.entries());
      const FormInputData = Object.formEntries(formData.entries());
      // console.log(FormInputData);
  };
  return <section className="Section-contact">
    <h2 className="container-title">Contact Us !</h2>
    <div className="contact-wrapper container">
    <form action={handleFormSubmit} className="contact-form">
      <input 
        className="form-control"
        type="text"
        required
        autoComplete="off"
        placeholder="Enter your name"
        name="username" />

      <input type="email"
        className="form-control"
        required
        autoComplete="off"
        placeholder="Enter your Email"
        name="Email" />

      <textarea
        className="form-control"
        name="Messsage"
        autoComplete="off"
        placeholder="Enter your message"
        rows="10"
      ></textarea>
      <button type="submit" value="Send">Send</button>
    </form>
    </div>
  </section>;
};