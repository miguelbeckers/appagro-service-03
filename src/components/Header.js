import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Dropdown, Menu } from "antd";
import { LogoutOutlined, UserOutlined, ProfileOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/userAction";
import "./Header.css";

const { Item } = Menu;

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.logged.data);

  const onLogout = () => {
    dispatch(logout());
  };

  const menu = (
    <Menu mode="vertical">
      <Link to={`/user/${user.username}`}>
        <Item icon={<ProfileOutlined/>}>Perfil</Item>
      </Link>
      <Item icon={<LogoutOutlined />} onClick={onLogout}>Logout</Item>
    </Menu>
  );

  const userInfo = (
    <div className={"user"}>
      <p>{user.name}</p>
      <Avatar
        className={"avatar"}
        shape="round"
        icon={<UserOutlined />}
      />
    </div>
  );

  return <div className="header">
    <div className="content">
      <Link to="/" className="logo">
        <h2>Appagro</h2>
      </Link>
      <div className="actions">
        <Dropdown
          overlay={menu}
          placement="bottomCenter"
          trigger={"click"}
          arrow
        >
          {userInfo}
        </Dropdown>
      </div>
    </div>
  </div>;
}

export default Header;