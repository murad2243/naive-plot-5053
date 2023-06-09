import React, { useReducer } from "react"
import axios from "axios"
import {useState, useEffect} from "react"
import { Center, Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
// import Footer from "../components/Footer";
import ShowData from "../components/ShowData"

import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
import styled from "@emotion/styled"
// import styles from "../styles/Products.module.css"
import { Grid, GridItem } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
// import Footer from "../components/Footer"
const intastate={
    products:[],
    isLoading: false,
    isError:false
}

const reducer = (state, action)=>{
    switch(action.type){
        case "FETCH_REQUEST":
        return {
            ...state,
            isLoading:true,
            isError:false
        }
        case "FETCH_SUCESS":
        return {
            ...state,
            products: action.payload,
            isLoading:false,
            isError:false
        }
        case "FETCH_FAILURE":
        return {
            ...state,
            products:[],
            isLoading:false,
            isError: true
        }
        default: 
        throw new Error()
    }
}

function Mens(){
let [data, setData] = useState([])

const [state, dispatch] = useReducer(reducer, intastate);
const {products, isLoading, isError} = state;
const getData =  ()=>{
    dispatch({type:"FETCH_REQUEST"})
    axios.get("http://localhost:3001/prods").then((res)=>{
        dispatch({type: "FETCH_SUCESS", payload: res.data})
        // console.log(res.data);
    }).catch((err)=>{
        dispatch({type: "FETCH_FAILURE", payload: err.massage})
        // console.log(err);
    });
}
useEffect(()=>{
    getData()

},[])
console.log(state.products);

state.products = state.products.filter((el)=>{
    return el.gender == "Male";
})
// console.log(newData);


if(isLoading){
    return <div>Loading...</div>
}
else if(isError){
    return (
        <h1>Something went wrong</h1>
    )
}
else{
    return (
            <ShowData data={state.products} /> 
    )
}
   
        // if(isLoading){
        //     return (
        //         <div>Loading..</div>
        //     )
        // }
        // else if(isError){
        //     <h2>Something went wrong</h2>
        // }
        // else{
        //     return(
        //         <Mens  data={data}/>
        //     )
        // }
        return <div>
            skd
            </div>
        
   
}
export default Mens;