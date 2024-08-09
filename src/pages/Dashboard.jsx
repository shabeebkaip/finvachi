import DashboardCard from "../components/dashboard/DashboardCard"
import TopGainers from "../components/dashboard/TopGainers"
import TopLossers from "../components/dashboard/TopLossers"
import Header from "../components/shared/Header"
import Tabs from "../components/shared/Tabs"

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Tabs />
      <div className="container grid grid-cols-5 mt-16 gap-5 mb-20" >
        <div className="col-span-3 flex flex-col gap-10">
          <TopGainers />
          <TopLossers />
        </div>
        <div className="col-span-2">
          <DashboardCard />
        </div>
      </div>

    </div>
  )
}

export default Dashboard