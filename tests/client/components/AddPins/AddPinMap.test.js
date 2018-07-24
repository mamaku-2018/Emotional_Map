import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import {RealMap} from '../../../../client/components/AddPinMap'
configure({adapter: new Adapter()})

const mockFn = jest.fn()
test('<RealMap />', () => {
  const expected = (true)
  const wrapper = shallow(<RealMap dispatch = {mockFn} />)
  const actual = wrapper.find('.addMap').exists()

  expect(actual).toEqual(expected)
})
