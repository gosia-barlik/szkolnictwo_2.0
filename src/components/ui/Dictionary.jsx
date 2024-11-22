import { useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
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
        title={visible?"zwiń słownik":"rozwiń słownik"}
        color="primary"
        aria-label="słownik"
        onClick={handleChange}
      >{!visible&&<KeyboardDoubleArrowLeftRoundedIcon sx={{ mr: 1 }} />}
        {visible&&<KeyboardDoubleArrowRightRoundedIcon sx={{ mr: 1 }} />}
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
