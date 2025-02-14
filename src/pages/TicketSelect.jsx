import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { UserContext } from "../context/UserContext";

export default function TicketSelect() {
  const navigate = useNavigate();
  const { userDetails, setUserDetails } = useContext(UserContext);

  const ticketType = [
    { type: "Regular Access", price: "Free" },
    { type: "VIP Access", price: "$150" },
    { type: "VVIP Access", price: "$150" },
  ];

  const [selectedTicket, setSelectedTicket] = useState(null);
  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket.type);
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      ticketType: ticket.type,
    }));
  };
  const handleNumberOfTicketsChange = (e) => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      numberOfTickets: e.target.value,
    }));
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    navigate("/details");
  };

  return (
    <div className="w-[90vh] bg-outerBox border border-[#0E464F] rounded-lg shadow-sm">
      <div className="px-5 pb-5">
        <div className="flex justify-between flex-col items-center mt-5">
          <div className="flex justify-between items-center w-full text-white mb-2">
            <h5 className="text-xl font-semibold tracking-tight ">
              Ticket Selection
            </h5>
            <span className="text-xs">Step 1/3</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-[#24A0B5] h-[0.29rem] rounded-full "
              style={{ width: "33.33%" }}
            ></div>
          </div>
          <div className="w-full p-4 bg-innerBox rounded-lg shadow-sm sm:p-6 md:p-8">
            <form className="space-y-6 mb-5" action="#">
              <div className="w-full flex justify-center">
                <div className="max-w-sm p-6 bg-[#02191D] border border-[#07373F] rounded-lg shadow-sm flex flex-col justify-center items-center text-white">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Techember Fest ”25
                  </h5>
                  <div className="flex flex-col justify-center items-center text-[.7rem]">
                    <p className="text-center mb-1">
                      Join us for an unforgettable experience at <br /> [Event
                      Name]! Secure your spot now.
                    </p>
                    <p>📍 [Event Location] | | March 15, 2025 | 7:00 PM</p>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Ticket
                </label>
                <div className="flex flex-col md:flex-row items-center justify-between md:ml-2 border bg-[#052228] border-[#07373F] rounded-lg shadow-sm p-2 md:space-x-3 space-y-2 md:space-y-0">
                  {ticketType.map((ticket) => (
                    <div
                      key={ticket.type} // Use ticket.type as key if it's unique
                      onClick={() => handleTicketClick(ticket)}
                      role="button" // Add role for accessibility
                      tabIndex="0" // Add tabIndex for accessibility
                      className={`flex flex-col md:justify-start md:items-start w-full text-white bg-transparent border border-[#197686] rounded-lg shadow-sm p-2 cursor-pointer hover:bg-[#2C545B] ${
                        selectedTicket === ticket.type ? "bg-[#12464E]" : ""
                      }`}
                    >
                      <p className="font-semibold mb-2">{ticket.price}</p>
                      <p className="text-[.9rem] font-extralight">
                        {ticket.type}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="number-of-tickets"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Number of Tickets
                </label>
                <select
                  name="number-of-tickets"
                  id="number-of-tickets"
                  value={userDetails.numberOfTickets}
                  onChange={handleNumberOfTicketsChange}
                  className="bg-transparent border border-[#07373F] text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                >
                  {[1, 2, 3, 4, 5].map((number) => (
                    <option key={number} value={number}>
                      {number}
                    </option>
                  ))}
                </select>
              </div>
            </form>
            <div className="flex space-x-3">
              <Button title="Cancel" secondary={true} />
              <Button title="Next" onClick={handleNextClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
