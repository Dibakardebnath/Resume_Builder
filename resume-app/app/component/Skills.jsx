"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GetSkills } from "../Redux/Action";

const Skills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [skills, setSkills] = useState({
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkills((prevSkills) => ({
      ...prevSkills,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(GetSkills(skills))
    // console.log(skills);
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
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
            />
          </svg>
          <h1 className="font-sans font-bold text-3xl">Skills</h1>
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

            <form onSubmit={handleSubmit}>
              <div className="flex justify-between gap-2">
                <div>
                  <label htmlFor="skill1">Skill 1</label>
                  <br />
                  <input
                    type="text"
                    name="skill1"
                    value={skills.skill1}
                    onChange={handleChange}
                    className="border border-b-gray p-1"
                  />
                </div>
                <div>
                  <label htmlFor="skill2">Skill 2</label>
                  <br />
                  <input
                    type="text"
                    name="skill2"
                    value={skills.skill2}
                    onChange={handleChange}
                    className="border border-b-gray p-1"
                  />
                </div>
              </div>

              <div className="flex justify-between gap-2">
                <div>
                  <label htmlFor="skill3">Skill 3</label>
                  <br />
                  <input
                    type="text"
                    name="skill3"
                    value={skills.skill3}
                    onChange={handleChange}
                    className="border border-b-gray p-1"
                  />
                </div>
                <div>
                  <label htmlFor="skill4">Skill 4</label>
                  <br />
                  <input
                    type="text"
                    name="skill4"
                    value={skills.skill4}
                    onChange={handleChange}
                    className="border border-b-gray p-1"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-3">
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

export default Skills;
