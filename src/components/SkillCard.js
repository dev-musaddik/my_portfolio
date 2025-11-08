import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      key={skill._id}
      whileHover={{ scale: 1.05, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative p-[1px] rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500 shadow-lg hover:shadow-xl group"
      title={`${skill.name}: ${skill.level}%`}
    >
      <div className="rounded-3xl bg-white dark:bg-gray-900 p-6 transition-all duration-300 h-full">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-4">
          {skill.icon && (
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              className="w-10 h-10 object-contain drop-shadow-lg"
            />
          )}
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 to-orange-500 bg-clip-text text-transparent">
            {skill.name}
          </h3>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-orange-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]"
          />
        </div>

        {/* Level Label */}
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-3">
          <span>Skill Level</span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-semibold text-indigo-600 dark:text-orange-400"
          >
            {skill.level}%
          </motion.span>
        </div>

        {/* Glow hover effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500/10 to-orange-500/10 blur-xl transition-all duration-500"></div>
      </div>
    </motion.div>
  );
};
// 2. Frontend fallback data
// This data will be used if the backend fetch fails.
// It matches the structure your SkillCard expects.
// const FRONTEND_FALLBACK_DATA = [
//   { _id: 'fe1', name: 'React', level: 90 },
//   { _id: 'fe2', name: 'JavaScript', level: 95 },
//   { _id: 'fe3', name: 'Tailwind CSS', level: 85 },
//   { _id: 'fe4', name: 'Node.js', level: 70 },
//   { _id: 'fe5', name: 'HTML5', level: 100 },
//   { _id: 'fe6', name: 'Firebase', level: 75 },
// ];

// 3. A new component to manage fetching and displaying the skills list
// const SkillsList = () => {
//   const [skills, setSkills] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // This function tries to fetch data from the backend
//     const fetchSkills = async () => {
//       try {
//         setLoading(true);
//         setError(null);
        
//         // This will fail, as /api/skills doesn't exist
//         const response = await fetch('/api/skills'); 
        
//         if (!response.ok) {
//           // This error will be caught by the 'catch' block
//           throw new Error('Backend server not found or returned an error.');
//         }
        
//         const data = await response.json();
//         setSkills(data); // If successful, set backend data

//       } catch (err) {
//         // *** THIS IS THE FALLBACK LOGIC ***
//         // If the 'try' block fails, we land here.
//         console.error('Backend fetch failed:', err.message);
//         setError('Could not reach backend. Displaying sample data.');
//         setSkills(FRONTEND_FALLBACK_DATA); // Use the frontend data instead
      
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSkills();
//   }, []); // The empty array [] means this effect runs once on component mount

//   // Render loading state
//   if (loading) {
//     return (
//       <div className="text-center p-10">
//         <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
//         <p className="mt-4 text-lg font-medium">Loading Skills...</p>
//       </div>
//     );
//   }

//   // Render the list of skills
//   return (
//     <div className="max-w-6xl mx-auto">
//       <h1 className="text-4xl font-bold text-center mb-4">My Skills</h1>
      
//       {/* Display a message if there was an error (and we are using fallback data) */}
//       {error && (
//         <div className="text-center p-4 mb-6 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-lg">
//           {error}
//         </div>
//       )}

//       {/* Render the grid of skills */}
//       {skills.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {skills.map(skill => (
//             <SkillCard key={skill._id} skill={skill} />
//           ))}
//         </div>
//       ) : (
//         // Show this if loading is done but skills array is still empty
//         <p className="text-center text-lg">No skills to display.</p>
//       )}
//     </div>
//   );
// };
export default SkillCard;



