import React from 'react';
import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import './SortableItems.css';

const SortableItems = (props) => {
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
        <div className='img-container group/item relative' ref={setNodeRef} style={style} {...attributes} {...listeners}>
                <img className='img' src={props.id}  alt="" />
        </div>  
    );
};

export default SortableItems;