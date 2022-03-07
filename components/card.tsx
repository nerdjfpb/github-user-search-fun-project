import useSWR from 'swr';
import MUICard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { fetcher } from '../utils/fetcher';

type CardProps = {
  url: string;
};

const Card = ({ url }: CardProps) => {
  console.log(url);
  const { data, error } = useSWR(url, fetcher);

  if (error || !url) return <div>failed to load</div>;
  if (!data) return <CircularProgress />;

  return (
    <MUICard>
      <CardMedia
        component="img"
        height="250"
        image={data?.avatar_url}
        alt="avatar"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data?.name}
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          {data?.bio}
        </Typography>

        <Typography variant="caption" gutterBottom component="div">
          Public Repos: <b>{data?.public_repos}</b>
        </Typography>

        <Typography variant="caption" gutterBottom component="div">
          Followers: <b>{data?.followers}</b>
        </Typography>

        <Typography variant="caption" gutterBottom component="div">
          Following: <b>{data?.following}</b>
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" href={data?.html_url}>
          Go to profile
        </Button>
      </CardActions>
    </MUICard>
  );
};

export default Card;
