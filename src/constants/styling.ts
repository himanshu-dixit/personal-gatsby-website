export enum GLOBAL_CSS_VAR_LIGHT {
  heroBackground = "#E9F8FF",
  waveBackground = "#fff",
  primaryBackground = "#fff",
  tagsBackground = "#e9f8ff",
  pinkColor = "#FF46B5",
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
  makeText = "#44a2b5",
  breakText = "#FA2F90",
  linkText = "#00C4EB",
  playerIcon1 = "#FF46B5",
  playerIcon2 = "#46FFB1",
  playerIcon3 = "#46F4FF",
  descText = "#5E7D9C",
  desc1Text = "#1D2022",
  newsLetterText = "#869BAD",
  newsLetterInputBackground = "#ffffff",
  newsLetterInputText = "#E7E7E7",
  newsLetterInputBorder = "#95a5b3",
  newsLetterJoinBackground = "linear-gradient(180deg, #FA2F90 0%, #FA2F90 100%);",
  newsLetterJoinBorder = "#ffffff",
  newLabelTextColor = "#969CA3",
  footerCopyrightTextColor = "#253546",
  articleNewsLetterBorderColor = "#253546",
  buttonFollowBorderColor = "#134E59",
  // Upvote sound
  fire01 = "#97aec6",
  fire02 = "#547091",
  fire03 = "#657e96",
  fire11 = "#7F5270 ",
  fire12 = "#7F3464",
  fire13 = "#65194A",
  fire21 = "#CE81B0",
  fire22 = "#CE4E9C",
  fire23 = "#A32271",
  fire31 = "#FF9ED8",
  fire32 = "#FF5FBF",
  fire33 = "#CA2889",
}

export enum GLOBAL_CSS_VAR_DARK {
  heroBackground = "#0E0F14",
  waveBackground = "#090C0F",
  primaryBackground = "#090C0F",
  tagsBackground = "#0B1116",
  pinkColor = "#FF46B5",
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
  descText = "#5E7D9C",
  desc1Text = "#DAD8D8",
  newsLetterText = "#869BAD",
  newsLetterInputBackground = "#1E2831",
  newsLetterInputText = "#E7E7E7",
  newsLetterInputBorder = "#283746",
  newsLetterJoinBackground = "linear-gradient(180deg, #FA2F90 0%, #FA2F90 100%);",
  newsLetterJoinBorder = "#9E1858",
  newLabelTextColor = "#969CA3",
  footerCopyrightTextColor = "#6E7377",
  articleNewsLetterBorderColor = "#253546",
  buttonFollowBorderColor = "#134E59",
  // Upvote sound
  fire01 = "#232C35",
  fire02 = "#1A2027",
  fire03 = "#11171D",
  fire11 = "#7F5270 ",
  fire12 = "#7F3464",
  fire13 = "#65194A",
  fire21 = "#CE81B0",
  fire22 = "#CE4E9C",
  fire23 = "#A32271",
  fire31 = "#FF9ED8",
  fire32 = "#FF5FBF",
  fire33 = "#CA2889",
}

export const convertThemeObjectToStyle = object => {
  return Object.keys(object)
    .map(key => `--${key}: ${object[key]}`)
    .join(";")
}
