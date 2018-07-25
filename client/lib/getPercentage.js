export function getPercentage (pins) {
  let percentInfo = {
    pinTotals: [],
    total: pins.length
  }
  const emotions = ['Happy', 'Sad', 'Mad', 'Scared', 'Powerful', 'Peaceful']
  for (let i = 1; i < 7; i++) {
    let temp = pins.filter(pin => {
      return pin.emotion_type === i
    })
    percentInfo.pinTotals.push({
      total: temp.length,
      emotion: emotions[i],
      key: i
    })
  }
  return percentInfo
}
