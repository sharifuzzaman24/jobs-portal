import React, { useEffect, useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Header from './Header';
import Footer from '../../components/layout/Footer';
import HotJobCard from './HotJobCard';

const HomePage = () => {

    const [jobs, setJobs] = useState([]);
    console.log(jobs)

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [])

    return (
        <>
            <header className='bg-[#F2F6FD]'>
                <Navbar></Navbar>
                <section>
                    <Header></Header>
                </section>
            </header>
            <main className='w-4/5 mx-auto'>
                <section>
                    <h2 className='text-4xl font-bold text-center mt-20 mb-10'>Hot Jobs</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {
                            jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                        }
                    </div>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default HomePage;