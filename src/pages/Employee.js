import Searchbar from "../components/Searchbar";
import EmployeeTable from "../components/EmployeeTable";
import Button from '@mui/material/Button';

function Employee() {
  const employees = [
    { id: 1, employeeCode: 'EMP001', employeeName: 'John Doessdasdasd', idCard: '123456789', wage: '$500000', startWorkingDate: '2022-01-01', active: true, password: '********' },
    { id: 2, employeeCode: 'EMP002', employeeName: 'Jane Smith', idCard: '987654321', wage: '$6000', startWorkingDate: '2022-02-01', active: false, password: '********' },
    // Add more employee data as needed
  ];

  return (
    <div className="Employee font-display  h-screen  ">

      <div className="flex justify-between pt-6 px-7 ">
        <div className="text-3xl my-auto">
          Employee
        </div>
        <Searchbar></Searchbar>
      </div>

      <div className="flex mt-6">
        <div className="w-full mx-7 border-2 rounded-xl flex flex-col">

          <div className="mx-6 my-4 flex justify-between">
            <div>
              <h1>Employee</h1>
              <h1 className=" text-sm font-thin">Employee</h1>
            </div>
            <div className="my-auto">
              <Button>Add +</Button>
            </div>
          </div>


          <hr></hr>
          <div className="pb-2">
            <EmployeeTable employees={employees} />
          </div>
        </div>
      </div>

      {/* <div className="mt-8">
        <EmployeeTable employees={employees} />
      </div> */}

    </div>
  );
}

export default Employee;
