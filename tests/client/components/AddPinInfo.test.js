import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import {AddPinInfo} from '../../../client/components/AddPinInfo'
configure({adapter: new Adapter()})

test('<AddPinInfo />', () => {
  const expected = 'Add Pin'

  const wrapper = shallow(<AddPinInfo />)
  const actual = wrapper.find('h3').text()

  expect(actual).toEqual(expected)
})
