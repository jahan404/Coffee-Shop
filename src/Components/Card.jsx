import { Link } from "react-router-dom";

const Card = ({oneCoffee}) => {
    const { id, name, image, category, type ,rating,popularity,origin} = oneCoffee || {}

    return (
        <div>
            <div className='flex relative'>
      <Link
        to={`/coffee/${id}`}
        className='transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden'
        >
      
        <figure className='w-full h-48 overflow-hidden'>
          <img className='' src={image} alt='' />
        </figure>

        <div className='p-4'>
          <h1 className='text-xl'>Name: {name}</h1>
          <p>Category: {category}</p>
          <p>Type: {type}</p>
          <p>Origin: {origin}</p>
          <p>Rating: {rating}</p>
          <p>Popular: {popularity}</p>
        </div>
        </Link>
      </div>
      
    </div>
    );
};

export default Card;