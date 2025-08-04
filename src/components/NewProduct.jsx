import React, { useState, useEffect } from "react";
import { newProductBoxStyle } from "../styles/styles";
import {
  Box,
  TextField,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Input,
} from "@mui/material";
import { newProductDetails } from "../fields/fields";
import {
  handleChange,
  imageHandler,
  preventInvalidNumberInput,
  handleDialogOpen,
  handleDialogClose,
  handleSubmit,
} from "../handlers/handlers";
import { initialProduct } from "../states/initialStates";

export const NewProduct = ({
  open,
  setOpen,
  editData,
  setSelectedProduct
}) => {
  const [newProduct, setNewProduct] = useState(initialProduct);

  useEffect(() => {
    if (editData) {
      editData.image = null; 
      setNewProduct(editData);
    }
  }, [editData]);

  return (
    <>
      <Box
        sx={{ ...newProductBoxStyle, cursor: "pointer" }}
        onClick={() => !open && handleDialogOpen(setOpen)}>
        <Typography
          sx={{
            fontSize: "2rem",
            color: "#f5f5f5",
            textTransform: "none",
            pointerEvents: "none",
          }}>
          Add Product
        </Typography>
      </Box>

      <Dialog
        open={open}
        onClose={() =>
          handleDialogClose(
            setOpen,
            setNewProduct,
            setSelectedProduct,
            initialProduct
          )
        }>
        <DialogTitle>
          {editData ? "Update Product" : "New Product"}{" "}
        </DialogTitle>
        <DialogContent>
          <form
            onSubmit={() =>
              handleSubmit(
                "products",
                newProduct,
                handleDialogClose(
                  setOpen,
                  setNewProduct,
                  setSelectedProduct,
                  initialProduct
                ),
                editData ? "edit" : "create",
              )
            }>
            <Box display='flex' flexDirection='column'>
              {newProductDetails.map((field) =>
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
                    value={newProduct[field.name]}
                    onChange={(e) => handleChange(setNewProduct, e)} 
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
                  <Input
                    required={editData ? false : true}
                    key={field.id}
                    name={field.name}
                    type='file'
                    onChange={(e) => imageHandler(setNewProduct, e)}
                    sx={{ width: 300, marginTop: "1em" }}
                    inputProps={{ accept: "image/*" }}
                  />
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
                    setNewProduct,
                    setSelectedProduct,
                    initialProduct
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
};
