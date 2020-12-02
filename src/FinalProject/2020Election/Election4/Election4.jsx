import React from "react";
import PropTypes from "prop-types";
import styles from "./Election4.module.css";
import {Link} from "react-router-dom"
const Election4 = (props) => {

  return (
    <div className={styles.wrapper}>
	<article className={styles.article}>
	  <header className={styles.header}>
        <h1>{props.articles[3].title}</h1>  
        <address>{props.articles[3].author}</address>
        <time dateTime={props.articles[3].timeStamp}>{props.articles[3].pubDate}</time>
	  </header>
	  <div className={styles.content}>
	  <img className={styles.pic} src={props.articles[3].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[3].text }}/>
	  </div>
	</article>
	<ul className={styles.newsList}>
	  <li>
	    <div className={styles.top}>Top Stories</div>
	    <img className={styles.section1Pic} src={props.articles[1].image} alt="section1Pic"/>
	    <Link to="/Election2" dangerouslySetInnerHTML={{ __html: props.articles[1].title }} />
		<time dateTime={props.articles[1].timeStamp}>{props.articles[1].pubDate}</time>
	  </li>
	  <li>
	    <img className={styles.section1Pic} src={props.articles[2].image} alt="section1Pic"/>
	    <Link to="/Election3" dangerouslySetInnerHTML={{ __html: props.articles[2].title }} />
		<time dateTime={props.articles[2].timeStamp}>{props.articles[2].pubDate}</time>
	  </li>
	  <li>
	    <img className={styles.section1Pic} src={props.articles[0].image} alt="section1Pic"/>
	    <Link to="/Election1" dangerouslySetInnerHTML={{ __html: props.articles[0].title }} />
		<time dateTime={props.articles[0].timeStamp}>{props.articles[0].pubDate}</time>
	  </li>
	</ul>
	</div>
  );
};

Election4.propTypes = {
	articles: PropTypes.array.isRequired
}
export default Election4;
