import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "react-jss";
import WebTheme from "Theme";
import Home from "View/Home";
import "./App.css";

function App() {
	return (
		<ThemeProvider theme={WebTheme}>
			<BrowserRouter>
				<Switch>
					<Route expact path="/" component={Home} />
					<Route render={() => <div>404</div>} />
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
