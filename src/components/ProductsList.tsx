import * as React from 'react';
import { createStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const styles = (theme:any) => createStyles({
  section: {
    marginTop: theme.spacing.unit * 3,
  },
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
  card: {
    marginTop: theme.spacing.unit * 3,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  cardContent: {
    padding: theme.spacing.unit * 3
  }
});

interface Props {
  lang: Lang
  content: any
  classes: any
}

const ProductsList: React.SFC<Props> = ({ content, classes, lang }) => (
  <section className={classes.section}>
    {
      content.map((x:any) =>
        <Card key={x.title} className={classes.card}>
          <CardHeader
            className={classes.cardHeader}
            title={
              <Typography variant="title">
                {x.title}
              </Typography>
            }
          />
          <CardContent className={classes.cardContent}>
            <Grid container>
              <Grid item md={3}>
                <img src={x.img.childImageSharp.sizes.src}/>
              </Grid>
              <Grid item md={9}>
                {
                  x.spec.map((s:any, j:number) =>
                    <div key={j}>
                      <Typography variant="caption">
                        {s.title}
                      </Typography>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>
                              Parameter
                            </TableCell>
                            <TableCell>
                              Value
                            </TableCell>
                          </TableRow>
                        </TableHead>
                          {
                            s.cells.map((c:any, k:number) =>
                              <TableRow key={k}>
                                <TableCell>
                                  {c.key}
                                </TableCell>
                                <TableCell>
                                  {c.value}
                                </TableCell>
                              </TableRow>
                            )
                          }
                        <TableBody>
                        </TableBody>
                      </Table>
                    </div>
                  )
                }
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )
    }
  </section>
);

export default withStyles(styles)(ProductsList);
