import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import { shallow, mount } from 'enzyme';

describe('Search test', () => {
  let mockFunc;
  let renderedSearch;
  beforeEach(() => {
    mockFunc = jest.fn();
    renderedSearch = shallow(<Search updateQuery={mockFunc}/>);
  });
  it('should render the correct components', () => {
    expect(renderedSearch.find('.Search').length).toEqual(1);
  });

  it('should match the Search snapshot', () => {
    expect(renderedSearch).toMatchSnapshot();
  });

  it('should be instantiated with the default class of Search without the expanded class', () => {
    expect(renderedSearch.state('expanded')).toEqual('Search');
    expect(renderedSearch.find('.Search').length).toEqual(1);
    expect(renderedSearch.find('.expanded').length).toEqual(0);
  });

  it('Should change the class on the container when the search icon is clicked', () => {
    renderedSearch = mount(<Search updateQuery={mockFunc}/>);
    const searchButton = renderedSearch.find('.icon-search');
    searchButton.simulate('click');
    const expectedClass = 'Search expanded';
    expect(renderedSearch.state('expanded')).toEqual(expectedClass);
    expect(renderedSearch.find('.expanded').length).toEqual(1);
    expect(renderedSearch.find('.Search').length).toEqual(1);
  });

  it('Should call the function passed through props on input', () => {
    renderedSearch = mount(<Search updateQuery={mockFunc} />);
    renderedSearch.find('input').simulate('change', { target: {value: 'a'}});
    expect(mockFunc.mock.calls.length).toEqual(1);
    renderedSearch.find('input').simulate('change', { target: {value: 'ab'}});
    expect(mockFunc.mock.calls.length).toEqual(2);
  });

  it('Should collapse the search on blur from the input field', () => {
    renderedSearch = mount(<Search updateQuery={mockFunc} />);

    const searchButton = renderedSearch.find('.icon-search');
    searchButton.simulate('click');
    const initialExpectedClass = 'Search expanded';
    const finalExpectedClass = 'Search';

    expect(renderedSearch.state('expanded')).toEqual(initialExpectedClass);
    expect(renderedSearch.find('.expanded').length).toEqual(1);
    renderedSearch.find('input').simulate('blur');
    expect(renderedSearch.state('expanded')).toEqual(finalExpectedClass);
    expect(renderedSearch.find('.expanded').length).toEqual(0);    
  });
});