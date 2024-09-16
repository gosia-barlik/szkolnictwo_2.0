import Wrapper from "../assets/wrappers/QualificationPage";
import Typography from "@mui/material/Typography";
import QualificationAccordion from "./ui/Accordion";

const QualificationCharacteristic = () => {
  const accordions = [
    {
      summary: "Opis zawodu",
      details: [
        "Absolwent szkoły prowadzącej kształcenie w zawodzie elektromechanik powinien być przygotowany do wykonywania",
      ],
      color: "red",
    },
    {
      summary: "Kwalifikacje zawodowe i zestawy efektów uczenia się",
      details: ["Montaż i obsługa maszyn i urządzeń elektrycznych"],
      color: "blue",
    },
    {
      summary: "Po zdobyciu tego zawodu będziesz",
      details: [
        "montować i uruchamiać maszyny i urządzenia elektryczne na podstawie dokumentacji technicznej",
        "oceniać stan techniczny maszyn i urządzeń elektrycznych po montażu na podstawie pomiarów",
      ],
      color: "green",
    },
  ];
  return (
    <Wrapper>
      <Typography variant="h6">Charakterystyka zawodu</Typography>
      {accordions.map((el) => (
        <QualificationAccordion
          key={el.summary}
          summary={el.summary}
          details={el.details}
          color ={el.color}
        />
      ))}
    </Wrapper>
  );
};

export default QualificationCharacteristic;
