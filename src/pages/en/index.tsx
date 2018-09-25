import * as React from 'react';
import HorizontalSplit from '../../components/layouts/HorizontalSplit';

interface Props {
}

class IndexPageEn extends React.Component<Props, {}> {
  render () {
    return (
      <HorizontalSplit
        left={<p>left</p>}
        right={<p>right</p>}
      />
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
