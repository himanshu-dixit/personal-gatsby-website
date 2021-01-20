export enum GLOBAL_CSS_VAR_LIGHT {
  heroBackground = " linear-gradient(0deg, #E9F8FF, #E9F8FF)",
  waveBackground = "#fff",
  primaryBackground = "#fff",
  primary = "black",
  contentContainerWidth = "1080px",
  heroPrimaryTextColor = "#1D2022",
  heroLogoFill = "#1D2022",
  speakerIdealColor = "#3A434B",
  speakerSelectedColor = "#3A434B",
  bookmarkIdealColor = "#3A434B",
  bookmarkSelectedColor = "#00C4EB",
  themeSwitchContainer = "#29333B",
  themeSwitchButton = "#F2F2F2",
  themeSwitchSun = "#0C1115",
  makeText = "#00C4EB",
  breakText = "#FA2F90",
  linkText = "#00C4EB",
  playerIcon1 = "#FF46B5",
  playerIcon2 = "#46FFB1",
  playerIcon3 = "#46F4FF",
}

export enum GLOBAL_CSS_VAR_DARK {
  heroBackground = "linear-gradient(129.35deg, #0E0F14 0.97%, #0B1115 72.53%)",
  waveBackground = "#090C0F",
  primaryBackground = "#090C0F",
  primary = "yellow",
  contentContainerWidth = "1080px",
  heroPrimaryTextColor = "#FFFFFF",
  heroLogoFill = "#FFFFFF",
  speakerIdealColor = "#3A434B",
  speakerSelectedColor = "#3A434B",
  bookmarkIdealColor = "#3A434B",
  bookmarkSelectedColor = "#00C4EB",
  themeSwitchContainer = "#29333B",
  themeSwitchButton = "#0C1115",
  themeSwitchSun = "#F2F2F2",
  makeText = "#00C4EB",
  breakText = "#FA2F90",
  linkText = "#00C4EB",
  playerIcon1 = "#FF46B5",
  playerIcon2 = "#46FFB1",
  playerIcon3 = "#46F4FF",
}

export const convertThemeObjectToStyle = object => {
  return Object.keys(object)
    .map(key => `--${key}: ${object[key]}`)
    .join(";")
}
