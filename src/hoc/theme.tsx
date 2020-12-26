import React, { ReactElement, useState } from "react"
import { Theme, ThemeContext } from "../context/Theme"
import { css } from "@emotion/react"
import { convertThemeObjectToStyle, GLOBAL_CSS_VAR_DARK, GLOBAL_CSS_VAR_LIGHT } from "../constants/styling"


export const withTheme = (Component: ReactElement):ReactElement=>{
  return (props) => {
    const [theme, setTheme] = useState(Theme.Light)
    const toggleTheme = ()=>{
      theme === Theme.Dark ? setTheme(Theme.Light) : setTheme(Theme.Dark)
    }
    const contextValue = {theme, toggleTheme};

    const themeStyle = css`
     ${convertThemeObjectToStyle(theme === Theme.Dark? GLOBAL_CSS_VAR_DARK : GLOBAL_CSS_VAR_LIGHT)}
    `

    return (
      <div css={themeStyle}>
      <ThemeContext.Provider value={contextValue}>
        <Component {...props}/>
      </ThemeContext.Provider>
    </div>
    )
  }
}