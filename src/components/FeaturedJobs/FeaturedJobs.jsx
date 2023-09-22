import { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div>
            <div className="text-center">
                <div className="text-5xl">Featured Jobs: {jobs.length}</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, neque! Incidunt cupiditate earum quia magnam ab, </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.map(job => <Jobs job={job} key={job.id}></Jobs>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;