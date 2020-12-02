import React from "react";
import PropTypes from "prop-types";
import styles from "./Technology1.module.css";
import {Link} from "react-router-dom"
const Technology1 = (props) => {

  return (
    <div className={styles.wrapper}>
	<article className={styles.article}>
	  <header className={styles.header}>
        <h1>{props.articles[12].title}</h1>  
        <address>{props.articles[12].author}</address>
        <time dateTime={props.articles[12].timeStamp}>{props.articles[12].pubDate}</time>
	  </header>
	  <div className={styles.content}>
	  <img className={styles.pic} src={props.articles[12].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[12].text }}/>
	  </div>
	</article>
	<ul className={styles.newsList}>
	  <li>
	    <div className={styles.top}>Top Stories</div>
	    <img className={styles.section1Pic} src={props.articles[13].image} alt="section1Pic"/>
	    <Link to="/Technology2" dangerouslySetInnerHTML={{ __html: props.articles[13].title }} />
		<time dateTime={props.articles[13].timeStamp}>{props.articles[13].pubDate}</time>
	  </li>
	  <li>
	    <img className={styles.section1Pic} src={props.articles[14].image} alt="section1Pic"/>
	    <Link to="/Technology3" dangerouslySetInnerHTML={{ __html: props.articles[14].title }} />
		<time dateTime={props.articles[14].timeStamp}>{props.articles[14].pubDate}</time>
	  </li>
	  <li>
	    <img className={styles.section1Pic} src={props.articles[15].image} alt="section1Pic"/>
	    <Link to="/Technology4" dangerouslySetInnerHTML={{ __html: props.articles[15].title }} />
		<time dateTime={props.articles[15].timeStamp}>{props.articles[15].pubDate}</time>
	  </li>
	</ul>
	</div>
  );
};

Technology1.propTypes = {
	articles: PropTypes.array.isRequired
}
export default Technology1;
