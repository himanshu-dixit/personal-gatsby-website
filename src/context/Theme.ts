import { createContext, useContext } from "react"

export enum Theme {
  Dark = "dark",
  Light = "light",
}

export type ThemeContextType = {
  value: { theme: Theme; toggleTheme: (Theme: Theme) => void }
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.Dark,
  toggleTheme: (theme: Theme) => {},
})

export const useTheme = () => useContext(ThemeContext)
