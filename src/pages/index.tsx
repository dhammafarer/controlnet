import * as React from 'react';
import * as locale from '../utils/locale';
import { navigateTo } from 'gatsby-link';

interface Props {
}

class IndexPage extends React.Component<Props, {}> {
  componentDidMount () {
    navigateTo(locale.getLocale());
  }

  render () {
    return (
      <div>Root</div>
    );
  }
}

export default IndexPage;
