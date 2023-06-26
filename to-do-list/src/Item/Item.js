import classes from './Item.module.css'


function Item(props){
    return(
        <>
            <input type = 'checkbox'></input>
            <lable>{props.Description}</lable>
            <br></br>
        </>
    );
}

export default Item;