import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {ViewPinMap} from '../../../../client/components/ViewPinMap'
import {Map} from 'react-leaflet'
configure({adapter: new Adapter()})

const pinInfo = [{pin_id: 1}]
const mockFn = jest.fn()

test('<ViewPinMap /> Renders a Map', () => {
  const wrapper = shallow(<ViewPinMap dispatch={mockFn} pinInfo = {pinInfo}/>)
  // expect(mockFn.mock.calls[0].length).toBe(1)
  expect(wrapper.find(Map).length).toEqual(1)
})

test('<ViewPinMap /> calls dispatch twice', () => {
  /* eslint-disable */
  const wrapper = shallow(<ViewPinMap dispatch={mockFn} pinInfo = {pinInfo}/>)
  /* eslint-enable */
  expect(mockFn.mock.calls[0].length).toBe(1)
})
