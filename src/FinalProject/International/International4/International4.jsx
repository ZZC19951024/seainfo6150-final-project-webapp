import React from "react";
import PropTypes from "prop-types";
import styles from "./International4.module.css";
import {Link} from "react-router-dom"
const International4 = (props) => {

  return (
    <div className={styles.wrapper}>
	<article className={styles.article}>
	  <header className={styles.header}>
        <h1>{props.articles[11].title}</h1>  
        <address>{props.articles[11].author}</address>
        <time dateTime={props.articles[11].timeStamp}>{props.articles[11].pubDate}</time>
	  </header>
	  <div className={styles.content}>
	  <img className={styles.pic} src={props.articles[11].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[11].text }}/>
	  </div>
	</article>
	<ul className={styles.newsList}>
	  <li>
	    <div className={styles.top}>Top Stories</div>
	    <img className={styles.section1Pic} src={props.articles[9].image} alt="section1Pic"/>
	    <Link to="/International2" dangerouslySetInnerHTML={{ __html: props.articles[9].title }} />
		<time dateTime={props.articles[9].timeStamp}>{props.articles[9].pubDate}</time>
	  </li>
	  <li>
	    <img className={styles.section1Pic} src={props.articles[10].image} alt="section1Pic"/>
	    <Link to="/International3" dangerouslySetInnerHTML={{ __html: props.articles[10].title }} />
		<time dateTime={props.articles[10].timeStamp}>{props.articles[10].pubDate}</time>
	  </li>
	  <li>
	    <img className={styles.section1Pic} src={props.articles[8].image} alt="section1Pic"/>
	    <Link to="/International1" dangerouslySetInnerHTML={{ __html: props.articles[8].title }} />
		<time dateTime={props.articles[8].timeStamp}>{props.articles[8].pubDate}</time>
	  </li>
	</ul>
	</div>
  );
};

International4.propTypes = {
	articles: PropTypes.array.isRequired
}
export default International4;
