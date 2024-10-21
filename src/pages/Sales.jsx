import { Container, Stack, Box } from "@mui/material";
import React from "react";
import Grid from '@mui/material/Grid2';
import SideBar from "../components/SideBar";
import CartSummary from "./CartSummary";
import PaymentSummary from "./PaymentSummary";
import { useLocation, matchPath } from 'react-router-dom';
import Catalog from "./Catalog";
import Variants from "./Variants";
import { useState, useEffect } from "react";

function Sales() {
  const location = useLocation();
  const showPaymentSummary = location.pathname === '/sales/payment';
  const showCatalog = location.pathname === '/sales/catalog';
  const showVariants =  matchPath('/sales/variants/:id', location.pathname);

  const [active,setActive] = useState(false);

  const [cartItems, setCartItems] = useState([])

  const [totalPrice,setTotalPrice] = useState(0);

  useEffect(() => {
    if (location.pathname === '/sales/catalog' || showVariants) {
      setActive(true);
    } else {
      setActive(false);
    }
    console.log(cartItems)
  }, [location.pathname, cartItems.length]);

  return (
  <Stack direction ='row'>
     <Box flex={9}>
        <CartSummary active={active} cart={cartItems}  setCart={setCartItems} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
      </Box>
      {showPaymentSummary && (
        <Box flex={6} backgroundColor='#f2f3f7' height='100vh'>
          <PaymentSummary totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
        </Box>
      )}
      {showCatalog && (
        <Box flex={6} backgroundColor='#f2f3f7' height='100vh'>
          <Catalog />
        </Box>
      )}
      {showVariants && (
        <Box flex={6} backgroundColor='#f2f3f7' height='100vh'>
          <Variants cart={cartItems}  setCart={setCartItems} price={totalPrice} setPrice={setTotalPrice} />
        </Box>
      )}

  </Stack>  

  );
}

export default Sales;
