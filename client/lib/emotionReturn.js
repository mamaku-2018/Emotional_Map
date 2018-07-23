
export function emotionReturn(id) {
  var iconUrl = ""
  switch (id) {
    case 1:
      iconUrl = {
        path: '/images/Happy.png',
        name: 'Happy'
      }
      break
    case 2:
      iconUrl = {
        path: '/images/Sad.png',
        name: 'Sad'
      }
      break
    case 3:
      iconUrl = {
        path: '/images/Mad.png',
        name: 'Mad'
      }
      break
    case 4:
      iconUrl = {
        path: '/images/Scared.png',
        name: 'Scared'
      }
      break
    case 5:
      iconUrl = {
        path: '/images/Powerful.png',
        name: 'Powerful'
      }
      break
    case 6:
      iconUrl = {
        path: '/images/Peaceful.png',
        name: 'Peaceful'
      }
      break
  }
  return iconUrl
}