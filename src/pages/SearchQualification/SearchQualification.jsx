
import CallToAction from "../../components/ui/CallToAction";
import Tabs from "../../components/ui/Tabs";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "../../redux/tabs";
import { Typography } from "@mui/material";
import * as dictionary from "../dictionaries/searchQualification.dictionary.json";
import "./SearchQualification.css"

const SearchQualification = () => {
  const { value } = useSelector((state) => state.tabs);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    dispatch(changeValue(newValue));
  };

  return (
    <>
      <CallToAction />
      <main className="search-qualification-main">
        {value == "1" && (
          <Typography variant="h6" component="h1">
            {dictionary.searchQualification.header.title_industries}
          </Typography>
        )}
        {value == "2" && (
          <Typography variant="h6" component="h1">
            {dictionary.searchQualification.header.title_skills}
          </Typography>
        )}
        {value == "3" && (
          <Typography variant="h6" component="h1">
            {dictionary.searchQualification.header.title_jobs}
          </Typography>
        )}

        <Tabs value={value} handleChange={handleChange} />
      </main>
    </>
  );
};
export default SearchQualification;
