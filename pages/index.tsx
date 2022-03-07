import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Header from '../components/head';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Search from '../components/search';

/// -------_REFERENCE -------------------
// Use https://github.com/search as

/// ---------Project details --------
// As a user,
// ● I can search for users and see a paginated list of results
// ● I can navigate through the next and previous pages of the paginated results
// ● I see the total count of search results
// ● I see notable information for each search result, such as the description, star/follower
// count, profile pictures, etc.
// ● I can select a search result and be taken to the applicable page on github.com API
// The app should utilize GitHub's public API; either the v3 REST API or the v4 GraphQL version.
// Examples of the API call you'll likely need to make:
// Search
// Documentation: https://developer.github.com/v3/search/
// GET https://api.github.com/search/users?q=example

///////----------------------------
// I'll create this an onChange
// I need to put a debounce here
//

// ------ Things I can include
// React hook form
// Animation (framer motion)
// Storybook for component
// Testing (not sure which one)

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
