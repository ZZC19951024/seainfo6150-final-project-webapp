import React from "react";
import PropTypes from "prop-types";
import Styles from "./ContactUs.module.css";

const ContactUs = () => {

  return (
	<div className={Styles.wrapper}>
	<h1 className={Styles.title}>Please Contact Us</h1>
	  <section className={Styles.Intro}>
	    <p><b>Phone:</b>215-123-4567</p>
		<p><b>Adress:</b>Seattle xxxxxxxxx</p>
		<p><b>Email:</b>1234@gmail.com</p>
	  </section>
	  <form className={Styles.formWrapper}>
	    <h2 className={Styles.heading}>Provide your information</h2>
	    <ul className={Styles.form_style}>
		  <li><label>Full Name <span className={Styles.required}>*</span></label><input type="text" name="field1" className={Styles.field_divided} placeholder="First" /> <input type="text" name="field2" className={Styles.field_divided} placeholder="Last" /></li>
		<li>
          <label>Gender <span className={Styles.required}>*</span></label>
          <select name="field4" className={Styles.field_select}>
            <option value="Male">Male</option>
            <option value="Femal">Male</option>
          </select>
		</li>
		<li>
		  <label>Telephone</label>
		  <label><input type="text" className={Styles.tel_number_field} name="tel_no_1" value="" maxlength="4" />-<input type="text" className={Styles.tel_number_field} name="tel_no_2" value="" maxlength="4"  />-<input type="text" className={Styles.tel_number_field} name="tel_no_3" value="" maxlength="10"  /></label>
		</li>
		<li>
          <label>Email <span className={Styles.required}>*</span></label>
          <input type="email" name="field3" className={Styles.field_long} />
		</li>
		<li>
          <label>Subject</label>
          <select name="field4" className={Styles.field_select}>
            <option value="Advertise">Advertise</option>
            <option value="Partnership">Partnership</option>
            <option value="General Question">General</option>
          </select>
		</li>
		<li >
		   <label>Interested Field</label>
		   <div className={Styles.checkBox}>
		     <label for="Election">
		       <input type="checkbox" id="Election" name="Election" value="Election"/>
		       Election
			 </label>
		     <label for="COVID">
		       <input type="checkbox" id="COVID" name="COVID" value="COVID"/>
		       COVID
			 </label>
		     <label for="International">
		       <input type="checkbox" id="International" name="International" value="International"/>
		       International
			 </label>
		     <label for="Technology">
		       <input type="checkbox" id="Technology" name="Technology" value="Technology"/>
		       Technology
			 </label>
		     <label for="Entertainment">
		       <input type="checkbox" id="Entertainment" name="Entertainment" value="Entertainment"/>
		       Entertainment
			 </label>
		     <label for="Political">
		       <input type="checkbox" id="Political" name="Political" value="Political"/>
		       Political
			 </label>
		   </div>
		</li>
		<li>
          <label>Your Message <span className={Styles.required}>*</span></label>
          <textarea name="field5" id="field5" className={Styles.field_textarea}></textarea>
		</li>
		<li>
        <input type="submit" value="Submit" />
		</li>
	</ul>
	  </form>
	</div>
  );
};

//NotFound.propTypes = {


export default ContactUs;
