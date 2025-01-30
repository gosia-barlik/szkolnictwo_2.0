import { useNavigate } from "react-router-dom";
import { Typography, Button, Box, Stack } from "@mui/material";
import KeyboardDoubleArrowLeftRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Wrapper from "../../../assets/wrappers/AboutPage";
import * as phrases from "../../shared/dictionaries/pl.json";

// Reusable component for list items with icons
const IconListItem = ({ text, iconColor }) => (
  <Typography variant="body1" sx={{ mb: 1 }}>
    <CheckCircleRoundedIcon
      fontSize="small"
      sx={{ mr: 1, mb: -0.5, color: iconColor }}
    />
    {text}
  </Typography>
);

const About = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      {/* Go Back Button */}
      <Button
        color="black"
        sx={{ textTransform: "none" }}
        onClick={() => navigate(-1)}
        variant="text"
        startIcon={<KeyboardDoubleArrowLeftRoundedIcon />}
        aria-label="Go back"
      >
        {phrases.common.go_back}
      </Button>

      {/* Title Section */}
      <Typography variant="h5" gutterBottom>
        {phrases.about.title}
      </Typography>

      {/* First Section */}
      <Box component="section" sx={{ mb: 4 }}>
        <Typography variant="h6" style={{ marginBottom: 8 }}>
          {phrases.about.for_whom.title}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Box>
            <Typography variant="body1" gutterBottom>
              {phrases.about.for_whom.description}
            </Typography>
            <IconListItem
              text={
                <>
                  <strong>
                    {phrases.about.for_whom.recipients.primary_students}
                  </strong>
                  {
                    phrases.about.for_whom.recipients
                      .primary_students_description
                  }
                </>
              }
              iconColor="green"
            />
            <IconListItem
              text={
                <>
                  <strong>
                    {phrases.about.for_whom.recipients.vocational_students}
                  </strong>
                  {
                    phrases.about.for_whom.recipients
                      .vocational_students_description
                  }
                </>
              }
              iconColor="green"
            />
            <IconListItem
              text={
                <>
                  <strong>{phrases.about.for_whom.recipients.parents}</strong>
                  {phrases.about.for_whom.recipients.parents_description}
                </>
              }
              iconColor="green"
            />
            <IconListItem
              text={
                <>
                  <strong>
                    {phrases.about.for_whom.recipients.counselors}
                  </strong>
                  {phrases.about.for_whom.recipients.counselors_description}
                </>
              }
              iconColor="green"
            />
          </Box>
          <Box
            component="img"
            sx={{
              display: { xs: "none", md: "flex" },
              height: 300,
              width: 300,
            }}
            alt="grafika dekoracyjna"
            src="/src/assets/img/workspace_student.svg"
          />
        </Stack>
      </Box>

      {/* Second Section */}
      <Box component="section" sx={{ mb: 4 }}>
        <Typography variant="h6" style={{ marginBottom: 8 }}>
          {phrases.about.help.title}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Box
            component="img"
            sx={{
              display: { xs: "none", md: "flex" },
              height: 280,
              width: 280,
            }}
            alt="grafika dekoracyjna"
            src="/src/assets/img/communication_help.svg"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="body1" gutterBottom>
              {phrases.about.help.description}
            </Typography>
            <IconListItem
              text={phrases.about.help.item_1}
              iconColor="lightblue"
            />
            <IconListItem
              text={phrases.about.help.item_2}
              iconColor="lightblue"
            />
            <IconListItem
              text={phrases.about.help.item_3}
              iconColor="lightblue"
            />
          </Box>
        </Stack>
      </Box>

      {/* Third Section */}
      <Box component="section" sx={{ mb: 4 }}>
        <Typography variant="h6" style={{ marginBottom: 8 }}>
          {phrases.about.sources.title}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Box>
            <Typography variant="body1" gutterBottom>
              {phrases.about.sources.description}
            </Typography>
            <IconListItem
              text={
                <>
                  <strong>
                    {phrases.about.sources.job_description.title}
                  </strong>
                  <br></br>
                  {phrases.about.sources.job_description.item_1} <br></br>
                  {phrases.about.sources.job_description.item_2} <br></br>
                  {phrases.about.sources.job_description.item_3}
                </>
              }
              iconColor="purple"
            />
          </Box>
          <Box
            component="img"
            sx={{
              display: { xs: "none", md: "flex" },
              height: 300,
              width: 300,
            }}
            alt="grafika dekoracyjna"
            src="/src/assets/img/storage_data.svg"
          />
        </Stack>
      </Box>
    </Wrapper>
  );
};

export default About;
