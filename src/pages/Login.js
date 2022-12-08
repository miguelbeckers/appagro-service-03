import React from "react";
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../store/actions/userAction";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(login(values));
  };

  return <div className={"login"}>
    <h1>Entre em Appagro</h1>
    <div className={"content"}>
      <Form
        name="login-form"
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Usuário não informado',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Usuário"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Senha não informada',
            },
          ]}
        >
          <Input.Password
            placeholder="Senha"
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Entrar
          </Button>
        </Form.Item>
      </Form>
    </div>
    <div>
      Ainda não tem uma conta? <Link to="/signup">Cadastre-se!</Link>
    </div>
  </div>;
}

export default Login;