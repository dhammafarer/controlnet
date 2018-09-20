import * as React from 'react';
import { createStyles, withStyles } from "@material-ui/core/styles";
import SplitImage from './SplitImage';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = (theme:any) => createStyles({
  text: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 600,
    paddingTop: theme.spacing.unit * 6,
    paddingBottom: theme.spacing.unit * 6,
    margin: '0 auto',
  },
  value: {
    backgroundColor: theme.palette.primary.dark,
    color: '#fff',
    padding: theme.spacing.unit,
    margin: theme.spacing.unit,
  },
  items: {
    margin: theme.spacing.unit,
  },
  paragraphs: {
    margin: theme.spacing.unit,
  }
});

interface Props {
  lang: Lang
  classes: any
  values: any
}

const CompanyValues: React.SFC<Props> = ({ values, classes, lang }) => (
  <SplitImage img={values.img.childImageSharp.sizes.src}>
    <div className={classes.text}>
      <Typography variant="display1" gutterBottom>
        {values.title}
      </Typography>
      <div className={classes.items}>
        {
        values.items.map((x:string, i:number) =>
          <Paper key={i} className={classes.value}>
            {x}
          </Paper>
        )
      }
      </div>
      <div className={classes.paragraphs}>
        {
          values.text.map((x:string, i:number) =>
            <Typography key={i} variant="body1" gutterBottom>
              {x}
            </Typography>
          )
        }
      </div>
    </div>
  </SplitImage>
);

export default withStyles(styles)(CompanyValues);
