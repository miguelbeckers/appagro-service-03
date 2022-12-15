import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { GoogleMap, LoadScript, Polygon } from '@react-google-maps/api';
import { Descriptions, Button, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getAreaById, deleteArea } from "../store/actions/areaAction";
import { getAllDevices } from "../store/actions/deviceAction";
import { getAllMeasurements } from "../store/actions/measurementAction";
import { useNavigate } from "react-router-dom";

import googleMapsApiKey from "../maps";
import "./Area.css";

function Area() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { area } = useParams();
  const [deleted, setDeleted] = useState(false);

  const current = useSelector(state => state.area.current.data);
  const loading = useSelector(state => state.area.current.loading);
  const devices = useSelector(state => state.device.list.data);
  const measurements = useSelector(state => state.measurement.list.data);
  const logged = useSelector(state => state.user.logged.data);

  const createdAt = current.id ? new Date(current.createdAt).toLocaleString() : null;
  const updatedAt = current.id ? new Date(current.updatedAt).toLocaleString() : null;

  useEffect(() => {
    dispatch(getAreaById(area));
    dispatch(getAllDevices());
    dispatch(getAllMeasurements());
  }, [dispatch, area]);

  useEffect(() => {
    if (current.id && deleted) {
      navigate(`/user/${logged.username}/areas`)
    }
  }, [dispatch, navigate, area, current, logged, deleted]);

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

  const dataSource = devices.length > 0 && measurements.length > 0 ?
    devices.map(device => {
      const id = device.measurements[0];
      const measurement = measurements.find(e => e._id === id);
      return {
        area: device.area,
        name: device.name,
        time: measurement.createdAt,
        value: measurement.value
      };
    }).filter(
      device => device.area === current.id
    ) : [];

  const onDelete = () => {
    dispatch(deleteArea(current.id, logged.id));
    setDeleted(true);
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
            <Link to={`/area/${current.id}/form`}>
              <Button
                icon={<EditOutlined />}
                loading={loading}
              >
                Editar
              </Button>
            </Link>
            <Button
              icon={<DeleteOutlined />}
              loading={loading}
              danger={true}
              onClick={onDelete}
            >
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
  </div>;
}

export default Area;
