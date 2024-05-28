"use client";

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetProfile } from '../Redux/Action';

const Profile = () => {
  const [pictureUrl, setPictureUrl] = useState('');
  const [fullName, setFullName] = useState('');
  const [headLine, setHeadLine] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== 'undefined' && pictureUrl && fullName && email && phone && location) {
      const profileData = {
        pictureUrl,
        fullName,
        headLine,
        email,
        phone,
        location,
      };
      dispatch(GetProfile(profileData));
    }
  }, [pictureUrl, fullName, headLine, email, phone, location, dispatch]);

  const handleImageError = () => {
    setPictureUrl('');
  };

  return (
    <div>
      <div className="flex items-center gap-5 mb-5 mt-20 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 ">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
        <h1 className="font-sans font-bold text-3xl">Profile</h1>
      </div>

      <div className="flex grid-row-1 gap-5 mb-2">
        {pictureUrl && (
          <div className="rounded-full overflow-hidden h-20 w-20">
            <img
              src={pictureUrl}
              alt="Profile picture"
              onError={handleImageError}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div className="w-full">
          <h1>Picture</h1>
          <input
            type="url"
            placeholder="Enter your URL"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
            className="w-full p-1 border mt-2"
          />
        </div>
      </div>

      <label htmlFor="fullName" className="mt-5">Full Name</label>
      <input
        type="text"
        id="fullName"
        placeholder="Enter your name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="w-full p-1 border mt-1 mb-1"
      />

      <label htmlFor="headLine" className="mt-5">Headline</label>
      <input
        type="text"
        id="headLine"
        placeholder="Enter your text"
        value={headLine}
        onChange={(e) => setHeadLine(e.target.value)}
        className="w-full p-1 border mt-1 mb-1"
      />

      <label htmlFor="email" className="mt-5">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-1 border mt-1"
      />

      <div className="flex mt-2 gap-2">
        <label htmlFor="phone">
          Phone
          <input
            type="text"
            id="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-1 border mt-1"
          />
        </label>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-1 border mt-1"
          />
        </label>
      </div>

      <hr className="mt-5 mb-5 border border-b-black" />
    </div>
  );
};

export default Profile;
