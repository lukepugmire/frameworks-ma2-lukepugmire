import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import Nav from "./Nav";

function Layout() {
	return (
		<Router>
            <Nav/>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/contact" component={Contact} />
				</Switch>
		</Router>
	);
}

export default Layout;