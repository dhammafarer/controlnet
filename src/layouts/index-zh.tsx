import * as React from 'react';

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
    pagesYaml: {
      nav: any
    }
  }
}

class DefaultLayoutZh extends React.Component<Props, {}> {
  render () {
    const {children, data, location} = this.props;
    return (
      <App
        title={data.site.siteMetadata.title.en}
        logo={data.logo}
        lang={'en'}
      >
        {children()}
      </App>
    );
  }
}

export default withRoot(DefaultLayoutZh);

export const query = graphql`
  query DefaultLayoutZhQuery {
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
    pagesYaml(id: {regex: "/nav-index-en.yml/"}) {
      links {
        to
        label
      }
    }
  }
`;
