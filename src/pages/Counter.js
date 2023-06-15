import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import Searchbar from '../components/Searchbar';
import Countertable from '../components/Countertable';
import Button from '@mui/material/Button';
import 'leaflet/dist/leaflet.css';

function Counter() {
  const [latLng, setLatLng] = useState({ lat: 13.7383, lng: 100.5325 });
  const [comment, setComment] = useState('');
  const [map, setMap] = useState(null);

  const employees = [
    {
      id: 1,
      counterCode: 'C001',
      counterName: 'Counter A',
      address: '123 Main Street',
      subDistrict: 'Example Sub District',
      district: 'Example District',
      province: 'Example Province',
      country: 'Example Country',
      latitude: '12.3456789',
      longitude: '98.7654321'
    },
    {
      id: 2,
      counterCode: 'C002',
      counterName: 'Counter B',
      address: '456 Elm Street',
      subDistrict: 'Example Sub District',
      district: 'Example District',
      province: 'Example Province',
      country: 'Example Country',
      latitude: '23.456789',
      longitude: '78.987654'
    },
    // Add more employee data as needed
  ];

  useEffect(() => {
    // Create a new Leaflet map instance and set it to the "map" state
    const leafletMap = L.map('map').setView([latLng.lat, latLng.lng], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(leafletMap);
    setMap(leafletMap);

    // Clean up the map instance when the component is unmounted
    return () => {
      leafletMap.remove();
    };
  }, [latLng]);

  // Handle changes to the latitude and longitude input fields
  const handleLatLngChange = (event) => {
    const { name, value } = event.target;
    setLatLng((prevLatLng) => ({
      ...prevLatLng,
      [name]: parseFloat(value),
    }));
  };

  // Handle changes to the comment input field
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  // Handle the submission of the comment form
  const handleSubmitComment = (event) => {
    event.preventDefault();
    // Process the comment submission here
    console.log('Latitude:', latLng.lat);
    console.log('Longitude:', latLng.lng);
    console.log('Comment:', comment);
    // Reset the input fields
    setLatLng({ lat: 0, lng: 0 });
    setComment('');
  };

  return (
    <div className="Employee font-display h-screen">
      <div className="flex justify-between pt-6 px-7">
        <div className="text-3xl my-auto">Counter</div>
        <Searchbar></Searchbar>
      </div>

      <div className="flex mt-6">
        <div className="w-full mx-7 border-2 rounded-xl flex flex-col">
          <div className="mx-6 my-4 flex justify-between">
            <div>
              <h1>Counter</h1>
              <h1 className="text-sm font-thin">Counter</h1>
            </div>
            <div className="my-auto">
              <Button>Add +</Button>
            </div>
          </div>
          <hr />
          <div className="pb-2">
            <Countertable counters={employees} />
          </div>
        </div>
      </div>

      <div className="mt-6 mx-7">
        <h2 className='mb-4'>Counter Map</h2>
        <div id="map" style={{ height: '400px' }}></div>
        <form onSubmit={handleSubmitComment} className='mt-4'>
          <label>
            Latitude:
            <input type="number" name="lat" value={latLng.lat} onChange={handleLatLngChange} />
          </label>
          <label>
            Longitude:
            <input type="number" name="lng" value={latLng.lng} onChange={handleLatLngChange} />
          </label>
          
        </form>
      </div>
    </div>
  );
}

export default Counter;
