import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const JobDetails = () => {

    const job = useLoaderData();

    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-4/5 mx-auto'>
                <section className="min-h-screen p-6">
                    <div className="max-w-4xl mx-auto bg-gray-100 shadow-md rounded-lg">
                        <div className='flex justify-between items-center p-6 border-b'>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
                                <p className="text-sm text-gray-600">Deadline: {job.applicationDeadline}</p>
                            </div>
                            <img src={job.company_logo} alt="" />
                        </div>

                        <div className="p-6 border-b">
                            <h2 className="text-xl font-semibold text-gray-700 mb-3">Job Details</h2>
                            <p className="text-gray-600 leading-relaxed">Job Type: {job.jobType}</p>
                            <p className="text-gray-600 leading-relaxed">Category: {job.category}</p>
                            <p className="text-gray-600 leading-relaxed">Salary Range: {job.salaryRange.min} - {job.salaryRange.max} {job.salaryRange.currency}</p>
                        </div>
                        <div className="p-6 border-b">
                            <h2 className="text-xl font-semibold text-gray-700 mb-3">Job Description</h2>
                            <p className="text-gray-600 leading-relaxed">{job.description}</p>
                        </div>

                        <div className="p-6 border-b">
                            <h2 className="text-xl font-semibold text-gray-700 mb-3">Responsibilities</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                {
                                    job.responsibilities.map((res, idx) => <li key={idx}>{res}</li>)
                                }
                            </ul>
                        </div>

                        <div className="p-6 border-b">
                            <h2 className="text-xl font-semibold text-gray-700 mb-3">Requirements</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                {
                                    job.requirements.map((res, idx) => <li key={idx}>{res}</li>)
                                }
                            </ul>
                        </div>

                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-700 mb-3">Company Details</h2>
                            <div className="text-gray-700 space-y-2">
                                <p>Company Name: {job.company}</p>
                                <p>Location: {job.location}</p>
                                <p>HR Name: {job.hr_name}</p>
                                <p>HR Email: {job.hr_email}</p>
                            </div>
                        </div>

                        <div className="p-6">
                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700 transition">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default JobDetails;