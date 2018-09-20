import * as React from 'react';
import withLang from '../../components/hoc/withLang';

interface Props {
  lang: Lang
}

class IndexPageEn extends React.Component<Props, {}> {
  render () {
    return (
      <div>
        <p>
          {this.props.lang}
        </p>
      </div>
    );
  }
}

export default withLang(IndexPageEn);

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
