import React from 'react';
import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";

const SortableItems = (props) => {
    console.log(props.id)
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: props.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <div className='images'>
               <div> <img className='rounded-2xl' src={props.id} alt="" /></div>
            </div>
        </div>
        
    );
};

export default SortableItems;