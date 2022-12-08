import { React, useEffect, useState } from 'react'
import { Avatar, Descriptions, Button, Menu } from 'antd';
import { UserOutlined, EditOutlined, DeleteOutlined, PushpinOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, Navigate } from "react-router-dom";
import { getUserById, deleteUser, logout } from '../store/actions/userAction';
import './User.css'

function User() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const loading = useSelector(state => state.user.current.loading);
  const current = useSelector(state => state.user.current.data);
  const logged = useSelector(state => state.user.logged.data);

  const [deleted, setDeleted] = useState("");

  useEffect(() => {
    if (!current.id) {
      dispatch(getUserById(id));
    }
  }, [dispatch, current, id]);

  useEffect(() => {
    if (!current.id && deleted == logged.id) {
      dispatch(logout());
    } else {
      <Navigate to="/map" />
    }
  }, [dispatch, current, logged, id]);

  const onDelete = () => {
    dispatch(deleteUser(id));
    setDeleted(current.id);
  }

  return <div className='user-profile'>
    <Avatar size={150} icon={<UserOutlined />} shape="square" />
    <div className='content'>
      <Descriptions
        column={1}
        title={<h2>{current.name}</h2>}
        extra={
          <Link to={`/user/${current.id}/edit`}>
            <Button icon={<EditOutlined />} loading={loading}>
              Editar
            </Button>
          </Link>
        }
      >
        <Descriptions.Item label="Usuário">{current.username}</Descriptions.Item>
        <Descriptions.Item label="Tipo">{current.userType}</Descriptions.Item>
        <Descriptions.Item label="Criado em">{current.createdAt}</Descriptions.Item>
        <Descriptions.Item label="Editado em">{current.updatedAt}</Descriptions.Item>
      </Descriptions>

      <Menu mode="vertical" style={{ border: "1px solid white" }}>
        <Link to={"/map"}>
          <Menu.Item icon={<PushpinOutlined />}>Ver áreas</Menu.Item>
        </Link>
        <Menu.Item
          danger={true}
          icon={<DeleteOutlined />}
          onClick={onDelete}
        >
          Excluir conta
        </Menu.Item>
      </Menu>
    </div>
  </div>
}

export default User;