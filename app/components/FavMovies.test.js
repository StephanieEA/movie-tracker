import React from 'react';

import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import {Link} from 'react-router';

import FavMovies from './FavMovies';
import {stubMovie} from './testing-stubs/stub-movie';

const allMoviesReducer = {finalFaves: {stubMovie}}

describe('FavMovies', () => {
  it.skip('renders as a section', () => {
    const wrapper = shallow(<FavMovies allMoviesReducer={allMoviesReducer} />)
    expect(wrapper.find('button')).to.have.length(1)
    assert.equal(wrapper.type(), 'div')
  });

  it.skip('renders one link component', () => {
    const wrapper = shallow(<FavMovies allMoviesReducer={allMoviesReducer} />)
    expect(wrapper.find('Link')).to.have.length(1)
  })

  it.skip('renders one button component', () => {
    const wrapper = shallow(<FavMovies allMoviesReducer={allMoviesReducer} />)
    expect(wrapper.find('button')).to.have.length(1)
  })
});
