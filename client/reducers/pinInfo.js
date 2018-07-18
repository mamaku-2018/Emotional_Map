function companyInfo (state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_COMPANY_INFO':
      return action.pinInfo

    default:
      return state
  }
}

export default companyInfo