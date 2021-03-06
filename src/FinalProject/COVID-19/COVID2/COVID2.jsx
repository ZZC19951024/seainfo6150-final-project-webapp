import React from "react";
import PropTypes from "prop-types";
import styles from "./COVID2.module.css";
import {Link} from "react-router-dom"
const COVID2 = (props) => {

  return (
    <div className={styles.wrapper}>
	<article className={styles.article}>
	  <header className={styles.header}>
        <h1>{props.articles[5].title}</h1>  
        <address>{props.articles[5].author}</address>
        <time dateTime={props.articles[5].timeStamp}>{props.articles[5].pubDate}</time>
	  </header>
	  <div className={styles.content}>
	  <img className={styles.pic} src={props.articles[5].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[5].text }}/>
	  </div>
	</article>
	<ul className={styles.newsList}>
	  <li>
	    <div className={styles.top}>Top Stories</div>
	    <img className={styles.section1Pic} src={props.articles[4].image} alt="section1Pic"/>
	    <Link to="/COVID1" dangerouslySetInnerHTML={{ __html: props.articles[4].title }} />
		<time dateTime={props.articles[4].timeStamp}>{props.articles[4].pubDate}</time>
	  </li>
	  <li>
	    <img className={styles.section1Pic} src={props.articles[6].image} alt="section1Pic"/>
	    <Link to="/COVID3" dangerouslySetInnerHTML={{ __html: props.articles[6].title }} />
		<time dateTime={props.articles[6].timeStamp}>{props.articles[6].pubDate}</time>
	  </li>
	  <li>
	    <img className={styles.section1Pic} src={props.articles[7].image} alt="section1Pic"/>
	    <Link to="/COVID4" dangerouslySetInnerHTML={{ __html: props.articles[7].title }} />
		<time dateTime={props.articles[7].timeStamp}>{props.articles[7].pubDate}</time>
	  </li>
	</ul>
	</div>
  );
};

COVID2.propTypes = {
	articles: PropTypes.array.isRequired
}
export default COVID2;
