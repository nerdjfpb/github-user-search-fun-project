import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Header from '../components/head';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Search from '../components/search';

const Home: NextPage = () => {
  const [searchInput, setSearchInput] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (searchInput === '' || !searchInput) {
      console.log('I am here');
      setErrorMessage(
        'There is nothing in search, please put atleast 1 letter...',
      );
    } else {
      // redirect to another page
      router.push('/user/' + searchInput);
    }
  };

  return (
    <>
      <Header />

      <main>
        <Container maxWidth="lg">
          <Box pt={10}>
            <Typography variant="h2" component="div">
              Github User Search
            </Typography>

            <Box pt={2}>
              <Search
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                handleSearch={handleSearch}
                errorMessage={errorMessage}
              />
            </Box>
          </Box>
        </Container>
      </main>
    </>
  );
};

export default Home;
