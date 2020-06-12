const getThemeColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme

  if (theme === "light") return "#EBEBEB"
  if (theme === "dark") return "#16202c"
}

export default getThemeColor
