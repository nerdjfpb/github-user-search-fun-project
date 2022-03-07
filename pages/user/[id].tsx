import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import {
  Box,
  Container,
  Grid,
  Pagination,
  Typography,
  CircularProgress,
} from '@mui/material';
import Header from '../../components/head';
import { fetcher } from '../../utils/fetcher';
import Card from '../../components/card';

type ResultItem = {
  id: number;
  url: string;
};

const PER_PAGE_LIMIT = 9;

const SearchResult: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pageIndex, setPageIndex] = React.useState(0);

  //  API limitation
  // -> only 1000 result for free user
  // -> has a rate limit

  const { data, error } = useSWR(
    `https://api.github.com/search/users?q=${id}&page=${pageIndex}&per_page=${PER_PAGE_LIMIT}`,
    fetcher,
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <CircularProgress />;

  console.log(data);

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    setPageIndex(page - 1);
  };

  return (
    <>
      <Header />

      <main>
        <Container maxWidth="lg" sx={{ pb: 10 }}>
          <Typography variant="h2" component="div" sx={{ py: 10 }}>
            Github User Search Result
          </Typography>

          <Grid container spacing={2}>
            {data?.items?.map((item: ResultItem) => (
              <Grid item xs={4} key={item.id}>
                <Card url={item?.url} />
              </Grid>
            ))}
          </Grid>

          {Math.ceil(data?.total_count / PER_PAGE_LIMIT) > 2 && (
            <Pagination
              sx={{ my: 8 }}
              count={Math.ceil(data?.total_count / PER_PAGE_LIMIT)}
              page={pageIndex + 1}
              color="primary"
              onChange={handleChangePage}
            />
          )}
        </Container>
      </main>
    </>
  );
};

export default SearchResult;
