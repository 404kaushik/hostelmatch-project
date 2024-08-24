import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClock } from '@fortawesome/free-solid-svg-icons';

const JobCard = ({ jobLetter, jobDept, jobTitle, jobType, location, onDetailsClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 mt-4 flex flex-col md:flex-row justify-between items-start md:items-center">
      <div className="flex md:items-center">
        <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#FEC446] rounded-full text-black font-bold text-xl md:text-3xl mr-4">
          {jobLetter}
        </div>
        <div className="flex flex-col justify-start ">
          <div className="text-sm font-poppins font-semibold text-gray-500 mb-1">{jobDept}</div>
          <div className="text-xl md:text-2xl font-bold font-poppins text-gray-800">{jobTitle}</div>
          <div className="mt-2 md:mt-3">
            <span className="text-black text-xs md:text-sm font-semibold mr-2 px-2 p-0.5 rounded">
                <FontAwesomeIcon icon={faHome} className="mr-1 text-yellow-400 text-sm" /> {location}
            </span>
            <span className="text-black text-xs md:text-sm font-semibold px-2 py-0.5 rounded">
                <FontAwesomeIcon icon={faClock} className="mr-1 text-yellow-400 text-sm" /> {jobType}
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={onDetailsClick}
        className="text-black bg-[#FEC446] hover:text-white hover:bg-sun-400 focus:ring-4 focus:ring-blue-300 font-bold md:font-normal rounded-lg text-xs md:text-lg font-poppins px-5 py-2 mt-4 md:mt-0 self-center md:self-center"
      >
        View Details
      </button>
    </div>
  );
};

export default JobCard;
