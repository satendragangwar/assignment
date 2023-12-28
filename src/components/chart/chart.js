import { memo } from 'react';
import ApexChart from 'react-apexcharts';

import { alpha, styled } from '@mui/material/styles';

import { bgBlur } from 'src/theme/css';

// ----------------------------------------------------------------------

const Chart = styled(ApexChart)(({ theme }) => ({
  '& .apexcharts-canvas': {
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05) perspective(1000px) rotateX(10deg)', // Adjust the values as needed
    },

    // Rest of the existing styles...
    '& .apexcharts-tooltip': {
      ...bgBlur({
        color: theme.palette.background.default,
      }),
      color: theme.palette.text.primary,
      boxShadow: theme.customShadows.dropdown,
      borderRadius: theme.shape.borderRadius * 1.25,
      '&.apexcharts-theme-light': {
        borderColor: 'transparent',
        ...bgBlur({
          color: theme.palette.background.default,
        }),
      },
    },
    '& .apexcharts-xaxistooltip': {
      ...bgBlur({
        color: theme.palette.background.default,
      }),
      borderColor: 'transparent',
      color: theme.palette.text.primary,
      boxShadow: theme.customShadows.dropdown,
      borderRadius: theme.shape.borderRadius * 1.25,
      '&:before': {
        borderBottomColor: alpha(theme.palette.grey[500], 0.24),
      },
      '&:after': {
        borderBottomColor: alpha(theme.palette.background.default, 0.8),
      },
    },
    '& .apexcharts-tooltip-title': {
      textAlign: 'center',
      fontWeight: theme.typography.fontWeightBold,
      backgroundColor: alpha(theme.palette.grey[500], 0.08),
      color: theme.palette.text[theme.palette.mode === 'light' ? 'secondary' : 'primary'],
    },
    '& .apexcharts-legend': {
      padding: 0,
    },
    '& .apexcharts-legend-series': {
      display: 'inline-flex !important',
      alignItems: 'center',
    },
    '& .apexcharts-legend-marker': {
      marginRight: 8,
    },
    '& .apexcharts-legend-text': {
      lineHeight: '18px',
      textTransform: 'capitalize',
    },
    '& .apexcharts-bar': {
      animation: 'barAnimation 1s infinite alternate ease-in-out',
    },
  },

  '@keyframes barAnimation': {
    '0%': {
      height: 0,
    },
    '100%': {
      height: 'var(--bar-height)',
    },
  },
}));

export default memo(Chart);
