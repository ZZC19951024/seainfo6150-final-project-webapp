import React from "react";
import PropTypes from "prop-types";
import styles from "./Technology1.module.css";
const Technology1 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[12].title}</h1>  
        <address>{props.articles[12].author}</address>
        <time dateTime={props.articles[12].timeStamp}>{props.articles[12].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[12].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[12].text }}/>
	</article>
  );
};

Technology1.propTypes = {
	articles: PropTypes.array.isRequired
}
export default Technology1;
