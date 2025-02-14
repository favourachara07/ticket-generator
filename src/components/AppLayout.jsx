import { Outlet } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div className="h-[100vh] bg-[#02191D]">
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}