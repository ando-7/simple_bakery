import { Box } from "@mui/material";
import { careerBoxStyle } from "../styles/styles";

import PositionList from "../api/PostitionList";

function Career() {
  return (
    <Box sx={careerBoxStyle}>
      <PositionList />
    </Box>
  );
}

export default Career;
