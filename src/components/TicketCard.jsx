import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function TicketCard() {
  const { userDetails } = useContext(UserContext);

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="w-full max-w-[20rem]  bg-innerBox rounded-lg shadow-sm ">
        <div className="relative flex flex-col  border border-gray-300 font-roboto bg-outerBox rounded-lg shadow-lg">
          {/* Ticket Start */}
          <div className="grid grid-rows-2 grid-cols-2 border-t border-gray-300 bg-[#08343C]">
            <div className="border-r border-b border-gray-300 p-2 pl-3">
              <span className="text-sm font-semibold text-gray-600">
                Enter your name
              </span>
              <br />
              <span className="text-base font-medium text-white">
                {userDetails.name}
              </span>
            </div>
            <div className="border-b border-gray-300 p-2 pl-3">
              <span className="text-sm font-semibold text-gray-600">
                Enter your email *
              </span>
              <br />
              <span className="text-md font-medium text-white">
                {userDetails.email}
              </span>
            </div>
            <div className="border-r border-gray-300 p-2 pl-3">
              <span className="text-sm font-semibold text-gray-600">
                Ticket Type:
              </span>
              <br />
              <span className="text-sm font-medium text-white">
                {userDetails.ticketType}
              </span>
            </div>
            <div className="p-2 pl-3">
              <span className="text-sm font-semibold text-gray-600">
                Ticket for:
              </span>
              <br />
              <span className="text-xs font-medium text-white">
                {userDetails.numberOfTickets}
              </span>
            </div>
          </div>
          
          {/* Ticket End */}
        </div>
        <div className="bg-[#08343C] p-2 pl-3">
            <p className="text-sm font-semibold text-gray-600">Special request?</p>
            <p></p>
          </div>
      </div>
    </div>
  );
}
