import * as React from 'react';
import classNames from 'classnames';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from 'mdi-material-ui/Facebook';
import TwitterIcon from 'mdi-material-ui/Twitter';
import YoutubeIcon from 'mdi-material-ui/Youtube';

import { createStyles, withStyles } from "@material-ui/core/styles";

const styles = (theme:any) => createStyles({
  layout: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
  },
  footer: {
    marginTop: theme.spacing.unit * 3,
  },
  footerSocial: {
    backgroundColor: theme.palette.primary.light,
    textAlign: 'center'
  },
  footerAddress: {
    backgroundColor: theme.palette.secondary.dark,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerCopy: {
    backgroundColor: theme.palette.primary.dark,
    textAlign: 'center'
  },
  white: {
    color: '#fff'
  },
  logo: {
    width: 150,
    height: 150,
  },
  contact: {
    borderLeft: '1px solid gray',
    borderColor: theme.palette.secondary.light,
    paddingLeft: 25,
    color: '#ccc',
  }
});

interface Props {
  classes: any
  logo?: any
}

const Footer: React.SFC<Props> = ({ classes, logo }) => (
  <footer className={classes.footer}>
    <div className={classNames(classes.footerAddress, classes.layout)}>
      {logo && <img className={classes.logo} src={logo}/>}
      <div className={classes.contact}>
        <Typography variant="title" color="inherit" gutterBottom>
          Controlnet International
        </Typography>
        <Typography variant="caption" color="inherit">
          info@connet.com.tw
        </Typography>
        <Typography variant="caption" color="inherit">
          +886-2-2345-2354
        </Typography>
      </div>
    </div>
    <div className={classNames(classes.footerSocial, classes.layout)}>
      <IconButton><FacebookIcon/></IconButton>
      <IconButton><TwitterIcon/></IconButton>
      <IconButton><YoutubeIcon/></IconButton>
    </div>
    <div className={classNames(classes.footerCopy, classes.layout)}>
      <Typography variant="caption" color="secondary">
        © 2018 Copyright: <span className={classes.white}>Controlnet</span>
      </Typography>
    </div>
  </footer>
);

export default withStyles(styles)(Footer);
