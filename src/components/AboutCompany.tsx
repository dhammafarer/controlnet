import * as React from 'react';
import { createStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from './Link';

const styles = (theme:any) => createStyles({
  company: {
    backgroundSize: 'cover',
    minHeight: 'calc(100vh - 64px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing.unit * 3,
  },
  paper: {
    margin: '0 auto',
    maxWidth: 600,
    padding: theme.spacing.unit * 4,
  }
});

interface Props {
  lang: Lang
  classes: any
  company: any
}

const AboutCompany: React.SFC<Props> = ({ company, classes, lang }) => (
  <section
    className={classes.company}
    style={{
      backgroundImage: `linear-gradient(to right, rgba(255,255,255,.1),rgba(255,255,255,0.4)),url(${company.img.childImageSharp.sizes.src})`,
    }}
  >
    <div>
      <Grid container justify="flex-end">
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography
              color="primary"
              variant="display1"
              gutterBottom
            >
              {company.title}
            </Typography>
            {
              company.text.map((x:string, i:number) =>
                <Typography key={i} variant="body1" gutterBottom>
                  {x}
                </Typography>
              )
            }
          </Paper>
        </Grid>
      </Grid>
    </div>
  </section>
);

export default withStyles(styles)(AboutCompany);
