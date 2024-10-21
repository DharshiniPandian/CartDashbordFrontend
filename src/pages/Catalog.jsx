import { Box, Typography, IconButton, styled, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import MUIButton from '../components/ui/Button/Button';
import ErrorOutlineSharpIcon from "@mui/icons-material/ErrorOutlineSharp";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Badge } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Container } from "@mui/material";

// const itemData = [
//   { img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', title: 'Breakfast', variant: 2 },
//   { img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', title: 'Burger', variant: 2  },
//   { img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45', title: 'Camera', variant: 1 },
//   { img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c', title: 'Coffee', variant: 2  },
//   { img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8', title: 'Hats', variant: 2  },
//   { img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62', title: 'Honey' },
//   { img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', title: 'Basketball', variant: 2  },
//   { img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f', title: 'Fern' },
//   { img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25', title: 'Mushrooms', variant: 2  },
// ];


const ScrollableNav = styled(Box)(({ theme }) => ({

}));

const StyledButton = styled(Button)(({ theme, active }) => ({
  textTransform: 'none',
  marginRight: theme.spacing(1),
  padding: '8px 16px',
  width: 'auto',
  borderRadius: '8px',
  backgroundColor: active ? theme.palette.primary.main : theme.palette.background.paper,
  color: active ? theme.palette.common.white : theme.palette.text.primary,
  boxShadow: active ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    backgroundColor: active ? theme.palette.primary.dark : theme.palette.background.default,
  },
}));


function Catalog() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('All');
  const temp = { name: 'All' }

  const [itemData, setItemData] = useState([])
  const [variants, setVariants] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      console.log('start');
      try {
        const categoriesResponse = await axios.get('http://localhost:8081/product-categories')
        const productsResponse = await axios.get('http://localhost:8081/products');
        const variantsResponse = await axios.get('http://localhost:8081/product-variants');

        console.log('Products:', productsResponse.data);
        console.log('Variants:', variantsResponse.data);
        console.log(categoriesResponse.data)
        setCategories(categoriesResponse.data);
        console.log(categories)

        setCategories((prev) => [temp, ...prev])
        console.log(categories)
        setItemData(productsResponse.data);
        setVariants(variantsResponse.data);
        setSelectedCategory(productsResponse.data)

      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (id) => {
    navigate(`/sales/variants/${id}`);
  };

  const categoryChange = (category) => {
    console.log("hi", category)
    setActiveButton(category.name)
    if (category.name == 'All') {
      setSelectedCategory(itemData)
    }
    else {
      console.log(activeButton)
      const temp = itemData.filter((item) => category.id == item.category_id)
      setSelectedCategory(temp)
    }
  }

  return (
    <Box
      sx={{
        padding: '15px',
        backgroundColor: '#f2f3f7',
        display: 'flex',
        flexDirection: 'column',
      }}
    >

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0px', padding: '0px', flexDirection: 'row' }}>
        <Typography variant="h5" sx={{ fontWeight: 500, fontSize: '18px' }}>Catalog</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2px' }}>
          <IconButton><MoreVertIcon sx={{ fontSize: '28px', color: '#515050' }} /></IconButton>
          <IconButton><CloseSharpIcon sx={{ fontSize: '28px', color: '#515050' }} onClick={() => navigate('/sales/payment')} /></IconButton>
        </Box>
      </Box>

      <Box mt={1} sx={{ width: '100%' }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%', 
          overflowX: 'auto',
          '&::-webkit-scrollbar': {
            height: '5px', 
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888', 
          },
          '&::-webkit-scrollbar-track': {
            background: '#ffffff', 
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555', 
          },
          '&:-webkit-scrollbar-thumb': {
            background: 'rgb(7, 39, 61)'
        }
        }}
        >
          {categories.map((category) => (
            <StyledButton
              key={category.name}
              active={category.name === activeButton ? 1 : 0}
              onClick={() => categoryChange(category)}
              sx={{ flexShrink: 0, marginRight: '10px' ,marginBottom: '5px'}}
            >
              {category.name}
            </StyledButton>
          ))}
        </Box>
      </Box>


      <Box sx={{ overflowY: 'auto', padding: '0px', mt: 2, height: '625px' }}>
        <ImageList
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
          }}
          cols={3}
          gap={14}
          rowHeight={190}
        >
          {selectedCategory.map((item) => {
            const matchingVariants = variants.filter((variant) => variant.product_id === item.id);
            const variantCount = matchingVariants.length;

            return (
              <ImageListItem key={item.id} sx={{ width: 'calc(33.33% - 13px)', marginLeft: '0px' }}>
                <Card sx={{ borderRadius: '6px', boxShadow: 1, cursor: 'pointer' }} onClick={() => handleClick(item.id)}>
                  <CardMedia
                    component="img"
                    height="120"
                    image={item.img_url}
                    title={item.name}
                    sx={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
                  />
                  <Badge
                    badgeContent={<ErrorOutlineSharpIcon sx={{ color: "white", backgroundColor: " rgba(86, 86, 86, 0.3);", borderRadius: '50%', }} />}
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      backgroundColor: "rgba(261, 281, 281, 0.9)",
                    }}
                  />
                  <CardContent sx={{ padding: '9px' }}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                      {item.name}
                    </Typography>
                    {variantCount > 0 && <Typography variant="body2" color="text.secondary">{variantCount} variants</Typography>}
                  </CardContent>
                </Card>
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>

      <Box mt={1} sx={{ display: 'flex', gap: '20px', justifyContent: 'space-between', alignItems: 'center' }}>
        <MUIButton
          text="Print Bill"
          variant="outlined"
          size="medium"
          startIcon={<LocalPrintshopIcon />}
          sx={{ color: '#1163e0', backgroundColor: 'white', width: '30%' }}
        />
        <MUIButton
          text="Proceed to payment"
          variant="contained"
          size="medium"
          onClick={() => navigate('/sales/payment')}
          sx={{ backgroundColor: '#1163e0', width: '65%' }}
        />
      </Box>
    </Box>
  );
}

export default Catalog;
