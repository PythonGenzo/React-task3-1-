import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

export function DashBoard() {



 
  return (
    <div className="cards1">
      
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
  );
}
