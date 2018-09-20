import * as React from 'react';
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Nav from './Nav';
import { createStyles, withStyles } from "@material-ui/core/styles";
import Link from './Link';

interface Props {
  lang: Lang
  classes: any
  handleClose: any
  toggleMenu: any
  open: any
  title: string
  logo: any
  nav: {
    links: Array<any>
  },
}

const styles = createStyles({
  bar: {
    backgroundColor: 'white',
  },
  grow: {
    flexGrow: 1
  },
  logo: {
    marginTop: 5,
    marginRight: 10,
    width: 48,
    height: 48,
    alignSelf: 'center',
  },
  title: {
    textTransform: 'uppercase'
  },
  lang: {}
});

const HeaderBar: React.SFC<Props> = ({ classes, open, handleClose, toggleMenu, title, logo, nav, lang }) => (
    <div>
      <AppBar position="fixed" className={classes.bar}>
        <Toolbar>
          <img className={classes.logo} src={logo}/>
          <Hidden smDown>
            <Typography variant="title" color="primary" className={classes.title}>
              {title}
            </Typography>
          </Hidden>
          <div className={classes.grow}/>
          <div className={classes.langs}>
            {
              ['en','zh'].map(x =>
                <Link key={x} to='/' lang={x}>
                  <Button
                    className={classes.lang}
                    size="small"
                    color={x===lang ? 'default':'secondary'}
                >
                    {x}
                  </Button>
                </Link>
              )
            }
          </div>
          <IconButton color="primary" onClick={toggleMenu}>
            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Nav lang={lang} title={title} logo={logo} nav={nav} open={open} handleClose={handleClose}/>
    </div>
);

export default withStyles(styles)(HeaderBar);
