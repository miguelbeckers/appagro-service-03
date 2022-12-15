import { React, useState, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { GoogleMap, LoadScript, Polygon } from '@react-google-maps/api';
import { Button, Form, Input, Select } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { createArea } from "../store/actions/areaAction"

import googleMapsApiKey from "../maps";
import './AreaForm.css'

function AreaForm() {
  const dispatch = useDispatch();

  const logged = useSelector(state => state.user.logged.data);
  const area = useSelector(state => state.area.current.data);
  console.log(area);

  const [path, setPath] = useState([
    {
      lat: -25.129406654112547,
      lng: -54.22587966556522,
    },
    {
      lat: -25.125653255894434,
      lng: -54.22706047946972,
    },
    {
      lat: -25.125175471809033,
      lng: -54.22480135494548,
    },
    {
      lat: -25.12914139603012,
      lng: -54.22329267561591,
    },
  ]);

  const center = {
    lat: -25.127395240273035,
    lng: -54.225082531051015,
  };

  const coordinates = path.map(coordinate => {
    const lat = coordinate['lat'].toString();
    const lng = coordinate['lng'].toString();
    return lat + ", " + lng;
  });

  const polygonRef = useRef(null);
  const listenersRef = useRef([]);

  const onEdit = useCallback(() => {
    if (polygonRef.current) {
      const nextPath = polygonRef.current
        .getPath()
        .getArray()
        .map(latLng => {
          return { lat: latLng.lat(), lng: latLng.lng() };
        });
      setPath(nextPath);
    }
  }, [setPath]);

  const onLoad = useCallback(
    polygon => {
      polygonRef.current = polygon;
      const path = polygon.getPath();
      listenersRef.current.push(
        path.addListener("set_at", onEdit),
        path.addListener("insert_at", onEdit),
        path.addListener("remove_at", onEdit)
      );
    },
    [onEdit]
  );

  const onUnmount = useCallback(() => {
    listenersRef.current.forEach(lis => lis.remove());
    polygonRef.current = null;
  }, []);

  const areaType = [
    {
      label: "Sítio",
      value: "SITIO",
    },
    {
      label: "Chácara",
      value: "CHACARA",
    },
    {
      label: "Fazenda",
      value: "FAZENDA",
    }
  ]

  const onFinish = (values) => {
    const data = { ...values, coordinates: coordinates }
    dispatch(createArea(data, logged.id));
  }

  return <div className='area-form'>
    <div className='map'>
      <LoadScript
        id='google-map-script'
        googleMapsApiKey={googleMapsApiKey}
      >
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          mapTypeId="satellite"
          center={center}
          zoom={16}
          version="weekly"
          on
        >
          <Polygon
            editable
            draggable
            path={path}
            onDragEnd={onEdit}
            onMouseUp={onEdit}
            onLoad={onLoad}
            onUnmount={onUnmount}
          />
        </GoogleMap>
      </LoadScript>
    </div>

    <div className='content'>
      <Form
        name="basic"
        requiredMark={false}
        layout="inline"
        onFinish={onFinish}
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
          style={{ flexGrow: 1 }}
        >
          <Input  />
        </Form.Item>

        <Form.Item
          name="areaType"
          label="Tipo"
          rules={[
            {
              required: true,
              message: 'Tipo não selecionado',
            },
          ]}
          style={{ width: "300px" }}
        >
          <Select options={areaType} />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            icon={<SaveOutlined />}
          >
            Salvar
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div >
}

export default AreaForm;