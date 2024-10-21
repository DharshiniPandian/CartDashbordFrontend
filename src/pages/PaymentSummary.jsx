import { Box, Typography } from '@mui/material'
import React from 'react'
import MUIButton from '../components/ui/Button/Button'
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useNavigate } from 'react-router-dom';

function PaymentSummary({totalPrice, setTotalPrice}) {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate('/variants');
  };

  const subTotal = totalPrice;
  const tax=0.00;
  const totalTax=0.00;

  const grandTotal=subTotal+tax+totalTax;

  return (
    <Box  backgroundColor='#f2f3f7' sx={{ margin: '0px', height: '100vh', display: 'flex', flexDirection:'column', justifyContent:'space-between'}}>
        <Box sx={{padding: '20px',display: 'flex', flexDirection:'column',gap:'12px'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant="h5" sx={{ fontWeight: 500, fontSize: "20px" }}>
            Payment Summary
            </Typography> 
            <Box sx={{display: 'flex', gap:'2px', alignItems: 'center'}}>
            <ReceiptOutlinedIcon  sx={{color:'#8f99a7', fontSize: "18px"}} />
            <Typography
            variant="h6"
            sx={{ fontWeight: 500, color: "#8f99a7", fontSize: "14px" }}
            >
            Ashwin
            </Typography>
            </Box>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant="h5" sx={{ fontWeight: 400,color:'#8f99a7', fontSize: "16px" }}>
            Sub Total
            </Typography> 
            <Typography
            variant="h6"
            sx={{ fontWeight: 500, fontSize: "16px" }}
            >
            SAR {subTotal.toFixed(2)}
            </Typography>
            
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant="h5" sx={{ fontWeight: 400,color:'#8f99a7', fontSize: "16px" }}>
            Taxable amount
            </Typography> 
            <Typography
            variant="h6"
            sx={{ fontWeight: 500, fontSize: "16px" }}
            >
            SAR {tax.toFixed(2)}
            </Typography>
            
            </Box>
            
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant="h5" sx={{ fontWeight: 400,color:'#8f99a7', fontSize: "16px" }}>
            Total Tax
            </Typography> 
            <Typography
            variant="h6"
            sx={{ fontWeight: 500, fontSize: "16px" }}
            >
            SAR {totalTax.toFixed(2)}
            </Typography>
            
            </Box>
            <Box  sx={{display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #8f99a7', paddingTop:'10px'}}>
            <Typography  variant="h5" sx={{ fontWeight: 400,color:'#8f99a7', fontSize: "16px" }}>
            Grand Total 
            </Typography> 
            <Typography

            variant="h6"
            sx={{ fontWeight: 600, fontSize: "20px" }}
            >
            SAR {grandTotal.toFixed(2)}
            </Typography>
            
            </Box>
        </Box>
        <Box>
          <Box mb={1} component="section" sx={{margin:'0px',padding: '10px',display: 'flex', justifyContent: 'center', alignItems: 'center',gap:'2px', borderTop: '1px solid #8f99a7', borderBottom: '1px solid #8f99a7'}}>
          <Box>
            <NoteAltOutlinedIcon sx={{justifyContent: 'center'}}/>
            </Box>
          <Typography variant="h5" align='center' sx={{ fontWeight: 400, fontSize: "16px" , alignItems: 'center', justifyContent: 'center'}}>
            Add Notes        
            </Typography> 
          </Box>
        <Box sx={{ display: 'flex', padding: '20px', gap: '10px', justifyContent: 'space-between', borderBottom: '1px solid #8f99a7'}}>
            <MUIButton
             text="Customer"
             variant="outlined"
             size="medium"
             startIcon={<AccountBoxOutlinedIcon />}
             color='#444545'
             sx={{backgroundColor: 'white', width:'30%'}}
            />
        <MUIButton
             text="Coupon"
             variant="outlined"
             size="medium"
             startIcon={<LocalActivityIcon />}
             color='#444545'
             sx={{backgroundColor: 'white', width:'30%'}}
            />
        <MUIButton
           text="Discount"
           variant="outlined"
           size="medium"
           startIcon={<VerifiedIcon />}
           color='#444545'
           sx={{backgroundColor: 'white', width:'30%'}}
        />
      </Box>
     <Box sx={{ display: 'flex', padding: '20px', gap: '20px',  justifyContent: 'space-between'}}>
        <MUIButton
             text="Print Bill"
             variant="outlined"
             size="medium"
             startIcon={<LocalPrintshopIcon />}
             sx={{color: '#1163e0', backgroundColor: 'white', width:'30%'}}
            />
        <MUIButton
             text="Proceed to payment"
             variant="contained"
             size="medium"
             sx={{backgroundColor: '#1163e0', width:'65%'}}
            />
     </Box>
     </Box>
     </Box>
  )
}

export default PaymentSummary