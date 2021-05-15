import React, { ReactElement, useEffect, useState } from "react"
import { Theme, ThemeContext } from "../context/theme"
import { css } from "@emotion/react"
import {Helmet} from "react-helmet";
import {
  convertThemeObjectToStyle,
  GLOBAL_CSS_VAR_DARK,
  GLOBAL_CSS_VAR_LIGHT,
} from "../constants/styling"

const transition = css`
  * {
    transition: all 180ms, color 150ms;
  }
`
export const withTheme = (Component: ReactElement): (props) => JSX.Element => {
  return props => {
    const [theme, setTheme] = useState(
      Theme.Dark
    )
    const toggleTheme = () => {
      const nextTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark
      setTheme(nextTheme)
      localStorage.setItem("theme", nextTheme)
    }
    const contextValue = { theme, toggleTheme }

    const cssVariableForTheme = css`
      ${convertThemeObjectToStyle(
        theme === Theme.Dark ? GLOBAL_CSS_VAR_DARK : GLOBAL_CSS_VAR_LIGHT
      )}
    `

    // This for initial hydration. Other logic must be present to initiate things.
    useEffect(()=>{
      const theme =  localStorage.getItem("theme");
      if(theme){
        setTheme(theme)
      }
    },[])


    return (
      <div css={[cssVariableForTheme, transition]}>
        <ThemeContext.Provider value={contextValue}>
          <Component {...props} />
        </ThemeContext.Provider>
      </div>
    )
  }
}
