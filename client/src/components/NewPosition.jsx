import { useState, useEffect } from "react";
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
import { newPositionDetails, employmentTypeOption } from "../fields/fields";
import {
  handleChange,
  preventInvalidNumberInput,
  handleSubmit,
  handleDialogOpen,
  handleDialogClose,
} from "../handlers/handlers";
import { v4 as uuid } from "uuid";
import { newPositionBoxStyle } from "../styles/styles";
import { initialPosition } from "../states/initialStates";

function NewPosition({
  open,
  setOpen,
  editData,
  selectedPosition,
  setSelectedPosition,
}) {
  const [newPosition, setNewPosition] = useState(editData || initialPosition);

  useEffect(() => {
    if (editData) {
      setNewPosition(editData);
    }
  }, [editData]);

  return (
    <>
      <Box
        sx={{ ...newPositionBoxStyle, cursor: "pointer" }}
        onClick={() => !open && handleDialogOpen(setOpen)}>
        <Box>
          <Button
            sx={{
              fontSize: "2rem",
              color: "#f5f5f5",
              textTransform: "none",
              pointerEvents: "none",
            }}>
            Add new position
          </Button>
        </Box>
      </Box>

      <Dialog
        open={open}
        onClose={() =>
          handleDialogClose(
            setOpen,
            setNewPosition,
            setSelectedPosition,
            initialPosition
          )
        }>
        <DialogTitle>
          {selectedPosition ? "Update Position" : "New Position"}{" "}
        </DialogTitle>
        <DialogContent>
          <form
            onSubmit={() =>
              handleSubmit(
                "positions",
                newPosition,
                handleDialogClose(
                  setOpen,
                  setNewPosition,
                  setSelectedPosition,
                  initialPosition
                )
              )
            }>
            <Box display='flex' flexDirection='column'>
              {newPositionDetails.map((field) =>
                field.type === "text" ? (
                  <TextField
                    required
                    key={field.id}
                    name={field.name}
                    label={field.title}
                    placeholder={field.placeholder}
                    type={field.format || "text"}
                    sx={{ width: 300 }}
                    margin='dense'
                    variant='outlined'
                    size='small'
                    value={
                      selectedPosition
                        ? selectedPosition[field.name]
                        : newPosition[field.name]
                    }
                    onChange={ selectedPosition ? (e) => handleChange(setSelectedPosition, e) : (e) => handleChange(setNewPosition, e)}
                    inputProps={
                      field.format === "number"
                        ? {
                            inputMode: "decimal",
                            min: 0,
                            max: 999999,
                            step: "any",
                          }
                        : {}
                    }
                    onKeyDown={
                      field.format === "number"
                        ? preventInvalidNumberInput
                        : undefined
                    }
                    onPaste={
                      field.format === "number"
                        ? (e) => {
                            const paste = e.clipboardData.getData("text");
                            if (/[eE+\-]/.test(paste)) e.preventDefault();
                          }
                        : undefined
                    }
                  />
                ) : (
                  <FormControl
                    margin='dense'
                    sx={{ width: 300 }}
                    key={field.id}>
                    <InputLabel margin='dense' size='small'>
                      Employment type
                    </InputLabel>
                    <Select
                      required
                      name={field.name}
                      value={newPosition.employmentType}
                      selected={newPosition.employmentType}
                      label='Employment type'
                      size='small'
                      onChange={(e) => handleChange(setNewPosition, e)}>
                      {employmentTypeOption.map((elem) => (
                        <MenuItem
                          key={uuid()}
                          value={elem.value}
                          defaultValue={newPosition.employmentType}>
                          {elem.title}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )
              )}
            </Box>

            <Box display='flex' gap={1} sx={{ width: "20%", mt: "1em" }}>
              <Button color='primary' variant='contained' type='submit'>
                Save
              </Button>
              <Button
                color='error'
                variant='contained'
                onClick={() =>
                  handleDialogClose(
                    setOpen,
                    setNewPosition,
                    setSelectedPosition,
                    initialPosition
                  )
                }>
                Close
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default NewPosition;
