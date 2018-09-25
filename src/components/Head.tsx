import * as React from 'react';
import Helmet from 'react-helmet';

interface Props {
  title: string
  lang: Lang
}

const Head: React.SFC<Props> = ({ lang, title }) => (
  <Helmet
    title={title}
    htmlAttributes={{lang: lang}}
    meta={[
      {name: 'description', content: 'Controlnet International'},
    ]}
    link={[
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Nunito:300,400,500"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"}
    ]}
  />
);

export default Head;
