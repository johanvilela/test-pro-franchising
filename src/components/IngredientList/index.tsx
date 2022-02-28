import DataTable from 'react-data-table-component';

import { IngredientsProps } from 'templates/Dashboard/types';

import * as S from './styles';

type IngredientListProps = {
  data: any;
};

const columns = [
  {
    name: 'Ingredient',
    selector: (row: IngredientsProps) => row.name
  },
  {
    name: 'Quantity',
    selector: (row: IngredientsProps) => row.quantity
  },

  {
    name: 'Price',
    selector: (row: IngredientsProps) => row.cost
  }
];

const IngredientList = ({ data }: IngredientListProps) => {
  return (
    <S.Container>
      <DataTable
        // title="ingredients"
        dense
        // noTableHead
        columns={columns}
        data={data}
      />
    </S.Container>
  );
};

export default IngredientList;
