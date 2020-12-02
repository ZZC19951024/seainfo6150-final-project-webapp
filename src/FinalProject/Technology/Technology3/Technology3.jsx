import React from "react";
import PropTypes from "prop-types";
import styles from "./Technology3.module.css";
const Technology3 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[14].title}</h1>  
        <address>{props.articles[14].author}</address>
        <time dateTime={props.articles[14].timeStamp}>{props.articles[14].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[14].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[14].text }}/>
	</article>
  );
};

Technology3.propTypes = {
	articles: PropTypes.array.isRequired
}
export default Technology3;
