import Wrapper from "../../assets/wrappers/QualificationPage";
import {
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";

const QualificationSimilar = () => {
  const similar_qualifications = [
    {
      id: 1660,
      name: "Diagnozowanie i naprawa pojazdów elektrycznych i hybrydowych",
      url_to_zrk: "https://kwalifikacje.gov.pl/k?id_kw=13986",
    },
    {
      id: 1572,
      name: "Montowanie manualne komponentów i urządzeń elektrycznych, elektronicznych i mechatronicznych",
      url_to_zrk: "https://kwalifikacje.gov.pl/k?id_kw=13892",
    },
    {
      id: 670,
      name: "Naprawa, konserwacja i modernizacja rowerów",
      url_to_zrk: "https://kwalifikacje.gov.pl/k?id_kw=12690",
    },
  ];

  return (
    <Wrapper>
      <Typography variant="h6">
        Zobacz jakie jeszcze certyfikaty potwierdzające umiejętności możesz
        zdobyć
      </Typography>
      <Typography>
        Skorzystaj z listy wybranych kwalifikacji ujętych w Zintegrowanym
        Rejestrze Kwalifikacji
      </Typography>
      <Typography
        variant="body2"
        style={{ marginTop: "24px", fontWeight: 700 }}
      >
        Nazwa kwalifikacji
      </Typography>
      <Box sx={{ width: { xs: "100%", md: "65%" } }}>
        <List>
          {similar_qualifications.map((item) => (
            <>
              <ListItem key={item.id}>
                <ListItemButton component="a" href={item.url_to_zrk}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Box>
    </Wrapper>
  );
};

export default QualificationSimilar;
