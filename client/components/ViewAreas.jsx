import React from 'react'
import {connect} from 'react-redux'
import ViewAreaMap from './ViewAreaMap'
import ViewAreaInfo from './ViewAreaInfo'

class ViewAreas extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div>
      <ViewAreaMap/>
      {typeof this.props.areaId === 'number' && <ViewAreaInfo/>}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    areaId: state.areaId,
  }
}
export default connect(mapStateToProps) (ViewAreas)
