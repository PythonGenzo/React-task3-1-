import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

export function Components() {

  return (
    <div>
      <h1>Buttons and Cards</h1>
      <div className="Buttons">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success</Button>
        <Button variant="outlined" color="error">
          Error</Button>
      </div>
      <div className="Cards">
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <cardContent>
            <Typography gutterBottom variant="h5" component="div">
              Earnings(Monthly)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $40,000
            </Typography>
          </cardContent>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <cardContent>
            <Typography gutterBottom variant="h5" component="div">
              Earnings(Yearly)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $215,000
            </Typography>
          </cardContent>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <cardContent>
            <Typography gutterBottom variant="h5" component="div">
              Task
            </Typography>
            <Typography variant="body2" color="text.secondary">
              50%
            </Typography>
          </cardContent>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <cardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pending Request
            </Typography>
            <Typography variant="body2" color="text.secondary">
              18
            </Typography>
          </cardContent>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <cardContent>
            <Typography gutterBottom variant="h5" component="div">
              Earnings OverView
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Chart Here
            </Typography>
          </cardContent>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <cardContent>
            <Typography gutterBottom variant="h5" component="div">
              Revenue Source
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Chart Here
            </Typography>
          </cardContent>
        </Card>
      </div>
    </div>
  );
}
