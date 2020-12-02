import React from "react";
import PropTypes from "prop-types";
import Styles from "./Hompage.module.css";
import Section1 from "./section1/section1.jsx"
import COVID_19 from "./COVID-19/COVID-19.jsx"
import Election from "./2020Election/Election.jsx"
import {Route,Switch, Link} from "react-router-dom"

const HomePage = (props) => {

  return (
	<div className={Styles.wrapper}>
	  <section className={Styles.section}>
	    <Section1 articles={props.articles}/>
	  </section>
	  <div className={Styles.divider}><span></span><span>COVID-19</span><span></span></div>
	  <section className={Styles.section}>
	    <COVID_19 articles={props.articles}/>
	  </section>
	  <div className={Styles.divider}><span></span><span>2020 Election</span><span></span></div>
	  <section className={Styles.section}>
	    <Election articles={props.articles}/>
	  </section>
	  <section className={Styles.banner}>
	    <Link to="/ContactUs">
		<h1>Contact Us</h1>
		</Link>
		<Link to="/AboutUs">
		<h1>About Us</h1>
		</Link>
	  </section>
	</div>
  );
};

HomePage.propTypes = {
	articles: PropTypes.array.isRequired
}
export default HomePage;