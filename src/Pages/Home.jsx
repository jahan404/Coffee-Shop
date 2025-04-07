import Banner from "../Components/Banner";
import Heading from "../Components/Heading";

// import banner from '../../public/banner.jpg'
const Home = () => {
    return (
        
        <div>
          {/* Banner */}
          <Banner></Banner>

          {/* Heading */}
          <Heading heading={'Wake Up & Have A Cup Of Coffee'} subtitle={'Choose your favorite coffee, start your day with the ultimate refreshment.'}></Heading>
        </div>
    );
};

export default Home;