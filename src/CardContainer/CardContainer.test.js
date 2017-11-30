import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import { shallow, mount } from 'enzyme';

describe('CardContainer test', () => {
  let renderedCardContainer;

  beforeEach( () => {
    renderedCardContainer = shallow(<CardContainer cards={[]}/>);
  });

  it('should render the correct components', () => {
    expect(renderedCardContainer.find('.CardContainer').length).toEqual(1);
  });

  it('should match the CardContainer snapshot', () => {
    expect(renderedCardContainer).toMatchSnapshot();
  });

  it('should render three cards when passed an array with 3 items in it ', () => {
    const mockCards = [
      { Location1: {2000: 0.5, 2001: 1} },
      { Location2: {2000: 0.5, 2001: 1} },
      { Location3: {2000: 0.5, 2001: 1} }
    ];

    renderedCardContainer = shallow(
      <CardContainer 
        comparison={[null, null]} 
        cards={mockCards} />);

    expect(renderedCardContainer.find('Card').length).toEqual(3);
  });
});
