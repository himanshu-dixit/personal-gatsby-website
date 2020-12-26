export enum GLOBAL_CSS_VAR_LIGHT   {
  heroBackground= " linear-gradient(0deg, #E9F8FF, #E9F8FF)",
  waveBackground = "#fff",
  primaryBackground= "#fff",
  primary = 'black',
  contentContainerWidth= "1080px"
}

export enum GLOBAL_CSS_VAR_DARK {
  heroBackground= "linear-gradient(129.35deg, #0E0F14 0.97%, #0B1115 72.53%)",
  waveBackground = "#090C0F",
  primaryBackground=  "#090C0F",
  primary = 'yellow',
  contentContainerWidth= "1080px"
}

export const convertThemeObjectToStyle = (object)=>{
  return Object.keys(object).map((key)=>`--${key}: ${object[key]}`).join(';')
}
