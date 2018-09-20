import * as React from 'react';
import { LangContext } from '../../context/lang-context';

interface WithLangProps {
  lang: Lang
}

const withLang = <P extends object>(
  Component:React.ComponentType<P>
): React.SFC<P & WithLangProps> => (props) => (
  <LangContext.Consumer>
    {(lang:Lang) => 
      <Component lang={lang} {...props}/>
    }
  </LangContext.Consumer>
);

export default withLang;
