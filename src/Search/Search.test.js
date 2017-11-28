import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import { shallow, mount } from 'enzyme';

describe('Search test', () => {
  it('should render the correct components', () => {
    const mockFunc = jest.fn();
    const renderedSearch = shallow(<Search updateQuery={mockFunc}/>);
    expect(renderedSearch.find('.Search').length).toEqual(1);
  })

  it('should match the Search snapshot', () => {
    const mockFunc = jest.fn();
    const renderedSearch = shallow(<Search updateQuery={mockFunc}/>);
    expect(renderedSearch).toMatchSnapshot();
  })
});