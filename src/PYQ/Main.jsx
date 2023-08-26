import React, { useState } from 'react';
import CollegeList from './CollegeList';
import YearList from './YearList';
import SubjectList from './SubjectList';
<<<<<<< HEAD
=======
// import NoteList from './NoteList';
>>>>>>> 2bd1a3e16cbf8777c1f97b92184e00aa74ffd09b

const Main = () => {
    const [selectedCollege, setSelectedCollege] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);
<<<<<<< HEAD
=======
    // const [selectedSubject, setSelectedSubject] = useState(null);
>>>>>>> 2bd1a3e16cbf8777c1f97b92184e00aa74ffd09b

    const handleCollegeSelect = (college) => {
        setSelectedCollege(college);
        setSelectedYear(null);
        setSelectedSubject(null);
    };

    const handleYearSelect = (year) => {
        setSelectedYear(year);
    };

    const handleSubjectSelect = (subject) => {
        setSelectedSubject(subject);
    };

    return (
        <div className="container mx-auto p-4">
            <CollegeList onCollegeSelect={handleCollegeSelect} />
            {selectedCollege && (
                <YearList college={selectedCollege.college} onYearSelect={handleYearSelect} />
            )}

            {selectedYear && selectedYear.subjects && (
<<<<<<< HEAD
                <SubjectList year={selectedYear.year} college={selectedCollege.college} subjects={selectedYear.subjects}
                    onSubjectSelect={handleSubjectSelect} />
            )}
=======
                <SubjectList year={selectedYear.year} college={selectedCollege.college} subjects={selectedYear.subjects} 
                    onSubjectSelect={handleSubjectSelect} />   
            )}

            {/* {selectedSubject && (
                <NoteList  subject={selectedSubject} />
            )} */}
>>>>>>> 2bd1a3e16cbf8777c1f97b92184e00aa74ffd09b
        </div>
    );
};

export default Main;
