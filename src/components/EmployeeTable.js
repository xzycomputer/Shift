import React, { useState } from 'react';
import { DeleteOutline, Edit } from '@mui/icons-material';

const EmployeeTable = ({ employees }) => {
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
      <thead className="bg-slate-100 ">
        <tr>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Employee Code</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Employee Name</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ID Card</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Wage</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Start Working Date</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Active</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Password</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
        </tr>
      </thead>

      <tbody className="bg-white divide-y divide-gray-200">
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td className="px-6 py-4 text-center whitespace-nowrap text-xs" >
              {editableEmployee === employee ? (
                <input
                  type="text"
                  className="w-24 border rounded px-2 py-1"
                  placeholder={employee.employeeCode}
                  onChange={(e) => {
                    employee.employeeCode = e.target.value;
                  }}
                />
              ) : (
                employee.employeeCode
              )}
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap text-xs">
              {editableEmployee === employee ? (
                <input
                  type="text"
                  className="w-24 border rounded px-2 py-1"
                  placeholder={employee.employeeName}
                  onChange={(e) => {
                    employee.employeeName = e.target.value;
                  }}
                />
              ) : (
                employee.employeeName
              )}
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap text-xs">
              {editableEmployee === employee ? (
                <input
                  type="text"
                  className="w-24 border rounded px-2 py-1"
                  placeholder={employee.idCard}
                  onChange={(e) => {
                    employee.idCard = e.target.value;
                  }}
                />
              ) : (
                employee.idCard
              )}
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap text-xs">
              {editableEmployee === employee ? (
                <input
                  type="text"
                  className=" w-20 border rounded px-2 py-1"
                  placeholder={employee.wage}
                  onChange={(e) => {
                    employee.wage = e.target.value;
                  }}
                />
              ) : (
                employee.wage
              )}
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap text-xs">
              {editableEmployee === employee ? (
                <input
                  type="text"
                  className="w-24 border rounded px-2 py-1"
                  placeholder={employee.startWorkingDate}
                  onChange={(e) => {
                    employee.startWorkingDate = e.target.value;
                  }}
                />
              ) : (
                employee.startWorkingDate
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
            <td className="px-6 py-4 text-center whitespace-nowrap text-base">
              {editableEmployee === employee ? (
                <input
                  type="text"
                  className="w-20 border rounded px-2 "
                  placeholder={employee.password}
                  onChange={(e) => {
                    employee.password = e.target.value;
                  }}
                />
              ) : (
                employee.password
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

export default EmployeeTable;
