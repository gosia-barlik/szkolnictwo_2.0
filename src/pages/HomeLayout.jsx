import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import CallToAction from "../components/ui/CallToAction";


const HomeLayout = () => {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === "loading";
  const value = "some value";
  return (
    <>
      <Navbar />
      {/* <CallToAction /> */}
      <section className="page">
      {isPageLoading ? (
          <div className='loading' />
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
    </>
  );
};
export default HomeLayout;
