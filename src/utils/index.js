export const shuffle = list => list
  .map(a => [Math.random(), a])
  .sort((a, b) => a[0] - b[0])
  .map(a => a[1])

export const replace = (string, value) => string.replace('%s', value)

export const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)
