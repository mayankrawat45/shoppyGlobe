import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollToTop/>
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;