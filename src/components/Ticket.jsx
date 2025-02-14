export default function Ticket() {
  return (
    <div className="w-[80vh]  max-h-[30rem] bg-outerBox border border-gray-200 rounded-lg shadow-sm ">
      <div className="px-5 pb-5">
        <div className="flex justify-between flex-col items-center mt-5">
          <div className="flex flex-col justify-cengter items-center">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3">
            Your Ticket is Booked!
            </h5>
            <p className="text-white text-sm">Check your email for a copy or you can download</p>
          </div>
          <div className="divide-x-4 " />

          <div className="w-full max-w-[27rem] p-4 bg-innerBox  rounded-lg shadow-sm sm:p-6 md:p-8 ">
            
          <div className="flex space-x-3">
                <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  text-center">
                  Back
                </button>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Get My Free Ticket
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}