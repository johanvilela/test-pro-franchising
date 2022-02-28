import DataTable from 'react-data-table-component';

import { ProductsProps } from 'templates/Dashboard/types';

import * as S from './styles';

const columns = [
  {
    name: 'Image',
    // selector: row => row.image,
    cell: (row: ProductsProps) => (
      <img height="84px" width="84px" alt={row.name} src={row.image} />
    )
  },
  {
    name: 'Name',
    selector: (row: ProductsProps) => row.name
  },
  {
    name: 'Price',
    selector: (row: ProductsProps) => row.price
  },
  {
    name: 'Ingredients',
    selector: (row: ProductsProps) => (
      <div>
        {row.ingredients.map((item) => (
          <ul key={item.id}>
            <li>
              <strong>name</strong>: {item.name}
            </li>
            <li>
              <strong>cost</strong>: {item.cost}
            </li>
            <li>
              <strong>quantity</strong>: {item.quantity}
            </li>
            <li> </li>
          </ul>
        ))}
      </div>
    )
  }
];

type ListProps = {
  data: ProductsProps[];
};

const List = ({ data }: ListProps) => {
  return (
    <S.Container>
      <DataTable
        // noTableHead
        columns={columns}
        data={data}
        pagination
      />
    </S.Container>
  );
};

export default List;
