import React from 'react'
import connect from 'react-redux'
import getPinInfo from '../actions/mapping'

class ViewAreas extends React.Component {
  componentDidMount() {
    this.props.dispatch(getPinInfo())
  }

  render () {
    return (
      <div> 
        
      
      </div>

    )
  }


}

const mapStateToProps = (state) => {
  return {
    pinInfo: state.pinInfo,
    areaInfo: state.areaInfo
  }
}

export default connect(mapStateToProps) (ViewAreas)