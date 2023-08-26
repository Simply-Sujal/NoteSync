const ytVideos = [
    {
        id: 1,
        courseName: "Operating System",
        courseImage: "https://i.ytimg.com/vi/bkSWJJZNgf8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCoc0KMp_L-nCERvM4JXTmsLAND3w",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/operatingSystem',
        year: 'College Courses'
    },
    {
        id: 2,
        courseName: "DBMS",
        courseImage: "https://i.ytimg.com/vi/kBdlM6hNDAE/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBpbNmhuhzYTAcmCLRlB3-gpBKa9g",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/dbms',
        year: 'College Courses'
    },
    {
        id: 3,
        courseName: "Design & Analysis Algo.",
        courseImage: "https://i.ytimg.com/vi/u8JZ9gU5o4g/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/designanalysisofalgo',
        year: 'College Courses'
    },
    {
        id: 4,
        courseName: "Automata & Formal Lang.",
        courseImage: "https://i.ytimg.com/vi/iVZDqRQiPMo/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/automataandformallang',
        year: 'College Courses'
    }
    ,
    {
        id: 5,
        courseName: "Computer Organization",
        courseImage: "https://i.ytimg.com/vi/Ol8D69VKX2k/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/computerorganization',
        year: 'College Courses'
    },
    {
        id: 6,
        courseName: "PDC",
        courseImage: "https://i.ytimg.com/vi/WsutsFnLCSw/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/pdc',
        year: 'College Courses'
    },
    {
        id: 7,
        courseName: "Discrete Mathematics",
        courseImage: "https://i.ytimg.com/vi/p2b2Vb-cYCs/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/discretemathematics',
        year: 'College Courses'
    },
    {
        id: 8,
        courseName: "Probability and Statistics",
        courseImage: "https://i.ytimg.com/vi/V3iEsLPAD68/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/probabilityandstatistics',
        year: 'College Courses'
    },
    {
        id: 9,
        courseName: "Basic Electrical Engg. 1",
        courseImage: "https://i.ytimg.com/vi/Vd2UJiIPbag/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/basicelectricaleng1',
        year: 'College Courses'
    },
    {
        id: 10,
        courseName: "Analog Electronics",
        courseImage: "https://i.ytimg.com/vi/uDxpygwJK1I/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/analogelectronics',
        year: 'College Courses'
    },
    {
        id: 11,
        courseName: "Computer Networks",
        courseImage: "https://i.ytimg.com/vi/4D55Cmj2t-A/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/computernetoworks',
        year: 'College Courses'
    },
    {
        id: 12,
        courseName: "Software Eng.",
        courseImage: "https://i.ytimg.com/vi/imzSpM_5R6k/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/softwareeng',
        year: 'College Courses'
    },
    {
        id: 13,
        courseName: "Big Data",
        courseImage: "https://i.ytimg.com/vi/LkEQQwVsET8/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/bigdata',
        year: 'College Courses'
    },
    {
        id: 14,
        courseName: "Artificial Intelligence",
        courseImage: "https://i.ytimg.com/vi/s-s9ilkMVj8/mqdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/artificialintelligence',
        year: 'College Courses'
    },
    {
        id: 15,
        courseName: "Data Structures in C",
        courseImage: "https://i.ytimg.com/vi/AT14lCXuMKI/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/dsa',
        year: 'College Courses'
    },
    {
        id: 16,
        courseName: "OOPS in Java",
        courseImage: "https://i.ytimg.com/vi/BSVKUk58K6U/mqdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/oops',
        year: 'College Courses'
    },
    {
        id: 17,
        courseName: "C Programming 1",
        courseImage: "https://i.ytimg.com/vi/rQoqCP7LX60/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/cprogramming',
        year: 'College Courses'
    },
    {
        id: 18,
        courseName: "Engg. Mechanics 1",
        courseImage: "https://i.ytimg.com/vi/S0tNby6AA6M/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/engmechanics',
        year: 'College Courses'
    },
    {
        id: 19,
        courseName: "Basic Electric Engg. 2",
        courseImage: "https://i.ytimg.com/vi/IbHHMWUQaB0/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/basicElectricalEng2',
        year: 'College Courses'
    },
    {
        id: 20,
        courseName: "Analog Electronics 2",
        courseImage: "https://i.ytimg.com/vi/7jaa1rlW7Ak/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/analogElect2',
        year: 'College Courses'
    },
    {
        id: 21,
        courseName: "C Programming 2",
        courseImage: "https://i.ytimg.com/vi/7Dh73z3icd8/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/cprogramming2',
        year: 'College Courses'
    },
    {
        id: 22,
        courseName: "Engg. Mechanics 2",
        courseImage: "https://1.bp.blogspot.com/-t9EoxRcAtcM/YIg99v3DXEI/AAAAAAAABEg/RVR4uyYrqUAZeyW3vvvMoN0aWkrr-2r-ACLcBGAsYHQ/s1961/engineering-mechanics-notes.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/enggMechanics2',
        year: 'College Courses'
    },
    {
        id: 23,
        courseName: "Basic Electric Engg. 3",
        courseImage: "https://i.ytimg.com/vi/jCchZkU7vY8/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/basicElectricEng3',
        year: 'College Courses'
    },
    {
        id: 24,
        courseName: "Analog Electronics 3",
        courseImage: "https://i.ytimg.com/vi/qRIhUkNeq04/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/analogElect3',
        year: 'College Courses'
    },
    {
        id: 25,
        courseName: "C Programming 3",
        courseImage: "https://i.ytimg.com/vi/EjavYOFoJJ0/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/cprogramming3',
        year: 'College Courses'
    },
    {
        id: 26,
        courseName: "Engg. Mechanics 3",
        courseImage: "https://i.ytimg.com/vi/Z4WN2Z9okfs/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/enggMechanics3',
        year: 'College Courses'
    },
    {
        id: 27,
        courseName: "Engg. Graphics",
        courseImage: "https://i.ytimg.com/vi/uojN7SOHPBw/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/enggGraphics',
        year: 'College Courses'
    },
    {
        id: 28,
        courseName: "Mathematics-2",
        courseImage: "https://i.ytimg.com/vi/qC2NnVYAb_Q/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/mathematics2',
        year: 'College Courses'
    },
    {
        id: 29,
        courseName: "Basic Electronics 1",
        courseImage: "https://i.ytimg.com/vi/icrAf1us2IQ/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCX1sE_Mm8gwvjl4YhwYWzz1v2kcw",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/basicelectronics1',
        year: 'College Courses'
    },
    {
        id: 30,
        courseName: "Environmental Science 1",
        courseImage: "https://i.ytimg.com/vi/TCdn3jTysI8/mqdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/evs',
        year: 'College Courses'
    },
    {
        id: 31,
        courseName: "Environmental Science 2",
        courseImage: "https://i.ytimg.com/vi/zuSFs85kuJs/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/evs2',
        year: 'College Courses'
    },
    {
        id: 32,
        courseName: "CPP CodeWithHarry",
        courseImage: "https://i.ytimg.com/vi/j8nAHeVKL08/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/cpp1codewithharry',
        year: 'College Courses'
    },
    {
        id: 33,
        courseName: "CPP Babbar",
        courseImage: "https://i.ytimg.com/vi/WQoB2z67hvY/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/cpp2luvbabbar',
        year: 'College Courses'
    },
    {
        id: 34,
        courseName: "CPP Apna College",
        courseImage: "data:image/jpeg;base64,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",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/cpp3apnacollege',
        year: 'College Courses'
    },
    {
        id: 35,
        courseName: "CPP Apna College",
        courseImage: "https://i.ytimg.com/vi/bL-o2xBENY0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDd0jd-nTVMB0Dg8TDZvgc97c-XIA",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/cpp3collegewallah',
        year: 'College Courses'
    },
    {
        id: 36,
        courseName: "CPP The Cherno",
        courseImage: "https://i.ytimg.com/vi/UAAiwObNhQ0/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/cpp4thecherno',
        year: 'College Courses'
    },
    {
        id: 37,
        courseName: "CPP Jenny's Lecture",
        courseImage: "https://i.ytimg.com/vi/oOmbSpOzvYg/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/cpp5jennyslecture',
        year: 'College Courses'
    },
    {
        id: 38,
        courseName: "CPP Striver",
        courseImage: "https://i.ytimg.com/vi/EAR7De6Goz4/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/cpp6striverlecture',
        year: 'College Courses'
    },
    {
        id: 39,
        courseName: "DSA in C(CWH)",
        courseImage: "https://i.ytimg.com/vi/5_5oE5lgrhw/mqdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/dsainccodewithharry',
        year: 'College Courses'
    },
    {
        id: 40,
        courseName: "DSA in C(Neso)",
        courseImage: "https://i.ytimg.com/vi/xLetJpcjHS0/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/dsaincnesoacademy',
        year: 'College Courses'
    },
    {
        id: 41,
        courseName: "Digital Electronics 1",
        courseImage: "https://i.ytimg.com/vi/O0gtKDu_cJc/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC4dpxkKd3DLJiqocg49DzOrPHMww",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/degatesmashers',
        year: 'College Courses'
    },
    {
        id: 42,
        courseName: "Digital Electronics 2",
        courseImage: "https://i.ytimg.com/vi/M0mx8S05v60/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBz2uQtVX2Vnbx1dc_PdCHH-O6hzQ&days_since_epoch=19562",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/deneso',
        year: 'College Courses'
    },
    {
        id: 43,
        courseName: "Digital Electronics 3",
        courseImage: "https://i.ytimg.com/vi/DBTna2ydmC0/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/deallaboutelectronics',
        year: 'College Courses'
    },
    {
        id: 44,
        courseName: "Digital Electronics 4",
        courseImage: "https://i.ytimg.com/vi/VON3KYmWeH4/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBpo24rFVhznvgv4ZvkEjh3QyDbPw",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/deamitkhurana',
        year: 'College Courses'
    },
    {
        id: 45,
        courseName: "Engg. Economics 1",
        courseImage: "https://i.ytimg.com/vi/BZaLOsmJqmc/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/economics1',
        year: 'College Courses'
    },

    {
        id: 46,
        courseName: "Probability and Statistics 1",
        courseImage: "https://i.ytimg.com/vi/CuG8a5in-WA/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/pssaurabhdahivadkar',
        year: 'College Courses'
    },
    {
        id: 47,
        courseName: "Probability and Statistics 2",
        courseImage: "https://i.ytimg.com/vi/9naHGLHMCrs/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/psharishgarg',
        year: 'College Courses'
    },
    {
        id: 48,
        courseName: "Probability and Statistics 3",
        courseImage: "https://i.ytimg.com/vi/XCAcYFd49qw/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/psfearless',
        year: 'College Courses'
    },
    {
        id: 49,
        courseName: "Discrete Mathematics 1",
        courseImage: "https://i.ytimg.com/vi/wGLTV8MgLlA/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBTq7pt6gl9Y-Ycq2QEAybip3NbEA",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/discretemathematics1',
        year: 'College Courses'
    },
    {
        id: 50,
        courseName: "Discrete Mathematics 2",
        courseImage: "https://i.ytimg.com/vi/K6gRKzkd1mI/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/discretemathematics2',
        year: 'College Courses'
    },
    {
        id: 51,
        courseName: "Operating System (Neso)",
        courseImage: "https://i.ytimg.com/vi/vBURTt97EkA/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/osneso',
        year: 'College Courses'
    },
    {
        id: 52,
        courseName: "OS (CodeHelp)",
        courseImage: "https://i.ytimg.com/vi/a1l4MceYHaQ/mqdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/oscodehelp',
        year: 'College Courses'
    },
    {
        id: 53,
        courseName: "OS (Knowledge Gate)",
        courseImage: "https://learnyst-user-assets.s3.ap-south-1.amazonaws.com/school-assets/schools/86062/courses/89841/168414941013313.png",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/osknowledgegate',
        year: 'College Courses'
    },
    {
        id: 54,
        courseName: "OS (Jenny's Lecture)",
        courseImage: "https://i.ytimg.com/vi/x9FF723STvo/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/osjennylecture',
        year: 'College Courses'
    },
    {
        id: 55,
        courseName: "DBMS (Neso)",
        courseImage: "https://i.ytimg.com/vi/6Iu45VZGQDk/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/dbmsneso',
        year: 'College Courses'
    },
    {
        id: 56,
        courseName: "DBMS (CodeHelp)",
        courseImage: "https://i.ytimg.com/vi/TYo_CUnIWP8/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/dbmsbabbar',
        year: 'College Courses'
    },
    {
        id: 57,
        courseName: "DBMS (CodingNinjas)",
        courseImage: "https://i.ytimg.com/vi/VmF2jv4VcVQ/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/dbmscn',
        year: 'College Courses'
    },
    {
        id: 58,
        courseName: "AFL (Gate Smashers)",
        courseImage: "https://i.ytimg.com/vi/aoUEXRlvmxc/mqdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/aflgatesmashers',
        year: 'College Courses'
    },
    {
        id: 59,
        courseName: "AFL (Neso)",
        courseImage: "https://i.ytimg.com/vi/58N2N7zJGrQ/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/aflneso',
        year: 'College Courses'
    },
    {
        id: 60,
        courseName: "AFL (KIIT Teacher)",
        courseImage: "https://i.ytimg.com/vi/APRPT4KrzMA/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/afllalitvasisth',
        year: 'College Courses'
    },
    {
        id: 61,
        courseName: "COA (Gate Smashers)",
        courseImage: "https://i.ytimg.com/vi/L9X7XXfHYdU/mqdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/coagatesmashers',
        year: 'College Courses'
    },
    {
        id: 62,
        courseName: "COA (Bindu)",
        courseImage: "https://i.ytimg.com/vi/bfH8jO4Sy9I/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/coabinduagarwala',
        year: 'College Courses'
    },
    {
        id: 63,
        courseName: "COA (University Acad.)",
        courseImage: "https://i.ytimg.com/vi/2kc1_ShR72o/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/coauniversitacademy',
        year: 'College Courses'
    },
    {
        id: 64,
        courseName: "PDC (All About Elec.)",
        courseImage: "https://i.ytimg.com/vi/qhjj6WG7Rgc/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/pdcabe',
        year: 'College Courses'
    },
    {
        id: 65,
        courseName: "Java (CWH)",
        courseImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1jRgTn4eKvGv21-fDW9CPtTlgJeGej3L9UQ&usqp=CAU",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/javaharry',
        year: 'College Courses'
    },
    {
        id: 66,
        courseName: "Java (Tulesko)",
        courseImage: "https://i.ytimg.com/vi/bm0OyhwFDuY/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/javatulesko',
        year: 'College Courses'
    },
    {
        id: 67,
        courseName: "HTML Frameset",
        courseImage: "https://i.ytimg.com/vi/a8W952NBZUE/mqdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/htmlframeset',
        year: 'College Courses'
    },
    {
        id: 68,
        courseName: "Egg. Graphics 'Tikel's Ac.'",
        courseImage: "https://i.ytimg.com/vi/7JpSSBVeSpI/mqdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/egtikle',
        year: 'College Courses'
    },
    {
        id: 69,
        courseName: "Software Engg. (GS)",
        courseImage: "https://i.ytimg.com/vi/uJpQlyT_CK4/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/softgate',
        year: 'College Courses'
    },
    {
        id: 70,
        courseName: "Software Engg. (EEC)",
        courseImage: "https://i.ytimg.com/vi/tZreaH_FyMs/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/softaktu',
        year: 'College Courses'
    },
    {
        id: 71,
        courseName: "Software Engg. (IIT KGP)",
        courseImage: "https://i.ytimg.com/vi/Ln_LP7c23WM/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/sofiitkgp',
        year: 'College Courses'
    },
    {
        id: 72,
        courseName: "DAA (Abdul Bari)",
        courseImage: "https://i.ytimg.com/vi/0IAPZzGSbME/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/daabari',
        year: 'College Courses'
    },
    {
        id: 73,
        courseName: "DAA (Gate Hub)",
        courseImage: "https://i.ytimg.com/vi/B6L7hh_H1wo/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/daagate',
        year: 'College Courses'
    },
    {
        id: 74,
        courseName: "DAA (Uni. Academy)",
        courseImage: "https://i.ytimg.com/vi/twE1eiO7gEE/mqdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/daauni',
        year: 'College Courses'
    },
    {
        id: 75,
        courseName: "DAA (Asha Khilrani)",
        courseImage: "https://i.ytimg.com/vi/ClOVnG7xOr4/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/designanalysisofalgoasha',
        year: 'College Courses'
    },

    {
        id: 76,
        courseName: "HPC (English)",
        courseImage: "https://i.ytimg.com/vi/HkOG4zHjlNo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCFLKkC0NiJyBXutKK80T5HZ7OqHQ",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/hpceng',
        year: 'College Courses'
    },
    {
        id: 77,
        courseName: "HPC (IISc)",
        courseImage: "https://i.ytimg.com/vi/EDbutwR35bg/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/hpciisc',
        year: 'College Courses'
    },

    {
        id: 78,
        courseName: "CN (Amit Khurana)",
        courseImage: "https://i.ytimg.com/vi/H4ystojVBak/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDiIhGARmTdNV_1vwojuI2Gf_o1Hw",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/cnbyamitkhurana',
        year: 'College Courses'
    },
    {
        id: 79,
        courseName: "CN (Gate Wallah)",
        courseImage: "https://i.ytimg.com/vi/pGWxdTJPjKE/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/cnbygatewallah',
        year: 'College Courses'
    },
    {
        id: 80,
        courseName: "CN (Knowledge Gate)",
        courseImage: "https://learnyst-user-assets.s3.ap-south-1.amazonaws.com/school-assets/schools/86062/courses/92457/168414945988614.png",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/cnbyknowledgegate',
        year: 'College Courses'
    },
    {
        id: 81,
        courseName: "AI (CS50)",
        courseImage: "https://i.ytimg.com/vi/WbzNRTTrX0g/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/aibycs50',
        year: 'College Courses'
    },
    {
        id: 82,
        courseName: "AI (Easy Engg. Classes)",
        courseImage: "https://i.ytimg.com/vi/FpvnF7_-tW8/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/aibyeasyenggclasses',
        year: 'College Courses'
    },
    {
        id: 83,
        courseName: "AI (Stanford)",
        courseImage: "https://i.ytimg.com/vi/J8Eh7RqggsU/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/aibystanford',
        year: 'College Courses'
    },
    {
        id: 84,
        courseName: "Big Data (Perfect Comp..)",
        courseImage: "https://i.ytimg.com/vi/I_ku0D4uQzQ/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/bdbyperfectcomputerengineer',
        year: 'College Courses'
    },
    {
        id: 85,
        courseName: "Big Data (Engg. One Video)",
        courseImage: "https://i.ytimg.com/vi/a_BkPpKnZZI/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/bdbyenggonevideo',
        year: 'College Courses'
    },
    {
        id: 86,
        courseName: "Big Data (5min Engg.)",
        courseImage: "https://cdn.slidesharecdn.com/ss_thumbnails/englishbigdata-210727080650-thumbnail.jpg?width=640&height=640&fit=bounds",
        aboutCourse: "Disclaimer: This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/bdby5minengg',
        year: 'College Courses'
    },
    {
        id: 87,
        courseName: "HPC (Harshit Anand KIIT)",
        courseImage: "https://i.ytimg.com/vi/KlVstCzLQyc/mqdefault.jpg",
        aboutCourse: "Disclaimer: This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/hpcbyharshitanand',
        year: 'College Courses'
    },
    {
        id: 88,
        courseName: "Software Testing",
        courseImage: "https://i.ytimg.com/vi/YdZ-sduNb48/maxresdefault.jpg",
        aboutCourse: "Disclaimer: This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/softwaretestingmentor',
        year: 'College Courses'
    },
    {
        id: 89,
        courseName: "Mathematics-1",
        courseImage: "https://i.ytimg.com/vi/bJPuy0QZ-tE/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/mathematics1',
        year: 'College Courses'
    },
    {
        id: 90,
        courseName: "Basic Electronics 2",
        courseImage: "https://i.ytimg.com/vi/Hq_8zewfMpY/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/basicelectronics2',
        year: 'College Courses'
    },
    {
        id: 91,
        courseName: "Engg. Economics 2",
        courseImage: "https://i.ytimg.com/vi/AonY7XKRTUI/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA4TjiMHpc3ZbCSVviTGgEAaT81NA",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/economics2',
        year: 'College Courses'
    },
    {
        id: 92,
        courseName: "Computer Network (CN)",
        courseImage: "https://i.ytimg.com/vi/VwN91x5i25g/maxresdefault.jpg",
        aboutCourse: "Disclaimer : This is an excellent YouTube playlist that we recommend watching. Always watch video lectures if and only if you are getting them.",
        watch: "Watch",
        linking: '/cnbyneso',
        year: 'College Courses'
    },
]

export default ytVideos