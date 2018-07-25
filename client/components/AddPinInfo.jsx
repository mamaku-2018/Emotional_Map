import React from 'react'
import {connect} from 'react-redux'
import {addPin, receivePinColour, removePinForm} from '../actions/pins'
import {Redirect} from 'react-router-dom'
import {isPolygon} from '../lib/isPolygon'
import {getAreas} from '../actions/areas'

export class AddPinInfo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      emotionType: 0,
      comment: '',
      areaId: 0,
      redirect: false
    }

    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
    this.closeFrom = this.closeFrom.bind(this)
  }
  componentDidMount () {
    this.props.dispatch(getAreas())
  }

  closeFrom () {
    this.props.dispatch(removePinForm(true))
  }
  changeHandler (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    if (e.target.name === 'emotionType') {
      this.props.dispatch(receivePinColour(e.target.value))
    }
  }
  submitHandler () {
    const areaId = isPolygon(this.props.pinPosition.lat, this.props.pinPosition.lng, this.props.area)
    const pin = {
      lat: this.props.pinPosition.lat,
      long: this.props.pinPosition.lng,
      name: this.state.name,
      emotionType: this.state.emotionType,
      comment: this.state.comment,
      areaId: areaId
    }

    this.props.dispatch(addPin(pin))
    this.setState({redirect: true})
  }
  render () {
    if (this.state.redirect) {
      return (
        <Redirect to='/view' />
      )
    } else {
      return (
        <div className='inputPin'>
          <div className='AddPinClose'>
            <button className='button' onClick={this.closeFrom}><img src='/images/close.png' className='closeIcon'/></button>
          </div>
          <h3>share your street feel</h3>
          <div className='InputPinForm'>
            <label>name:</label>
            <input onChange={this.changeHandler} name='name' placeholder='name your experience'/>
            <label>feeling:
              <select value={this.state.value} onChange={this.changeHandler} name='emotionType'>
                <option value='1'>happy</option>
                <option value='2'>sad</option>
                <option value='3'>mad</option>
                <option value='4'>scared</option>
                <option value='5'>powerful</option>
                <option value='6'>peaceful</option>
              </select>
            </label>
            <br />
            <label>musings:</label>
            <input onChange={this.changeHandler} name='comment' placeholder='share your experience'/>
            <button className='button' onClick={this.submitHandler}>SUBMIT</button>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    area: state.areasInfo,
    pinPosition: state.pinPosition
  }
}

export default connect(mapStateToProps)(AddPinInfo)
