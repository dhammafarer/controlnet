import * as React from 'react';
import { createStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = (theme:any) => createStyles({
  page: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 600,
    margin: '0 auto',
    flex: 1,
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 700
  }
});

interface Props {
  lang: Lang
  classes: any
}

const message = {
  en: {
    title: 'Under Construction',
    subtitle: 'This page will be available soon!'
  },
  es: {
    title: 'Under Construction',
    subtitle: 'This page will be available soon!'
  },
  zh: {
    title: 'Under Construction',
    subtitle: 'This page will be available soon!'
  }
};

const ProductsIntro: React.SFC<Props> = ({ classes, lang }) => (
  <div className={classes.page}>
    <Typography variant="display1" className={classes.title} color="primary">
      {message[lang].title}
    </Typography>
    <Typography variant="subheading">
      {message[lang].subtitle}
    </Typography>
  </div>
);

export default withStyles(styles)(ProductsIntro);
