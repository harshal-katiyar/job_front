import React from 'react';
import { Link } from 'react-router-dom';
import MetaData from '../components/MetaData'; 
import Loader from '../components/Loader';     

export const SavedJobs = ({ savedJobs = [], loading }) => {
  return (
    <>
      <MetaData title="Saved Jobs" />
      <div className="bg-gray-950 min-h-screen pt-14 md:px-20 px-3 text-white">
        {loading ? (
          <Loader />
        ) : (
          <div className="pt-6 md:px-28 px-1 pb-32">
            {savedJobs.length !== 0 && (
              <div className="text-center text-3xl pb-4 font-medium">
                Saved Jobs
              </div>
            )}

            {savedJobs.length === 0 ? (
              <div className="text-center text-lg mt-10 text-gray-400">
                No saved jobs found.
              </div>
            ) : (
              savedJobs.map((job, index) => (
                <div 
                  key={job?._id || index} 
                  className="mb-4 p-4 bg-gray-800 rounded shadow-sm shadow-gray-700"
                >
                  {job?.companyLogo?.url && (
                    <img 
                      src={job.companyLogo.url} 
                      alt={job.companyName || "Company Logo"} 
                      className="w-12 h-12 mb-2"
                    />
                  )}
                  <h2 className="text-xl font-semibold">
                    {job?.title || "Untitled Job"}
                  </h2>
                  <p className="text-gray-300">
                    {job?.companyName || "Unknown Company"}
                  </p>
                  <p className="text-sm text-gray-400">
                    {job?.location || "Unknown Location"}
                  </p>

                  <div className="flex gap-3 mt-3">
                    <Link 
                      to={`/details/${job?._id}`} 
                      className="blueCol px-3 py-1 text-sm rounded"
                    >
                      View Details
                    </Link>
                    <button 
                      onClick={() => console.log("Apply clicked for", job?._id)}
                      className="bg-green-600 px-3 py-1 text-sm rounded"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};
