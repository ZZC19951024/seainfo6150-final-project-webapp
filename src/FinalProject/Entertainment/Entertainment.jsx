import React from "react";
import PropTypes from "prop-types";
import styles from "./Entertainment.module.css";
import {Route,Switch, Link} from "react-router-dom"

const Entertainment = (props) => {
  let right;
  if (props.articles.length){
	  right = (
      <ul className={styles.right}>
        {props.articles.slice(16,20).map((article) => (
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
		<img className={styles.section1Pic} src={props.articles[16].image} alt="section1Pic"/>
		<Link to="/Entertainment1" dangerouslySetInnerHTML={{ __html: props.articles[16].shortText }} />
		</div>
		{right}
	  </section>
	  <section className={styles.section2}>
	    <div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[16].image} alt="section2Pic"/>
		  <Link to="/Entertainment1" dangerouslySetInnerHTML={{ __html: props.articles[16].title }} />
		</div>
		<div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[17].image} alt="section2Pic"/>
		  <Link to="/Entertainment2" dangerouslySetInnerHTML={{ __html: props.articles[17].title }} />
		</div>
		<div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[18].image} alt="section2Pic"/>
		  <Link to="/Entertainment3" dangerouslySetInnerHTML={{ __html: props.articles[18].title }} />
		</div>
		<div className={styles.section2News}>
		  <img className={styles.section2Pic} src={props.articles[19].image} alt="section2Pic"/>
		  <Link to="/Entertainment3" dangerouslySetInnerHTML={{ __html: props.articles[19].title }} />
		</div>
	  </section>
	</div>
  );
};

Entertainment.propTypes = {
	articles: PropTypes.array.isRequired
}

export default Entertainment;
