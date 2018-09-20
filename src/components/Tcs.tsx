import * as React from 'react';
import { createStyles, withStyles } from "@material-ui/core/styles";
import SplitImage from './SplitImage';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";

const styles = (theme:any) => createStyles({
  page: {
    marginTop: theme.spacing.unit * 3,
    margin: '0 auto',
    maxWidth: 800,
  },
  header: {
    backgroundColor: theme.palette.primary.light,
    color: '#fff',
  },
  title: {
    color: theme.palette.common.white,
  },
  content: {
  },
  image: {
    width: '100%'
  }
});

interface Props {
  lang: Lang
  classes: any
  tcs: any
}

const Tcs: React.SFC<Props> = ({ tcs, classes, lang }) => (
  <section className={classes.page}>
    <Card>
      <CardHeader
        className={classes.header}
        title={
          <Typography className={classes.title} variant="title">
            {tcs.title}
          </Typography>
        }
        align="center"
      />
      <CardContent className={classes.content}>
        <img className={classes.image} src={tcs.img.childImageSharp.sizes.src}/>
        {
          tcs.text.map((x:string, i:number) =>
            <Typography key={i} variant="body1" gutterBottom>
              {x}
            </Typography>
          )
        }
      </CardContent>
    </Card>
  </section>
);

export default withStyles(styles)(Tcs);
