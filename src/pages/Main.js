import { Box, Typography, Button } from '@mui/material';
import RecyclingOutlinedIcon from '@mui/icons-material/RecyclingOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import {iconItemsStyle, iconDescriptionStyle, iconBoxStyle} from '../styles/styles';

function MainPage() {
  return (
    <Box 
      sx={{
        justifyItems: 'center',
        alignContent: 'center'
      }}
    >
      <Box sx={{
         width: "33em", 
         padding: 'auto', 
         mt: '4em',
         mx: 'auto',
         fontWeight: "bold",
         color: "whitesmoke",
         
      }}>
        
        <Box>
          <Typography variant='h2' textAlign="center">We bake the world a better place</Typography>
        </Box>
        <Box sx={{
          mt: '1em',
          padding: 'auto',
          fontWeight: "bold"
        }}>
          <Typography variant='h6' textAlign="center">100% natural ingredients only!</Typography>
        </Box>
      </Box>

      <Box display="flex"
        sx={{
          width: "20em", 
          padding: 'auto', 
          mt: '2em',
          mx: 'auto',
          fontWeight: "bold",
          justifyContent: 'space-around'
        }}
      >
        <Button 
          variant='contained'
          size='large'
          color='warning'
          href='/about'
          >About Us
        </Button>
        <Button 
          variant='contained' 
          size='large'
          href='/contact'
          sx={{
            backgroundColor: 'white', 
            color: 'black',
          }}
          >Contact Us</Button>
      </Box>

      <Box 
        display='flex' 
        justifyContent='center'
        sx={{
          mt: '3em',
        }}

        
      > 
        <Box sx={iconBoxStyle}>
          <Groups2OutlinedIcon style={iconItemsStyle}/>
          <Typography  sx={iconDescriptionStyle}>Friendly local farms</Typography>
        </Box>

        <Box sx={iconBoxStyle}>
          <WaterDropOutlinedIcon style={iconItemsStyle}/>
          <Typography  sx={iconDescriptionStyle}>Great soil hydration</Typography>
        </Box>

        <Box sx={iconBoxStyle}>
          <VolunteerActivismOutlinedIcon style={iconItemsStyle}/>
          <Typography  sx={iconDescriptionStyle}>Best trained backers</Typography>
        </Box>

        <Box sx={iconBoxStyle}>
          <RecyclingOutlinedIcon style={iconItemsStyle}/>
          <Typography  sx={iconDescriptionStyle}>Bio packing</Typography>
        </Box>
      </Box>

        
    </Box>
  );
}

export default MainPage;
