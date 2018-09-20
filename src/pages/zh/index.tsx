import * as React from 'react';

interface Props {
}

class IndexPageZh extends React.Component<Props, {}> {
  render () {
    return (
      <div>
        Landing Zh
      </div>
    );
  }
}

export default IndexPageZh;

export const query = graphql`
  query IndexPageZhQuery {
    site {
      siteMetadata {
        title {
          zh
        }
      }
    }
  }
`;
