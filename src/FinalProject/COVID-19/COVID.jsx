import React from "react";
import PropTypes from "prop-types";
import styles from "./COVID.module.css";
import {Route,Switch, Link} from "react-router-dom"

const COVID = (props) => {
  let right;
  if (props.articles.length){
	  right = (
      <ul className={styles.right}>
        {props.articles.slice(4,8).map((article) => (
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
		<img className={styles.section1Pic} src={props.articles[4].image} alt="section1Pic"/>
		<Link to="/COVID1" dangerouslySetInnerHTML={{ __html: props.articles[4].shortText }} />
		</div>
		{right}
	  </section>
	  <section className={styles.section2}>
	    <div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[4].image} alt="section2Pic"/>
		  <Link to="/COVID1" dangerouslySetInnerHTML={{ __html: props.articles[4].title }} />
		</div>
		<div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[5].image} alt="section2Pic"/>
		  <Link to="/COVID2" dangerouslySetInnerHTML={{ __html: props.articles[5].title }} />
		</div>
		<div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[6].image} alt="section2Pic"/>
		  <Link to="/COVID3" dangerouslySetInnerHTML={{ __html: props.articles[6].title }} />
		</div>
		<div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[7].image} alt="section2Pic"/>
		  <Link to="/COVID3" dangerouslySetInnerHTML={{ __html: props.articles[7].title }} />
		</div>
	  </section>
	</div>
  );
};

COVID.propTypes = {
	articles: PropTypes.array.isRequired
}

export default COVID;