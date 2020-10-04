import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { Styles } from "./Styles";
import withStyles from "react-jss";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/addon/display/autorefresh";
import "codemirror/addon/comment/comment";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";
import "codemirror/theme/midnight.css";
import "codemirror/theme/material.css";
import "codemirror/theme/neat.css";
import {editorThemes} from './constants';
const Editor = ({
	code = '',
	codeLangauge = "html",
	theme = "material",
	classes,
	keyMap = "sublime",
	onChange = () => {},
}) => { 
  const [codeTheme, setCodeTheme] = useState(theme);
  
  return(
	<div className={classes.main}>
		<div className="heading">
      <h6>{codeLangauge}</h6>
    <select defaultValue={codeTheme} onChange={({target:{value}}) => setCodeTheme(value)}>
    {editorThemes.map((value, key) => (<option key={key} value={value}>{value}</option>))}
    </select>
    </div>
		<CodeMirror
			value={code}
			onChange={(value) =>
				onChange({ value: value.getValue(), key: codeLangauge })
			}
			options={{
				theme: codeTheme,
				smartIndent: true,
				keyMap: keyMap,
				mode: codeLangauge,
			}}
		/>
	</div>
)};

Editor.propTypes = {
	code: PropTypes.any,
	classes: PropTypes.object.isRequired,
	onChange: PropTypes.func,
	codeLangauge: PropTypes.string,
	theme: PropTypes.string,
	keyMap: PropTypes.string,
};

export default withStyles(Styles)(memo(Editor));