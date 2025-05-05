import { Box, Button, Typography } from "@mui/material";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { careerBoxStyle, singlePositionBoxStyle, newPositionBoxStyle } from "../styles/styles";
import { v4 as uuid } from "uuid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
import NewPosition from "../components/NewPosition";

function Career() {
  const initialJob = [
    {
      positionName: "Senior Web Developer",
      salary: "5600",
      employmentType: "full_time",
      location: "London",
    },
  ];

  const [jobs, setJobs] = useState(initialJob);
  console.log("rendered");

  return (
    <Box sx={careerBoxStyle}>
      {jobs.map((element) => (
        <Box sx={singlePositionBoxStyle} key={uuid()}>
          <Box display='flex' justifyContent='space-between'>
            <Box display='flex' sx={{ mb: "1em" }}>
              <Box sx={{ alignSelf: "center", mr: "0.3em" }}>
                <WorkOutlineOutlinedIcon display='flex' />
              </Box>
              <Box sx={{ mb: "0.2em" }}>
                <h5>{element.positionName}</h5>
              </Box>
            </Box>
            <Box display='flex' sx={{ alignSelf: "center", mb: "1em" }}>
              <Box alignSelf='center'>
                <MonetizationOnOutlinedIcon color='primary' />
              </Box>
              <Box
                display='flex'
                sx={{ ml: "0.5em", alignSelf: "center", mb: "0.35em" }}>
                <h5>${element.salary}</h5>
                <Typography
                  display='flex'
                  alignSelf='center'
                  sx={{ ml: "0.5em", mt: "0.2em", color: "#bfbfbf" }}>
                  /Month
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box display='flex' sx={{ justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                width: "15em",
                justifyContent: "space-between",
              }}>
              <Box sx={{ display: "flex" }}>
                <AccessTimeIcon sx={{ mr: "4px" }} />
                <Typography>{element.employmentType === 'full_time' ? 'Full Time' : "Part Time"  }</Typography>
              </Box>
              <Box sx={{ display: "flex", mr: "2px" }}>
                <LocationOnIcon sx={{ mr: "4px" }} />
                <Typography>{element.location}</Typography>
              </Box>
            </Box>
            <Box>
              <Button
                color='primary'
                size='large'
                variant='contained'
                sx={{
                  ml: "1em",
                }}>
                Apply now
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
      <Box sx={newPositionBoxStyle} >
        <NewPosition jobs={jobs} setJobs={setJobs} />
      </Box>
    </Box>
  );
}

export default Career;
