import React from "react";
import PropTypes from "prop-types";
import styles from "./Political1.module.css";
const Political1 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[20].title}</h1>  
        <address>{props.articles[20].author}</address>
        <time dateTime={props.articles[20].timeStamp}>{props.articles[20].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[20].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[20].text }}/>
	</article>
  );
};

Political1.propTypes = {
	articles: PropTypes.array.isRequired
}
export default Political1;
