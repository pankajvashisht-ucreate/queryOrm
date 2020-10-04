import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import { Styles } from "./Styles";
import { Editor } from "Component";
import { breakQuery } from "utils/helper";
const Home = ({ classes }) => {
	const [query, setQuery] = useState(
		`select * from users where id = 1 and name = 'pankaj' or status = true order by id desc`
	);
	const [result, setReuslt] = useState();
	const handleCode = useCallback(
		({ value }) => {
			setQuery(value);
		},
		[setQuery]
	);
	const convert = () => {
		setReuslt(breakQuery(query));
	};
	return (
		<div className={classes.main}>
			<h5>Query to ORM </h5>
			<div>
				<h6>
					Select Php frameWork{" "}
					<select>
						<option>Laravel</option>
					</select>
				</h6>
			</div>
			<div className={classes.codeEditor}>
				<Editor code={query} codeLangauge="mysql" onChange={handleCode} />
				<div className="button">
					<button onClick={convert}>
						Convert <i className="fa fa-code"></i>
					</button>
				</div>
				<Editor code={result} codeLangauge="php" />
			</div>
		</div>
	);
};

Home.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(Home);
