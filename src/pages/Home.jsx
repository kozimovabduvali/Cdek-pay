import OrderResult from "../components/Home/OrderResult";
import Search from "../components/Home/Search";
import Track from "../components/Home/Track";
import CostDesk from "../components/Ui/Home/CostDesk";

export default function Home() {
  return (
    <>
      <section className="lg:pb-17">
        <Track />
        <Search />
        <div className="md:mb-6">
          <OrderResult />
        </div>

        <div>
          <CostDesk />
        </div>
      </section>
    </>
  )
}
