import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    return (
        <div className="max-w-md mx-auto my-4 p-4 bg-white shadow-lg rounded-lg border border-gray-200">
            {/* Job Title and Company */}
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        src={job.company_logo}
                        alt="Company Logo"
                        className="h-10 w-10 rounded-full mr-3"
                    />
                    <div>
                        <h2 className="text-lg font-bold text-gray-800">{job.title}</h2>
                        <p className="text-sm text-gray-600">{job.company}</p>
                    </div>
                </div>
                <span className="text-sm text-blue-500">{job.jobType}</span>
            </div>

            {/* Job Details */}
            <div className="flex flex-wrap gap-4 mt-3">
                <div className="flex items-center text-sm text-gray-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8c-2.28 0-4 1.72-4 4s1.72 4 4 4 4-1.72 4-4-1.72-4-4-4z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                        />
                    </svg>
                    {job.category}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 10h11M9 21l-5-5 5-5"
                        />
                    </svg>
                    ${job.salaryRange.min} - ${job.salaryRange.max} {job.salaryRange.currency}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6M9 16h6M9 8h6"
                        />
                    </svg>
                    {job.location}
                </div>
            </div>

            {/* Skills */}
            <div className="mt-4">
                <span className="text-sm font-medium text-gray-700">Skills:</span>
                <div className="flex flex-wrap gap-2 mt-2">

                    {
                        job.requirementsList.map((req, idx) => <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                            {req}
                        </span>)
                    }


                </div>
            </div>

            {/* Apply Button */}
            <div className="mt-6">
                <Link to={`/jobs/details/${job._id}`}>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                        Apply Now
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default JobCard;