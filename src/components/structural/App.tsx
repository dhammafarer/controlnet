import * as React from 'react';
import Helmet from 'react-helmet';
import Head from '../Head';
import Header from './Header';
import Footer from './Footer';
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles, createStyles } from "@material-ui/core/styles";

interface Props {
  lang: Lang
  title: string
  logo: any
  classes: any
  nav: any
}

const styles = (theme:any) => createStyles({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flex: 1,
    width: '100%',
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 64,
    margin: '0 auto',
    maxWidth: 1600,
  }
});

const App: React.SFC<Props> = ({ logo, title, children, nav, classes, lang }) => (
  <div className={classes.layout}>
    <CssBaseline/>
    <Head title={title} lang={lang}/>
    <Header logo={logo} title={title} lang={lang} nav={nav}/>
    <main className={classes.main}>
      {children}
    </main>
    <Footer logo={null}/>
  </div>
);

export default withStyles(styles)(App);
