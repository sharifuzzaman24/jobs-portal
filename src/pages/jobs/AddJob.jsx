import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const AddJob = () => {

    const navigate = useNavigate();

    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const job_type = e.target.job_type.options[e.target.job_type.selectedIndex].text;
        const job_category = e.target.job_category.options[e.target.job_category.selectedIndex].text;
        const logo_url = form.logo_url.value;
        const location = form.location.value;
        const company_name = form.company_name.value;
        const requirements = form.requirements.value;
        const responsibilities = form.responsibilities.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const min = form.min.value;
        const max = form.max.value;
        const salaryRange = { min, max }
        const requirementsList =
            requirements.trim() !== ""
                ? requirements
                    .split(",")
                    .map((req) => req.trim())
                    .filter((req) => req !== "")
                : [];
        const responsibilitiesList =
            responsibilities.trim() !== ""
                ? requirements
                    .split(",")
                    .map(res => res.trim())
                    .filter(res => res !== "")
                : [];

        const newJob = {
            title,
            job_type,
            job_category,
            logo_url,
            location,
            company_name,
            description,
            deadline,
            salaryRange,
            requirementsList,
            responsibilitiesList
        }
        fetch('http://localhost:5000/jobs', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newJob)
            
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate('/all-jobs')
            }
        })
    }

    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-4/5 mx-auto'>
                <section className="min-h-screen p-6">
                    <div className="max-w-4xl mx-auto bg-gray-100 shadow-md rounded-lg">
                        <h1 className='text-center font-bold text-3xl pt-10'>Add Job</h1>
                        <form onSubmit={handleAddJob}>

                            <div className="form-control px-8 py-2">
                                <label className="label">
                                    <span className="label-text">Job Title</span>
                                </label>
                                <input name='title' type="text" placeholder="Job Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control px-8 py-2">
                                <label className="label">
                                    <span className="label-text">Job Type</span>
                                </label>
                                <select name='job_type' defaultValue={1} className="select select-bordered w-full">
                                    <option value={1} disabled>Select Job Type</option>
                                    <option value={2}>Intern</option>
                                    <option value={3}>Part-Time</option>
                                    <option value={4}>Full-Time</option>
                                </select>
                            </div>
                            <div className="form-control px-8 py-2">
                                <label className="label">
                                    <span className="label-text">Job Category</span>
                                </label>
                                <select name='job_category' defaultValue={1} className="select select-bordered w-full">
                                    <option value={1} disabled>Select Job Category</option>
                                    <option value={2}>Intern</option>
                                    <option value={3}>Part-Time</option>
                                    <option value={4}>Full-Time</option>
                                </select>
                            </div>
                            <div className="form-control px-8 py-2">
                                <label className="label">
                                    <span className="label-text">Company Name</span>
                                </label>
                                <input name='company_name' type="text" placeholder="Company Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control px-8 py-2">
                                <label className="label">
                                    <span className="label-text">Company Logo URL</span>
                                </label>
                                <input name='logo_url' type="url" placeholder="Company Logo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control px-8 py-2">
                                <label className="label">
                                    <span className="label-text">Company Location</span>
                                </label>
                                <input name='location' type="text" placeholder="Company Location" className="input input-bordered" required />
                            </div>
                            <div className="form-control px-8 py-2">
                                <label className="label">
                                    <span className="label-text">Job Requirements</span>
                                </label>
                                <input name='requirements' type="text" placeholder="Job Requirements" className="input input-bordered" required />
                            </div>
                            <div className="form-control px-8 py-2">
                                <label className="label">
                                    <span className="label-text">Responsibilities</span>
                                </label>
                                <input name='responsibilities' type="text" placeholder="Responsibilities" className="input input-bordered" required />
                            </div>
                            <div className="form-control px-8 py-2">
                                <label className="label">
                                    <span className="label-text">Job Description</span>
                                </label>
                                <textarea name='description' className="textarea textarea-bordered" placeholder="Job Description"></textarea>
                            </div>
                            <div className="form-control px-8 py-2">
                                <label className="label">
                                    <span className="label-text">Deadline</span>
                                </label>
                                <input name='deadline' type="date" placeholder="Deadline" className="input input-bordered" required />
                            </div>
                            <div className="form-control px-8 py-2">
                                <label className="label">
                                    <span className="label-text">Salary Range</span>
                                </label>
                                <div className="join w-full">


                                    <label className="form-control w-full">
                                        <input name='min' type="text" placeholder="Min" className="join-item input input-bordered w-full" />
                                        <div className="label">
                                            <span className="label-text-alt">Min</span>
                                        </div>
                                    </label>
                                    <label className="form-control w-full">
                                        <input name='max' type="text" placeholder="Max" className="join-item input input-bordered w-full" />
                                        <div className="label">
                                            <span className="label-text-alt">Max</span>
                                        </div>
                                    </label>

                                </div>
                            </div>

                            <div className="form-control px-8 pt-4 pb-10">
                                <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700 transition">
                                    Apply Now
                                </button>
                            </div>

                        </form>
                    </div>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default AddJob;