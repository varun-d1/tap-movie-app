import { isEmpty } from "lodash";
import { FormControl, Button, Stack } from "react-bootstrap";
import Error from "./Error";
function Search({
  searchKey,
  setSearchKey,
  errorMessage,
  setErrorMessage,
  getSearchResults,
  setLoading,
  getAllMovies
}) 
{
  const setChangedText = (text) => {
    setSearchKey(text.target.value);
  };

  const onClickSearch = () => {
    if (isEmpty(searchKey)) {
      setErrorMessage("Search key should not be empty..!!!");
    } else {
      setErrorMessage(null);
      getSearchResults();
    }
  };

  const onClickReset = () => {
    setSearchKey("");
    getAllMovies();
    setErrorMessage(null);
    setLoading(false);
  };

  return (
    <section className="my-2">
      {errorMessage ? <Error message={errorMessage} /> : ""}
      <Stack direction="horizontal" gap={3}>
        <FormControl
          type="text"
          name="searchBox"
          id="searchBox"
          placeholder="Enter Search Keyword"
          value={searchKey}
          onChange={setChangedText}
          className="w-75"
        />

        <Button
          variant="primary"
          className="text-white m-2 ms-auto"
          onClick={onClickSearch}
        >
          Search Movie
        </Button>

        <Button
          variant="danger"
          className="text-white m-2"
          onClick={onClickReset}
        >
          Reset
        </Button>
      </Stack>
    </section>
  );
}

export default Search;
