
export function emotionReturn(id) {
  var iconUrl = ""
  switch (id) {
    case 1:
      iconUrl = '/images/Happy.png'
      break
    case 2:
      iconUrl = '/images/Sad.png'
      break
    case 3:
      iconUrl = '/images/Mad.png'
      break
    case 4:
      iconUrl = '/images/Scared.png'
      break
    case 5:
      iconUrl = '/images/Powerful.png'
      break
    case 6:
      iconUrl = '/images/Peaceful.png'
      break
  }
  return iconUrl
}