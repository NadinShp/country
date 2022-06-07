import { createTheme } from '@mui/material/styles';
import '../../global/styles/index.css';

export const theme = createTheme({
    components: {
      MuiInputBase: {
        variants: [
          {
            props: { variant: 'light' },
            style: {
              color: '#000',
            },
          },
          {
            props: { variant: 'dark'},
            style: {
                color: '#fff'
            },
          },
        ],
      },
    },
  });