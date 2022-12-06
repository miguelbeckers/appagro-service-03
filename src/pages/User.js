import { React } from 'react'
import { Button, Form, Input, Radio } from 'antd';
import './User.css'

function User() {
  const onFinish = (values) => {
    console.log(values)
  };

  return <div className='user-page'>
    <Form
      name="signup-form"
      onFinish={onFinish}
      layout={{
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      }}
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
        >
          Cadastrar
        </Button>
      </Form.Item>
    </Form>
  </div>
}

export default User;