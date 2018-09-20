import * as React from 'react';

import { createStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Link from '../Link';

const styles = (theme:any) => createStyles({
  page: {
    backgroundColor: 'black',
    backgroundSize: 'cover',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 32,
    marginBottom: theme.spacing.unit * 3,
  },
  heroContent: {
    maxWidth: 800,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  title: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: 1.4,
  },
  subtitle: {
    fontWeight: 300,
    color: '#fff',
  },
  card: {
    height: '100%',
    maxWidth: 250,
  },
  cardAction: {
    height: '100%',
    width: '100%',
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
  },
  cardLogo: {
    maxWidth: 120,
  },
  caption: {
    marginTop: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit,
    flex: 1,
    borderTop: '1px solid gray',
    borderColor: theme.palette.secondary.light,
    display: 'flex',
    alignItems: 'center',
  }
});

interface Props {
  lang: Lang
  background: any
  title: string
  divisions: Array<any>
  subtitle: string
  classes: any
}

const LandingPage: React.SFC<Props> = ({ title, subtitle, divisions, background, classes, lang }) => (
  <div
    className={classes.page}
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,1)),url(${background.sizes.src})`,
    }}
  >
    {/* Hero unit */}
    <div className={classes.heroContent}>
      <Typography
        className={classes.title}
        variant="display1"
        align="center"
      >
        {title}
      </Typography>
      <Typography
        className={classes.subtitle}
        variant="headline"
        align="center"
        gutterBottom
        color="secondary"
      >
        {subtitle}
      </Typography>
    </div>
    {/* End hero unit */}
    <Grid container={true} spacing={32} justify="center">
      {
        divisions.map((d:any) =>
          <Grid key={d.title} item={true} sm={4} md={2}>
            <Link to={d.to} lang={lang}>
              <Card className={classes.card}>
                <CardActionArea className={classes.cardAction}>
                  <CardContent className={classes.content}>
                    <img className={classes.cardLogo} src={d.logo.childImageSharp.sizes.src}/>
                    <div className={classes.caption}>
                      <Typography variant="caption">
                        {d.title}
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        )
      }
    </Grid>
  </div>
);

export default withStyles(styles)(LandingPage);
