import React from "react";
import PropTypes from "prop-types";
import styles from "./COVID3.module.css";
const COVID3 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[6].title}</h1>  
        <address>{props.articles[6].author}</address>
        <time dateTime={props.articles[6].timeStamp}>{props.articles[6].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[6].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[6].text }}/>
	</article>
  );
};

COVID3.propTypes = {
	articles: PropTypes.array.isRequired
}
export default COVID3;
