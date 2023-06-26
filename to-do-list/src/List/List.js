import classes from './List.module.css'
import Item from "../Item/Item";

let items = ['Milk','Bread','Meat'];


function List(props){
    return (
        <>
        {items.map(description => (
            <Item Description = {description}></Item>
        ))}
        </>
    );
}

export default List;