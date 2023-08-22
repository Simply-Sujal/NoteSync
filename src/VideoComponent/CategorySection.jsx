import React from 'react'

const CategorySection = ({ handleCategorySelect }) => {
    //this is for backgorund of category
    // const [selectedCategory, setSelectedCategory] = useState('');

    const college = [
        { id: 1, collegeYear: 'First Year' },
        { id: 2, collegeYear: 'Second Year' },
        { id: 3, collegeYear: 'Third Year' },
        { id: 4, collegeYear: 'Fourth Year' },
    ];

    // const handleCategorySelect = (category) => {
    //     setSelectedCategory(category);
    // };

    return (
        <>
            <div className='flex gap-6 mt-4'>
                {college.map((item) => (
                    <div
                        key={item.id}
                        className={`bg-[#e0f2fe] px-3 md:px-2 py-3 text-[12px] md:text-[18px] rounded-md cursor-pointer hover:bg-sky-400 transition-all duration-200 ease-in-out hover:font-bold`}
                        onClick={() => handleCategorySelect(item.collegeYear)}
                    >
                        {item.collegeYear}
                    </div>
                ))}
            </div>
        </>
    )
}

export default CategorySection
