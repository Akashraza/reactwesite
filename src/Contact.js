import React from 'react';

function Contact() {
	return(
           <div className="form">
           <h2 className="contact_heading">Contact Us</h2>
                <form className="myForm">
                     <div className="field_area">
                       <input type="text" name="fname" placeholder="Enter Your First Name" />
                       <input type="text" name="lname" placeholder="Enter Your Last Name" />
                     </div>
                     <div className="field_area">
                        <input type="password" name="password" placeholder="Password" />
                        <input type="password" name="cpassword" placeholder="Confirme Password" />
                     </div>
                     <div className="field_area field_area1">
                           <input type="email" name="email" placeholder="Enter Your Email" />
                     </div>
                     <div className="field_area field_area1">
                       <textarea rows="4" cols="50" auto="fixed" placeholder="Write somthing....."></textarea>
                     </div>
                     <div className="field_area field_area2">
                          <button type="submit">Submit</button>
                     </div>
                </form>
           </div>
		);
}
export  default Contact;