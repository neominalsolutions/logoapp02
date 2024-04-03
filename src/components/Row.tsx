import { Grid } from '@mui/material';

type RowProps = {
 children?: React.ReactNode;
};

// yani children Props ile bir component içirisinde açma kapama tagleri içerisinde çalışan bir component dizayn ettik

export default function Row({ children }: RowProps) {
 return (
  <>
   <Grid sx={{ padding: '5px' }} spacing={2}>
    {children}
   </Grid>
  </>
 );
}
