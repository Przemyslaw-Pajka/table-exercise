import { useState, useEffect } from 'react';

export const useReactPaginate = (itemOffset, itemsPerPage, data,setCurrentItems,setPageCount) =>{

  useEffect(() => {
     const endOffset = itemOffset + itemsPerPage;
     if (data) {
       setCurrentItems(data.slice(itemOffset, endOffset));
       setPageCount(Math.ceil(data.length / itemsPerPage));
     }
  },[itemOffset, itemsPerPage, data]);
}