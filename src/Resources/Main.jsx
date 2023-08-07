// src/App.js
import React, { useState } from 'react';
import YearList from './YearList';
import SubjectList from './SubjectList';
import NoteList from './NoteList';

const Main = () => {
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);

    const handleYearSelect = (year) => {
        setSelectedYear(year);
        setSelectedSubject(null);
    };

    const handleSubjectSelect = (subject) => {
        setSelectedSubject(subject);
    };

    return (
        <div className="container mx-auto p-4">
            <YearList onYearSelect={handleYearSelect} />
            {selectedYear && (
                <SubjectList
                    year={selectedYear.year}
                    subjects={selectedYear.subjects}
                    onSubjectSelect={handleSubjectSelect}
                />
            )}
            {selectedSubject && <NoteList subject={selectedSubject} />}
        </div>
    );
};

export default Main;
