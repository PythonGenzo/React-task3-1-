import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';



export function Utilities() {

  return (
    <div>
      <h1>Colors,Borders,Animation</h1>
      <div className="colors">
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
        <CircularProgress variant="determinate" value={25} />
        <CircularProgress variant="determinate" value={50} />
        <CircularProgress variant="determinate" value={75} />
      <CircularProgress variant="determinate" value={100} />
      </div>
    </div>
  );
}
