import { Box, Button, TextField, Typography } from "@mui/material";
import { contactBoxStyle } from "../styles/styles";
import { contactFields } from "../fields/fields";
import { useState } from "react";
import { handleChangeWithValidation, handleSubmit } from "../handlers/handlers";
import { initalContact } from "../states/initialStates";

function Contact() {

  const [valid, setValid] = useState({
    email: false,
    phone: false
  });
  const [newContact, setNewContact] = useState(initalContact);

  return (
    <form onSubmit={(e) => {

      if(!valid.email || !valid.phone) {
        e.preventDefault();
        return;
      } 
      handleSubmit("contacts", newContact, null)
    }}>
      <Box display='flex' sx={{ justifyContent: "center", flexWrap: "wrap" }}>
        <Box sx={contactBoxStyle}>
          <Box>
            <Typography
              sx={{
                fontSize: "1.3rem",
                fontWeight: "bold",
                fontStyle: "italic",
              }}>
              Please fill out the form to reach us!
            </Typography>
          </Box>
          {contactFields.map((elem) =>
            elem.type === "multiline" ? (
              <Box key={elem.id}>
                <TextField
                  required
                  key={elem.id}
                  name={elem.name}
                  value={newContact[elem.name]}
                  id={elem.name}
                  label={elem.title}
                  type={elem.format}
                  sx={{ width: 300 }}
                  margin='dense'
                  variant='outlined'
                  size='small'
                  multiline
                  rows={5}
                  onChange={(e) => handleChangeWithValidation(setNewContact, e, setValid)}
                />
              </Box>
            ) : (
              <Box key={elem.id}>
                <TextField
                  required
                  key={elem.id}
                  name={elem.name}
                  value={newContact[elem.name]}
                  id={elem.name}
                  label={elem.title}
                  type={elem.format}
                  error={(elem.name === "email" && newContact[elem.name].length > 0  && !valid.email) 
                    || (elem.name === "phone" && newContact[elem.name].length > 0  && !valid.phone)}
                  helperText={
                    elem.name === "email" && newContact[elem.name].length > 0  && !valid
                      ? "Invalid email address"
                      : ""
                      || (elem.name === "phone" && newContact[elem.name].length > 0  && !valid.phone)
                      ? "Invalid phone number"
                      : ""
                  }
                  sx={{ width: 300 }}
                  margin='dense'
                  variant='outlined'
                  size='small'
                  onChange={(e) => handleChangeWithValidation(setNewContact, e, setValid)}
                />
              </Box>
            )
          )}
          <Box>
            <Button variant='contained' type='submit' sx={{ mt: "1em" }}>
              Send
            </Button>
          </Box>
        </Box>
        <Box sx={contactBoxStyle}>
          <Box>
            <Typography
              variant='h6'
              sx={{ fontWeight: "bold", fontStyle: "italic" }}>
              General inquiries{" "}
            </Typography>
            <Typography>
              Have a question or complaint ? Get in touch!
            </Typography>
            <Typography>Email: info@bebaker.com</Typography>
            <Typography>Phone: +44 7911 777777</Typography>
          </Box>
          <Box sx={{ mt: "2em" }}>
            <Typography
              variant='h6'
              sx={{ fontWeight: "bold", fontStyle: "italic" }}>
              Our head office{" "}
            </Typography>
            <Typography>
              {" "}
              221b Baker St, London NW1 6XE, United Kingdom
            </Typography>
          </Box>
        </Box>
      </Box>
    </form>
  );
}

export default Contact;
