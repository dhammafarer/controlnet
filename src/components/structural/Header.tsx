import * as React from 'react';
import HeaderBar from '../HeaderBar';

interface Props {
  lang: Lang
  title: string
  logo: any
  nav: {
    links: Array<any>
  }
}

interface State {
  menu: boolean
}

class Header extends React.Component<Props, State> {
  state:State = {
    menu: false
  }

  toggleMenu = () => {
    this.setState({menu: !this.state.menu});
  }

  handleClose = () => {
    this.setState({menu: false});
  }

  render () {
    const { nav, lang, logo, title } = this.props;

    return (
      <HeaderBar
        nav={nav}
        title={title}
        logo={logo}
        toggleMenu={this.toggleMenu}
        handleClose={this.handleClose}
        open={this.state.menu}
        lang={lang}
      />
    );
  }
};

export default Header;
