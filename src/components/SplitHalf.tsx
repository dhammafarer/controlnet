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
import styles from '../../styles/split-half-styles';

interface Props {
  classes: any
  title: string
  logo: string
  contact: {
    details: Array<{name: string, phone: string, email: string, address: Array<string>}>
  }
}

interface CGProps {
  classes: {
    contactGroup: string
  },
  name: string
  phone: string,
  email: string,
}

const ContactGroup: React.SFC<CGProps> = ({classes, name, email, phone}) => (
    <div className={classes.contactGroup}>
      <Typography variant="title" color="inherit" gutterBottom>
        {name}
      </Typography>
      <Typography variant="caption" color="inherit">
        {email}
      </Typography>
      <Typography variant="caption" color="inherit">
        {phone}
      </Typography>
    </div>
);

const Footer: React.SFC<Props> = ({ classes, title, logo, contact }) => (
  <footer className={classes.footer}>
    <div className={classNames(classes.footerAddress, classes.layout)}>
      <div className={classes.contact}>
        <ContactGroup {...contact.details[0]} classes={classes}/>
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
        © 2018 Copyright: <span className={classes.white}>{title}</span>
      </Typography>
    </div>
  </footer>
);

export default withStyles(styles)(Footer);
