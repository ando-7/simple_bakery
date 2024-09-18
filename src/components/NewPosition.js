import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import {
  newPositionDetails,
  employmentTypeOption,
} from "../fields/fields";
import { handleAdd, handleChange } from "../handlers/changeHandlers";
import { v4 as uuid } from "uuid";



function NewPosition({ jobs, setJobs }) {
  const [open, setOpen] = useState(false);
  const [newPosition, setNewPosition] = useState({
    positionName: "",
    salary: "",
    employmentType: "",
    loaction: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>

      <Box> 
        <Button sx={{ fontSize: '2rem'}} onClick={handleClickOpen} >
          Add new position
        </Button>
      </Box>




      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Position</DialogTitle>
        <DialogContent>
          <Box display='flex' flexDirection='column'>
            {newPositionDetails.map((field) =>
              field.type === "text" ? (
                <TextField
                  key={field.id}
                  name={field.name}
                  id={field.name}
                  label={field.title}
                  placeholder={field.placeholder}
                  type={field.format ? field.format : "text"}
                  sx={{ width: 300 }}
                  margin='dense'
                  variant='outlined'
                  size='small'
                  onChange={(e) => handleChange(setNewPosition, e)}
                />
              ) : (
                <Box key={uuid()}>
                  <FormControl margin='dense'>
                    <InputLabel margin='dense' size='small'>
                      Employment type
                    </InputLabel>
                    <Select
                      id={field.name}
                      key={field.id}
                      name={field.name}
                      value={newPosition.employmentType}
                      margin='dense'
                      size='small'
                      sx={{ width: 300 }}
                      label='Employment type'
                      onChange={(e) => handleChange(setNewPosition, e)}>

                      <MenuItem value={""} key={field.id}></MenuItem>
                      {employmentTypeOption.map((elem) => (
                        <MenuItem key={uuid()} value={elem.value}>
                          {elem.title}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              )
            )}
          </Box>
          <Box>
            <Button
              color='primary'
              variant='contained'
              sx={{ mt: "0.3rem" }}
              onClick={() => handleAdd(setJobs, newPosition, handleClose)}>
              Save
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default NewPosition;
