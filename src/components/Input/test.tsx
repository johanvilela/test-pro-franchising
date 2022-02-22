import { screen } from '@testing-library/react';

import { renderWithTheme } from '../../utils/tests/helpers';

import Input from '.';

describe('<Input />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Input />);

    expect(
      screen.getByRole('heading', { name: /Input/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
