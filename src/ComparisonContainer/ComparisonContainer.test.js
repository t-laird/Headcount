import React from 'react';
import ReactDOM from 'react-dom';
import ComparisonContainer from './ComparisonContainer';
import { shallow, mount } from 'enzyme';

describe('ComparisonContainer test', () => {
  it('should render the correct components', () => {
    const renderedComparisonContainer = shallow(<ComparisonContainer cards={[]} comparison={[null, null]} />);
    expect(renderedComparisonContainer.find('.ComparisonContainer').length).toEqual(1);
  });

  it('should match the ComparisonContainer snapshot', () => {
    const renderedComparisonContainer = shallow(<ComparisonContainer cards={[]} comparison={[null, null]}/>);
    expect(renderedComparisonContainer).toMatchSnapshot();
  });

  it('It should render the correct default cards when not given comparison data', () => {
    const renderedComparisonContainer = mount(<ComparisonContainer cards={[]} comparison={[null, null]} />);
    expect(renderedComparisonContainer.find('Card').length).toEqual(3);
    expect(renderedComparisonContainer.find('.comparison').length).toEqual(2);
    expect(renderedComparisonContainer.find('.compared').length).toEqual(1);
  });

  it('Should render a standard card with a selected class but no middle comparison when passed a single valid comparison', () => {
    const renderedComparisonContainer = mount(<ComparisonContainer cards={[{Colorado: {2003: 0.5, 2004: 0.6}}]} comparison={['Colorado', null]} />);
    expect(renderedComparisonContainer.find('.selected').length).toEqual(1);
    expect(renderedComparisonContainer.find('.comparison').length).toEqual(1);
    expect(renderedComparisonContainer.find('.compared').length).toEqual(1);
  });

  it('Should render two standard cards with the selected class and a middle comparison card when passed two valid comparisons', () => {
    const mockFunc = jest.fn();
    mockFunc.mockReturnValue(true);
    const renderedComparisonContainer = 
      mount(<ComparisonContainer 
        cards={[{Colorado: {2003: 0.5, 2004: 0.6}}, {['ADAMS COUNTY 14']: {2003: 0.5, 2004: 0.6}}]} 
        comparison={['Colorado', 'ADAMS COUNTY 14']} 
        compareCards={mockFunc} 
      />);

    expect(mockFunc.mock.calls.length).toEqual(1);
    expect(renderedComparisonContainer.find('.selected').length).toEqual(2);
    expect(renderedComparisonContainer.find('.comparison').length).toEqual(0);
    expect(renderedComparisonContainer.find('.displayComparedData').length).toEqual(1);
    
  });
});