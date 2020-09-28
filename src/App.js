import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Containers/Home/Home";
import Film from "./Containers/Film/Film";
import TV from "./Containers/TV/TV";
import FeatureContainer from "./Containers/FeatureContainer/FeatureContainer";
// import Feature from "./Containers/Feature/Feature";
import TVReview from "./Containers/TVReview/TVReview";
import FilmReview from "./Containers/FilmReview/FilmReview";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/app.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app__body">
          <Route>
            <Switch>
              <Route path="/film/:slug" component={FilmReview} />
              <Route path="/film" component={Film} />
              <Route path="/tv/:slug" component={TVReview} />
              <Route path="/feature/:slug" component={FeatureContainer} />
              {/* <Route path="/feature" component={FeatureContainer} /> */}
              <Route path="/tv" component={TV} />
              <Route path="/" exact component={Home}></Route>
            </Switch>
          </Route>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
