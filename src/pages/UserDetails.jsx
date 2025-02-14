import React, { useState, useRef, useContext, useEffect } from "react";
import Button from "../components/Button";
import { FaCloudArrowDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const FormField = ({ label, type, name, value, onChange, placeholder, required, error }) => (
  <div>
    <label htmlFor={name} className="block mb-1 text-sm font-light text-gray-900 dark:text-white">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        name={name}
        id={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className="bg-transparent border border-[#07373F] text-white text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400"
        required={required}
      />
    ) : (
      <input
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className="bg-transparent border border-[#07373F] text-white text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400"
        required={required}
      />
    )}
    {error && <p className="text-red-500 mt-1">{error}</p>}
  </div>
);

export default function UserDetails() {
  const { userDetails, setUserDetails } = useContext(UserContext);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const savedDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (savedDetails) {
      setUserDetails(savedDetails);
    }
  }, [setUserDetails]);

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }, [userDetails]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!userDetails.name) errors.name = "Name is required.";
    if (!userDetails.email) errors.email = "Email is required.";
    return errors;
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      navigate("/ticket");
    }
  };

  const handleUpload = (files) => {
    const file = files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "favourachara"); // Replace with your Cloudinary upload preset

    setLoading(true);
    setError(null);

    fetch(`https://api.cloudinary.com/v1_1/dhyjpjwdo/image/upload`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setUserDetails((prevDetails) => ({
          ...prevDetails,
          imageUrl: data.secure_url,
        }));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
        setError("Error uploading file. Please try again.");
        setLoading(false);
      });
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    if (loading) {
      // Perform any side effects when loading state changes
    }
  }, [loading]);

  return (
    <div className="w-[80vh] bg-outerBox border border-[#0E464F] rounded-lg shadow-sm">
      <div className="px-5 mb-4">
        <div className="flex justify-between flex-col items-center mt-5">
          <div className="flex justify-between items-center w-full text-white">
            <h5 className="text-xl font-light tracking-tight ">
              Attendee Details
            </h5>
            <p className="text-xs">Step 2/3</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-[#24A0B5] h-[0.29rem] rounded-full "
              style={{ width: "66.66%" }}
            ></div>
          </div>
          <div className="w-full max-w-[27rem] p-4 bg-[#08252B] border border-[#0E464F] rounded-lg shadow-sm flex justify-center flex-col space-y-6">
            <div className="max-w-sm bg-[#052228] border border-[#07373F] rounded-lg shadow-sm">
              <p className="text-white text-xs font-light ml-4 mt-4">
                Upload Profile Photo
              </p>
              <div className="max-w-sm p-6 m-4 h-24 bg-[#000000] bg-opacity-20 shadow-sm flex flex-col justify-center items-center rounded-lg">
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={(e) => handleUpload(e.target.files)}
                />
                <div
                  className="drag block max-w-[10rem] font-light text-xs p-6 bg-[#0E464F] border border-[#24A0B5] rounded-lg shadow-sm py-12 text-center cursor-pointer"
                  onClick={handleClick}
                >
                  {loading ? (
                    <p className="text-white">Uploading...</p>
                  ) : userDetails.imageUrl ? (
                    <img
                      src={userDetails.imageUrl}
                      alt="Uploaded Avatar"
                      className="rounded-lg"
                      width={100}
                    />
                  ) : (
                    <>
                      <FaCloudArrowDown color="white" />
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Drag and drop here
                      </p>
                    </>
                  )}
                </div>
                {error && <p className="text-red-500 mt-2">{error}</p>}
              </div>
            </div>

            <form className="space-y-6" action="#">
              <FormField
                label="Enter your name"
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
                error={formErrors.name}
              />
              <FormField
                label="Enter your email *"
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
                error={formErrors.email}
              />
              <FormField
                label="Special request?"
                type="textarea"
                name="specialRequest"
                value={userDetails.specialRequest}
                onChange={handleInputChange}
                placeholder="Enter your special request"
                error={formErrors.specialRequest}
              />
              <div className="flex space-x-3">
                <Button title="Back" secondary={true} />
                <Button title="Next" onClick={handleNextClick} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}