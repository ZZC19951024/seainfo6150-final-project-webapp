import React from "react";
import PropTypes from "prop-types";
import styles from "./Election.module.css";
import {Route,Switch, Link} from "react-router-dom"

const Election = (props) => {
  let right;
  if (props.articles.length){
	  right = (
      <ul className={styles.right}>
        {props.articles.slice(0,4).map((article) => (
          <li key={article.slug}>
		    <Link to={article.slug}>{article.title}</Link>
		  </li>
        ))}
      </ul>
    );
  }
  return (
	<div>
	  <section className={styles.section1}>
	    <div className={styles.topNews}>
		<img className={styles.section1Pic} src={props.articles[0].image} alt="section1Pic"/>
		<Link to="/Election1" dangerouslySetInnerHTML={{ __html: props.articles[0].shortText }} />
		</div>
		{right}
	  </section>
	  <section className={styles.section2}>
	    <div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[0].image} alt="section2Pic"/>
		  <Link to="/Election1" dangerouslySetInnerHTML={{ __html: props.articles[0].title }} />
		</div>
		<div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[1].image} alt="section2Pic"/>
		  <Link to="/Election2" dangerouslySetInnerHTML={{ __html: props.articles[1].title }} />
		</div>
		<div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[2].image} alt="section2Pic"/>
		  <Link to="/Election3" dangerouslySetInnerHTML={{ __html: props.articles[2].title }} />
		</div>
		<div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[3].image} alt="section2Pic"/>
		  <Link to="/Election3" dangerouslySetInnerHTML={{ __html: props.articles[3].title }} />
		</div>
	  </section>
	</div>
  );
};

Election.propTypes = {
	articles: PropTypes.array.isRequired
}

export default Election;