"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GetInterest } from "../Redux/Action";

const Interest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [interestInputs, setInterestInputs] = useState({
    interest1: "",
    interest2: "",
  });

  const dispatch=useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; 
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = ""; 
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInterestInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(GetInterest(interestInputs))
    // console.log(interestInputs);
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
              d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
            />
          </svg>

          <h1 className="font-sans font-bold text-3xl">Interest</h1>
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
                  <label htmlFor="interest1">Interest 1</label>
                  <br />
                  <input
                    type="text"
                    id="interest1"
                    name="interest1"
                    placeholder=""
                    className="border border-b-gray p-1"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="interest2">Interest 2</label>
                  <br />
                  <input
                    type="text"
                    id="interest2"
                    name="interest2"
                    placeholder=""
                    className="border border-b-gray p-1"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex justify-end mt-3">
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
      <hr className="mt-5 mb-5 border border-b-black" />
    </div>
  );
};

export default Interest;
