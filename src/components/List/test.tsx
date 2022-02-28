import { screen } from '@testing-library/react';

import { renderWithTheme } from '../../utils/tests/helpers';

import List from '.';

describe('<List />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<List />);

    expect(
      screen.getByRole('heading', { name: /List/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
