import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const AppLayout = () => {
  return (
    <div className="bg-linear-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t backdrop-blur py-12 supports-[backdrop-filter]: bg-background/60">
        <div className="container mx-auto px-4 text-center ">
          <p>Hello i am bishal chansi</p>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
