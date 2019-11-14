export const shuffle = list => list
  .map(a => [Math.random(), a])
  .sort((a, b) => a[0] - b[0])
  .map(a => a[1])

export const replace = (string, value) => string.replace('%s', value)
