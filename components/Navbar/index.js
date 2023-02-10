import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import LogoFemale from '../../public/images/FD-Logo.png'
import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import dataNavbar from '../../helper/dataNavbar.json';
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div style={{width: "100%"}}>
      <AppBar elevation={0} style={{backgroundColor: "#FFFFFF"}} position="static">
        <Toolbar>
          <IconButton
            style={{color: "#000000"}}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Image width={150} height={40} src={LogoFemale} alt="female"/>
          <FormControl style={{width:  "70%"}}  sx={{ m: 1 }}>
          <OutlinedInput
            placeholder='Search products, articles, topics, brands, etc'
            id="outlined-adornment-amount"
            startAdornment={<SearchIcon/> }
          />
        </FormControl>
        <div style={{cursor: "pointer", justifyContent:"center", width : 200, display: "flex", flexDirection: "row", backgroundColor: "#DC143C", alignItems:"center"}}>
            <AccountCircleIcon />
            <p style={{color: "#FFFFFF", paddingLeft: 10}}>
            LOGIN/SIGN UP
            </p>

        </div>       
             </Toolbar>
      </AppBar>
      <div style={{ display: "flex", justifyContent: "center"}}>
      <div className={styles.navbar_type}>
         {
            dataNavbar.map((value, i) => {
                return <p className={styles.navbar_title}>{value}</p>
            })
         }

      </div>
      </div>
      </div>
  );
}