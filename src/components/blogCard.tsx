
import {
    Card, CardHeader, CardTitle, CardDescription, CardContent 
   } from "@/components/ui/card"
import Image from "next/image";
const articles = [
   {
       "id":1,
       "title":"January 3, 2023",
       "image":"/picture/blog/pic-1.png",
       "description":"How to prepare a delicious gluten free sushi",
      
   },
   {
       "id":2,
       "title":"January 3, 2023",
       "image":"/picture/blog/pic-2.png",
       "description":"Exclusive baking lessons from the pastry king",
       
   },
   {
       "id":3,
       "title":"January 3, 2023 ",
       "image":"/picture/blog/pic-3.png",
       "description":"How to prepare the perfect fries in an air fryer", 
       
   },
   {
       "id":4,
       "title":"January 3, 2023",
       "image":"/picture/blog/pic-4.png",
       "description":"How to prepare delicious chicken tenders",
      
   },
   {
       "id":5,
       "title":"January 3, 2023",
       "image":"/picture/blog/pic-5.png",
       "description":"5 great cooking gadgets you can buy to save time",
       
   },
   {
       "id":6,
       "title":"January 3, 2023",
       "image":"/picture/blog/pic-6.png",
       "description":"The secret tips & tricks to prepare a perfect burger",
      
   },
   {
       "id":7,
       "title":"January 3, 2023",
       "image":"/picture/blog/pic-7.png",
       "description":"7 delicious cheesecake recipes you can prepare",
       
   },
   {
       "id":8,
       "title":"January 3, 2023",
       "image":"/picture/blog/pic-8.png",
       "description":"5 great pizza restaurants you should visit this city",
        
   },
   {
    "id":9,
    "title":"January 3, 2023",
    "image":"/picture/blog/pic-9.png",
    "description":"5 great cooking gadgets you can buy to save time",
   
},
{
    "id":10,
    "title":"January 3, 2023",
    "image":"/picture/blog/pic-10.png",
    "description":"How to prepare a delicious gluten free sushi",
     
},
{
    "id":11,
    "title":"January 3, 2023",
    "image":"/picture/blog/pic-11.png",
    "description":"Top 20 simple and quick desserts for kids",
    
},
{
"id":12,
"title":"January 3, 2023",
"image":"/picture/blog/pic-12.png",
"description":"Top 20 simple and quick desserts for kids",

}

];
export default function BlogCard() {
   return (

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-10">
     {
       articles.map((article)=>(
           <Card key={article.title} className="transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(173,52,62)] hover:scale-105">
               <CardHeader>
                   <Image 
                   alt='pic'
                   src={article.image}
                   width={150}
                   height={200}
                   className="object-cover w-full rounded"
                   />
               </CardHeader>

               <CardTitle className='text-[14px] text-[#737865] ml-8'>{article.title}</CardTitle>
               <CardDescription className=" p-2 font-bold text-[20px] text-[#2C2F24] ml-5">
                 {article.description}
                </CardDescription>
           </Card>
       )) 
     }
       </div>
   )
 }
 
 