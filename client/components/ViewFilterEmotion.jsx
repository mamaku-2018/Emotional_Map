import React from 'react'
import {connect} from 'react-redux'
import {setFileterEmotion, keepPins} from '../actions/pins'

class ViewFilterEmotion extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      emotionType: 0
    }
    this.changeHandler = this.changeHandler.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(keepPins())
  }

  changeHandler (e) {
    this.setState({
      emotionType: e.target.value
    })

    let searchList = this.props.keepPinsInfo
    if (e.target.value === '99') {
      this.props.dispatch(setFileterEmotion(searchList))
    } else {
      let filteredList = searchList.filter(
        pin => pin.emotion_type === Number(e.target.value))
      this.props.dispatch(setFileterEmotion(filteredList))
    }
  }

  render () {
    return (
      <div className='ViewFilterEmotion'>
        <label>Emotion:
          <select value={this.state.value} onChange={this.changeHandler} name='emotionType'>
            <option value='1'>Joyful</option>
            <option value='2'>Sad</option>
            <option value='3'>Mad</option>
            <option value='4'>Scared</option>
            <option value='5'>Powerful</option>
            <option value='6'>Peaceful</option>
            <option value='99'>ALL</option>
          </select>
          <br />
        </label>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    pinInfo: state.pinInfo,
    keepPinsInfo: state.keepPinsInfo
  }
}

export default connect(mapStateToProps)(ViewFilterEmotion)
