import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

import { SignIn } from 'services/http/SignIn';

import Button from 'components/Button';
import Form from 'components/Form';
import Input from 'components/Input';

import * as S from './styles';

const Login = () => {
  const [userName, setUserName] = useState(process.env.NEXT_PUBLIC_USER_NAME);
  const [password, setPassword] = useState(
    process.env.NEXT_PUBLIC_USER_PASSWORD
  );

  const { push } = useRouter();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const isLogged = await SignIn(userName, password);

    if (isLogged) {
      push('/dashboard');
    }
  }

  return (
    <S.Container>
      <Form onSubmit={handleSubmit}>
        <Input
          name="user"
          placeholder="User Name"
          type="text"
          defaultValue={userName}
          onChange={(event) => setUserName(event.target.value)}
        />

        <Input
          name="password"
          placeholder="Password"
          defaultValue={password}
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button type="submit">Enter</Button>
      </Form>
    </S.Container>
  );
};

export default Login;
