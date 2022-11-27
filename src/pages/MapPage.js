import { React } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './MapPage.css'

function MapPage() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDAGiFtyNnGk2mbxiSswQkVi-sNnW_ZGu8"
  })

  return <div className='map'>
    {isLoaded ? (
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={{
          lat: -25.09366047016748,
          lng: -54.245743155766526
        }}
        zoom={15}
      >
      </GoogleMap>
    ) : <></>}
  </div>
}

export default MapPage;