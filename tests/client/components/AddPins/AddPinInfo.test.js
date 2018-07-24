import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import {AddPinInfo} from '../../../../client/components/AddPinInfo'
configure({adapter: new Adapter()})

const mockFn = jest.fn()
test('<AddPinInfo />', () => {
  const expected = 'share your street feel'
  const wrapper = shallow(<AddPinInfo dispatch = {mockFn}/>)
  const actual = wrapper.find('h3').text()

  expect(actual).toEqual(expected)
})
