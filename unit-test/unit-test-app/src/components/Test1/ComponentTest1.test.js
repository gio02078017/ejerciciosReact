import React from 'react'
import { configure, shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ComponentTest1 from './ComponentTest1'


configure({
  adapter: new Adapter()
})

describe('Probando componente <ComponentTest1 />', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallow(<ComponentTest1 />)
    })

    test('Probando renderizado de componente', () => {

        expect(wrapper.find('h1').html()).toBe('<h1>Introduccion a Unit Testing Component</h1>')
        expect(wrapper.find('h1')).toHaveLength(1)

        // expect(wrapper.html()).toBe('<div><h1>Introduccion a Unit Testing</h1></div>')
    })
})