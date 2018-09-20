import * as React from 'react';

interface Props {
}

class IndexPageEn extends React.Component<Props, {}> {
  render () {
    return (
      <div>
        Landing En
      </div>
    );
  }
}

export default IndexPageEn;

export const query = graphql`
  query IndexPageEnQuery {
    site {
      siteMetadata {
        title {
          en
        }
      }
    }
  }
`;
