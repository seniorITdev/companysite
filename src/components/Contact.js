import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const nameChanging = e.target.name;
    const value = e.target.value;
    if (nameChanging === 'name') setName(value);
    if (nameChanging === 'email') setEmail(value);
    if (nameChanging === 'subject') setSubject(value);
    if (nameChanging === 'message') setMessage(value);
  };

  const handleSubmit = () => {
    if (name && email && subject && message) {
      setTimeout(() => {
        alert("Your message has sent successfully. All the best!");
      }, 1400);
    };
    
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

  return (
    <div className="container contact">
      <h2 className="main-title text-center">CONTACT</h2>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4 mb-1">
            <input name="name" placeholder="Name" className="contact-input" value={name} onChange={handleChange} />
          </div>

          <div className="col-md-4 mb-1">
            <input name="email" placeholder="Email" className="contact-input" value={email} onChange={handleChange} />
          </div>
          <div className="col-md-4 mb-1">
            <input
              name="subject"
              placeholder="Subject"
              className="contact-input"
              value={subject}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <br />
      <div className="col-md-12">
      <textarea
        name="message"
        placeholder="Message"
        className="contact-textarea"
        value={message}
        onChange={handleChange}
          />
      </div>

      <br></br>
      <div className="row">
        <div className="col-md-12">
          <input className="form-btn" type="submit" value="Send Message" onClick={handleSubmit}/>
        </div>
      </div>
    </div>
  );
}
export default Contact;
