import React, { useState, useEffect } from 'react';

// Education Card component (individual timeline entry)
const EducationCard = ({ item }) => {
  return (
    <div className="relative pl-10 mb-12 group">
      {/* Timeline Dot */}
      <div className="absolute left-[-9px] top-1 w-6 h-6 bg-gray-900 rounded-full border-4 border-green-500 transition-all duration-300 group-hover:scale-110"></div>

      <time className="block mb-1 text-sm font-medium text-gray-400">
        {item?.date}
      </time>
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
        {item?.title}
      </h3>
      <p className="text-lg font-medium text-green-500 dark:text-green-400 mb-4">
        {item?.institution}
      </p>

      {/* Description */}
      <p className="text-base font-normal text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
        {item?.description}
      </p>

      {/* Highlighted Semester Results */}
      {item?.semesters && (
        <div className="mt-5 space-y-2">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Semester Results
          </h4>
          <div className="grid gap-2">
            {item.semesters.map((sem, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-3 rounded-lg border ${
                  sem.gpa >= 3.7
                    ? 'bg-green-100/80 dark:bg-green-900/30 border-green-400 text-green-700 dark:text-green-300'
                    : sem.gpa >= 3.3
                    ? 'bg-emerald-100/80 dark:bg-emerald-900/30 border-emerald-400 text-emerald-700 dark:text-emerald-300'
                    : sem.gpa >= 2.8
                    ? 'bg-yellow-100/80 dark:bg-yellow-900/30 border-yellow-400 text-yellow-700 dark:text-yellow-300'
                    : 'bg-red-100/80 dark:bg-red-900/30 border-red-400 text-red-700 dark:text-red-300'
                }`}
              >
                <span className="font-medium">{sem.title}</span>
                <span className="font-bold">GPA: {sem.gpa}</span>
              </div>
            ))}
          </div>
          {item.note && (
            <p className="mt-3 text-sm italic text-yellow-700 dark:text-yellow-300 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
              {item.note}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

// Updated Education Data
const FRONTEND_EDUCATION_DATA = [
  {
    _id: 'edu1',
    date: '2022 – 2027 (Expected July)',
    title: 'Diploma in Computer Technology',
    institution: 'Faridpur Polytechnic Institute, Faridpur, Bangladesh',
    description: `Currently studying in the 6th semester of the Diploma in Computer Technology program. Focused on software development, database management, and networking. Demonstrated consistent academic growth and technical skill development through each semester.`,
    semesters: [
      { title: '1st Semester (Published: 19 Oct 2023)', gpa: 3.73 },
      { title: '2nd Semester (Published: 03 Mar 2024)', gpa: 2.62 },
      { title: '3rd Semester (Published: 01 Sep 2024)', gpa: 3.62 },
      { title: '4th Semester (Published: 11 Mar 2025)', gpa: 3.65 },
      { title: '5th Semester (Published: 26 Oct 2025)', gpa: 3.51 },
    ],
    note: 'The 2nd semester GPA was affected by my transfer from Jhenaidah Polytechnic Institute to Faridpur Polytechnic Institute. After the transition, my performance improved significantly in subsequent semesters.',
  },
  {
    _id: 'edu2',
    date: '2021 – 2022',
    title: 'Secondary School Certificate (SSC)',
    institution: 'Yasin High School, Rajbari, Bangladesh',
    description: `Completed SSC in the Science group, developing a strong foundation in mathematics, physics, and logical problem-solving which continue to support my technical education.`,
  },
];

const EducationList = () => {
  const [educationItems, setEducationItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/education');
        if (!response.ok) throw new Error('Backend server not found.');

        const data = await response.json();
        setEducationItems(data);
      } catch (err) {
        console.error('Backend fetch failed:', err.message);
        setError('Could not reach backend. Showing sample data.');
        setEducationItems(FRONTEND_EDUCATION_DATA);
      } finally {
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  if (loading) {
    return (
      <div className="text-center p-10">
        <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-lg font-medium">Loading Education...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex justify-center mb-16">
        <span className="inline-flex items-center gap-x-3 px-6 py-3 rounded-full font-semibold text-lg bg-gray-900/80 border border-green-600/40 text-green-400 shadow-md backdrop-blur-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 1.7.7 3.2 1.9 4.2C8.7 22 10.3 22.5 12 22.5s3.3-.5 4.1-1.3c1.2-1 1.9-2.5 1.9-4.2v-5" />
          </svg>
          Education
        </span>
      </div>

      {error && (
        <div className="text-center p-4 mb-6 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-lg">
          {error}
        </div>
      )}

      {educationItems.length > 0 ? (
        <div className="relative pl-6">
          <div className="absolute left-6 top-1 bottom-1 w-1 bg-green-500/30 rounded-full -ml-[2px]"></div>
          {educationItems.map((item) => (
            <EducationCard key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg">No education history to display.</p>
      )}
    </div>
  );
};

export default EducationList;
