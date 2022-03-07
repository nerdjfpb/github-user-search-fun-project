import { Dispatch, SetStateAction } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type SearchProps = {
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
  handleSearch: () => void;
  errorMessage: string;
};

const Search = ({
  searchInput,
  setSearchInput,
  handleSearch,
  errorMessage,
}: SearchProps) => (
  <>
    <Typography
      variant="body1"
      gutterBottom
      component="div"
      sx={{ opacity: 0.5 }}
    >
      Find user inside github
    </Typography>

    <TextField
      fullWidth
      id="fullWidth"
      placeholder="Search user..."
      value={searchInput}
      onChange={e => setSearchInput(e?.target?.value)}
    />

    {errorMessage && (
      <Typography variant="caption" color="red" display="block" sx={{ pb: 2 }}>
        Atleast put one letter for search
      </Typography>
    )}

    <Button
      variant="contained"
      onClick={handleSearch}
      sx={{ mt: 2 }}
      size="large"
    >
      Search User
    </Button>
  </>
);

export default Search;
