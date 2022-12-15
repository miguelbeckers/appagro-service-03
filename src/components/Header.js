import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Dropdown } from "antd";
import { LogoutOutlined, UserOutlined, ProfileOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/userAction";
import "./Header.css";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.logged.data);

  const onLogout = () => {
    dispatch(logout());
  };

  const items = [
    {
      key: '1',
      icon: <ProfileOutlined />,
      label: <Link to={`/user/${user.username}`}>Perfil</Link>,
    },
    {
      key: '2',
      label: "Logout",
      icon: <LogoutOutlined />,
      onClick: onLogout,
    }
  ];

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
          menu={{ items }}
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