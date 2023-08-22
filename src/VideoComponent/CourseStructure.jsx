import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsPlusCircle } from 'react-icons/bs';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const CourseStructure = () => {
    const { coursename } = useParams();
    const [courses, setCourses] = useState([]);
    const [open, setOpen] = useState(false);
    const [vid, setVid] = useState('');
    const [title, setTitle] = useState('');
    const [fillcolor, setfillcolor] = useState(0);

    // this is the youtube playlist id of all the video lectures
    const coursePlaylists = {
        operatingSystem: 'PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p',
        dbms: 'PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y',
        designanalysisofalgo: 'PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa',
        automataandformallang: 'PLmXKhU9FNesSdCsn6YQqu9DmXRMsYdZ2T',
        computerorganization: 'PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q',
        pdc: 'PLcl0BgsXH5q6NwOvDnJ5q-dtypDcQZw61',
        discretemathematics: 'PLBlnK6fEyqRhqJPDXcvYlLfXPh37L89g3',
        probabilityandstatistics: 'PLU6SqdYcYsfLRq3tu-g_hvkHDcorrtcBK',
        basicelectricaleng1: 'PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc',
        analogelectronics: 'PL9RcWoqXmzaI7KDKsQZFf6l5LFgfMo7So',
        computernetoworks: 'PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_',
        softwareeng: 'PL-JvKqQx2AtdZ7m5Nui3RwqEnNcZZ9N1L',
        bigdata: 'PLWPirh4EWFpENnR0p1JvhJkyTK1M0sOLR',
        artificialintelligence: 'PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI',
        dsa: 'PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU',
        oops: 'PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk',
        cprogramming: 'PLxgZQoSe9cg1drBnejUaDD9GEJBGQ5hMt',
        engmechanics: 'PLiSPNzs4fD9tyI_gNHcQkvtvzLvB3aE05',
        basicElectricalEng2: 'PL9RcWoqXmzaL1q8tiuQwo0p7xL2aV_bNe',
        basicElectricEng3: 'PL4K9r9dYCOoq_hCuVrFP-vIkd1OXcDOWS',
        enggMechanics2: 'PLDN15nk5uLiAyM7MbRBF1eIFC8y5vMRxI',
        cprogramming2: 'PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR',
        analogElect2: 'PLBlnK6fEyqRiw-GZRqfnlVIBz9dxrqHJS',
        analogElect3: 'PLs5_Rtf2P2r5MplAOADz3fTWIyBZTkGbB',
        cprogramming3: 'PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S',
        enggMechanics3: 'PLIhUrsYr8yHxfOmcGIeUThHEr9lQ3IXRS',
        enggGraphics: 'PL9RcWoqXmzaJT-fliqTSwUjWU4zCX_H2A',
        mathematics1: 'PLbRMhDVUMngeVrxtbBz-n8HvP8KAWBpI5',
        mathematics2: 'PL5Dqs90qDljVlWQBPaa6FIsoF2CodPiQJ',
        basicelectronics1: 'PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy',
        basicelectronics2: 'PLPg0ZVoGm25tT5OwcEKFawd-bk4XrmJqR',
        evs: 'PLH_6q2xiFCfZxg2J-NsVXYAuG68ozI2iA',
        evs2: 'PLIC0i9IRboHb19v2dF0yuenG7xDOGJLeP',
        cpp1codewithharry: 'PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL',
        cpp2luvbabbar: 'PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA',
        cpp3apnacollege: 'PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ',
        cpp3collegewallah: 'PLxgZQoSe9cg0df_GxVjz3DD_Gck5tMXAd',
        cpp4thecherno: 'PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb',
        cpp5jennyslecture: 'PLdo5W4Nhv31YU5Wx1dopka58teWP9aCee',
        cpp6striverlecture: 'PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz',
        dsainccodewithharry: 'PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi',
        dsaincnesoacademy: 'PLBlnK6fEyqRj9lld8sWIUNwlKfdUoPd1Y',
        degatesmashers: 'PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe',
        deneso: 'PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm',
        deallaboutelectronics: 'PLwjK_iyK4LLBC_so3odA64E2MLgIRKafl',
        deamitkhurana: 'PLG9aCp4uE-s3p4NAxutnKNjKeyIPZixy8',
        economics1: 'PLVLoWQFkZbhWHDLaCWEyWw_KSzoTUjicl',
        economics2: 'PLk7ptZcI9vmjXWXPS02301TM1sIIa_gmN',
        pssaurabhdahivadkar: 'PLKS7ZMKnbPrRUzxQuteRWEuBEkSW0_-3b',
        psharishgarg: 'PLO-6jspot8ALyrofp0fWp0fOb19NcFS4V',
        psfearless: 'PL5Dqs90qDljWiE0fK-akBQXH2yp2OWXVr',
        discretemathematics1: 'PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg',
        discretemathematics2: 'PLxCzCOWd7aiH2wwES9vPWsEL6ipTaUSl3',
        osneso: 'PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O',
        oscodehelp: 'PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG',
        osknowledgegate: 'PLmXKhU9FNesSFvj6gASuWmQd23Ul5omtD',
        osjennylecture: 'PLdo5W4Nhv31a5ucW_S1K3-x6ztBRD-PNa',
        dbmsneso: 'PLBlnK6fEyqRi_CUQ-FXxgzKQ1dwr_ZJWZ',
        dbmsbabbar: 'PLDzeHZWIZsTpukecmA2p5rhHM14bl2dHU',
        dbmscn: 'PLrk5tgtnMN6RP0PMnyBVI15N_phCQevZM',
        aflgatesmashers: 'PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i',
        aflneso: 'PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev',
        afllalitvasisth: 'PLLvKknWU7N4zvTGcw9N2_7eZSTTkryb0U',
        coagatesmashers: 'PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX',
        coabinduagarwala: 'PLdaj4mrS1BKBKic8N5CcipttgvfHiX_vg',
        coauniversitacademy: 'PL-JvKqQx2Atfuxo1LR0m9RQramPymoBsj',
        pdcabe: 'PLwjK_iyK4LLArUHRm3SvPLT0XWlVhpl4h',
        javaharry: 'PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q',
        javatulesko: 'PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5',
        htmlframeset: 'PLLOxZwkBK52Bzp31ECPr_yk0tZfpBtGcX',
        egtikle: 'PLDN15nk5uLiBpnIOK5r3KXdfFOVzGHJSt',
        softgate: 'PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2',
        softaktu: 'PLV8vIYTIdSnat3WCO9jfehtZyjnxb74wm',
        sofiitkgp: 'PLbRMhDVUMngf8oZR3DpKMvYhZKga90JVt',
        daabari: 'PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O',
        daagate: 'PL1QH9gyQXfgs7foRxIbIH8wmJyDh5QzAm',
        daauni: 'PL-JvKqQx2Atd--1Gs3WB8nmWOWRbEM7WW',
        designanalysisofalgoasha: 'PLz8TdOA7NTzQkI_TCASvO8Abbo9XgUuiu',
        hpceng: 'PLmJwSK7qduwWyqcSEB45HOyxq--z8njix',
        hpciisc: 'PL2F82ECDF8BB71B0C',
        cnbyneso: 'PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx',
        cnbyamitkhurana: 'PLC36xJgs4dxHT-TxTy3U1slr5RaBJGaLd',
        cnbygatewallah: 'PL3eEXnCBViH-hlNCNwdfV7VrEcTquANGa',
        cnbyknowledgegate: 'PLmXKhU9FNesSjFbXSZGF8JF_4LVwwofCd',
        aibycs50: 'PLBw9d_OueVJS_084gYQexJ38LC2LEhpR4',
        aibyeasyenggclasses: 'PLV8vIYTIdSnYsdt0Dh9KkD9WFEi7nVgbe',
        aibystanford: 'PLoROMvodv4rO1NB9TD4iUZ3qghGEGtqNX',
        bdbyperfectcomputerengineer: 'PLPIwNooIb9vi4f8tVkzLnr1tll6Pubbqh',
        bdbyenggonevideo: 'PLUwI7zx-CMG2gwI31eQpraaQvnE1v9T2a',
        bdby5minengg: 'PLYwpaL_SFmcCgBLQ9UCxMVWKqR8FEUzJ8',
        hpcbyharshitanand: 'PLCo9BILrfLzdD1tSNtyAKtakkiwTR8z5e',
        softwaretestingmentor: 'PLL34mf651faM_nn8uKlnwbQPw5zSh_F84'
    };

    useEffect(() => {
        const playListId = coursePlaylists[coursename];

        const fetchPlaylistItems = async (playlistId, pageToken = '') => {
            const apiKey = 'AIzaSyB9wDiFn5-odyjn8ptCcDHUtCylMy6D5h8';
            const maxResults = 50;

            let url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=${maxResults}&playlistId=${playlistId}&key=${apiKey}`;
            if (pageToken) {
                url += `&pageToken=${pageToken}`;
            }

            try {
                const response = await fetch(url);
                const data = await response.json();

                const result = data.items.map((item) => ({
                    title: item.snippet.title,
                    vid: item.contentDetails.videoId,
                }));

                setCourses((prevCourses) => [...prevCourses, ...result]);

                if (data.nextPageToken) {
                    fetchPlaylistItems(playlistId, data.nextPageToken);
                } else {
                    setVid(result[0].vid);
                    setTitle(result[0].title);
                }
            } catch (error) {
                console.log('Error fetching playlist items:', error);
            }
        };

        fetchPlaylistItems(playListId);
    }, [coursename]);

    const togglePlaylist = () => {
        setOpen(!open);
    };

    return (
        <>
            {courses.length > 0 ? (
                <section className="px-2 justify-center align-middle pt-24 bg-[#F5F5F5] md:h-screen">
                    <div className="flex flex-wrap justify-between lg:-mx-1 xl:-mx-1">
                        <div className="w-full border lg:my-1 lg:px-1 lg:w-2/3 xl:my-1 xl:px-1 xl:w-2/3 mx-auto">
                            <div className="h-[30vh] lg:h-[30vh] mx-auto xl:h-[70vh]">
                                <iframe
                                    src={`//www.youtube.com/embed/${vid}?rel=0`}
                                    frameBorder="0"
                                    allowFullScreen
                                    className="w-full h-full"
                                    title="Course Video"
                                ></iframe>
                            </div>
                        </div>

                        <div className="mx-auto w-full xl:text-lg font-medium px-2 rounded-t-lg lg:w-1/3 overflow-x-hidden">
                            <div className="flex items-center font-medium md:hidden">
                                Show Full Playlist
                                <div className="pl-2">
                                    {open ? (
                                        <AiOutlineMinusCircle
                                            onClick={togglePlaylist}
                                            className="transition duration-200 ease-in-out"
                                        />
                                    ) : (
                                        <BsPlusCircle
                                            onClick={togglePlaylist}
                                            className="transition duration-200 ease-in-out"
                                        />
                                    )}
                                </div>
                            </div>
                            <ul
                                className={`my-0 lg:h-[30vh] xl:h-[64vh] w-full lg:my-1 xl:my-1 lg:px-3 transition-all duration-200 ease-in-out md:visible${open ? 'visible h-[25vh] space-y-3 overflow-scroll overflow-x-hidden' : 'invisible h-0'
                                    } space-y-2`}
                            >
                                {courses.map((item, index) => (
                                    <li
                                        key={index}
                                        className={
                                            fillcolor === index
                                                ? 'py-2 px-2 md:py-3 mt-4 border-2 shadow-lg bg-[#A7EDE7] rounded-lg cursor-pointer'
                                                : 'py- px-2 md:py-3 border-2 shadow-lg rounded-lg cursor-pointer'
                                        }
                                        onClick={() => {
                                            setVid(item.vid);
                                            setTitle(item.title);
                                            setfillcolor(index);
                                        }}
                                    >
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full bg-[#F5F5F5] md:pl-0 pl-2">
                        <div className="pt-2 mx-auto">
                            <h1 className="text-[17px] md:text-[20px] text-black text-start font-bold">{title}</h1>
                        </div>
                        <div>
                            <h1 className='text-[17px] md:text-[20px] pt-2'>Would you like notes on these topics? 👇</h1>
                            <Link to='/resource' className='text-blue-500 font-medium hover:font-semibold transition duration-200 ease-in-out'>Get free Notes here 😉</Link>
                        </div>
                    </div>
                </section>
            ) : (
                <h1>Loading</h1>
            )}



            {/* <VideoCard /> */}
            <Footer />
        </>
    );
};

export default CourseStructure;