import { useState } from "react";
import styles from "../styles/Products.module.css"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { json } from "react-router-dom";
function ShowData({data}){
// console.log(data);

let [curData, setData] = useState(data)
console.log(curData);
function changeData(type){
    if(type == "low-high"){
        // let Data = curData
        
        curData.sort((e1,e2)=>{
            return Number(e1.price) - Number(e2.price)
        })
        console.log(curData);
        let Data = [ ...curData]
        setData(Data)
    }
    // console.log(type);
}
let cartData = JSON.parse(localStorage.getItem("cartData")) || []
function addtocart(product){
    cartData.push(product)
    localStorage.setItem("cartData",JSON.stringify(cartData))
}

    return(
        <div className={styles.showPage}>
            <div className={styles.fDiv}>
                <h2>FILTERS</h2>
                <div className={styles.filters}>
                    <input onChange={(e)=> {changeData("low-high")}} type="checkbox" />
                    <p>low - high</p>
                </div>
                <div className={styles.filters}>
                    <input type="checkbox" />
                    <p>high - low</p>
                </div>
                <hr />
                <h2>COLORS</h2>
                <div className={styles.filters}>
                    <input type="checkbox" />
                    <p>Blue</p>
                </div>
                <div className={styles.filters}>
                    <input type="checkbox" />
                    <p>White</p>
                </div>
                <div className={styles.filters}>
                    <input type="checkbox" />
                    <p>Navy Blue</p>
                </div>
                <div className={styles.filters}>
                    <input type="checkbox" />
                    <p>Green</p>
                </div>
                <div className={styles.filters}>
                    <input type="checkbox" />
                    <p>Grey</p>
                </div>
                <hr />
                <h2>BRANDS</h2>
                <div className={styles.filters}>
                    <input type="checkbox" />
                    <p>Allen Solly</p>
                </div>
                <div className={styles.filters}>
                    <input type="checkbox" />
                    <p>JANISH</p>
                </div>
                <div className={styles.filters}>
                    <input type="checkbox" />
                    <p>HIGHLANDER</p>
                </div>
                <div className={styles.filters}>
                    <input type="checkbox" />
                    <p>AROww</p>
                </div>
                <div className={styles.filters}>
                    <input type="checkbox" />
                   <p>ShowOff</p>
                </div>
            </div>
<div className={styles.products}>
            {
                curData.map((el,index)=>(
                    <div key={index}>
                        <img src={el.image} alt="" />
                        <h3>{el.title}</h3>
                        <p>{el.description}</p>
                        <p>Rating: {el.rating}</p>
                        <p>Rs. {el.price}</p>
                        <p style={{color:"orange", fontSize:"x-smaller"}}>(53%OFF)</p>
                        <Button onClick={()=>{addtocart(el)}} colorScheme='blue'>Add To Cart</Button>
                    </div>
                ))
            }

        </div>
        </div>
        
    )
}

export default ShowData;