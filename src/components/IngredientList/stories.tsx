import { Story, Meta } from '@storybook/react/types-6-0';
import IngredientList from '.';

export default {
  title: 'IngredientList',
  component: IngredientList
} as Meta;

export const Default: Story = () => <IngredientList />;
