import React from "react";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import InputBox from "../components/ui/InputBox/InputBox";
import { useState, useEffect } from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BoyIcon from "@mui/icons-material/Boy";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useNavigate, useLocation } from 'react-router-dom';
import MUIButton from "../components/ui/Button/Button";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function CartSummary({ active, cart, setCart, totalPrice, setTotalPrice }) {
  const navigate = useNavigate();
  const location = useLocation()

  console.log("from cartsummary", cart)

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleQuantityChange = (type, index) => {
    const updatedCart = [...cart];

    if (type === "increment") {
      updatedCart[index].quantity++;
      const temp = parseFloat(updatedCart[index].price) + totalPrice;
      setTotalPrice(temp)
    } else if (type === "decrement" && updatedCart[index].quantity > 1) {
      updatedCart[index].quantity--;
      const temp = totalPrice - parseFloat(updatedCart[index].price);
      setTotalPrice(temp)
    }

    setCart(updatedCart);

    console.log(cart)
  };

  const handleClick = () => {
    navigate('/sales/catalog');
  };

  const onDelete = (row) => {
    console.log("hi");
    console.log(row);

    const newTotalPrice = totalPrice - (parseFloat(row.price) * parseFloat(row.quantity));
    setTotalPrice(newTotalPrice);

    setCart((prevCartItems) => {
      return prevCartItems.filter((item) => item !== row);
    });
  };

  return (
    <Box backgroundColor="white" sx={{ width: "100%", height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Stack direction="row" padding="10px" alignItems="center" spacing={2}>
        <Box flexGrow={1}>
          <InputBox
            id="search"
            label=""
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            type="text"
            size="small"
            isSearch={true}
            fullWidth={true}
          />
        </Box>

        <Box
          flexGrow={0}
          sx={{
            height: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid",
            borderColor: "#b8b9b9",
            padding: "10px",
            borderRadius: "4px",
            backgroundColor: active ? '#1e61cb' : '#ffffff',
          }}
        >
          <MenuBookIcon
            onClick={handleClick}
            sx={{
              fontSize: "28px",
              color: active ? "#ffffff" : "#1e61cb",
              cursor: 'pointer',
              backgroundColor: active ? '#1e61cb' : '#ffffff',
            }} />
        </Box>
      </Stack>
      <Stack
        mt={1}
        padding="10px"
        direction="row"
        justifyContent="space-between"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "3px",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 500, fontSize: "20px" }}>
            Cart Summary
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: 400, color: "#8f99a7", fontSize: "16px" }}
          >
            Order ID:
            <Box component="span" sx={{ color: "black", fontWeight: 400 }}>
              000001
            </Box>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              height: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid",
              borderColor: "#b8b9b9",
              padding: "5px",
              borderRadius: "4px",
            }}
          >
            <BoyIcon sx={{ fontSize: "28px", color: "#515050" }} />
          </Box>

          <Box
            sx={{
              height: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid",
              borderColor: "#b8b9b9",
              padding: "5px",
              borderRadius: "4px",
            }}
          >
            <TableRestaurantIcon sx={{ fontSize: "28px", color: "#515050" }} />
          </Box>

          <Box
            sx={{
              height: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid",
              borderColor: "#b8b9b9",
              padding: "5px",
              borderRadius: "4px",
            }}
          >
            <MoreVertIcon sx={{ fontSize: "28px", color: "#515050" }} />
          </Box>
        </Box>
      </Stack>
      <TableContainer component={Paper} sx={{ flexGrow: 1, overflowY: 'auto' }}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell flexGrow={2} sx={{ color: '#8f99a7', fontWeight: 500, fontSize: '16px' }}>
                Item
              </TableCell>
              <TableCell align="center" flexGrow={1} sx={{ color: '#8f99a7', fontWeight: 500, fontSize: '16px' }}>
                Qty
              </TableCell>
              <TableCell align="center" flexGrow={1} sx={{ color: '#8f99a7', fontWeight: 500, fontSize: '16px' }}>
                Amount
              </TableCell>
              <TableCell align="center" flexGrow={1} sx={{ color: '#8f99a7', fontWeight: 500, fontSize: '16px' }}>

              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.length > 0 ? (
              cart.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ fontWeight: 500, fontSize: '18px' }}>{row.name}</TableCell>
                  <TableCell align="center" >
                    <MUIButton
                      text={
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "150px",
                            color: 'black',
                          }}
                        >
                          <RemoveSharpIcon onClick={() => handleQuantityChange("decrement", index)} />
                          <Typography variant="body1">{row.quantity}</Typography>
                          <AddSharpIcon onClick={() => handleQuantityChange("increment", index)} />
                        </Box>
                      }
                      variant="outlined"
                      size="medium"
                      sx={{
                        padding: '8px 10px',
                        backgroundColor: "white",
                        border: '1px solid #dddee0',
                        width: "50%",
                        borderRadius:'7px'
                      }}
                    />
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 500, fontSize: '18px' }}>{row.quantity * parseFloat(row.price)}</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 500, fontSize: '18px' }}><DeleteOutlineOutlinedIcon sx={{ cursor: 'pointer', fontSize: '28px', color: '#8f99a7' }} onClick={() => onDelete(row)} /></TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow sx={{ height: location.pathname === '/sales/payment' || location.pathname === '/sales/catalog' ? '533px' : '615px', borderBottom: 'none', border: 'none' }}>
                <TableCell colSpan={3} align="center">
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                      src='https://static.vecteezy.com/system/resources/previews/002/119/800/original/trolly-flat-icons-an-empty-supermarket-shopping-cart-illustration-isolated-on-white-background-basket-for-supermarket-trolley-retail-metallic-pushcart-cartoon-style-grocery-shop-theme-vector.jpg'
                      height='150px'
                      width='150px'
                      alt="Cart is empty"
                    />
                    <Typography variant="h6">Cart is empty</Typography>
                    <Typography variant="body2" sx={{ color: '#8f99a7', fontSize: '17px' }}>Scan barcode or add items from catalog</Typography>
                  </Box>
                </TableCell>
              </TableRow>

            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Box>
        {(location.pathname === '/sales/payment' || location.pathname === '/sales/catalog') &&
          <Box sx={{ backgroundColor: '#07273c', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white', height: '75px' }}>
            <Typography variant="h6">{cart.length} Items</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', marginRight: '10px' }}>
              <Typography variant="h6" sx={{ color: 'white' }}>Total</Typography>
              <Typography variant="h6">{totalPrice.toFixed(2)}</Typography>
            </Box>
          </Box>
        }
      </Box>
    </Box>
  );
}

export default CartSummary;
