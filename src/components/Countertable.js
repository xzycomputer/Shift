import React, { useState } from 'react';
import { DeleteOutline, Edit } from '@mui/icons-material';

const Countertable = ({ counters }) => {
  const [editableCounter, setEditableCounter] = useState(null);

  const handleEdit = (counter) => {
    setEditableCounter(counter);
  };

  const handleSave = () => {
    setEditableCounter(null);
    // Perform save logic here
  };

  const handleCancel = () => {
    setEditableCounter(null);
  };

  return (
    <table className="min-w-full divide-y table-fixed">
      <thead className="bg-slate-100">
        <tr>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Counter Code</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Counter Name</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Sub District</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">District</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Province</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Latitude</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Longitude</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Active</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
        </tr>
      </thead>

      <tbody className="bg-white divide-y divide-gray-200">
        {counters.map((counter) => (
          <tr key={counter.id}>
            <td className="px-6 py-4 text-center whitespace-nowrap text-xs">
              {editableCounter === counter ? (
                <input
                  type="text"
                  className="w-24 border rounded px-2 py-1"
                  placeholder={counter.counterCode}
                  onChange={(e) => {
                    counter.counterCode = e.target.value;
                  }}
                />
              ) : (
                counter.counterCode
              )}
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap text-xs">
              {editableCounter === counter ? (
                <input
                  type="text"
                  className="w-24 border rounded px-2 py-1"
                  placeholder={counter.counterName}
                  onChange={(e) => {
                    counter.counterName = e.target.value;
                  }}
                />
              ) : (
                counter.counterName
              )}
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap text-xs">
              {editableCounter === counter ? (
                <input
                  type="text"
                  className="w-24 border rounded px-2 py-1"
                  placeholder={counter.address}
                  onChange={(e) => {
                    counter.address = e.target.value;
                  }}
                />
              ) : (
                counter.address
              )}
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap text-xs">
              {editableCounter === counter ? (
                <input
                  type="text"
                  className="w-24 border rounded px-2 py-1"
                  placeholder={counter.subDistrict}
                  onChange={(e) => {
                    counter.subDistrict = e.target.value;
                  }}
                />
              ) : (
                counter.subDistrict
              )}
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap text-xs">
              {editableCounter === counter ? (
                <input
                  type="text"
                  className="w-24 border rounded px-2 py-1"
                  placeholder={counter.district}
                  onChange={(e) => {
                    counter.district = e.target.value;
                  }}
                />
              ) : (
                counter.district
              )}
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap text-xs">
              {editableCounter === counter ? (
                <input
                  type="text"
                  className="w-24 border rounded px-2 py-1"
                  placeholder={counter.province}
                  onChange={(e) => {
                    counter.province = e.target.value;
                  }}
                />
              ) : (
                counter.province
              )}
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap text-xs">
              {editableCounter === counter ? (
                <input
                  type="text"
                  className="w-24 border rounded px-2 py-1"
                  placeholder={counter.country}
                  onChange={(e) => {
                    counter.country = e.target.value;
                  }}
                />
              ) : (
                counter.country
              )}
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap text-xs">
              {editableCounter === counter ? (
                <input
                  type="text"
                  className="w-24 border rounded px-2 py-1"
                  placeholder={counter.latitude}
                  onChange={(e) => {
                    counter.latitude = e.target.value;
                  }}
                />
              ) : (
                counter.latitude
              )}
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap text-xs">
              {editableCounter === counter ? (
                <input
                  type="text"
                  className="w-24 border rounded px-2 py-1"
                  placeholder={counter.longitude}
                  onChange={(e) => {
                    counter.longitude = e.target.value;
                  }}
                />
              ) : (
                counter.longitude
              )}
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap text-base">
              {editableCounter === counter ? (
                <input
                  type="checkbox"
                  checked={counter.active}
                  onChange={(e) => {
                    counter.active = e.target.checked;
                  }}
                />
              ) : (
                counter.active ? 'Yes' : 'No'
              )}
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap flex justify-center text-xs">
              {editableCounter === counter ? (
                <>
                  <button
                    className="text-green-500 hover:text-green-700 mx-1"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700 mx-1"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="text-blue-500 hover:text-blue-700 mx-1"
                    onClick={() => handleEdit(counter)}
                  >
                    <Edit fontSize="small" />
                  </button>
                  <button className="text-red-500 hover:text-red-700 mx-1">
                    <DeleteOutline />
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Countertable;
