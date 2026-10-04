import Hero from '../components/Hero';
import Services from '../components/Services';
import Doctors from '../components/Doctors';
import WhyChooseUs from '../components/WhyChooseUs';
import PatientJourney from '../components/PatientJourney';
import Testimonials from '../components/Testimonials';
import Emergency from '../components/Emergency';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Doctors />
      <WhyChooseUs />
      <PatientJourney />
      <Testimonials />
      <Emergency />
    </main>
  );
};

export default Home;
