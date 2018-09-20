import * as React from 'react';
import { createStyles, withStyles } from "@material-ui/core/styles";
import SplitImage from './SplitImage';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = (theme:any) => createStyles({
  welcomeText: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 400,
    margin: '0 auto',
  },
  welcomeTitle: {
    textTransform: 'uppercase',
  },
  welcomeSubtitle: {
  },
  welcomeLogo: {
    width: 150,
    height: 150,
    marginBottom: '1em',
  },
});

interface Props {
  lang: Lang
  welcome: any
  classes: any
}

const DivisionWelcome: React.SFC<Props> = ({ welcome, classes, lang }) => (
  <SplitImage reverse img={welcome.img.childImageSharp.sizes.src}>
    <div className={classes.welcomeText}>
      <img className={classes.welcomeLogo} src={welcome.logo.childImageSharp.sizes.src}/>
      <Typography variant="display2"
        className={classes.title}
        gutterBottom
      >
        {welcome.title}
      </Typography>
      <Typography variant="subheading"
        className={classes.subtitle}
        gutterBottom
        color="secondary"
      >
        {welcome.subtitle}
      </Typography>
    </div>
  </SplitImage>
);

export default withStyles(styles)(DivisionWelcome);
