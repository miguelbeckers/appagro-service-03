import { React, useEffect } from "react";
import { Table, Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllAreas } from "../store/actions/areaAction";
import "./AreaList.css";

function AreaList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const areas = useSelector(state => state.area.list.data);

  useEffect(() => {
    dispatch(getAllAreas());
  }, [dispatch]);

  const data = areas.length > 0 ? areas.map(area => {
    const createdAt = area.createdAt ? new Date(area.createdAt).toLocaleString() : null;
    return { ...area, createdAt: createdAt };
  }) : []

  const columns = [
    {
      title: "Criado em",
      dataIndex: "createdAt",
      key: "createdAt",
      filters: [],
      width: "20%",
    },
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
      filters: [],
      width: "40%",
    },
    {
      title: "Tipo",
      dataIndex: "areaType",
      key: "areaType",
      filters: [],
      width: "20%",
    },
    {
      title: "Área km²",
      dataIndex: "area",
      key: "area",
      filters: [],
      width: "20%",
    },
  ];

  return (
    <div className="area-list">
      <div className="area-header">
        <Input.Search placeholder="Buscar área" size="large"/>
        <Link to={"/area/form"}>
          <Button icon={<PlusOutlined />} type="primary" size="large">Nova</Button>
        </Link>
      </div>
      <Table
        dataSource={data}
        columns={columns}
        onRow={record => ({
          onClick: () => navigate(`/area/${record.id}`)
      })}
      />
    </div>
  );
}

export default AreaList;
