import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import Link from "next/link";

const Resume = () => {
  const {
    isAuth,
    Pro,
    Sum,
    Edu,
    Skil,
    Lang,
    Inter,
    Proj,
    Profile,
    Summery,
    Education,
    Skills,
    Language,
    Interests,
    Project,
  } = useSelector((store) => store);

  const resumeRef = useRef();

  const handleDownload = async () => {
    const element = resumeRef.current;
    const html2pdf = (await import('html2pdf.js')).default; 
    const opt = {
      margin: 0,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2, logging: true, scrollY: 0 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };
  return (
    <div className="col-span-2 bg-white-300 p-5 mt-20">
      {Pro ? (
        <div className="border flex" ref={resumeRef}>
          <div className="flex-1 p-5 bg-[#d9e2e9]">
            {/* Profile */}
            <div className="ml-8">
              <h1 className="font-sans font-bold text-3xl">
                {Profile.fullName}
              </h1>
              <h2 className="font-sans font-bold text-xl">
                {Profile.headLine}
              </h2>
              {Profile.pictureUrl ? (
                <img
                  className="border-none size-24 mt-3 mb-3"
                  src={Profile.pictureUrl}
                  alt="pictureUrl"
                />
              ) : (
                ""
              )}
               <p className="mb-1 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                {Profile.email}
              </p>
              <p className="mb-1 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                </svg>
                {Profile.phone}
              </p>
              <p className="mb-1 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                {Profile.location}
              </p>
            </div>

            {/* Education */}
            {Edu && (
              <div className="mt-3 mb-3 print:mt-0">
                <div className="w-80 flex justify-center gap-3 m-auto bg-gray-100 print:mt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                  <h1 className="font-bold print:mt-0">EDUCATION</h1>
                </div>
                <div className="ml-8">
                  <h4 className="font-semibold mt-3">{Education.studyType}</h4>
                  <h4 className="font-semibold mt-1">{Education.institution}</h4>
                  <div className="flex">
                    <p className="mt-1">{Education.areaOfStudy} |</p>
                    <p className="ml-1 mt-1"> {Education.location}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Skills */}
            {Skil && (
              <div className="mt-3 mb-3">
                <div className="border flex w-80 m-auto justify-center gap-3 bg-gray-100 mt-3 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
                    />
                  </svg>
                  <h1 className="font-bold">SKILLS</h1>
                </div>
                <div className="flex flex-wrap ml-8">
                  <p className="w-1/2 mt-1">{Skills.skill1}</p>
                  <p className="w-1/2 mt-1">{Skills.skill2}</p>
                  <p className="w-1/2 mt-1">{Skills.skill3}</p>
                  <p className="w-1/2 mt-1">{Skills.skill4}</p>
                </div>
              </div>
            )}

            {/* Language */}
            {Lang && (
              <div className="mt-3 mb-3">
                <div className="border flex w-80 m-auto justify-center gap-3 bg-gray-100 mt-3 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6h3m-3 4h3m-3 4h3M4.5 12h15M4.5 9h15M4.5 15h15m-15 3a2.25 2.25 0 0 1-2.25-2.25V6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-15Z"
                    />
                  </svg>
                  <h1 className="font-bold">LANGUAGE</h1>
                </div>
                <div className="flex flex-wrap ml-8">
                  <p className="w-1/2 mt-1">{Language.language1}</p>
                  <p className="w-1/2 mt-1">{Language.language2}</p>
                  <p className="w-1/2 mt-1">{Language.language3}</p>
                  <p className="w-1/2 mt-1">{Language.language4}</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex-1 p-5">
            {/* Summary */}
            {Sum && (
              <div className="mt-3 mb-3">
                <div className="border flex w-80 m-auto justify-center gap-3 bg-gray-100 mt-3 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.115 4.635c.349-1.048 1.282-1.835 2.385-1.92a48.474 48.474 0 0 1 7.002 0c1.103.085 2.036.872 2.385 1.92a59.388 59.388 0 0 1 0 14.73c-.349 1.048-1.282 1.835-2.385 1.92a48.474 48.474 0 0 1-7.002 0c-1.103-.085-2.036-.872-2.385-1.92a59.388 59.388 0 0 1 0-14.73ZM12 8.25v7.5m3-3.75h-6"
                    />
                  </svg>
                  <h1 className="font-bold">SUMMERY</h1>
                </div>
                <div className="ml-8">
                  <p className="mb-1 mt-1 w-80">{Summery}</p>
                </div>
              </div>
            )}

            {/* Projects */}
            {Proj && (
              <div className="mt-3 mb-3">
                <div className="border flex w-80 m-auto justify-center gap-3 bg-gray-100 mt-3 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5v.75a6 6 0 1 1-9 0v-.75m9 0a2.625 2.625 0 0 0-2.625-2.625h-3.75A2.625 2.625 0 0 0 7.5 10.5v.75m9 0h2.25m-2.25 0h-2.25m-6.75 0h-2.25m2.25 0h6.75m0 0v-1.5a3 3 0 1 0-6 0v1.5m0 0h6.75m0 0v.75a3 3 0 1 1-6 0v-.75m6 0h-6"
                    />
                  </svg>
                  <h1 className="font-bold">PROJECTS</h1>
                </div>
                {Project.map((ele, index) => (
                  <div className="ml-8 w-80" key={index}>
                    <Link className="font-semibold" href={ele.githubLink}>
                      {index + 1}. {ele.name}
                    </Link>
                    <br />
                    <Link className="font-semibold" href={ele.website}>
                      {ele.website}
                    </Link>
                    <p>{ele.description}</p>

                    <p className="font-semibold">Feature</p>
                    <p className='w-80'>{ele.summary}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Interests */}
            {Inter && (
              <div className="mt-3 mb-3">
                <div className="border flex w-80 m-auto justify-center gap-3 bg-gray-100 mt-3 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.625A2.625 2.625 0 0 0 13.125 3h-2.25A2.625 2.625 0 0 0 8.25 5.625V9m-2.625 0h12.75a2.625 2.625 0 0 1 2.625 2.625v9a2.625 2.625 0 0 1-2.625 2.625H5.625A2.625 2.625 0 0 1 3 20.625v-9A2.625 2.625 0 0 1 5.625 9Z"
                    />
                  </svg>
                  <h1 className="font-bold">INTERESTS</h1>
                </div>
                <div className="ml-8">
                  <p className="mb-1 mt-1">{Interests.interest1}</p>
                  <p className="mb-1 mt-1">{Interests.interest2}</p>
                  <p className="mb-1 mt-1">{Interests.interest3}</p>
                  <p className="mb-1 mt-1">{Interests.interest4}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="flex justify-center mt-5">
        <button
          onClick={handleDownload}
          className="ml-3 text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Resume;
