import Searchbar from "../components/Searchbar";
import ShiftTable from "../components/ShiftTable";
import Button from '@mui/material/Button';

function Shift() {
  const shifts = [
    { id: 1, shiftCode: 'SHIFT001', shiftName: 'Morning Shift', timeFrom: '09:00 น.', timeTo: '12:00 น.', active: true },
    { id: 2, shiftCode: 'SHIFT002', shiftName: 'Evening Shift', timeFrom: '12:00 น.', timeTo: '13:00 น.', active: true },
    // Add more shift data as needed
  ];

  return (
    <div className="Employee font-display  h-screen  ">

      <div className="flex justify-between pt-6 px-7 ">
        <div className="text-3xl my-auto">
          Shift
        </div>
        <Searchbar></Searchbar>
      </div>

      <div className="flex mt-6">
        <div className="w-full mx-7 border-2 rounded-xl flex flex-col">

          <div className="mx-6 my-4 flex justify-between">
            <div>
              <h1>Shift</h1>
              <h1 className=" text-sm font-thin">Shift</h1>
            </div>
            <div className="my-auto">
              <Button>Add +</Button>
            </div>
          </div>


          <hr></hr>
          <div className="pb-2">
            <ShiftTable employees={shifts} />
          </div>
        </div>
      </div>

      <section class="bg-white dark:bg-gray-900 antialiased">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
              Shift Schedule
            </h2>
          </div>

          <div class="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
            <div class="-my-4 divide-y divide-gray-200 dark:divide-gray-700">

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-40 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0 ">
                09:00 - 12:00 น.
                </p>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" class="hover:underline">Counter Shift 1 (Morning Shift)</a>
                </h3>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-40 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                12:00 - 13:00 น.
                </p>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" class="hover:underline">Counter Shift 2 (Evening Shift)</a>
                </h3>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* <div className="mt-8">
        <EmployeeTable employees={employees} />
      </div> */}

    </div>
  );
}

export default Shift;
