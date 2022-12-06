import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createUser, login } from "../store/actions/userAction";
import "./SignUp.css";

function SignUp() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.user.current.loading);
  const user = useSelector(state => state.user.current.data);

  const [password, setPassoword] = useState("");

  useEffect(() => {
    if (user.id) {
      dispatch(login({
        username: user.username,
        password: password
      }));
    }
  }, [dispatch, user, password]);

  const onFinish = (values) => {
    setPassoword(values.password)
    dispatch(createUser(values));
  };

  return <div className={"signup"}>
    <h1>Cadastre-se em Appagro</h1>
    <div className={"content"}>
      <Form
        name="signup-form"
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          name="name"
          label="Nome"
          rules={[
            {
              required: true,
              message: 'Nome não informado',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="username"
          label="Usuário"
          rules={[
            {
              required: true,
              message: 'Usuário não informado',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Senha"
          rules={[
            {
              required: true,
              message: 'Senha não informada',
            },
          ]}
        >
          <Input.Password type="password" />
        </Form.Item>
        <Form.Item
          name="userType"
          label="Tipo"
          rules={[
            {
              required: true,
              message: 'Tipo não selecionado',
            },
          ]}
        >
          <Radio.Group>
            <Radio.Button value="USER">Usuário</Radio.Button>
            <Radio.Button value="ADMIN">Administrador</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
          >
            Cadastrar
          </Button>
        </Form.Item>
      </Form>
    </div>
    <div>
      Já tem uma conta? <Link to="/login">Entre!</Link>
    </div>
  </div>;
}

export default SignUp;