import React from 'react'
import {connect} from 'react-redux'
import {getOnePin} from '../actions/pins'

class ViewPinInfo extends React.Component {
  componentDidMount(){
    const id = this.props.match.params.id
    this.props.dispatch(getOnePin(id))
  }

  render () {
    return (
      <div className='ViewPinInfo'>
        <h3>Pin info</h3>
        <p>{this.props.onePinInfo.pin_name}</p>
        <p>{this.props.onePinInfo.last_updated_date}</p>
        <p>{this.props.onePinInfo.emotion_type}</p>
        <p>{this.props.onePinInfo.comment}</p>
        <div className='PinInfo'>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
    console.log(state)
    return {
      onePinInfo: state.onePinInfo
    }
}

export default connect(mapStateToProps)(ViewPinInfo)
