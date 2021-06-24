import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useParams } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import DrinkPage from "./components/DrinkPage";
import HomePage from "./components/HomePage";
import ItemPage from "./components/ItemPage";

function App() {
  const dispatch = useDispatch();
	let { drinkId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreSessionUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route exact path="/drinks">
						<DrinkPage />
					</Route>
					<Route exact path="/drinks/add">
						<DrinkPage />
					</Route>
					<Route exact path="/drinks/:id">
						<ItemPage />
					</Route>
        </Switch>
      )}
    </>
  );
}

export default App;