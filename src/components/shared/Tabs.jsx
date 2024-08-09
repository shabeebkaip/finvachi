const Tabs = () => {
  return (
    <div className="container  py-4">
      <nav className="flex items-center space-x-4">
        <a
          href="#"
          className="relative group flex items-center  py1 text-lg font-semibold text-black transition-all duration-300  border-b-2 border-black"
        >
          Dashboard
        </a>
        <span className="border-l border-gray-300 h-6"></span>
        <a
          href="#"
          className="relative group flex items-center px-4 py-2 text-lg font-semibold text-finvBlue transition-all duration-300 hover:text-black"
        >
          Orders
        </a>
        <span className="border-l border-gray-300 h-6"></span>
        <a
          href="#"
          className="relative group flex items-center px-4 py-2 text-lg font-semibold text-finvBlue transition-all duration-300 hover:text-black"
        >
          Brokers
        </a>
        <span className="border-l border-gray-300 h-6"></span>
        <a
          href="#"
          className="relative group flex items-center px-4 py-2 text-lg font-semibold text-finvBlue transition-all duration-300 hover:text-black"
        >
          Signals
        </a>
        <span className="border-l border-gray-300 h-6"></span>
        <a
          href="#"
          className="relative group flex items-center px-4 py-2 text-lg font-semibold text-finvBlue transition-all duration-300 hover:text-black"
        >
          Market
        </a>
        <span className="border-l border-gray-300 h-6"></span>
        <a
          href="#"
          className="relative group flex items-center px-4 py-2 text-lg font-semibold text-finvBlue transition-all duration-300 hover:text-black"
        >
          Chain
        </a>
      </nav>
    </div>
  );
};

export default Tabs;
