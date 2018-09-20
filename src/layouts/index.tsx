import * as React from 'react';

interface Props {
  children: any
  location: {
    pathname: string
  }
}

class DefaultLayout extends React.Component<Props, {}> {
  render () {
    const {children, location} = this.props;
    return (
      <div>
        Default Layout
      </div>
    );
  }
}

export default DefaultLayout;
