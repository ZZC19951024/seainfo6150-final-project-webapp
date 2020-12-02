import React from "react";
import PropTypes from "prop-types";
import styles from "./Election.module.css";
import {Route,Switch, Link} from "react-router-dom"

const Election = (props) => {

  return (
	<div className={styles.wrapper}>
	  <div className={styles.picNews}>
	    <div className={styles.news1}>
		  <img className={styles.pic1} src={props.articles[0].image} alt="pic1"/>
		  <Link to="/Election1" dangerouslySetInnerHTML={{ __html: props.articles[0].title }} />
		</div>
		<div className={styles.news2}>
		  <img className={styles.pic2} src={props.articles[1].image} alt="pic2"/>
		  <Link to="/Election2" dangerouslySetInnerHTML={{ __html: props.articles[1].title }} />
		</div>
		<div className={styles.news3}>
		  <img className={styles.pic3} src={props.articles[2].image} alt="pic3"/>
		  <Link to="/Election3" dangerouslySetInnerHTML={{ __html: props.articles[2].title }} />
		</div>
	  </div>
	  <section className={styles.contentNews}>
	  <Link to="/Election2" dangerouslySetInnerHTML={{ __html: props.articles[1].shortText }} />
	  <Link to="/Election3" dangerouslySetInnerHTML={{ __html: props.articles[2].shortText }} />
	  <Link to="/Election4" dangerouslySetInnerHTML={{ __html: props.articles[3].shortText }} />
	  </section>
	</div>
  );
};

Election.propTypes = {
	articles: PropTypes.array.isRequired
}
export default Election;
