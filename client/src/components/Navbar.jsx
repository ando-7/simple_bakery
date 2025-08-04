import { Box, MenuItem, Button } from "@mui/material";
import bakeryLogo from "../img/bakeryLogo.png";
import { navbarItemsLeft, navbarItemsRight } from "../fields/fields";

function Navbar() {
  return (
    <Box
      display={"flex"}
      sx={{
        justifyContent: "center",
      }}>
      <Box display={"flex"} sx={{ mt: "5em" }}>
        {navbarItemsLeft.map((page) => (
          <MenuItem key={page.id} sx={{ py: 0, height: 0 }}>
            <Button
              sx={{
                color: "white",
                fontWeight: "bold",
                ":hover": {
                  color: "orange",
                },
              }}
              href={page.href}>
              {page.value}
            </Button>
          </MenuItem>
        ))}
      </Box>

      <Box
        sx={{
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          backgroundColor: "transparent",
          ":hover": {
            cursor: "pointer",
            transform: "scale(1.05)",
            transition: "transform 0.3s ease-in-out",
          },
          display: "flex",
        }}>
        <Button
          sx={{
            width: "100%",
            height: "11em",
            py: 0,
            backgroundColor: "transparent",
            ":hover": {
              backgroundColor: "transparent",
            },
          }}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={bakeryLogo}
            alt='Bakery Logo'
            href='/'
          />
        </Button>
      </Box>

      <Box display={"flex"} sx={{ mt: "5em" }}>
        {navbarItemsRight.map((page) => (
          <MenuItem key={page.id} sx={{ py: 0, height: 0 }}>
            <Button
              sx={{
                color: "white",
                fontWeight: "bold",
                ":hover": {
                  color: "orange",
                },
              }}
              href={page.href}>
              {page.value}
            </Button>
          </MenuItem>
        ))}
      </Box>
    </Box>
  );
}

export default Navbar;
