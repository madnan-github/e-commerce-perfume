
import {
     Card, CardHeader, CardTitle, CardDescription, CardContent 
    } from "@/components/ui/card"
import Image from "next/image";
const dishes = [
    {
        "id":1,
        "title":"Fried Eggs",
        "image":"/picture/menu/egg.png",
        "description":"Made with eggs, lettuce, salt, oil and other ingredients.",
        "price":"$99",
    },
    {
        "id":2,
        "title":"Hawaiian Pizza",
        "image":"/picture/menu/pizza.png",
        "description":"Made with eggs, lettuce, salt, oil and other ingredients.",
        "price":"$ 15.99",
    },
    {
        "id":3,
        "title":"Martinez Cocktail ",
        "image":"/picture/menu/drink.png",
        "description":"Made with eggs, lettuce, salt, oil and other ingredients.", 
        "price":"$ 7.25",
    },
    {
        "id":4,
        "title":"Butterscotch Cake",
        "image":"/picture/menu/cake.png",
        "description":"Made with eggs, lettuce, salt, oil and other ingredients.",
       "price":"$ 20.99",
    },
    {
        "id":5,
        "title":"Mint Lemonade",
        "image":"/picture/menu/shake.png",
        "description":"Made with eggs, lettuce, salt, oil and other ingredients.",
       "price":"$ 5.89", 
    },
    {
        "id":6,
        "title":"Chocolate Icecream",
        "image":"/picture/menu/ice-cream.png",
        "description":"Made with eggs, lettuce, salt, oil and other ingredients.",
        "price":"$ 18.05", 
    },
    {
        "id":7,
        "title":"Cheese Burger",
        "image":"/picture/menu/burger.png",
        "description":"Made with eggs, lettuce, salt, oil and other ingredients.",
       "price":"$ 12.55", 
    },
    {
        "id":6,
        "title":"Classic Waffles",
        "image":"/picture/menu/pie.png",
        "description":"Made with eggs, lettuce, salt, oil and other ingredients.",
        "price":"$ 12.99", 
    }
];
export default function MenuCard() {
    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-10">
      {
        dishes.map((dish)=>(
            <Card key={dish.title} className="transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(173,52,62)] hover:scale-105">
                <CardHeader>
                    <Image 
                    alt='pic'
                    src={dish.image}
                    width={150}
                    height={200}
                    className="object-cover w-full rounded"
                    />
                </CardHeader>

                <CardTitle className='text-2xl text-center'>{dish.title}</CardTitle>
                <CardDescription className="text-center p-2">
                  {dish.description}
                 </CardDescription>
                 <CardContent  className='text-[#AD343E] font-bold text-2xl text-center'>
                 {dish.price}</CardContent>
            </Card>
        ))
      }
        </div>

    
    
    )
  }
  
  