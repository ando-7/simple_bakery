import { Box, Button, TextField, Typography } from "@mui/material";
import { contactBoxStyle } from "../styles/styles";
import { contactFields } from "../fields/fields";
import { useState } from "react";

function Contact() {
  const contactForm = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [valid, setValid] = useState(false);
  const [formState, setFormState] = useState(contactForm);

  const handleChange = (e, fieldName) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { name, value } = e.target;

    if (fieldName === "email") {
      setValid(emailRegex.test(value));
    }

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    if (!valid) {
      alert("Form contains errors. Please fix them before submitting.");
      e.preventDefault();
      return;
    }
    console.log("Here can be an API call");
  };

  return (
    <form onSubmit={handleSubmit}>
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
                  id={elem.name}
                  label={elem.title}
                  type={elem.format}
                  sx={{ width: 300 }}
                  margin='dense'
                  variant='outlined'
                  size='small'
                  multiline
                  rows={5}
                />
              </Box>
            ) : (
              <Box key={elem.id}>
                <TextField
                  required
                  key={elem.id}
                  name={elem.name}
                  id={elem.name}
                  label={elem.title}
                  type={elem.format}
                  error={elem.name === "email" && !valid}
                  helperText={
                    elem.name === "email" && !valid
                      ? "Invalid email address"
                      : ""
                  }
                  onChange={(e) => handleChange(e, elem.name)}
                  sx={{ width: 300 }}
                  margin='dense'
                  variant='outlined'
                  size='small'
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
