import { FormEvent, useState } from 'react';

import { userSign } from 'services/http/post';

import Button from 'components/Button';
import Form from 'components/Form';
import Input from 'components/Input';

import * as S from './styles';

const Login = () => {
  const [userName, setUserName] = useState(
    'a5d4eff8-d210-4214-b0a3-5863547fe028@profranchising.com.br'
  );
  const [password, setPassword] = useState(
    'c500f845-cb01-4647-9a73-f5e284768a72'
  );

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await userSign(userName, password);
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
