"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GetLanguage } from "../Redux/Action";

const Language = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [languageInputs, setLanguageInputs] = useState({
    language1: "",
    language2: "",
    language3: "",
    language4: "",
  });

  const dispatch = useDispatch();
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLanguageInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(GetLanguage(languageInputs))
    // console.log(languageInputs);
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
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
            />
          </svg>

          <h1 className="font-sans font-bold text-3xl">Language</h1>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
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

            <form onSubmit={handleSubmit} className="mt-3">
              <div className="flex justify-between gap-2">
                <div>
                  <label htmlFor="language1">Language 1</label>
                  <br />
                  <input
                    type="text"
                    id="language1"
                    name="language1"
                    placeholder=""
                    className="border border-b-gray p-1"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="language2">Language 2</label>
                  <br />
                  <input
                    type="text"
                    id="language2"
                    name="language2"
                    placeholder=""
                    className="border border-b-gray p-1"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex justify-between gap-2">
                <div>
                  <label htmlFor="language3">Language 3</label>
                  <br />
                  <input
                    type="text"
                    id="language3"
                    name="language3"
                    placeholder=""
                    className="border border-b-gray p-1"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="language4">Language 4</label>
                  <br />
                  <input
                    type="text"
                    id="language4"
                    name="language4"
                    placeholder=""
                    className="border border-b-gray p-1"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex justify-end mt-3">
                <button
                  type="submit"
                  className="border bg-black text-white px-4 py-2 rounded"
                >
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

export default Language;
