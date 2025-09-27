// import React from 'react';
// import MetaData from '../components/MetaData'; // Make sure path is correct
// import Loader from '../components/Loader';     // Ensure this component exists

// export const SavedJobs = ({ savedJobs = [], loading }) => {
//   return (
//     <>
//       <MetaData title="Saved Jobs" />
//       <div className="bg-gray-950 min-h-screen pt-14 md:px-20 px-3 text-white">
//         {loading ? (
//           <Loader />
//         ) : (
//           <div className="pt-6 md:px-28 px-1 pb-32">
//             {savedJobs.length !== 0 && (
//               <div className="text-center text-3xl pb-4 font-medium">
//                 Saved Jobs
//               </div>
//             )}

//             {/* Loop through savedJobs and display each job */}
//             {savedJobs.length === 0 ? (
//               <div className="text-center text-lg mt-10 text-gray-400">
//                 No saved jobs found.
//               </div>
//             ) : (
//               savedJobs.map((job, index) => (
//                 <div key={job.id || index} className="mb-4 p-4 bg-gray-800 rounded">
//                   <h2 className="text-xl font-semibold">{job.title}</h2>
//                   <p className="text-gray-300">{job.company}</p>
//                   <p className="text-sm text-gray-400">{job.location}</p>
//                   {/* Add more job details or buttons if needed */}
//                 </div>
//               ))
//             )}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

