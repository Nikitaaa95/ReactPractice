import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [validEmail, setValidEmail] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    if (name === 'email') {
      setValidEmail(validateEmail(formData.email));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
    setTouched({ name: false, email: false, message: false });
  };

  const validateEmail = (email) => {
    // Basic email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <section id="contact" className="container">
      <h2 className="text-center mb-4">Contact</h2>
      <div className="row justify-content-center">
        <div className="col-md-12"> 
          <div className="text-center"> 
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} className="form-control" required />
                {touched.name && formData.name.trim() === '' && <div className="text-danger">Name is required</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className="form-control" required />
                {touched.email && !validEmail && <div className="text-danger">Invalid email address</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message:</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} className="form-control" required></textarea>
                {touched.message && formData.message.trim() === '' && <div className="text-danger">Message is required</div>}
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>Phone: (510) 378-2656</p>
        <p>nikitamthomas@gmail.com</p>
      </div>
    </section>
  );
}

export default Contact;
