import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Heading from "../Components/Heading";
import CardCategory from "../Components/CardCategory";

const Home = () => {
   const categories = useLoaderData()

    return (
        
        <div>
          {/* Banner */}
          <Banner></Banner>

          {/*dynamic Heading */}
          <Heading heading={'Wake Up & Have A Cup Of Coffee'} subtitle={'Choose your favorite coffee, start your day with the ultimate refreshment.'}></Heading>

          {/* categories tab section */}
          <CardCategory categories={categories}></CardCategory>

          {/* dynamic nested component /coffee detail showing as a children of home component*/}
           <Outlet></Outlet>
        </div>
    );
};

export default Home;