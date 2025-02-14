export default function TicketSelect() {

    const ticketType=[
        {type: "Regular Access", price: "Free"},
        {type: "VIP Access", price: "$150"},
        {type: "VVIP Access", price: "$150"},
    ]
  return (
    <div className="w-[80vh]  max-h-[30rem] bg-outerBox border border-gray-200 rounded-lg shadow-sm ">
      <div className="px-5 pb-5">
        <div className="flex justify-between flex-col items-center mt-5">
          <div className="flex justify-between">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Ticket Selection
              </h5>
              <span>Step 1/3</span>
          </div>
          <div className="divide-x-4 " />

          <div className="w-full max-w-[27rem] p-4 bg-innerBox  rounded-lg shadow-sm sm:p-6 md:p-8 ">
            <form className="space-y-6" action="#">
              <div className="max-w-sm p-6 bg-custom-gradient border border-gray-200 rounded-lg shadow-sm  flex flex-col jistify-center items-center text-white">                
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Techember Fest ”25
                  </h5>
                <div className="flex flex-col justify-center items-center text-[.7rem]">
                    <p className="text-center mb-1">
                    Join us for an unforgettable experience at <br/> [Event Name]! Secure your spot now.
                    </p>
                    <p>📍 [Event Location] | | March 15, 2025 | 7:00 PM</p>
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Ticket 
                </label>
                <div className="flex justify-between ml-2">
                    {ticketType.map((ticket, index) => (
                        <div key={index} className="flex flex-col justify-start     items-start w-full text-white bg-innerBox border border-[#197686] rounded-lg shadow-sm p-2">
                            <p>{ticket.price}</p>
                            <p className="text-[.9rem]">{ticket.type}</p>
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div className="flex space-x-3">
                <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  text-center">Cancel</button>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Next
                  </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
