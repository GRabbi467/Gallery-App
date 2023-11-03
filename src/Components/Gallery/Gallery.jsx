import React, { useState } from 'react';
import './Gallery.css';
import img1 from '../../Assests/image-1.webp';
import img2 from '../../Assests/image-2.webp';
import img3 from '../../Assests/image-3.webp';
import img4 from '../../Assests/image-4.webp';
import img5 from '../../Assests/image-5.webp';
import img6 from '../../Assests/image-6.webp';
import img7 from '../../Assests/image-7.webp';
import img8 from '../../Assests/image-8.webp';
import img9 from '../../Assests/image-9.webp';
import img10 from '../../Assests/image-10.jpeg';
import img11 from '../../Assests/image-11.jpeg';
import {
    DndContext,
    closestCenter
} from "@dnd-kit/core";

import {
    arrayMove,
    SortableContext,
    rectSwappingStrategy
} from "@dnd-kit/sortable";
import { LuImagePlus } from "react-icons/lu";
import SortableItems from './SortableItems';



const Gallery = () => {
  const [image,setImage] = useState([img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11])
 
  const handledragEnd = (e)=>{
   // console.log("DragEnd called");
    const {active, over} = e;
   // console.log("ACTIVE: " + active.id);
   // console.log("OVER :" + over.id);

    if(active.id !== over.id) {
      setImage((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
       // console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
      });
  }
}
    
    return (
        <div className='gallery-container'>
            <h1 className='text-2xl font-bold text-blue-600 mb-8'>Drag &amp; drop Gallery</h1>
            <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handledragEnd}
            >
                <div className='images'>
                    <SortableContext
                    items={image}
                    strategy={rectSwappingStrategy}
                    >
                        {
                            image.map(img=><SortableItems key={img} id={img}></SortableItems>)
                        }
                    </SortableContext>
                    <div className='addPhoto'>
                       <div> <LuImagePlus className='imgPlus'/><p>Add Images</p></div>
                    </div>
                </div>
            </DndContext>
        </div>
    );
};

export default Gallery;