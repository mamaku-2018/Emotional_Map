import React from 'react'
import {connect} from 'react-redux'
import

class ViewPinInfo extends React.Component {
  componentDidMount(){

  }

  render () {
    return (
      <div className='ViewPinInfo'>
        <h3>Pin info</h3>
        <div className='PinInfo'>
          <p>{this.state.name}</p>
          <p>{this.state.emotion}</p>
          <p>{this.state.comment}</p>
          <p>{this.state.date}</p>

        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
    return {
      pinInfo: state.pinInfo
    }
}

export default connect(mapStateToProps)(ViewPinInfo)
