import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText  } from '@mui/material'
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Img from '../assets/nestle.jpg'
import Logo from '../assets/logo.png'
import { styled } from '@mui/material';
import { useNavigate, useLocation  } from 'react-router-dom';

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path);

  const StyledListItemButton = styled(ListItemButton)(({ active}) => ({
  flexDirection: 'column',
  alignItems: 'center',
  margin: active  ? '10px' : '0px',
  padding: '2px',
  backgroundColor: active ? '#fcffff' : 'transparent',
  border: active ? 'solid 1px #8f99a7' : '', 
  boxShadow: active ? '0px 0px 20px 10px rgba(140, 150, 163, 0.7)' : 'none', 
  transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
  borderRadius: active ? '6px' : '0px',
    '&:hover': {
      backgroundColor: active ? '#d2e6ee' :'#153448', 
    },
}));

const StyledListItemText  = styled(ListItemText )(({ active}) => ({
  textAlign: 'center',
  color: active ? '#07273c' : '#8f99a7',
  margin: '0px',
  padding: '0px',
  fontSize: '20px',
  fontWeight: active ? '500' : '300'
}));

const StyledListItemIcon = styled(ListItemIcon)(({ active}) =>({
  minWidth: 'auto',
  color: active ? "#07273c" : "#8f99a7",
  fontSize: '22px',
  margin:'5px',
  textAlign: 'center', 
}));
  return (
   
    <Box height='100vh' backgroundColor='#07273c'  position='sticky' sx={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
      <Box mt={2} sx={{ marginLeft:'25px'}}>
        <img src={Logo} alt='img' height='40px' width='40px' />
      </Box>
      <Box sx={{margin:'0px'}}>

      <List>
        <ListItem disablePadding>
          <StyledListItemButton onClick={() => navigate('/')}>
            <StyledListItemIcon>
              <DashboardTwoToneIcon />
            </StyledListItemIcon>
            <StyledListItemText   primaryTypographyProps={{fontSize: '14px'}} primary="Dashboard" />
          </StyledListItemButton>
        </ListItem>
      </List>
      <List> 
        <ListItem disablePadding>
          <StyledListItemButton onClick={() => navigate('/sales/payment')} active={isActive('/sales')}>
            <StyledListItemIcon active={isActive('/sales')}>
              <AddShoppingCartIcon />
            </StyledListItemIcon>
            <StyledListItemText  active={isActive('/sales')} primaryTypographyProps={{fontSize: '16px',fontWeight: isActive('/sales') ? '500' : '300',}}  primary="Sales" />
          </StyledListItemButton>
        </ListItem>
      </List>
      <List>
      <ListItem disablePadding>
        <StyledListItemButton>
          <StyledListItemIcon>
            <ArticleOutlinedIcon sx={{ color: "#8f99a7", fontSize: '22px', margin: '5px' }} />
          </StyledListItemIcon>
          <StyledListItemText  primaryTypographyProps={{ fontSize: '14px' }} primary="Orders" />
        </StyledListItemButton>
      </ListItem>
    </List>
      <List>
        <ListItem disablePadding>
          <StyledListItemButton>
            <StyledListItemIcon sx={{ minWidth: 'auto' }}>
              <AccountBoxOutlinedIcon />
            </StyledListItemIcon>
            <StyledListItemText   primaryTypographyProps={{fontSize: '14px'}}  primary="Customer"/>
          </StyledListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <StyledListItemButton>
            <StyledListItemIcon sx={{ minWidth: 'auto' }}>
              <StorefrontOutlinedIcon />
            </StyledListItemIcon>
            <StyledListItemText   primaryTypographyProps={{fontSize: '14px'}}  primary="Items" />
          </StyledListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <StyledListItemButton>
            <StyledListItemIcon sx={{ minWidth: 'auto' }}>
              <Inventory2OutlinedIcon />
            </StyledListItemIcon>
            <StyledListItemText   primaryTypographyProps={{fontSize: '14px'}}  primary="Inventory" />
          </StyledListItemButton>
        </ListItem>
      </List>
      <List>
  <ListItem disablePadding>
    <StyledListItemButton>
      <StyledListItemIcon sx={{ minWidth: 'auto' }}>
        <NotificationsOutlinedIcon sx={{ color: "#8f99a7" , fontSize: '22px', margin:'5px'}} />
      </StyledListItemIcon>
      <StyledListItemText   primaryTypographyProps={{fontSize: '14px'}}  primary="Alerts" />
    </StyledListItemButton>
  </ListItem>
</List>

      </Box>
      <Box sx={{ margin:'20px'}}>
        <img src={Img} alt='img' height='60px' width='50px'/>
      </Box>
    </Box>
   
  )
}

export default SideBar
