"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GetEducation } from "../Redux/Action";

const Education = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [institution, setInstitution] = useState('');
  const [studyType, setStudyType] = useState('');
  const [areaOfStudy, setAreaOfStudy] = useState('');
  const [location, setlocation] = useState('');
 

  const dispatch=useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = ""; // Allow scrolling again
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const EduData = {
      institution,
      studyType,
      areaOfStudy,
      location,
     
    };
    dispatch(GetEducation(EduData))
    // console.log('Form Data:', formData);
    closeModal();
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>
          <h1 className="font-sans font-bold text-3xl">Education</h1>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      <div
        className="border-dotted border-2 border-gray-400 mt-5 p-4 flex items-center justify-center gap-2 cursor-pointer"
        onClick={openModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <button>Add a new Item</button>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
          onClick={handleModalClick}
        >
          <div className="bg-white p-8 rounded-lg">
            <div className="flex items-center justify-start gap-3 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <h2 className="text-lg font-bold">Create new item</h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex justify-between gap-2 mb-4">
                <div>
                  <label htmlFor="institution">Institution</label>
                  <br />
                  <input
                    type="text"
                    id="institution"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    className="border border-b-gray p-1"
                  />
                </div>
                <div>
                  <label htmlFor="studyType">Type of Study</label><br />
                  <input
                    type="text"
                    id="studyType"
                    value={studyType}
                    onChange={(e) => setStudyType(e.target.value)}
                    className="border border-b-gray p-1"
                  />
                </div>
              </div>

              <div className="flex justify-between gap-2 mb-4">
                <div>
                  <label htmlFor="areaOfStudy">Duration of Course</label>
                  <br />
                  <input
                    type="text"
                    id="areaOfStudy"
                    value={areaOfStudy}
                    onChange={(e) => setAreaOfStudy(e.target.value)}
                    className="border border-b-gray p-1"
                  />
                </div>
                <div>
                  <label htmlFor="location">location</label><br />
                  <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setlocation(e.target.value)}
                    className="border border-b-gray p-1"
                  />
                </div>
              </div>
              

              <div className="flex justify-end">
                <button type="submit" className="bg-black text-white px-4 py-2 rounded">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <hr className="mt-5 mb-5 border border-b-black" />
    </div>
  );
};

export default Education;
