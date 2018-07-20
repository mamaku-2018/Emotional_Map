import React from 'react'
import {connect} from 'react-redux'
import {addPin} from '../actions/pins'
import {Redirect} from 'react-router-dom'

export class AddPinForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      emotionType: 0,
      comment: '',
      areaId: 0,
      long: 0,
      lat: 0,
      redirect: false
    }

    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submitHandler () {
    this.props.dispatch(addPin(this.state))
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
          <h3>Add Pin</h3>
          <div className='InputPinForm'>
            <label>Pin name:</label>
            <input onChange={this.changeHandler} name='name' />
            <label>Emotion:
              <select value={this.state.value} onChange={this.changeHandler}>
                <option value='1'>Joyful</option>
                <option value='2'>Sad</option>
                <option value='3'>Mad</option>
                <option value='4'>Scared</option>
                <option value='5'>Powerful</option>
                <option value='6'>Peaceful</option>
              </select>
              <br />
            </label>
            <label>Comments:</label>
            <input onChange={this.changeHandler} name='comment' />
            <button className='button' onClick={this.submitHandler}>SUBMIT</button>
          </div>
        </div>
      )
    }
  }
}

export default connect()(AddPinForm)
