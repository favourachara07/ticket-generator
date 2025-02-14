import React, { useState, useRef } from "react";
import Button from "./Button";
import { FaCloudArrowDown } from "react-icons/fa6";

export default function UserDetails() {
  const [imageUrl, setImageUrl] = useState("");
  const fileInputRef = useRef(null);

  const handleUpload = (files) => {
    const file = files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "favourachara"); // Replace with your Cloudinary upload preset

    fetch(`https://api.cloudinary.com/v1_1/dhyjpjwdo/image/upload`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.secure_url);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-[80vh] max-h-[30rem] bg-outerBox border border-gray-200 rounded-lg shadow-sm">
      <div className="px-5 pb-5">
        <div className="flex justify-between flex-col items-center mt-5">
          <div className="flex justify-between">
            <h5 className="text-xl font-light tracking-tight text-gray-900 dark:text-white">
              Attendee Details
            </h5>
            <span className="text-white">Step 2/3</span>
          </div>
          <div className="divide-x-4" />

          <div className="w-full max-w-[27rem] p-4 bg-[#08252B] border border-[#0E464F] rounded-lg shadow-sm sm:p-6 flex justify-center flex-col space-y-6">
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
                  {imageUrl ? (
                    <img
                      src={imageUrl}
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
              </div>
            </div>

            <form className="space-y-6" action="#">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm font-light text-gray-900 dark:text-white"
                >
                  Enter your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="bg-transparent border border-[#07373F] text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-light text-gray-900 dark:text-white"
                >
                  Enter your email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="bg-transparent border border-[#07373F] text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="special-request"
                  className="block mb-1 text-sm font-light text-gray-900 dark:text-white"
                >
                  Special request?
                </label>
                <textarea
                  name="special-request"
                  id="special-request"
                  placeholder="Enter your special request"
                  className="bg-transparent border border-[#07373F] text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400"
                  required
                />
              </div>

              <div className="flex space-x-3">
                <Button title="Back" secondary={true} />
                <Button title="Next" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}