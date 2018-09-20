import * as React from 'react';
import { LangContext } from '../context/lang-context';

import withRoot from '../utils/withRoot';
import App from '../components/structural/App';

interface Props {
  children: any
  location: {
    pathname: string
  }
  data: {
    site: {
      siteMetadata: {
        title: {
          en: string
        }
      }
    }
    logo: any
    nav: any
  }
}

class DefaultLayoutEn extends React.Component<Props, {}> {
  render () {
    const {children, data, location} = this.props;
    console.log(data.site.siteMetadata.title.en);
    return (
      <LangContext.Provider value='en'>
        <App
          title={data.site.siteMetadata.title.en}
          logo={data.logo.sizes.src}
          lang={'en'}
          nav={data.nav}
        >
          {children()}
        </App>
      </LangContext.Provider>
    );
  }
}

export default withRoot(DefaultLayoutEn);

export const query = graphql`
  query DefaultLayoutEnQuery {
    site {
      siteMetadata {
        title {
          en
        }
      }
    }
    logo: imageSharp(id: {regex: "/ctn-logo-square.jpg/"}) {
      sizes(maxWidth: 120) {
        ...GatsbyImageSharpSizes
      }
    }
    nav: pagesYaml(id: {regex: "/nav-index-en.yml/"}) {
      ...NavPagesYaml
    }
  }
`;
