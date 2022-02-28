import { screen } from '@testing-library/react';

import { renderWithTheme } from '../../utils/tests/helpers';

import Link from '.';

describe('<Link />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Link />);

    expect(
      screen.getByRole('heading', { name: /Link/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
