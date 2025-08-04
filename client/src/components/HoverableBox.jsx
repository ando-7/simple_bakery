import {
  Box,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { getImageUrl, deleteById } from "../api/axios";


const HoverableBox = ({ item,
  setOpen,
  setSelectedProduct,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "8px",
        boxShadow: "-4px 4px 11px #bfbfbf",
        transition: "filter 0.3s ease",
        mx: "1em",
        mb: "1.5em",

        "&:hover .icon": {
          opacity: 1,
        },
        "&:hover .blur-target": {
          filter: "blur(1px)",
        },
        "&:hover": {
          boxShadow: "0px 0px 20px #ffa500",
          cursor: "pointer",
        },
      }}>

      <Box
        className='blur-target'
        sx={{
          position: "relative",
          boxShadow: "-4px 4px 11px #bfbfbf",
          height: "13em",
          "&:hover": {
            boxShadow: "0px 0px 20px #ffa500",
            cursor: "pointer",
          },
          transition: "filter 0.3s ease",
          "&:hover .icon": {
            opacity: 4,
            filter: "none",
          },
        }}>
        <ImageListItem sx={{ width: "10em" }}>
          <img
            src={getImageUrl(item.image)}
            srcSet={`${getImageUrl(
              item.image
            )}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading='lazy'
          />
          <ImageListItemBar
            sx={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              "& .MuiImageListItemBar-title": {
                whiteSpace: "normal",
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
            }}
            title={
              <Box>
                <Typography variant='bold' noWrap={false}>
                  {item.title}
                  <br />
                </Typography>
                <Typography variant='bold' color={"#FFA500"} noWrap={false}>
                  ${item.price}
                </Typography>
              </Box>
            }
            position='below'
          />
        </ImageListItem>
      </Box>
        
      <IconButton
        className='icon'
        onClick={() => {
          setSelectedProduct(item);
          setOpen(true);
        }}
        sx={{
          position: "absolute",
          top: 8,
          left: 130,
          opacity: 0,
          transition: "opacity 0.3s ease",
          color: "#fff",
          backgroundColor: "rgba(0,0,0,0.5)",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.8)",
          },
        }}>
        <EditIcon />
      </IconButton>
      <IconButton
        className='icon'
        onClick={() => deleteById("products", item.id)}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          opacity: 0,
          transition: "opacity 0.3s ease",
          color: "#fff",
          backgroundColor: "rgba(0,0,0,0.5)",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.8)",
          },
        }}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default HoverableBox;
