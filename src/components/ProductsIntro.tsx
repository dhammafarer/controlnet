import * as React from 'react';
import { createStyles, withStyles } from "@material-ui/core/styles";
import SplitImage from './SplitImage';
import Typography from "@material-ui/core/Typography";

const styles = (theme:any) => createStyles({
  text: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 400,
    margin: '0 auto',
  },
});

interface Props {
  lang: Lang
  content: any
  classes: any
}

const ProductsIntro: React.SFC<Props> = ({ content, classes, lang }) => (
  <SplitImage reverse img={content.img.childImageSharp.sizes.src}>
    <div className={classes.text}>
      <Typography variant="display2"
        className={classes.title}
        gutterBottom
      >
        {content.title}
      </Typography>
      {
        content.text.map((x:string, i:number) =>
          <Typography key={i}>
            {x}
          </Typography>
        )
      }
    </div>
  </SplitImage>
);

export default withStyles(styles)(ProductsIntro);
