"use client"
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetSummery } from '../Redux/Action';

const Summery = () => {
  const [text, setText] = useState('');
  const [typingTimeout, setTypingTimeout] = useState(null);

  const dispatch=useDispatch();

  const handleTextChange = (e) => {
    setText(e.target.value);

    // Clear the previous timeout
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    // Set a new timeout to log the content after a delay
    const newTimeout = setTimeout(() => {
      dispatch(GetSummery(text))
      // console.log(text);
    }, 1000); // Adjust the delay (in milliseconds) as needed

    setTypingTimeout(newTimeout);
  };

  useEffect(() => {
    // Cleanup timeout on unmount
    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [typingTimeout]);

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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <h1 className="font-sans font-bold text-3xl">Summery</h1>
        </div>
        <div>
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>

      <textarea
        placeholder="Enter your summary here..."
        className="border mt-5 p-2 text-lg w-full h-32 resize-none"
        value={text}
        onChange={handleTextChange}
      ></textarea>

      <hr className="border border-b-black mt-5 mb-5" />
    </div>
  );
};

export default Summery;
