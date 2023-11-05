import React, { useRef } from 'react';
import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import './SortableItems.css';

const SortableItems = (props) => {
    const checkboxRef = useRef(null)
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
        <div className='container group/item relative' ref={setNodeRef} style={style} {...attributes} {...listeners}>
                <input type="checkbox" ref={checkboxRef} className={`absolute z-10 left-2 top-2  group-hover/item:visible ${checkboxRef?.current?.checked ? 'visible' : 'invisible'}`} name="" id="" />
                <img className='rounded-2xl' src={props.id} alt="" />
        </div>  
    );
};

export default SortableItems;