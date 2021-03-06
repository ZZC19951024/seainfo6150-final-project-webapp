import React from "react";
import PropTypes from "prop-types";
import styles from "./Entertainment1.module.css";
import {Link} from "react-router-dom"
const Entertainment1 = (props) => {

  return (
    <div className={styles.wrapper}>
	<article className={styles.article}>
	  <header className={styles.header}>
        <h1>{props.articles[16].title}</h1>  
        <address>{props.articles[16].author}</address>
        <time dateTime={props.articles[16].timeStamp}>{props.articles[16].pubDate}</time>
	  </header>
	  <div className={styles.content}>
	  <img className={styles.pic} src={props.articles[16].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[16].text }}/>
	  </div>
	</article>
	<ul className={styles.newsList}>
	  <li>
	    <div className={styles.top}>Top Stories</div>
	    <img className={styles.section1Pic} src={props.articles[17].image} alt="section1Pic"/>
	    <Link to="/Entertainment2" dangerouslySetInnerHTML={{ __html: props.articles[17].title }} />
		<time dateTime={props.articles[17].timeStamp}>{props.articles[17].pubDate}</time>
	  </li>
	  <li>
	    <img className={styles.section1Pic} src={props.articles[18].image} alt="section1Pic"/>
	    <Link to="/Entertainment3" dangerouslySetInnerHTML={{ __html: props.articles[18].title }} />
		<time dateTime={props.articles[18].timeStamp}>{props.articles[18].pubDate}</time>
	  </li>
	  <li>
	    <img className={styles.section1Pic} src={props.articles[19].image} alt="section1Pic"/>
	    <Link to="/Entertainment4" dangerouslySetInnerHTML={{ __html: props.articles[19].title }} />
		<time dateTime={props.articles[19].timeStamp}>{props.articles[19].pubDate}</time>
	  </li>
	</ul>
	</div>
  );
};

Entertainment1.propTypes = {
	articles: PropTypes.array.isRequired
}
export default Entertainment1;
