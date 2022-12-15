import { React, useEffect, useState } from 'react'
import { Avatar, Descriptions, Button, Menu } from 'antd';
import { UserOutlined, EditOutlined, DeleteOutlined, PushpinOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, Navigate } from "react-router-dom";
import { deleteUser, logout, getUserByUsername } from '../store/actions/userAction';
import './User.css'

function User() {
  const dispatch = useDispatch();
  const { username } = useParams();

  const loading = useSelector(state => state.user.current.loading);
  const current = useSelector(state => state.user.current.data);
  const logged = useSelector(state => state.user.logged.data);

  const createdAt = current.id ? new Date(current.createdAt).toLocaleString() : null;
  const updatedAt = current.id ? new Date(current.updatedAt).toLocaleString() : null;

  const [deleted, setDeleted] = useState("");

  useEffect(() => {
    dispatch(getUserByUsername(username));
  }, [dispatch, username]);

  useEffect(() => {
    if (!current.id && deleted === logged.id) {
      dispatch(logout());
    } else {
      <Navigate to="/map" />
    }
  }, [dispatch, current, logged, deleted]);

  const onDelete = () => {
    dispatch(deleteUser(current.id));
    setDeleted(current.id);
  }

  return <div className='user-profile'>
    <Avatar size={150} icon={<UserOutlined />} shape="square" />
    <div className='content'>
      <Descriptions
        column={1}
        title={<h2>{current.name}</h2>}
        extra={
          <Link to={`/user/${current.username}/form`}>
            <Button icon={<EditOutlined />} loading={loading}>
              Editar
            </Button>
          </Link>
        }
      >
        <Descriptions.Item label="Usuário">{current.username}</Descriptions.Item>
        <Descriptions.Item label="Tipo">{current.userType}</Descriptions.Item>
        <Descriptions.Item label="Criado em">{createdAt}</Descriptions.Item>
        <Descriptions.Item label="Editado em">{updatedAt}</Descriptions.Item>
      </Descriptions>

      <Menu mode="vertical" style={{ border: "1px solid white" }}>
        <Link to={`/user/${current.username}/areas`}>
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