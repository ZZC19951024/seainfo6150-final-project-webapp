import React from "react";
import PropTypes from "prop-types";
import styles from "./COVID-19.module.css";
import {Route,Switch, Link} from "react-router-dom"

const COVID_19 = (props) => {

  return (
	<div className={styles.wrapper}>
	  <div className={styles.picNews}>
	    <div className={styles.news1}>
		  <img className={styles.pic1} src={props.articles[4].image} alt="pic1"/>
		  <Link to="/COVID1" dangerouslySetInnerHTML={{ __html: props.articles[4].title }} />
		</div>
		<div className={styles.news2}>
		  <img className={styles.pic2} src={props.articles[5].image} alt="pic2"/>
		  <Link to="/COVID2" dangerouslySetInnerHTML={{ __html: props.articles[5].title }} />
		</div>
		<div className={styles.news3}>
		  <img className={styles.pic3} src={props.articles[6].image} alt="pic3"/>
		  <Link to="/COVID3" dangerouslySetInnerHTML={{ __html: props.articles[6].title }} />
		</div>
	  </div>
	  <section className={styles.contentNews}>
	  <Link to="/COVID2" dangerouslySetInnerHTML={{ __html: props.articles[5].shortText }} />
	  <Link to="/COVID3" dangerouslySetInnerHTML={{ __html: props.articles[6].shortText }} />
	  <Link to="/COVID4" dangerouslySetInnerHTML={{ __html: props.articles[7].shortText }} />
	  </section>
	</div>
  );
};

COVID_19.propTypes = {
	articles: PropTypes.array.isRequired
}
export default COVID_19;
