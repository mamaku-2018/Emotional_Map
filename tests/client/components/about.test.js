import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {About} from '../../../../client/components/About'

configure({adapter: new Adapter()})

test('<About />', () => {
  const expected = (true)
  const wrapper = shallow(<About />)
  const actual = wrapper.find('.carousel slide').exists()

  expect(actual).toEqual(expected)
})
