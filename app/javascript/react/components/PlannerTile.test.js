import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PlannerTile from './PlannerTile'
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

describe("PlannerTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <PlannerTile
          key={1}
          id={1}
          title='South Korea trip'
          description='Going to Gangnam!'
          name='Ben'
        />
      </BrowserRouter>
    )
  });

  it('should render an p element containing the title', () => {
    expect(wrapper.find('#title').text()).toBe('South Korea trip')
  });

  it('should render an p element containing the description', () => {
    expect(wrapper.find('#description').text()).toBe('Going to Gangnam!')
  });
});
