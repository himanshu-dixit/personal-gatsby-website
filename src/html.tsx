import React from "react"
import PropTypes from "prop-types"
import { GLOBAL_CSS_VAR_DARK, GLOBAL_CSS_VAR_LIGHT } from "./constants/styling"

const handleStyleHydration = (GLOBAL_CSS_VAR_LIGHT, GLOBAL_CSS_VAR_DARK)=>{
  const convertThemeObjectToStyle = object => {
    return Object.keys(object)
      .map(key => `--${key}: ${object[key]}`)
      .join(";")
  }
  const theme = localStorage.getItem("theme") || 'dark';
  const colors = theme === "dark" ? GLOBAL_CSS_VAR_DARK : GLOBAL_CSS_VAR_LIGHT;
  const cssVarToString = `
    :root{
      ${convertThemeObjectToStyle(colors)}
    }
  `;

  console.log("User theme preference saved loading", theme)
  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = cssVarToString;
  const head = document.head || document.getElementsByTagName('head')[0]
  head.appendChild(style);
}

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>

        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script type="text/javascript" dangerouslySetInnerHTML={{__html: `(${String(handleStyleHydration)})(${JSON.stringify(GLOBAL_CSS_VAR_LIGHT )}, ${JSON.stringify(GLOBAL_CSS_VAR_DARK )})`}}/>
      </head>
      <body {...props.bodyAttributes}>

        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
