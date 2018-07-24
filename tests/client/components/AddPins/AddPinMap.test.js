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

test('renders a map', () => {
  const wrapper = shallow(<RealMap dispatch = {mockFn} />)
  expect(wrapper.find(Map).length).toEqual(1)
})

test('state changes', () => {
  const wrapper = shallow(<RealMap dispatch = {mockFn} />)
  expect(wrapper.state('lat')).toEqual('')
  wrapper.setState({lat: '808'})
  expect(wrapper.state('lat')).toEqual('808')
})

// test('onclick fires', () => {
//   const 
//   const wrapper = shallow(<RealMap />)
//   expect(wrapper.find('addMarker').length).toEqual(0)
//   wrapper.find('Map').simulate('click')
//   expect(wrapper.find('addMarker').length).toEqual(1)
// })
