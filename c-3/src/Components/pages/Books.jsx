import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
 add required style here
`;

const Books = () => {
  const [data, setData] = useState([]);

  useEffect(() => {

    // make a GET request to http://localhost:8080/books to get all the books data
    const BookData=async()=>{
     try {
      let res=await fetch("http://localhost:8080/books ")
  
       let data=await res.json()
      
  
      setData(data)
     } catch (error) {
       console.log(error)
     }
    
    }
 

    BookData()
    
  }, []);



  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {
          /* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */
      
           data.map((item)=>{
             <h1>{item.title}</h1>
           })
          }
          

      </Grid>
    </>
  );
};
export default Books;
