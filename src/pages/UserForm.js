import { React, useEffect, useState } from 'react'
import { Button, Form, Input, Radio } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserByToken, updateUser, getUserById } from "../store/actions/userAction";
import './UserForm.css'

function UserForm() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const loading = useSelector(state => state.user.current.loading);
  const current = useSelector(state => state.user.current.data);
  const logged = useSelector(state => state.user.logged.data);

  const [edited, setEdited] = useState("");

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (edited === logged.id) {
      dispatch(getUserByToken());
    }
  }, [dispatch, edited, logged]);

  const onFinish = (values) => {
    dispatch(updateUser(values, id));
    setEdited(current.id);
  };

  return <div className='user-form'>
    <div className='content'>
      <Form
        name="basic"
        initialValues={{
          name: current.name,
          username: current.username,
          userType: current.userType,
        }}
        requiredMark={false}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label="Nome"
          name="name"
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
          label="Usuário"
          name="username"
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
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
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
            <Radio.Button value="USER">USER</Radio.Button>
            <Radio.Button value="ADMIN">ADMIN</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            icon={<SaveOutlined />}
            loading={loading}
          >
            Salvar
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
}

export default UserForm;