import React from "react";
import PropTypes from "prop-types";
import styles from "./Political1.module.css";
import {Link} from "react-router-dom"
const Political1 = (props) => {

  return (
    <div className={styles.wrapper}>
	<article className={styles.article}>
	  <header className={styles.header}>
        <h1>{props.articles[20].title}</h1>  
        <address>{props.articles[20].author}</address>
        <time dateTime={props.articles[20].timeStamp}>{props.articles[20].pubDate}</time>
	  </header>
	  <div className={styles.content}>
	  <img className={styles.pic} src={props.articles[20].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[20].text }}/>
	  </div>
	</article>
	<ul className={styles.newsList}>
	  <li>
	    <div className={styles.top}>Top Stories</div>
	    <img className={styles.section1Pic} src={props.articles[21].image} alt="section1Pic"/>
	    <Link to="/Political2" dangerouslySetInnerHTML={{ __html: props.articles[21].title }} />
		<time dateTime={props.articles[21].timeStamp}>{props.articles[21].pubDate}</time>
	  </li>
	  <li>
	    <img className={styles.section1Pic} src={props.articles[22].image} alt="section1Pic"/>
	    <Link to="/Political3" dangerouslySetInnerHTML={{ __html: props.articles[22].title }} />
		<time dateTime={props.articles[22].timeStamp}>{props.articles[22].pubDate}</time>
	  </li>
	  <li>
	    <img className={styles.section1Pic} src={props.articles[23].image} alt="section1Pic"/>
	    <Link to="/Political4" dangerouslySetInnerHTML={{ __html: props.articles[23].title }} />
		<time dateTime={props.articles[23].timeStamp}>{props.articles[23].pubDate}</time>
	  </li>
	</ul>
	</div>
  );
};

Political1.propTypes = {
	articles: PropTypes.array.isRequired
}
export default Political1;
