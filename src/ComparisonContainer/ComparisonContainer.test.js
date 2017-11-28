import React from 'react';
import ReactDOM from 'react-dom';
import ComparisonContainer from './ComparisonContainer';
import { shallow, mount } from 'enzyme';

describe('ComparisonContainer test', () => {
  it('should render the correct components', () => {
    const renderedComparisonContainer = shallow(<ComparisonContainer cards={[]}/>);
    expect(renderedComparisonContainer.find('.ComparisonContainer').length).toEqual(1);
  })

  it('should match the ComparisonContainer snapshot', () => {
    const renderedComparisonContainer = shallow(<ComparisonContainer cards={[]}/>);
    expect(renderedComparisonContainer).toMatchSnapshot();
  })
});