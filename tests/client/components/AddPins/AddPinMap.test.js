import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Map} from 'react-leaflet'
import {RealMap} from '../../../../client/components/AddPinMap'
configure({adapter: new Adapter()})

const mockFn = jest.fn()
test('<RealMap />', () => {
  const expected = (true)
  const wrapper = shallow(<RealMap dispatch = {mockFn} />)
  const actual = wrapper.find('.addMap').exists()

  expect(actual).toEqual(expected)
})

test('renders a map', () => {
  const wrapper = shallow(<RealMap dispatch = {mockFn} />)
  expect(wrapper.find(Map).length).toEqual(1)
})

test('onclick fires', () => {
  const wrapper = shallow(<RealMap dispatch = {mockFn} />)
  wrapper.find('Map').simulate('click')
  expect(wrapper.find('.clicks').length).toEqual(1)
})
