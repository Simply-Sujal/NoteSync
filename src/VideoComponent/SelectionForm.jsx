import React, { useState } from 'react';
import ytVideos from './SomeVideo';

const SelectionForm = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setSelectedSubject('');
  };

  const handleCollegeChange = (event) => {
    setSelectedCollege(event.target.value);
    setSelectedSubject('');
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
    setSelectedSubject('');
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Do something with the selected values
    console.log('Selected Year:', selectedYear);
    console.log('Selected College:', selectedCollege);
    console.log('Selected Department:', selectedDepartment);
    console.log('Selected Subject:', selectedSubject);
  };

  // Define your options here
  const yearOptions = [
    { value: '1', label: 'First Year' },
    { value: '2', label: 'Second Year' },
    { value: '3', label: 'Third Year' },
    { value: '4', label: 'Fourth Year' },
  ];

  const collegeOptions = [
    { value: 'college1', label: 'KIIT University' },
    { value: 'college2', label: 'SOA University' },
    { value: 'college3', label: 'Silicon University' },
  ];

  const departmentOptions = [
    { value: 'dept1', label: 'CSE' },
    { value: 'dept2', label: 'IT' },
    { value: 'dept3', label: 'Civil' },
  ];

  const subjectOptions = {
    '1': {
      dept1: ['Operating System', 'scratch'],
      dept2: ['OOPS', 'Python'],
      dept3: ['Maths', 'English'],
    },
    '2': {
      dept1: ['CPP', 'JAVA'],
      dept2: ['WebDev', 'React'],
      dept3: ['Integration', 'derivation'],
    },
    '3': {
      dept1: ['AI/ML', 'BigData'],
      dept2: ['DSA', 'Pearl'],
      dept3: ['Hindi', 'Higherordermath'],
    },
    '4': {
      dept1: ['Networking', 'NeuralNetwork'],
      dept2: ['DAA', 'Coa'],
      dept3: ['pdc', 'bms'],
    },
  };

  const subjects = subjectOptions[selectedYear]?.[selectedDepartment] || [];

  return (
    <div className="w-full mx-auto bg-[#F5F5F5] pt-4">
      <form onSubmit={handleSubmit} className="max-w-[1200px] mx-auto px-2 flex flex-col md:flex-row justify-center md:gap-6 md:items-center">
        <label className="block mb-4">
          <span className="text-[#001C30] text-[20px] font-medium">Year :</span>
          <select value={selectedYear} onChange={handleYearChange} className="block w-full mt-1 py-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
            <option value="">Select Year</option>
            {yearOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <br />

        <label className="block mb-4">
          <span className="text-[#001C30] text-[20px] font-medium">College :</span>
          <select value={selectedCollege} onChange={handleCollegeChange} className="block w-full mt-1 py-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
            <option value="">Select College</option>
            {...collegeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <br />

        <label className="block mb-4">
          <span className="text-[#001C30] text-[20px] font-medium">Department :</span>
          <select value={selectedDepartment} onChange={handleDepartmentChange} className="block w-full mt-1 py-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
            <option value="">Select Department</option>
            {departmentOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <br />


        <label className="block mb-4">
          <span className="text-[#001C30] text-[20px] font-medium">Subject :</span>
          <select value={selectedSubject} onChange={handleSubjectChange} className="block w-full mt-1 py-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
            <option value="">Select Subject</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </label><br />

        <div className='md:pt-4'>
          <button type="submit" className="bg-green-400 text-white rounded-full w-full px-5 py-2 hover:bg-green-500 align-bottom transition duration-200 ease-in-out">Submit</button>
        </div>
      </form >
    </div>
  );
};

export default SelectionForm;
