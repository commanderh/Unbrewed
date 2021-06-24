import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useParams } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import DrinkPage from "./components/DrinkPage";
import HomePage from "./components/HomePage";
import ItemPage from "./components/ItemPage";
import { getAllDrinks } from "./store/drinks";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
	const allDrinks = useSelector(state => Object.values(state.drinks))

  useEffect(() => {
    dispatch(sessionActions.restoreSessionUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

	useEffect(() => {
		dispatch(getAllDrinks());
	}, [dispatch])

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route exact path="/drinks">
						<DrinkPage allDrinks={allDrinks}/>
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