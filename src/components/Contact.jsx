import React, { useState } from 'react';
import './Contact.css';
import Contactimage from '../assets/Contactimage.jpeg'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form data submitted:', formData);
  };

  return (
   <>
   <section id="contact" className="section py-5 bg-light">
           <div className="container">
             <h2 className="text-center mb-4">Get in Touch</h2>
             <div className="row">
               {/* Image Section - Now on the Left */}
               <div className="col-md-6 d-flex align-items-center justify-content-center mb-4">
                 <div className="contact-img-card hover-zoom">
                   <img
                     src={Contactimage}
                     alt="Contact"
                     className="img-fluid rounded shadow-sm"
                   />
                 </div>
               </div>
   
               {/* Form Section - Now on the Right */}
               <div className="col-md-6">
                 <form onSubmit={handleSubmit}>
                   <div className="mb-3">
                     <label htmlFor="name" className="form-label">Name</label>
                     <input
                       type="text"
                       id="name"
                       className="form-control"
                       name="name"
                       value={formData.name}
                       onChange={handleChange}
                       required
                     />
                   </div>
                   <div className="mb-3">
                     <label htmlFor="email" className="form-label">Email</label>
                     <input
                       type="email"
                       id="email"
                       className="form-control"
                       name="email"
                       value={formData.email}
                       onChange={handleChange}
                       required
                     />
                   </div>
                   <div className="mb-3">
                     <label htmlFor="message" className="form-label">Message</label>
                     <textarea
                       id="message"
                       className="form-control"
                       rows="3"
                       name="message"
                       value={formData.message}
                       onChange={handleChange}
                       required
                     />
                   </div>
                   <button type="submit" className="btn btn-primary">Submit</button>
                 </form>
               </div>
             </div>
           </div>
         </section>
   </>
  );
}

export default Contact;
