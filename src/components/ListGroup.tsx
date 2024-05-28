import { useState } from "react";

// {items: [], heading: string}
interface props{
    items: string[];
    heading: string;
    onSelected: (item: string) => void;
}

function ListGroup({items,heading,onSelected}:props) {
    

    // hook
    const [selectedItem, setselectedItem] = useState(-1)

  return(
    <>
        <h1>{heading}</h1>

        {items.length === 0 && <p>No item found</p>}

        <ul className="list-group">
       { items.map((item,index) => <li className={selectedItem=== index? "list-group-item active"
       :"list-group-item"} 
       key={item} 
       onClick={()=> {
        setselectedItem(index);
        onSelected(item);
       }}>{item}</li>)}
        </ul>
  </>
  );
}

export default ListGroup;
