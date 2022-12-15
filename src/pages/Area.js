import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { GoogleMap, LoadScript, Polygon } from '@react-google-maps/api';
import { Descriptions, Button, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getAreaById } from "../store/actions/areaAction";

import { getAllDevices, createDevice, updateDevice, deleteDevice } from "../store/actions/deviceAction";

import googleMapsApiKey from "../maps";
import "./Area.css";

function Area() {
  const dispatch = useDispatch();
  const { area } = useParams();

  useEffect(() => {
    dispatch(getAreaById(area));
  }, [dispatch, area]);

  const current = useSelector(state => state.area.current.data);
  const loading = useSelector(state => state.area.current.loading);
  const devices = useSelector(state => state.device.list.data);
  console.log(devices);

  const createdAt = current.id ? new Date(current.createdAt).toLocaleString() : null;
  const updatedAt = current.id ? new Date(current.updatedAt).toLocaleString() : null;

  const center = {
    lat: -25.127395240273035,
    lng: -54.225082531051015,
  };

  const path = current.id ? current.coordinates.map(coordinate => {
    const latlng = coordinate.split(', ');
    return { lat: Number(latlng[0]), lng: Number(latlng[1]) }
  }) : [];

  const columns = [
    {
      title: "Dispositivo",
      dataIndex: "name",
      key: "name",
      filters: [],
      width: "50%",
    },
    {
      title: "Última leitura",
      dataIndex: "time",
      key: "time",
      filters: [],
      width: "30%",
    },
    {
      title: "Valor",
      dataIndex: "value",
      key: "value",
      filters: [],
      width: "20%",
    },
  ];

  const dataSource = devices.map(device => {
    return {name: device.name, time: "nada", value: "valor"}
  });


  const onGetDevices = () => {
    dispatch(getAllDevices());
  }

  const onCreateDevice = (data) => {
    dispatch(createDevice(data));
  }

  const onUpdateDevice = (data) => {
    dispatch(updateDevice(data));
  }

  const onDeleteDevice = (id) => {
    dispatch(deleteDevice(id));
  }

  return <div className="area">
    <div className='map'>
      <LoadScript
        id='google-map-script'
        googleMapsApiKey={googleMapsApiKey}
      >
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={16}
          version="weekly"
          mapTypeId="satellite"
          on
        >
          <Polygon
            path={path}
          />
        </GoogleMap>
      </LoadScript>
    </div>

    <div className="info">
      <Descriptions
        column={3}
        title={<h2>{current.name}</h2>}
        extra={
          <div className="info-buttons">
            <Link to={`/user/${current.username}/form`}>
              <Button icon={<EditOutlined />} loading={loading}>
                Editar
              </Button>
            </Link>
            <Button icon={<DeleteOutlined />} loading={loading} danger={true}>
              Excluir
            </Button>
          </div>
        }
      >
        <Descriptions.Item label="Criado em">{createdAt}</Descriptions.Item>
        <Descriptions.Item label="Editado em">{updatedAt}</Descriptions.Item>
      </Descriptions>

      <Table columns={columns} dataSource={dataSource} />
    </div>
    <div>
      <Button onClick={onGetDevices}>
        get
      </Button>
      <Button onClick={onCreateDevice}>
        post
      </Button>
      <Button onClick={onUpdateDevice}>
        update
      </Button>
      <Button onClick={onDeleteDevice}>
        delete
      </Button>
    </div>
  </div>;
}

export default Area;
