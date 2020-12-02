import React from "react";
import PropTypes from "prop-types";
import styles from "./Political.module.css";
import {Route,Switch, Link} from "react-router-dom"

const Political = (props) => {
  let right;
  if (props.articles.length){
	  right = (
      <ul className={styles.right}>
        {props.articles.slice(20,24).map((article) => (
          <li key={article.slug}>
		    <Link to={article.slug}>{article.title}</Link>
		  </li>
        ))}
      </ul>
    );
  }
  return (
	<div className={styles.wrapper}>
	  <div className={styles.headBanner}>
	    <h1>
		Political
		<div>The latest news on the Political</div>
		</h1>
	  </div>
	  <section className={styles.section1}>
	    <div className={styles.topNews}>
		<img className={styles.section1Pic} src={props.articles[20].image} alt="section1Pic"/>
		<Link to="/Political1" dangerouslySetInnerHTML={{ __html: props.articles[20].shortText }} />
		</div>
		{right}
	  </section>
	  <section className={styles.section2}>
	    <div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[20].image} alt="section2Pic"/>
		  <Link to="/Political1" dangerouslySetInnerHTML={{ __html: props.articles[20].title }} />
		</div>
		<div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[21].image} alt="section2Pic"/>
		  <Link to="/Political2" dangerouslySetInnerHTML={{ __html: props.articles[21].title }} />
		</div>
		<div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[22].image} alt="section2Pic"/>
		  <Link to="/Political3" dangerouslySetInnerHTML={{ __html: props.articles[22].title }} />
		</div>
		<div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[23].image} alt="section2Pic"/>
		  <Link to="/Political3" dangerouslySetInnerHTML={{ __html: props.articles[23].title }} />
		</div>
	  </section>
	</div>
  );
};

Political.propTypes = {
	articles: PropTypes.array.isRequired
}

export default Political;
