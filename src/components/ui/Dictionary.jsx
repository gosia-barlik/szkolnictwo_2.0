import { useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Wrapper from "../../assets/wrappers/Dictionary";

const Dictionary = () => {
  const [visible, setVisible] = useState(false);

  const handleChange = () => {
    setVisible((prev) => !prev);
  };

  return (
    <Wrapper>
      <Fab
        variant="extended"
        className="dictionary-fab"
        title="słownik"
        color="primary"
        aria-label="add"
        onClick={handleChange}
      >
        <MenuBookRoundedIcon sx={{ mr: 1 }} />
        Słownik
      </Fab>
      <Box className={"dictionary" + (visible ? " show" : " hidden")}>
        <Paper className="content" elevation={4}>
          <Typography> Słownik pojęć</Typography>
        </Paper>
      </Box>
    </Wrapper>
  );
};

export default Dictionary;
