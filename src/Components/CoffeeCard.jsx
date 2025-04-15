import { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

 
const CoffeeCard = () => {
    const navigate = useNavigate()
    const {coffeeCategoryName} = useParams()
    console.log(coffeeCategoryName)

    const coffeeData = useLoaderData()


    const [coffees,setCoffees] = useState([])

    useEffect(() => {

    if(coffeeCategoryName){
        const filteredCoffeeArray = [...coffeeData].filter(c=>c.category===coffeeCategoryName)
    
    // console.log(filteredCoffeeArray)

    setCoffees(filteredCoffeeArray)
    }
    else{
    setCoffees(coffeeData.slice(0,6))
    }
    },[coffeeCategoryName,coffeeData])



    return (

        <div className="w-11/12 mx-auto">

         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-12">
         {            
            coffees.map(oneCoffee => <Card key={oneCoffee.id} oneCoffee={oneCoffee} ></Card>)
         } 
         </div>

          <button className="btn btn-warning" onClick={()=>navigate('/coffees')}>View All</button>  
        </div>
       
    );
};

export default CoffeeCard;