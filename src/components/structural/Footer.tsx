import * as React from 'react';
import classNames from 'classnames';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from 'mdi-material-ui/Facebook';
import TwitterIcon from 'mdi-material-ui/Twitter';
import YoutubeIcon from 'mdi-material-ui/Youtube';
import InstagramIcon from 'mdi-material-ui/Instagram';

import { withStyles } from "@material-ui/core/styles";
import footerStyles from '../../styles/footer-styles';

interface Props {
  classes: any
  title: string
  logo: string
}

const Footer: React.SFC<Props> = ({ classes, title, logo }) => (
  <footer className={classes.footer}>
    <div className={classNames(classes.footerAddress, classes.layout)}>
      <img className={classes.logo} src={logo}/>
      <div className={classes.contact}>
        <Typography variant="title" color="inherit" gutterBottom>
          {title}
        </Typography>
        <Typography variant="caption" color="inherit">
          info@baple.com
        </Typography>
        <Typography variant="caption" color="inherit">
          +886-2-2345-2354
        </Typography>
      </div>
    </div>
    <div className={classNames(classes.footerSocial, classes.layout)}>
      <IconButton><FacebookIcon/></IconButton>
      <IconButton><TwitterIcon/></IconButton>
      <IconButton><InstagramIcon/></IconButton>
      <IconButton><YoutubeIcon/></IconButton>
    </div>
    <div className={classNames(classes.footerCopy, classes.layout)}>
      <Typography variant="caption" color="secondary">
        © 2018 Copyright: <span className={classes.white}>Baple Group</span>
      </Typography>
    </div>
  </footer>
);

export default withStyles(footerStyles)(Footer);
