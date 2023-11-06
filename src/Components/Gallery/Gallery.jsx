import React, {useState } from 'react';
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
import { LuImagePlus} from "react-icons/lu";
import {AiFillCheckSquare} from "react-icons/ai";
import SortableItems from './SortableItems';



const Gallery = () => {
    //Array of images
  const [image,setImage] = useState([img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11]);
  //delcared state to select chcecked images to delete
  const [selected ,setSeleted] = useState([]);
 
  //function to select image files
  const onCheck =(e,id)=>{
   if(e.target.checked){
    e.target.classList.remove('invisible')
    return setSeleted((prev)=> ([...prev,id]))
   }else{
    e.target.classList.add('invisible')
    return setSeleted((prev)=> {return prev.filter((each)=>each !== id)})
   }
  }
 
  //function to delete images
  const deleteHandle =()=>{
   selected.forEach((each)=>{
    setImage((prev)=> {return prev.filter((eac)=>eac !== each)})
   })
   setSeleted([]);
  }
  //function to drag images
  const handledragEnd = (e)=>{
    const {active, over} = e;

    if(active.id !== over.id) {
      setImage((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        return arrayMove(items, activeIndex, overIndex);
      });
  }
}
   
    
    return (
        <div className='gallery-container'>
            <h1>Drag &amp; Drop Image Gallery</h1>
            <div className=' h-8 w-full'>
                {
                    selected.length !==0 && <section className='flex justify-around items-center'>
                       <div className='flex'>
                        <AiFillCheckSquare className='mt-1 text-3xl text-blue-700'/>
                        <p className='text-2xl font-bold'>{selected.length} File Selected</p>
                       </div>
                        <button className=' deleteBtn' onClick={deleteHandle}>Delete File</button>
                    </section>
                }
            </div>
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
                            image.map(img=> <div className='cardWrapper relative'>
                                <input
                                checked={selected.includes(img)}
                                 type="checkbox" onChange={(e)=>onCheck(e,img)}
                                className={`checkBox absolute z-10 ${selected.includes(img) ? '': 'invisible'}`}  name="" id="" />
                                <SortableItems key={img} id={img}  setSelected = {setSeleted}></SortableItems></div>)
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


