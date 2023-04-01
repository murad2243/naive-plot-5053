import React from "react"
import {Link} from 'react-router-dom';
import wearwave from "../imgs/wearwave.png"
import styles from "../styles/Navbar.module.css";
import {InputGroup,InputRightElement,Button,Input,Avatar,Stack} from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"

function Navbar(){
    
    return (
        
<div className={styles.NavOptions}>
        
        
        <img alt="logo" src={wearwave} style={{height:"40px"}} />
            <p><Link to="/mens" >MENS</Link>
            </p>
            <p>
                <Link to="/women" >WOMEN</Link>
            </p>
            <p>
                <Link to="/kids" >KIDS</Link>
            </p>
            <p>
                <Link to="/" >HOME & LIVING</Link>
            </p>
            <p>
                <Link to="/beauty" >BEAUTY</Link>
            </p>
            <p>
                <Link to="/studio" >STUDIO</Link>
            </p>
       

        
       <div style={{width:"60px"}}></div>
        
        <div>
        <InputGroup bg="#f5f5f6" size='md'>
        <InputRightElement width='4.5rem'>
        <Button h='1.75rem' bg="#f5f5f6" size='sm' >
            <SearchIcon/>
        </Button>
      </InputRightElement>
      <Input
        pr='4.5rem'
        placeholder='Search for Product, Brands and more'
      />
      
    </InputGroup>
    
    
        </div>
       
        <Stack gap="10px" direction='row'>
            <div>
            <Avatar height="30px" width="30px" src='https://cdn-icons-png.flaticon.com/512/1144/1144760.png' />
            <p style={{fontSize:"13px", color:"grey"}} >profile</p>
            </div>
            <div>
            <Avatar height="30px" width="30px" src='https://cdn-icons-png.flaticon.com/512/1656/1656850.png' />
                <p style={{fontSize:"13px", color:"grey"}}>bag</p>
            </div>
    
    
    </Stack>

    
        </div>
        
    
    )
        
}
export default Navbar;