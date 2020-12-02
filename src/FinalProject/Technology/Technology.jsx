import React from "react";
import PropTypes from "prop-types";
import styles from "./Technology.module.css";
import {Route,Switch, Link} from "react-router-dom"

const Technology = (props) => {
  let right;
  if (props.articles.length){
	  right = (
      <ul className={styles.right}>
        {props.articles.slice(12,16).map((article) => (
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
		Technology
		<div>The latest news on the Technology</div>
		</h1>
	  </div>
	  <section className={styles.section1}>
	    <div className={styles.topNews}>
		<img className={styles.section1Pic} src={props.articles[15].image} alt="section1Pic"/>
		<Link to="/Technology4" dangerouslySetInnerHTML={{ __html: props.articles[15].shortText }} />
		</div>
		{right}
	  </section>
	  <section className={styles.section2}>
	    <div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[12].image} alt="section2Pic"/>
		  <Link to="/Technology1" dangerouslySetInnerHTML={{ __html: props.articles[12].title }} />
		</div>
		<div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[13].image} alt="section2Pic"/>
		  <Link to="/Technology2" dangerouslySetInnerHTML={{ __html: props.articles[13].title }} />
		</div>
		<div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[14].image} alt="section2Pic"/>
		  <Link to="/Technology3" dangerouslySetInnerHTML={{ __html: props.articles[14].title }} />
		</div>
		<div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[15].image} alt="section2Pic"/>
		  <Link to="/Technology3" dangerouslySetInnerHTML={{ __html: props.articles[15].title }} />
		</div>
	  </section>
	</div>
  );
};

Technology.propTypes = {
	articles: PropTypes.array.isRequired
}

export default Technology;
