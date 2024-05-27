"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProjects } from "../Redux/Action";


const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const {Project}=useSelector((store)=>store);
  console.log(Project)

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
    const formData = new FormData(e.target);
    const Projectdata = {};
    formData.forEach((value, key) => {
      Projectdata[key] = value;
    });
    dispatch(GetProjects(Projectdata));
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
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
            />
          </svg>
          <h1 className="font-sans font-bold text-3xl">Projects</h1>
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
              <div className="flex justify-between gap-2">
                <div>
                  <label htmlFor="name">Name</label>
                  <br />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=""
                    className="border border-b-gray p-1"
                  />
                </div>
                <div>
                  <label htmlFor="description">Description</label>
                  <br />
                  <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder=""
                    className="border border-b-gray p-1"
                  />
                </div>
              </div>

              <div className="flex justify-between gap-2">
                <div>
                  <label htmlFor="githubLink">GitHub Link:</label>
                  <br />
                  <input
                    type="text"
                    id="githubLink"
                    name="githubLink"
                    placeholder=""
                    className="border border-b-gray p-1"
                  />
                </div>
                <div>
                  <label htmlFor="website">Website</label>
                  <br />
                  <input
                    type="text"
                    id="website"
                    name="website"
                    placeholder=""
                    className="border border-b-gray p-1"
                  />
                </div>
              </div>
              <textarea
                name="summary"
                placeholder="Enter your summary here..."
                className="border mt-5 p-2 text-lg w-full h-32 resize-none"
              ></textarea>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    
    </div>
  );
};

export default Projects;
