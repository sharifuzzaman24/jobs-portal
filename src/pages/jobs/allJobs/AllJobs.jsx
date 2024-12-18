import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import JobCard from '../../../components/jobs/JobCard';

const AllJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [])


    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main className="w-4/5 mx-auto">
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                    {
                        jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                    }
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default AllJobs;