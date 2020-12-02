import React from "react";
import PropTypes from "prop-types";
import styles from "./Political3.module.css";
const Political3 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[22].title}</h1>  
        <address>{props.articles[22].author}</address>
        <time dateTime={props.articles[22].timeStamp}>{props.articles[22].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[22].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[22].text }}/>
	</article>
  );
};

Political3.propTypes = {
	articles: PropTypes.array.isRequired
}
export default Political3;
