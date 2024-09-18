import { Box, Typography } from "@mui/material";
import { paragraphBoxesStyle } from "../styles/styles";

function About() {

  return (
    <Box sx={{ color: "whitesmoke", justifyItems: 'center'}}>
        
      <Box sx={paragraphBoxesStyle}>
        <Typography variant='h5'>About BeBaker </Typography>
        <Typography>
          Welcome to BeBaker, where passion for baking meets the art of creating
          unforgettable flavors. Located in the heart of London, BeBaker is more
          than just a bakery; it's a place where traditions blend with
          innovation to bring you a delightful array of baked goods that are as
          beautiful as they are delicious.
        </Typography>
      </Box>

      <Box sx={paragraphBoxesStyle}>
        <Typography variant='h6'>Our Story </Typography>
        <Typography>
          BeBaker was founded by James Addams, a lifelong baking enthusiast who
          dreamed of creating a space where the love for baking could be shared
          with the community. What started as a small home kitchen experiment
          has grown into a beloved local bakery known for its dedication to
          quality, creativity, and customer satisfaction.
        </Typography>
      </Box>

      <Box sx={paragraphBoxesStyle}>
        <Typography variant='h6'>Our Products </Typography>
        <Typography>
          At BeBaker, we believe that every bite should be a moment of joy.
          That's why we use only the finest ingredients, locally sourced and
          always fresh. Our menu features a wide range of artisanal breads,
          decadent cakes, flaky pastries, and delightful cookies—all made from
          scratch and baked daily. Whether you’re in the mood for a classic
          croissant, a customized birthday cake, or something a little more
          adventurous, BeBaker has something to satisfy every craving. We also
          offer a selection of gluten-free, vegan, and seasonal options to
          ensure that everyone can find a treat they love.
        </Typography>
      </Box>

      <Box sx={paragraphBoxesStyle}>
        <Typography variant='h6'>Our Philosophy </Typography>
        <Typography>
          At BeBaker, baking is more than just a process—it's an experience. We
          take pride in our craftsmanship, with every product reflecting our
          commitment to excellence and our love for the art of baking. Our
          bakery is a place where the community comes together, whether it’s for
          a morning coffee and pastry, a special celebration, or just to enjoy
          the comforting aroma of freshly baked bread.
        </Typography>
      </Box>

      <Box sx={paragraphBoxesStyle}>
        <Typography variant='h6'>Visit Us </Typography>
        <Typography>
          We invite you to visit BeBaker and experience the warmth and flavor of
          our baked goods firsthand. Whether you’re a long-time customer or a
          first-time visitor, we look forward to welcoming you with a smile and
          a sweet treat that’s sure to brighten your day.
        </Typography>
      </Box>
    </Box>
  );
}

export default About;
