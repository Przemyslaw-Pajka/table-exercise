import { itemsPerPage } from "./itemsPerPage";


export const handlePageClick = (event,data,setItemOffset) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
 
    setItemOffset(newOffset);
  };