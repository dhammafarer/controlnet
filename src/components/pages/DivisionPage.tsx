import * as React from 'react';
import DivisionWelcome from '../DivisionWelcome';
import ProductCards from '../ProductCards';
import AboutCompany from '../AboutCompany';
import CompanyValues from '../CompanyValues';
import Tcs from '../Tcs';

interface Props {
  lang: Lang
  welcome: any
  categories: any
  company: any
  values: any
  tcs: any
}

const DivisionPage: React.SFC<Props> = ({ lang, welcome, categories, company, values, tcs }) => (
  <div>
      <DivisionWelcome lang={lang} welcome={welcome}/>
      <ProductCards lang={lang} categories={categories}/>
      <AboutCompany lang={lang} company={company}/>
      <CompanyValues lang={lang} values={values}/>
      <Tcs lang={lang} tcs={tcs}/>
  </div>
);

export default DivisionPage;
