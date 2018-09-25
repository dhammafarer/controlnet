import * as React from 'react';
import SectionImage from '../../components/SectionImage';
import Typography from "@material-ui/core/Typography";
  
interface Props {
  data: {
    pagesYaml: {
      welcome: {
        heading: string
        subheading: string
        image: ChildImageSharp
        text: Array<string>
      }
    }
  }
}

class IndexPageEn extends React.Component<Props, {}> {
  render () {
    const { welcome } = this.props.data.pagesYaml;
    console.log(welcome);
    return (
      <div>
        <SectionImage
          heading={welcome.heading}
          image={welcome.image}
          text={welcome.text}
        />
        <SectionImage
          reverse={true}
          heading={welcome.heading}
          subheading={welcome.subheading}
          image={welcome.image}
          text={welcome.text}
        />
      </div>
    );
  }
}

export default IndexPageEn;

export const query = graphql`
  query IndexPageEnQuery {
    pagesYaml(id: {regex: "/index-en.yml/"}) {
      welcome {
        heading
        subheading
        text
        image {
          childImageSharp {
            sizes(maxWidth:1400) {
              src
            }
          }
        }
      }
    }
  }
`;
