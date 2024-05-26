import { Outlet } from "react-router-dom";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
