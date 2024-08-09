
const TopLossers = () => {
  return (
    <div className=" rounded-md overflow-hidden ">
      <div className="bg-finvBlue text-white py-1 px-4 w-fit rounded-tl-xl rounded-tr-xl text-2xl font-semibold ">Top Lossers</div>
      <div className="space-y-4 bg-[#d3ebff] rounded-br-3xl  w-full">
        <div className="bg-[#ADD0EB] py-6 px-4 text-2xl text-finvBlue font-semibold">Mahindra & Mahindra</div>
        <div className="bg-[#ADD0EB] py-6 px-4 text-2xl text-finvBlue font-semibold">Wipro</div>
        <div className="bg-[#ADD0EB] py-6 px-4 text-2xl text-finvBlue font-semibold rounded-br-3xl ">TCS</div>
      </div>
    </div>
  );
};

export default TopLossers;
