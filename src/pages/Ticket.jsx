import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import TicketCard from "../components/TicketCard";
import Button from "../components/Button";
import TicketBox from "../components/TicketBox";
import { useNavigate } from "react-router-dom";

export default function Ticket() {
  const { userDetails } = useContext(UserContext);
  const navigate = useNavigate();

  const isFormFilled =
    userDetails.name && userDetails.email && userDetails.imageUrl;
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div
      className={`w-[80vh] ${
        !isFormFilled && "h-[100vh] text-lg"
      } bg-outerBox border border-[#0E464F] rounded-lg shadow-sm`}
    >
      <div className="px-5 pb-5">
        <div className="flex justify-between flex-col items-center mt-5">
          {isFormFilled ? (
            <>
              <div className="flex justify-between items-center w-full text-white">
                <h5 className="text-xl font-light tracking-tight ">Ready</h5>
                <p className="text-xs">Step 3/3</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div
                  className="bg-[#24A0B5] h-[0.29rem] rounded-full "
                  style={{ width: "100%" }}
                ></div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3">
                  Your Ticket is Booked!
                </h5>
                <p className="text-white text-xs">
                  Check your email for a copy or you can download
                </p>
              </div>

              <TicketBox>
                <div className="absolute top-64 z-50 bg-outerBox border border-[#24A0B5] rounded-lg shadow-sm flex justify-center flex-col items-center">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Techember Fest ”25
                  </h5>
                  <p className="text-xs text-white">
                    📍 04 Rumens road, Ikoyi, Lagos
                  </p>
                  <p className="text-xs text-white">
                    📅 March 15, 2025 | 7:00 PM
                  </p>
                  <div className="w-full max-w-[20rem] p-4 bg-[#08343C] rounded-lg shadow-sm mb-4 ">
                    <div className="flex justify-center mb-4">
                      {userDetails.imageUrl && (
                        <img
                          className="rounded-lg"
                          width={140}
                          height={140}
                          src={userDetails.imageUrl}
                          alt="Uploaded Avatar"
                        />
                      )}
                    </div>
                    <TicketCard />
                  </div>
                </div>
              </TicketBox>
            </>
          ) : (
            <p className="text-red-500">
              Please fill all the required forms to get your ticket.
            </p>
          )}
          <div className="flex space-x-3 mt-4 w-full">
            {isFormFilled ? (
              <>
                <Button title="Book Another Ticket" secondary={true} />
                <Button title="Download Ticket" />
              </>
            ) : (
              <Button title="Back" onClick={handleBack} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
