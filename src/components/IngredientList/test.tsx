import { screen } from '@testing-library/react';

import { renderWithTheme } from '../../utils/tests/helpers';

import IngredientList from '.';

describe('<IngredientList />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<IngredientList />);

    expect(
      screen.getByRole('heading', { name: /IngredientList/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
