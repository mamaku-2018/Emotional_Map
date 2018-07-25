import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Map} from 'react-leaflet'
import {ViewAreaMap} from '../../../../client/components/ViewAreaMap'

configure({adapter: new Adapter()})
const area = [{area_id: 1}]
const mockFn = jest.fn()
test('<ViewAreaMap />', () => {
  const expected = (true)
  const wrapper = shallow(<ViewAreaMap dispatch = {mockFn} area={area} />)
  const actual = wrapper.find('.map').exists()

  expect(actual).toEqual(expected)
})

test('renders a map', () => {
  const wrapper = shallow(<ViewAreaMap dispatch = {mockFn} area={area} />)
  expect(wrapper.find(Map).length).toEqual(1)
})

test('renders a map', () => {
  const wrapper = shallow(<ViewAreaMap dispatch = {mockFn} area={area}/>)
  expect(wrapper.find(Map).length).toEqual(1)
})
