import { PieChart } from 'react-minimal-pie-chart';

const DashboardCard = () => {
  return (
    <div className="h-full w-full bg-finvBlue rounded-xl flex flex-col justify-between">
      {/* Dashboard Title */}
      <div className="bg-white py-2  text-center mt-4">
        <h2 className="text-finvBlue font-bold text-3xl">Dashboard</h2>
      </div>

      {/* Pie Chart */}
      <div className="flex-grow flex justify-center items-center ">
        <PieChart
          data={[
            { title: 'One', value: 80, color: '#fff' },
            { title: 'Two', value: 20, color: '#D57C7C' },
          ]}
          className='m-20 w-72'
          animate={true}
          animationDuration={500}
          animationEasing="ease-out"
        />
      </div>

      {/* Investment Details */}
      <div className="bg-white p-4  text-center mb-12 ">
        <h4 className='text-center text-finvBlue font-bold text-3xl '>Your Investment</h4>
        <div className="flex justify-between text-finvBlue font-bold">
          <div>
            <p className='text-3xl'>₹20000</p>
            <p className="text-sm font-semibold">Total capital</p>
          </div>
          <div className="text-green-500">
            <p className='text-3xl '>₹1500</p>
            <p className="text-sm  font-semibold">{"Today's Return"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
