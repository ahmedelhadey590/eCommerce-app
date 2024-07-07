//rafce
import '../App.css'
import Banner from '../shared/Banner';
const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24">
        <Banner Banner={Banner} heading="Achieve your dream with us" supheading="Chase your dreams relentlessly,
            for in every step forward lies the promise of a brighter tomorrow. " button1={'Get Started'} button2={'discount'}/>
            
    </div>
  );
};

export default Home
