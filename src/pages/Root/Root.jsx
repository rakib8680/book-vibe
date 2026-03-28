import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

const Root = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
};

export default Root;
