import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="relative text-white">
      <nav className="bg-mainColor border-gray-200 absolute top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-screen-xl z-50 rounded-3xl shadow-lg">
        <div className="flex flex-wrap items-center justify-between p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              tix
            </span>
          </Link>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <Link to="/" className="" >
                  Events
                </Link>
              </li>
              <li>
                <Link to="/ticket" className="">
                  My Tickets
                </Link>
              </li>
              <li>
                <a href="#" className="">
                  About Project
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/ticket">
              <button>My Tickets</button>
            </Link>
          </div>
        </div>
      </nav>
      <div className="pt-20">
        {/* Add this div to push the content down */}
      </div>
    </div>
  );
}