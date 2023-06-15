import React, { useState } from 'react';
import { DeleteOutline, Edit } from '@mui/icons-material';

const ShiftTable = ({ employees }) => {
  const [editableEmployee, setEditableEmployee] = useState(null);

  const handleEdit = (employee) => {
    setEditableEmployee(employee);
  };

  const handleSave = () => {
    setEditableEmployee(null);
    // Perform save logic here
  };

  const handleCancel = () => {
    setEditableEmployee(null);
  };

  return (
    <table className="min-w-full divide-y table-fixed">
      <thead className="bg-slate-100">
        <tr>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Shift Code</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Shift Name</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Time From</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Time To</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Active</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
        </tr>
      </thead>

      <tbody className="bg-white divide-y divide-gray-200">
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td className="px-6 py-4 text-center whitespace-nowrap text-xs">
              {editableEmployee === employee ? (
                <input
                  type="text"
                  className="w-24 border rounded px-2 py-1"
                  placeholder={employee.shiftCode}
                  onChange={(e) => {
                    employee.shiftCode = e.target.value;
                  }}
                />
              ) : (
                employee.shiftCode
              )}
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap text-xs">
              {editableEmployee === employee ? (
                <input
                  type="text"
                  className="w-24 border rounded px-2 py-1"
                  placeholder={employee.shiftName}
                  onChange={(e) => {
                    employee.shiftName = e.target.value;
                  }}
                />
              ) : (
                employee.shiftName
              )}
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap text-xs">
              {editableEmployee === employee ? (
                <input
                  type="text"
                  className="w-24 border rounded px-2 py-1"
                  placeholder={employee.timeFrom}
                  onChange={(e) => {
                    employee.timeFrom = e.target.value;
                  }}
                />
              ) : (
                employee.timeFrom
              )}
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap text-xs">
              {editableEmployee === employee ? (
                <input
                  type="text"
                  className="w-24 border rounded px-2 py-1"
                  placeholder={employee.timeTo}
                  onChange={(e) => {
                    employee.timeTo = e.target.value;
                  }}
                />
              ) : (
                employee.timeTo
              )}
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap text-base">
              {editableEmployee === employee ? (
                <input
                  type="checkbox"
                  checked={employee.active}
                  onChange={(e) => {
                    employee.active = e.target.checked;
                  }}
                />
              ) : (
                employee.active ? 'Yes' : 'No'
              )}
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap flex justify-center text-xs">
              {editableEmployee === employee ? (
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
                    onClick={() => handleEdit(employee)}
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

export default ShiftTable;
