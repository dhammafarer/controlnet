import * as React from 'react';
import GatsbyLink from 'gatsby-link';

interface Props {
  lang: string
  to: string
  className?: any
  style?: any
}

const Link: React.SFC<Props> = ({ children, lang, to, className, style }) => (
  <GatsbyLink
    className={className}
    style={{textDecoration: 'none', color: 'inherit'}}
    to={'/' + lang + to}
  >
    {children}
  </GatsbyLink>
);

export default Link;
