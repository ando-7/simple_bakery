import { Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import cake_1 from "../img/products/cake_1.jpg";
import cake_2 from "../img/products/cake_2.jpg";
import cake_3 from "../img/products/cake_3.jpg";
import cake_4 from "../img/products/cake_4.jpg";
import cake_5 from "../img/products/cake_5.jpg";
import cake_6 from "../img/products/cake_6.jpg";
import cake_7 from "../img/products/cake_7.jpg";
import cake_8 from "../img/products/cake_8.jpg";
import cake_9 from "../img/products/cake_9.jpg";

function Products() {

  const itemData = [
    {
      img: cake_1,
      title: "Red Velvet White Chocolate Cake Mix Cookies",
    },
    {
      img: cake_2,
      title: "Chocolate Chip Cake Mix Cookies",
    },
    {
      img: cake_3,
      title: "S'mores Cake Mix Cookies",
    },
    {
      img: cake_4,
      title: "Birthday Cake Mix Cookies",
    },
    {
      img: cake_5,
      title: "Peanut Butter Cup Cake Mix Cookies",
    },
    {
      img: cake_6,
      title: "Lemon Crinkle Cake Mix Cookies",
    },
    {
      img: cake_7,
      title: "Snickerdoodle Cake Mix Cookies",
    },
    {
      img: cake_8,
      title: "Strawberries 'n' Cream Cake Mix Cookies",
    },
    {
      img: cake_9,
      title: "Birthday Cake Cookies",
    }
  ];

  return (
    <Box sx={{ mx: "3em" }}>
      <ImageList
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}>
        {itemData.map((item) => (
          <Box
            key={item.img}
            sx={{ boxShadow: "-4px 4px 11px #bfbfbf", mr: "3em", mb: "3em" }}>
            <ImageListItem sx={{ width: "20em", height: "10em" }}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading='lazy'
              />
              <ImageListItemBar
                sx={{
                  color: "white",
                  textAlign: 'center',
                  fontWeight: "bold",
                  "& .MuiImageListItemBar-title": {
                    whiteSpace: "normal", 
                    overflow: "hidden", 
                    textOverflow: "ellipsis", 
                  },
                }}
                title={item.title}
                position='below'
              />
            </ImageListItem>
          </Box>
        ))}
      </ImageList>
    </Box>
  );
}

export default Products;
