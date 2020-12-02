import React from "react";
import PropTypes from "prop-types";
import styles from "./COVID4.module.css";
const COVID4 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[7].title}</h1>  
        <address>{props.articles[7].author}</address>
        <time dateTime={props.articles[7].timeStamp}>{props.articles[7].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[7].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[7].text }}/>
	</article>
  );
};

COVID4.propTypes = {
	articles: PropTypes.array.isRequired
}
export default COVID4;
