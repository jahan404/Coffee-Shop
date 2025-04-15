import { NavLink } from "react-router-dom";

const CardCategory = ({categories}) => {
    
    return (
        <div role="tablist" className="tabs tabs-lift w-11/12 mx-auto justify-center">
        {
        categories.map( category => 
        <NavLink key={category.category} to={`/card/${category.category}`} role="tab" className={({isActive})=>`${isActive ? 'tab tab-active' : 'tab' }`}> {category.category} </NavLink>
        
        )}
        </div>
    );
};

export default CardCategory;