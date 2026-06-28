import React, { useState, useEffect } from 'react';
import { GraduationCap, Award, Languages } from 'lucide-react';

// Education Card component (individual timeline entry)
const EducationCard = ({ item }) => {
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="relative pl-6 md:pl-8 mb-8 group last:mb-0">
      {/* Timeline Dot */}
      <div className="absolute left-[-5px] top-1.5 w-3.5 h-3.5 bg-white dark:bg-gray-950 rounded-full border-2 border-blue-500 transition-all duration-300 group-hover:scale-125"></div>

      <time className="block mb-1 font-mono text-xs font-semibold text-gray-400">
        {item?.date}
      </time>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
        {item?.title}
      </h3>
      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
        {item?.institution}
      </p>

      {item?.description && (
        <p className="text-sm text-gray-600 dark:text-gray-450 leading-relaxed whitespace-pre-line">
          {item?.description}
        </p>
      )}

      {/* Semester Results Toggle (only for Diploma) */}
      {item?.semesters && (
        <div className="mt-3">
          <button
            onClick={() => setShowResults(!showResults)}
            className="flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
          >
            {showResults ? 'Hide Results' : 'View Semester Results'}
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5"><path d={showResults ? "m18 15-6-6-6 6" : "m6 9 6 6 6-6"}/></svg>
          </button>

          <div 
            className={`space-y-1.5 overflow-hidden transition-all duration-300 ease-in-out ${
              showResults ? 'max-h-[300px] opacity-100 mt-2' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="grid gap-1.5">
              {item.semesters.map((sem, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-2 rounded-lg border border-gray-150 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-xs text-gray-700 dark:text-gray-300"
                >
                  <span className="font-medium">{sem.title}</span>
                  <span className="font-bold">GPA: {sem.gpa}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Fallback background details
const FRONTEND_EDUCATION_DATA = [
  {
    _id: 'edu1',
    date: '2022 – Present',
    title: 'Diploma in Computer Science',
    institution: 'Faridpur Polytechnic Institute',
    semesters: [
      { title: '1st Semester', gpa: 3.73 },
      { title: '2nd Semester', gpa: 2.62 },
      { title: '3rd Semester', gpa: 3.62 },
      { title: '4th Semester', gpa: 3.65 },
      { title: '5th Semester', gpa: 3.51 },
    ]
  },
  {
    _id: 'edu2',
    date: '2020 – 2021',
    title: 'Secondary School Certificate (SSC)',
    institution: 'Yasin High School · GPA 4.17 / 5.0',
    description: 'Science Group'
  },
  {
    _id: 'edu3',
    date: '2018 – 2019',
    title: 'Junior School Certificate (JSC)',
    institution: 'Yasin High School · Rajbari'
  },
  {
    _id: 'edu4',
    date: '2015 – 2016',
    title: 'Primary School Certificate (PSC)',
    institution: 'Town Moktob Govt. Primary School · GPA 4.75 / 5.0'
  }
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
        // Match the layout format if backend data exists, otherwise fall back
        setEducationItems(data.length > 0 ? data : FRONTEND_EDUCATION_DATA);
      } catch (err) {
        console.error('Backend fetch failed:', err.message);
        setError('Using local profile data.');
        setEducationItems(FRONTEND_EDUCATION_DATA);
      } finally {
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-sm font-medium text-gray-500">Loading Background...</p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-8">
      {error && (
        <div className="hidden text-center p-2 text-xs bg-yellow-50 dark:bg-yellow-950/20 text-yellow-800 dark:text-yellow-250 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Education Timeline */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-gray-150 dark:border-gray-800 pb-3">
            <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-mono text-xs tracking-widest uppercase text-gray-500 font-bold">
              Education
            </h3>
          </div>

          <div className="relative border-l border-gray-200 dark:border-gray-800 ml-1 mt-4">
            {educationItems.map((item) => (
              <EducationCard key={item._id} item={item} />
            ))}
          </div>
        </div>

        {/* Right Column: Training & Languages */}
        <div className="space-y-8">
          {/* Training */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-gray-150 dark:border-gray-800 pb-3">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="font-mono text-xs tracking-widest uppercase text-gray-500 font-bold">
                Training & Internship
              </h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30">
                <h4 className="text-base font-bold text-gray-900 dark:text-white">
                  Self-learning — Programming & Web Dev
                </h4>
                <p className="text-xs font-mono text-blue-600 dark:text-blue-400 mt-1">
                  C, JavaScript, Python, Java, React, Tailwind CSS
                </p>
              </div>

              <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30">
                <h4 className="text-base font-bold text-gray-900 dark:text-white">
                  Digital Marketing Internship
                </h4>
                <p className="text-xs font-mono text-blue-600 dark:text-blue-400 mt-1">
                  Axelman Digital · SEO, social, paid ads (Meta & Google), content
                </p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-gray-150 dark:border-gray-800 pb-3">
              <Languages className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="font-mono text-xs tracking-widest uppercase text-gray-500 font-bold">
                Languages
              </h3>
            </div>

            <div className="divide-y divide-gray-150 dark:divide-gray-800">
              <div className="py-3 flex justify-between items-center">
                <span className="font-semibold text-gray-900 dark:text-white">Bengali</span>
                <span className="font-mono text-xs text-blue-600 dark:text-blue-400">Native</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="font-semibold text-gray-900 dark:text-white">English</span>
                <span className="font-mono text-xs text-blue-600 dark:text-blue-400">Fluent / Full working</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationList;
