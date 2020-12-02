import React from "react";
import PropTypes from "prop-types";
import styles from "./International.module.css";
import {Route,Switch, Link} from "react-router-dom"

const International = (props) => {
  let right;
  if (props.articles.length){
	  right = (
      <ul className={styles.right}>
        {props.articles.slice(8,12).map((article) => (
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
		International
		<div>The latest news on the International</div>
		</h1>
	  </div>
	  <section className={styles.section1}>
	    <div className={styles.topNews}>
		<img className={styles.section1Pic} src={props.articles[8].image} alt="section1Pic"/>
		<Link to="/International1" dangerouslySetInnerHTML={{ __html: props.articles[8].shortText }} />
		</div>
		{right}
	  </section>
	  <section className={styles.section2}>
	    <div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[8].image} alt="section2Pic"/>
		  <Link to="/International1" dangerouslySetInnerHTML={{ __html: props.articles[8].title }} />
		</div>
		<div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[9].image} alt="section2Pic"/>
		  <Link to="/International2" dangerouslySetInnerHTML={{ __html: props.articles[9].title }} />
		</div>
		<div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[10].image} alt="section2Pic"/>
		  <Link to="/International3" dangerouslySetInnerHTML={{ __html: props.articles[10].title }} />
		</div>
		<div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[11].image} alt="section2Pic"/>
		  <Link to="/International3" dangerouslySetInnerHTML={{ __html: props.articles[11].title }} />
		</div>
	  </section>
	</div>
  );
};

International.propTypes = {
	articles: PropTypes.array.isRequired
}

export default International;