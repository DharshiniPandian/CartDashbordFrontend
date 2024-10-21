import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Badge } from "@mui/material";
import ErrorOutlineSharpIcon from "@mui/icons-material/ErrorOutlineSharp";
import MUIButton from "../components/ui/Button/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

// const itemData = {
//   imageUrl: "https://www.vindulge.com/wp-content/uploads/2022/06/Buffalo-Chicken-Pizza.jpg",
//   imageName: "Chicken BBQ pizza with Mexican-flavored toppings",
//   variantsCount: 2,
//   variants: [
//     { name: "Pizza (Large)", price: "800.00", size: "large" },
//     { name: "Pizza (Small)", price: "300.00", size: "small" }
//   ],
// };

function Variants({ cart, setCart, price, setPrice }) {
  const { id } = useParams();
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selected, setSelected] = useState({});
  const [product, setProduct] = useState({});
  const [itemData, setItemData] = useState([])
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('variants');

  const handleVariantClick = () => {
    setActiveButton('variants');
  };

  const handleAddonClick = () => {
    setActiveButton('addons');
  };

  //console.log("in variants")

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const productData = await axios.get(`http://localhost:8081/products/${id}`);
        const variants = await axios.get(`http://localhost:8081/product-variants/${id}`);

        try {
          const data = variants.data;
          setItemData(data);
          if (data.length > 0) {
            setSelected(data[0] || {});
            console.log(data)
          }
          setProduct(productData.data[0])
          console.log(product)
          console.log(product.img_url); // Check if the URL is valid
        }
        catch (error) {
          console.error('error fetching data ', error);
        }
      }
    };
    fetchData();
  }, [id])

  const handleClick = () => {
    navigate('/sales/catalog');
  };

  const handleVariantChange = (event) => {
    const selectedVar = event.target.value;
    const selectedVariant = itemData.find(variant => variant.name === selectedVar);
    setSelected(selectedVariant)
    setSelectedPrice(selectedVariant.price)
    const val = parseFloat(selectedVariant.price) * parseFloat(quantity);
    setTotalPrice(val)
  };

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(prev => prev + 1);
      setSelectedPrice(prev => prev + parseFloat(selected.price))
      setTotalPrice(prev => prev + parseFloat(selected.price));
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(prev => prev - 1);
      setSelectedPrice(prev => prev - parseFloat(selected.price))
      setTotalPrice(prev => prev - parseFloat(selected.price));
    }
    selected.quantity = quantity
  };

  const addToCart = () => {
    var newobj = { ...selected, quantity };
    console.log(newobj, "variants")
    var temp = price + (parseFloat(newobj.price) * parseFloat(newobj.quantity));
    setPrice(temp)
    setCart((prevCartItems) => [...prevCartItems, newobj]);
    navigate('/sales/catalog');
  };

  return (
    <Stack direction='column' sx={{ height: '100vh', padding: '0px', justifyContent: 'space-between' }}>
      <Box flex={9} sx={{ padding: '20px', display: "flex", gap: '20px', flexDirection: 'column', }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" sx={{ fontWeight: 500, fontSize: "20px" }}>
            Variants & Add-ons
          </Typography>
          <Box sx={{ display: "flex", gap: "2px", alignItems: "center" }}>
            <ArrowCircleRightOutlinedIcon sx={{ color: "#515050", fontSize: "30px", cursor: 'pointer' }} onClick={handleClick} />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "14px",
            alignItems: "center",
          }}
        >
          <Box position="relative" display="inline-block">
            <img
              src={product.img_url}
              alt="img"
              style={{
                width: "130px",
                height: "110px",
                filter: "brightness(80%)",
                borderRadius: "5px",
              }}
            />
            {itemData.length > 0 && (<Badge
              badgeContent={itemData.length}
              color="primary"
              sx={{
                position: "absolute",
                top: 10,
                left: 10,
                backgroundColor: "#1976d2",
              }}
            />
            )}
            <Badge
              badgeContent={<ErrorOutlineSharpIcon sx={{ color: "white" }} />}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: "rgba(128, 128, 128, 0.5)",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h7"
              sx={{ fontSize: "18px", fontWeight: 500, color: "#08141d" }}
            >
              {product.name}
            </Typography>
          </Box>
        </Box>

        <Box display="flex" flexDirection="row">
          <MUIButton
            variant={activeButton === 'variants' ? 'contained' : 'outlined'}
            size="medium"
            onClick={handleVariantClick}
            text={`Variants (${itemData.length})`}
            sx={{
              flexGrow: 1,
              borderRadius: "4px 0 0 4px",
            }}
          />
          <MUIButton
            variant={activeButton === 'addons' ? 'contained' : 'outlined'}
            size="medium"
            onClick={handleAddonClick}
            text="Add-ons"
            sx={{
              flexGrow: 1,
              borderRadius: "0 4px 4px 0",
            }}
          />
        </Box>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 500, fontSize: "20px" }}>
            Quantity
          </Typography>
        </Box>
        <Box>
          <FormControl fullWidth>
            <RadioGroup
              aria-labelledby="radio-buttons-group-label"
              value={itemData[0]?.name}
              name="radio-buttons-group"
              onChange={handleVariantChange}
            >
              {itemData.map((variant) => (
                <FormControlLabel
                  key={variant.name}
                  value={variant.name}
                  control={<Radio />}
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          flexGrow: 1,
                          textAlign: 'left',
                          paddingRight: 2, 
                          minWidth: '320px', 
                        }}
                      >
                        {variant.name}
                      </Typography>

                      <Typography
                        sx={{
                          textAlign: 'right',
                          minWidth: '215px', 
                        }}
                      >
                        SAR {variant.price}
                      </Typography>
                    </Box>
                  }
                  sx={{ width: "100%" }}
                />
              ))}
            </RadioGroup>
          </FormControl>


        </Box>
      </Box>


      <Box flex={1} sx={{ padding: '20px' }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 400, color: "#515050", fontSize: "16px" }}
          >
            Item Total
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 500, fontSize: "16px",marginRight:'9px' }}>
            SAR {totalPrice}
          </Typography>
        </Box>

        <Box
          mt={2}
          sx={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          <MUIButton
            text={
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <RemoveSharpIcon onClick={() => handleQuantityChange("decrement")} />
                <Typography variant="body1">{quantity}</Typography>
                <AddSharpIcon onClick={() => handleQuantityChange("increment")} />
              </Box>
            }
            variant="outlined"
            size="medium"
            sx={{
              backgroundColor: "white",
              border: "1px solid #8f99a7",
              width: "40%",
            }}
          />
          <MUIButton
            text="Add to order"
            variant="contained"
            size="medium"
            onClick={addToCart}
            sx={{ backgroundColor: "#1163e0", width: "60%" }}
          />
        </Box>
      </Box>


    </Stack>

  );
}

export default Variants;
