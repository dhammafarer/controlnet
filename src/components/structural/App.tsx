import * as React from 'react';
import Helmet from 'react-helmet';
import Head from '../Head';
import Header from './Header';
import Footer from './Footer';
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import styles from '../../styles/layout-styles';
import { LangContext } from '../../contexts/lang-context';

interface Props {
  lang: Lang
  title: string
  logo: GatsbyImage
  nav: any
  classes: any
  contact: {
    details: Array<any>
  }
}

const App: React.SFC<Props> = ({ title, logo, children, nav, classes, contact, lang }) => (
  <LangContext.Provider value={lang}>
    <div className={classes.layout}>
      <CssBaseline/>
      <Head title={title} lang={lang}/>
      <Header title={title} logo={logo.childImageSharp.sizes.src} nav={nav}/>
      <main className={classes.main}>
        {children}
      </main>
      <Footer contact={contact} logo={logo.childImageSharp.sizes.src} title={title}/>
    </div>
  </LangContext.Provider>
);

export default withStyles(styles)(App);
