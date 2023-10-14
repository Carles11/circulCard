type ThemeSetter = {
  themeName: string
  setClassName: React.Dispatch<React.SetStateAction<string>>
}

function setTheme({ themeName, setClassName }: ThemeSetter) {
  try {
    localStorage.setItem('theme', themeName)
    setClassName(themeName)
  } catch (error) {
    console.error('Error setting theme:', error)
    // Handle the error as needed
  }
}

function keepTheme({ setClassName }: ThemeSetter) {
  const theme = localStorage.getItem('theme')
  if (theme) {
    setTheme({ themeName: theme, setClassName }) // Pass as an object with themeName and setClassName
    return
  }

  const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)')
  if (prefersLightTheme.matches) {
    setTheme({ themeName: 'theme-light', setClassName }) // Pass as an object with themeName and setClassName
    return
  }

  setTheme({ themeName: 'theme-dark', setClassName }) // Pass as an object with themeName and setClassName
}

module.exports = {
  setTheme,
  keepTheme,
}
