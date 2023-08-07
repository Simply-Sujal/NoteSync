import CollegeNotes from '../Components/CollegeNotes'
import HomePage from '../Components/Homepage'
import StudentFaith from '../Components/StudentFaith'
import Department from '../Components/Department'
import Support from '../Components/Support'
import Allinone from '../Components/Allinone'
import StudentsEnjoying from '../Components/StudentsEnjoying'
import Testimonials from '../Components/Testimonials'
import Newsletter from '../Components/Newsletter'
import FAQ from '../Components/FAQ'
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <>
            <HomePage />
            <CollegeNotes />
            <StudentFaith />
            <Department />
            <Support />
            <Allinone />
            <StudentsEnjoying />
            <Testimonials />
            <FAQ />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Home