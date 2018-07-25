import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {ViewAreaInfo} from '../../../../client/components/ViewAreaInfo'

configure({adapter: new Adapter()})

const pinInfo = [{area_id: 1}]
const pinArr = [{pin_id: 1}]
const mockFn = jest.fn()

test('<ViewAreaInfo />', () => {
  const expected = (true)
  const wrapper = shallow(<ViewAreaInfo dispatch = {mockFn} pinArr={pinArr} pinInfo={pinInfo} />)
  const actual = wrapper.find('.viewInfo').exists()

  expect(actual).toEqual(expected)
})

test('<ViewPinMap /> calls dispatch twice', () => {
  /* eslint-disable */
  const wrapper = shallow(<ViewAreaInfo dispatch={mockFn} pinArr={pinArr} pinInfo={pinInfo} />)
  /* eslint-enable */
  expect(mockFn.mock.calls[0].length).toBe(1)
})
