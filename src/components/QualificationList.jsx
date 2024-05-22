import Wrapper from '../assets/wrappers/QualificationList';
import QualificationCard from './QualificationCard';
const QualificationList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: 'center' }}>No matching cocktails found...</h4>
    );
  }
  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        return <QualificationCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};
export default QualificationList;
