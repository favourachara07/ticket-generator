import { Outlet } from "react-router-dom";
import Main from "../components/Main";
import Header from "../components/Header";

export default function AppLayout() {
  return (
    <div className="h-full bg-[#02191D]">
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}
