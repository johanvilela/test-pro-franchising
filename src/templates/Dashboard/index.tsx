import { useRouter } from 'next/router';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

import { getProducts } from 'services/http/getProducts';

import Button from 'components/Button';
import Form from 'components/Form';
import Link from 'components/Link';
import List from 'components/List';

import * as S from './styles';
import { ProductsProps } from './types';

const Dashboard = () => {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [isLoading, setIsloading] = useState(false);

  const fetchProducts = useCallback(async () => {
    setIsloading(true);

    const data = await getProducts();

    setIsloading(false);

    if (!data) return;

    setProducts(data);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // redirect do add product screen
  const { push } = useRouter();
  function handleSubmit(event: FormEvent) {
    event.preventDefault(); // verify

    push('/products/add');
  }

  return (
    <S.Container>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">Add</Button>
        <Link href="/products/add">Add Product</Link>
        {/* <Button>Edit</Button> */}
        {/* <Button>Delete</Button> */}
      </Form>
      {isLoading ? <FaSpinner /> : <List data={products} />}
    </S.Container>
  );
};

export default Dashboard;
