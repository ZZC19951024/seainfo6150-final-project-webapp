import React, { useEffect, useState } from "react";
import { Redirect, Switch, Route, Link } from "react-router-dom";
import { isEmpty } from "lodash";
import logo from "./logo.png"
import "./App.css";
import HomePage from "./FinalProject/HomePage/HomePage.jsx"
import Election1 from "./FinalProject/2020Election/Election1/Election1.jsx"
import Election2 from "./FinalProject/2020Election/Election2/Election2.jsx"
import Election3 from "./FinalProject/2020Election/Election3/Election3.jsx"
import Election4 from "./FinalProject/2020Election/Election4/Election4.jsx"
import Election from "./FinalProject/2020Election/Election.jsx"

import COVID1 from "./FinalProject/COVID-19/COVID1/COVID1.jsx"
import COVID2 from "./FinalProject/COVID-19/COVID2/COVID2.jsx"
import COVID3 from "./FinalProject/COVID-19/COVID3/COVID3.jsx"
import COVID4 from "./FinalProject/COVID-19/COVID4/COVID4.jsx"
import COVID from "./FinalProject/COVID-19/COVID.jsx"

import International1 from "./FinalProject/International/International1/International1.jsx"
import International2 from "./FinalProject/International/International2/International2.jsx"
import International3 from "./FinalProject/International/International3/International3.jsx"
import International4 from "./FinalProject/International/International4/International4.jsx"
import International from "./FinalProject/International/International.jsx"

import Technology1 from "./FinalProject/Technology/Technology1/Technology1.jsx"
import Technology2 from "./FinalProject/Technology/Technology2/Technology2.jsx"
import Technology3 from "./FinalProject/Technology/Technology3/Technology3.jsx"
import Technology4 from "./FinalProject/Technology/Technology4/Technology4.jsx"
import Technology from "./FinalProject/Technology/Technology.jsx"

import Entertainment1 from "./FinalProject/Entertainment/Entertainment1/Entertainment1.jsx"
import Entertainment2 from "./FinalProject/Entertainment/Entertainment2/Entertainment2.jsx"
import Entertainment3 from "./FinalProject/Entertainment/Entertainment3/Entertainment3.jsx"
import Entertainment4 from "./FinalProject/Entertainment/Entertainment4/Entertainment4.jsx"
import Entertainment from "./FinalProject/Entertainment/Entertainment.jsx"

import Political1 from "./FinalProject/Political/Political1/Political1.jsx"
import Political2 from "./FinalProject/Political/Political2/Political2.jsx"
import Political3 from "./FinalProject/Political/Political3/Political3.jsx"
import Political4 from "./FinalProject/Political/Political4/Political4.jsx"
import Political from "./FinalProject/Political/Political.jsx"

import ContactUs from "./FinalProject/ContactUs/ContactUs.jsx"
import AboutUs from "./FinalProject/AboutUs/AboutUs.jsx"
import NotFound from "./FinalProject/404Page/NotFound.jsx"

function App() {

  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("https://run.mocky.io/v3/2b60b4fa-d8d6-4ed4-9147-46e8df811f1c");
      const responseJson = await response.json();
      setFetchedData(Object.values(responseJson));
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
    <div className="App">
	  <ul className="navigation">
	    <li >
		<Link  to="/"><img className="logo" src={logo} alt="Logo"/></Link>
		</li>
		<li className="subTitle">
		<Link  to="/COVID"><h2 >COVID-19</h2></Link>
		</li>
		<li className="subTitle">
		<Link  to="/Election"><h2 >2020 Election</h2></Link>
		</li>
		<li className="subTitle">
		<Link  to="/International"><h2 >International</h2></Link>
		</li>
		<li className="subTitle">
		<Link  to="/Technology"><h2 >Technology</h2></Link>
		</li>
		<li className="subTitle">
		<Link  to="/Entertainment"><h2 >Entertainment</h2></Link>
		</li>
		<li className="subTitle">
		<Link  to="/Political"><h2 >Political</h2></Link>
		</li>
	  </ul>
      <Switch className="content">
        <Route exact path="/"><HomePage articles={fetchedData} /></Route>
		
		<Route exact path="/Election1"><Election1 articles={fetchedData} /></Route>
		<Route exact path="/Election2"><Election2 articles={fetchedData} /></Route>
		<Route exact path="/Election3"><Election3 articles={fetchedData} /></Route>
		<Route exact path="/Election4"><Election4 articles={fetchedData} /></Route>
		<Route exact path="/Election"><Election articles={fetchedData} /></Route>
		
		<Route exact path="/COVID1"><COVID1 articles={fetchedData} /></Route>
		<Route exact path="/COVID2"><COVID2 articles={fetchedData} /></Route>
		<Route exact path="/COVID3"><COVID3 articles={fetchedData} /></Route>
		<Route exact path="/COVID4"><COVID4 articles={fetchedData} /></Route>
		<Route exact path="/COVID"><COVID articles={fetchedData} /></Route>
		
		<Route exact path="/International1"><International1 articles={fetchedData} /></Route>
		<Route exact path="/International2"><International2 articles={fetchedData} /></Route>
		<Route exact path="/International3"><International3 articles={fetchedData} /></Route>
		<Route exact path="/International4"><International4 articles={fetchedData} /></Route>
		<Route exact path="/International"><International articles={fetchedData} /></Route>
		
		<Route exact path="/Technology1"><Technology1 articles={fetchedData} /></Route>
		<Route exact path="/Technology2"><Technology2 articles={fetchedData} /></Route>
		<Route exact path="/Technology3"><Technology3 articles={fetchedData} /></Route>
		<Route exact path="/Technology4"><Technology4 articles={fetchedData} /></Route>
		<Route exact path="/Technology"><Technology articles={fetchedData} /></Route>
		
		<Route exact path="/Entertainment1"><Entertainment1 articles={fetchedData} /></Route>
		<Route exact path="/Entertainment2"><Entertainment2 articles={fetchedData} /></Route>
		<Route exact path="/Entertainment3"><Entertainment3 articles={fetchedData} /></Route>
		<Route exact path="/Entertainment4"><Entertainment4 articles={fetchedData} /></Route>
		<Route exact path="/Entertainment"><Entertainment articles={fetchedData} /></Route>
		
		<Route exact path="/Political1"><Political1 articles={fetchedData} /></Route>
		<Route exact path="/Political2"><Political2 articles={fetchedData} /></Route>
		<Route exact path="/Political3"><Political3 articles={fetchedData} /></Route>
		<Route exact path="/Political4"><Political4 articles={fetchedData} /></Route>
		<Route exact path="/Political"><Political articles={fetchedData} /></Route>
		
		<Route path="/ContactUs"><ContactUs/></Route>
		<Route path="/AboutUs"><AboutUs/></Route>
		<Route path="/404"><NotFound/></Route>
		<Redirect to="/404" />
      </Switch>

    </div>
  );
}


export default App;
