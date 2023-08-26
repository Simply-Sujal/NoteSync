import React, { useState } from 'react';
import CollegeList from './CollegeList';
import YearList from './YearList';
import SubjectList from './SubjectList';

const Main = () => {
    const [selectedCollege, setSelectedCollege] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);

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
                <SubjectList year={selectedYear.year} college={selectedCollege.college} subjects={selectedYear.subjects}
                    onSubjectSelect={handleSubjectSelect} />
            )}
        </div>
    );
};

export default Main;
