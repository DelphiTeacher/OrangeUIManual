import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Foo from './index';

describe('<Foo2 />', () => {
  it('render Foo2 with dumi', () => {
    const msg = 'dumi';

    render(<Foo2 title={msg} />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
