import React, { useEffect, useState, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { fetchAllData, deleteById } from "./axios";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { singlePositionBoxStyle } from "../styles/styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NewPosition from "../components/NewPosition";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


const PositionList = () => {
  const [positions, setPositions] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    fetchAllData("positions", isMounted, setPositions);
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          gap: "3em",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
        {positions.map((element) => (
          <Box sx={singlePositionBoxStyle} key={element.id}>
            <Box display='flex' justifyContent='end' sx={{ width: "auto" }}>
              <DeleteIcon
                sx={{ mx: "1em", cursor: "pointer" }}
                onClick={() => deleteById("positions", element.id)}
              />
              <EditIcon
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  setSelectedPosition(element);
                  setOpenDialog(true);
                }}
              />
            </Box>
            <Box display='flex' justifyContent='space-between'>
              <Box display='flex' sx={{ mb: "1em" }}>
                <Box sx={{ alignSelf: "center", mr: "0.3em" }}>
                  <WorkOutlineOutlinedIcon display='flex' />
                </Box>
                <Box sx={{ mb: "0.2em" }}>
                  <h5>{element.title}</h5>
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
                  <Typography>{element.employmentType}</Typography>
                </Box>
                <Box sx={{ display: "flex", mr: "2px" }}>
                  <LocationOnIcon sx={{ mr: "4px" }} />
                  <Typography>{element.location}</Typography>
                </Box>
              </Box>
              <Box>
                <Button
                  color='primary'
                  size='medium'
                  variant='contained'
                  sx={{ ml: "1em", width: "6em" }}>
                  Apply
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
        <NewPosition
          open={openDialog}
          setOpen={setOpenDialog}
          editData={selectedPosition}
          setSelectedPosition={setSelectedPosition}
          selectedPosition={selectedPosition}
        />
      </Box>
    </Box>
  );
};

export default PositionList;
