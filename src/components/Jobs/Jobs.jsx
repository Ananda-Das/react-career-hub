import { MdLocationOn } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";

const Jobs = ({ job }) => {
  const { logo, job_title, remote_or_onsite, company_name, location, job_type, salary } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7e90fe] mr-4 text-[#7e90fe]">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7e90fe] mr-4 text-[#7e90fe]">{job_type}</button>
        </div>
        <div className="mt-4 flex">
            <h2 className="flex"><MdLocationOn className="text-2xl mr-2"></MdLocationOn> {location}</h2>
            <h2 className="flex "><BsCurrencyDollar className="text-2xl mr-2"></BsCurrencyDollar> {salary}</h2>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
