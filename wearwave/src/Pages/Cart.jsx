// import { json } from "react-router-dom"
import { Show } from "@chakra-ui/react";
import ShowData from "../components/ShowData";
import styles from "../styles/Products.module.css"
import { Button, ButtonGroup } from '@chakra-ui/react'
function Cart(){
    let data = JSON.parse(localStorage.getItem("cartData"))
    console.log(data);
    return(
        <div>
            {
                <div className={styles.products}>
                {
                    data.map((el,index)=>(
                        <div key={index}>
                            <img src={el.image} alt="" />
                            <h3>{el.title}</h3>
                            <p>{el.description}</p>
                            <p>Rating: {el.rating}</p>
                            <p>Rs. {el.price}</p>
                            <p style={{color:"orange", fontSize:"x-smaller"}}>(53%OFF)</p>
                            <Button onClick={()=>{
                                data.splice(index,1)
                                localStorage.setItem("cartData",JSON.stringify(data))
                                console.log(data);
                                alert("Your Order Is Placed Successfully")
                                window.location.reload(false);
                            }} colorScheme='blue'>Buy</Button>
                             <Button margin="5px" onClick={()=>{
                                data.splice(index,1)
                                localStorage.setItem("cartData",JSON.stringify(data))
                                console.log(data);
                                window.location.reload(false);
                            }} colorScheme='blue'>Remove</Button>
                        </div>
                    ))
                }
    
            </div>
            }
        </div>
    )
}
export default Cart