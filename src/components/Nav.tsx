import * as React from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import { createStyles, withStyles } from "@material-ui/core/styles";
import Link from './Link';
import CloseIcon from "@material-ui/icons/Close";

interface Props {
  lang: Lang
  classes: any
  handleClose: any
  open: any
  title: string
  logo: any
  nav: {
    links: Array<any>
  }
}

const styles = (theme:any) => createStyles({
  list: {
    height: '100%',
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    marginTop: '1.5em',
    justifyContent: 'space-between',
  },
  logo: {
    width: 150,
    marginBottom: 20,
  },
  close: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 4,
    right: 4,
  },
  contact: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    alignSelf: 'center',
    width: '100%',
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
  },
  details: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: '0.4em'
  }
});

const Nav: React.SFC<Props> = ({ open, handleClose, nav, classes, lang, title, logo }) => (
  <Drawer anchor="right" open={open} onClose={handleClose}>
    <div
      tabIndex={0}
      role="button"
      onClick={handleClose}
      onKeyDown={handleClose}
      className={classes.list}
    >
      <IconButton className={classes.close}>
        <CloseIcon color="secondary"/>
      </IconButton>
      <List>
        <img className={classes.logo} src={logo}/>
        <Typography variant="title" gutterBottom={true}>{title}</Typography>
        {
          nav.links.map((x:any) =>
            <Link key={x.to} to={x.to} lang={lang}>
              <ListItem button={true} divider={true} style={{justifyContent: "center"}}>
                <Typography
                  variant="caption"
                  className={classes.item}
                  color="secondary"
                  align="center"
                >
                  {x.label}
                </Typography>
              </ListItem>
            </Link>
          )
        }
      </List>
      <div className={classes.contact}>
        <div className={classes.details}>
          <PhoneIcon className={classes.icon}/>
          <Typography color="inherit" gutterBottom>
            +886-2-5431-2421
          </Typography>
        </div>
        <div className={classes.details}>
          <EmailIcon className={classes.icon}/>
          <Typography color="inherit">
            info@baple.es
          </Typography>
        </div>
      </div>
    </div>
  </Drawer>
);

export default withStyles(styles)(Nav);
