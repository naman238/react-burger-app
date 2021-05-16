import React from 'react'
import {configure,shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'

configure({adapter:new Adapter()})

describe('<NavItems/>',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<NavigationItems/>);
    })
    it('render two <navitems> elements if not auth',()=>{
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });
    it('render three <navitems> elements if  auth',()=>{
        wrapper.setProps({isAuthenticated:true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });
    it('should have an exact logout',()=>{
        wrapper.setProps({isAuthenticated:true});
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });
})
