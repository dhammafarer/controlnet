import * as React from 'react';

import withRoot from '../utils/withRoot';
import App from '../components/structural/App';


interface Props {
  children: any
  data: {
    app: {
      title: string
      lang: Lang
      logo: GatsbyImage
      nav: {
        home: string
        links: Array<NavLink>
      }
    }
    contact: any
  }
}

class DefaultLayoutEn extends React.Component<Props, {}> {
  render () {
    const {children, data} = this.props;
    console.log(data);
    return (
      <App contact={data.contact} {...data.app}>
        {children()}
      </App>
    );
  }
}

export default withRoot(DefaultLayoutEn);

export const query = graphql`
  query DefaultLayoutEnQuery {
    app: pagesYaml(id: {regex: "/app-en.yml/"}) {
      title
      logo {
        childImageSharp {
          sizes(maxWidth: 220) {
            src
          }
        }
      }
      lang
      nav {
        home
        navLinks {
          to
          label
          navLinks {
            to
            label
          }
        }
      }
    }
    contact: pagesYaml(id: {regex: "/contact-en.yml/"}) {
      details {
        name
        phone
        email
        address
      }
    }
  }
`;
