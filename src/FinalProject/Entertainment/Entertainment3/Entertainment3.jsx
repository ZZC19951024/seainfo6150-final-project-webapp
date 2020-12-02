import React from "react";
import PropTypes from "prop-types";
import styles from "./Entertainment3.module.css";
const Entertainment3 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[18].title}</h1>  
        <address>{props.articles[18].author}</address>
        <time dateTime={props.articles[18].timeStamp}>{props.articles[18].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[18].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[18].text }}/>
	</article>
  );
};

Entertainment3.propTypes = {
	articles: PropTypes.array.isRequired
}
export default Entertainment3;
