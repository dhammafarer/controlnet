import * as React from 'react';
import Grid from "@material-ui/core/Grid";
import { createStyles, withStyles } from "@material-ui/core/styles";

const styles = createStyles({
  section: {
    width: '100%',
  },
  container: {
    width: '100%',
  },
  item: {
    width: '100%'
  }
});

type Props = {
  left: any
  right: any
  reverse?: boolean
  classes: any
};

class HorizontalSplit extends React.Component<Props, {}> {
  shouldComponentUpdate() {
    return false
  }

  render () {
    const { reverse, classes, left, right } = this.props;

    return (
      <section className={classes.section}>
        <Grid container
          direction={reverse ? 'row-reverse' : 'row'}
          className={classes.container}
        >
          <Grid item xs={12} md={6} className={classes.item}>
            {left}
          </Grid>
          <Grid item xs={12} md={6} className={classes.item}>
            {right}
          </Grid>
        </Grid>
      </section>
    )
  }
}

export default withStyles(styles)(HorizontalSplit);
