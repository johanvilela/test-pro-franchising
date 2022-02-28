import Button from 'components/Button';
import Form from 'components/Form';
import Input from 'components/Input';

import * as S from './styles';

const Add = () => {
  const exampleImageUrl =
    'http://s2.glbimg.com/P6Nn4AXYPq-K1Xek4cCKyONYYyA=/e.glbimg.com/og/ed/f/original/2014/01/15/cafe.jpg';
  return (
    <S.Container>
      <Form>
        <h3>Add Product</h3>

        <Input
          name="image-url"
          placeholder="Image URL"
          type="text"
          // defaultValue={exampleImageUrl}
        ></Input>

        <Input
          name="product-name"
          placeholder="Product Name"
          type="text"
        ></Input>

        <Input name="product-price" placeholder="Price" type="text"></Input>

        <h4>Ingredients List</h4>

        <ul>
          <li>
            <Input
              name="ingredient-name"
              placeholder="Ingredient Name"
              type="text"
            ></Input>

            <Input
              name="ingredient-quantity"
              placeholder="Ingredient Quantity"
              type="text"
            ></Input>

            <Input
              name="ingredient-cost"
              placeholder="Ingredient Cost"
              type="text"
            ></Input>
          </li>
        </ul>

        <Button>Add Ingredient</Button>

        <Button>Add Product</Button>
      </Form>
    </S.Container>
  );
};

export default Add;
