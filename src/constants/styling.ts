export const COLORS = {}

export enum GLOBAL_CSS_VAR_LIGHT {
  // Fundamental color
  contentContainerWidth = "1080px",
  heroBackground = "#E9F8FF",
  primaryBackground = "#FFF",
  primaryPink = "#e54aa7",
  primaryBlue = "#40a8d4",
  mainTextColor = "#1D2022",
  mainTextColor01 = "#253546",
  mainTextColor02 = "#253546",
  contrastColor = "#1D2022",

  // Hero header right color
  headerIconColor = "#3A434B",
  themeSwitchContainer = "#29333B",
  themeSwitchButton = "#F2F2F2",
  tagsBackground = "#e9f8ff",

  // Homepage, newsletter background
  newsLetterText = "#818181",
  newsLetterInputBackground = "#ffffff",
  newsLetterInputBorder = "#95a5b3",
  newsLetterJoinBackground = "linear-gradient(180deg, #FA2F90 0%, #FA2F90 100%);",
  newsLetterJoinBorder = "#ffffff",

  scrollBG = "#E9F8FF",
  scrollBorder = "#95a5b3",

  // Homepage, other colors
  proectNewLabel = "#969CA3",

  // Project & Services Page
  tagColor = "#0E0F14",
  tagBackground = "#D6F1FF",
  workNormalBG = "#D6F1FF",
  workNormalBORDER = "#9ec4d7",
  workNormalCOLOR = "#0E0F14",
  blogFollowBorder = "#13a7c4",
  blogJoinBorder = "#d72590",
  likedArticleBorder = "#253546",

  // Upvote color, Don't edit
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
  // Fundamental color
  heroBackground = "#111517",
  primaryBackground = "#0e1011",
  tagsBackground = "#111517",
  contrastColor = "#fff",
  primaryBlue = "#00C4EB",
  primaryPink = "#FF46B5",
  mainTextColor = "#F2F2F2",
  mainTextColor01 = "#DAD8D8",

  scrollBG = "#0a0c0c",
  scrollBorder = "#283746",

  // Hero header right color
  contentContainerWidth = "1080px",
  headerIconColor = "#3A434B",
  themeSwitchContainer = "#29333B",
  themeSwitchButton = "#0C1115",
  newsLetterText = "#869BAD",
  newsLetterInputBackground = "#1E2831",

  newsLetterInputBorder = "#283746",
  newsLetterJoinBackground = "linear-gradient(180deg, #FA2F90 0%, #FA2F90 100%);",
  newsLetterJoinBorder = "#9E1858",
  proectNewLabel = "#969CA3",
  // Upvote sound

  tagColor = "#fff",
  tagBackground = "#0b1218",
  workNormalBG = "#1D2021",
  workNormalBORDER = "#3C535B",
  workNormalCOLOR = "#fff",
  blogFollowBorder = "#13a7c4",
  blogJoinBorder = "#d72590",
  likedArticleBorder = "#191919",

  // Upvote color, Don't edit
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
