import React from 'react'
import Greet from '../components/Greet'
import { mount } from 'enzyme'

describe('components/Greet.tsx', () => {
  it('change greet by onClick event', () => {
    const wrapper = mount(<Greet />)
    expect(wrapper.find('label').text()).toBe('Hi There!')
  })
})