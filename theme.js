// theme.js

import { extendTheme } from 'native-base';

// Define color palettes for light and dark modes
const colors = {
  // Light Mode Palette: Brink-Pink
  'brink-pink': {
    50: '#fff1f3',
    100: '#ffe4e9',
    200: '#fecdd8',
    300: '#fea3b7',
    400: '#fc668a',
    500: '#f63d6f',
    600: '#e31b5a',
    700: '#bf114c',
    800: '#a01146',
    900: '#891242',
    950: '#4d0420',
  },
  // Dark Mode Palette: Black Shades
  black: {
    50: '#f6f6f6',
    100: '#e7e7e7',
    200: '#d1d1d1',
    300: '#b0b0b0',
    400: '#888888',
    500: '#6d6d6d',
    600: '#5d5d5d',
    700: '#4f4f4f',
    800: '#454545',
    900: '#3d3d3d',
    950: '#000000',
  },
  // Neutral Colors for Both Modes
  neutral: {
    50: '#FFFFFF',
    100: '#F2F2F2',
    200: '#E5E5E5',
    300: '#CCCCCC',
    400: '#B3B3B3',
    500: '#333333',
    600: '#4F4F4F',
    700: '#2D2D2D',
    800: '#1E1E1E',
    900: '#121212',
  },
  // Success Colors
  success: {
    50: '#E8F5E9',
    100: '#C8E6C9',
    500: '#4CAF50',
    600: '#43A047',
    700: '#388E3C',
  },
  // Danger Colors
  danger: {
    50: '#FFEBEE',
    100: '#FFCDD2',
    500: '#FF5A5F',
    600: '#E04850',
    700: '#C33A41',
  },
  // Warning Colors
  warning: {
    50: '#FFF8E1',
    100: '#FFECB3',
    500: '#FFC107',
    600: '#FFB300',
    700: '#FFA000',
  },
  // Background Colors
  background: {
    light: '#FAFAFA',
    dark: '#121212',
  },
  // Text Colors
  text: {
    light: '#333333',
    dark: '#E0E0E0',
  },
};

// Define font sizes
const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
};

// Define spacing
const space = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
};

// Define font weights
const fontWeights = {
  normal: '400',
  medium: '500',
  bold: '700',
};

// Define breakpoints for responsive design (if needed)
const breakpoints = {
  base: 0,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
};

// Extend the theme
const theme = extendTheme({
  colors,
  fontSizes,
  space,
  fontWeights,
  breakpoints,
  config: {
    initialColorMode: 'light', // Default to light mode
    useSystemColorMode: true,  // Enable system color mode detection
  },
  components: {
    // Button Component
    Button: {
      baseStyle: {
        rounded: 'full',
        _text: {
          fontSize: 'md',
          fontWeight: 'bold',
        },
      },
      sizes: {
        sm: { px: 4, py: 2 },
        md: { px: 6, py: 3 },
        lg: { px: 8, py: 4 },
        xl: { px: 10, py: 5 },
      },
      variants: {
        solid: ({ colorMode, colorScheme }) => ({
          bg: `${colorScheme}.500`,
          _hover: { bg: `${colorScheme}.600` },
          _pressed: { bg: `${colorScheme}.700` },
          _disabled: { bg: `${colorScheme}.200` },
          _text: { color: 'neutral.50' },
          _dark: {
            bg: `${colorScheme}.600`,
            _hover: { bg: `${colorScheme}.700` },
            _pressed: { bg: `${colorScheme}.800` },
            _disabled: { bg: `${colorScheme}.400` },
          },
        }),
        outline: ({ colorScheme }) => ({
          borderColor: `${colorScheme}.500`,
          _text: { color: `${colorScheme}.500` },
          _hover: {
            bg: `${colorScheme}.50`,
            borderColor: `${colorScheme}.600`,
            _text: { color: `${colorScheme}.600` },
          },
          _pressed: {
            bg: `${colorScheme}.100`,
            borderColor: `${colorScheme}.700`,
            _text: { color: `${colorScheme}.700` },
          },
          _disabled: {
            borderColor: `${colorScheme}.200`,
            _text: { color: `${colorScheme}.200` },
          },
          _dark: {
            borderColor: `${colorScheme}.400`,
            _text: { color: `${colorScheme}.400` },
            _hover: {
              bg: `${colorScheme}.800`,
              borderColor: `${colorScheme}.500`,
              _text: { color: `${colorScheme}.500` },
            },
            _pressed: {
              bg: `${colorScheme}.900`,
              borderColor: `${colorScheme}.600`,
              _text: { color: `${colorScheme}.600` },
            },
            _disabled: {
              borderColor: `${colorScheme}.600`,
              _text: { color: `${colorScheme}.600` },
            },
          },
        }),
        ghost: ({ colorScheme }) => ({
          _text: { color: `${colorScheme}.500` },
          _hover: {
            bg: `${colorScheme}.50`,
            _text: { color: `${colorScheme}.600` },
          },
          _pressed: {
            bg: `${colorScheme}.100`,
            _text: { color: `${colorScheme}.700` },
          },
          _disabled: {
            _text: { color: `${colorScheme}.200` },
          },
          _dark: {
            _text: { color: `${colorScheme}.400` },
            _hover: {
              bg: `${colorScheme}.800`,
              _text: { color: `${colorScheme}.500` },
            },
            _pressed: {
              bg: `${colorScheme}.900`,
              _text: { color: `${colorScheme}.600` },
            },
            _disabled: {
              _text: { color: `${colorScheme}.600` },
            },
          },
        }),
        link: ({ colorScheme }) => ({
          _text: { color: `${colorScheme}.500`, textDecoration: 'underline' },
          _hover: { _text: { color: `${colorScheme}.600` } },
          _pressed: { _text: { color: `${colorScheme}.700` } },
          _disabled: { _text: { color: `${colorScheme}.200` } },
          _dark: {
            _text: { color: `${colorScheme}.400` },
            _hover: { _text: { color: `${colorScheme}.500` } },
            _pressed: { _text: { color: `${colorScheme}.600` } },
            _disabled: { _text: { color: `${colorScheme}.600` } },
          },
        }),
      },
      defaultProps: {
        size: 'md',
        variant: 'solid',
        colorScheme: 'brink-pink',
      },
    },

    // Input Component
    Input: {
      baseStyle: {
        field: {
          bg: 'neutral.50',
          borderColor: 'neutral.200',
          _focus: { borderColor: 'brink-pink.500', bg: 'neutral.50' },
          _hover: { borderColor: 'brink-pink.100' },
          _invalid: { borderColor: 'danger.500' },
          _disabled: { bg: 'neutral.100', borderColor: 'neutral.200', color: 'neutral.500' },
          _dark: {
            bg: 'black.900',
            borderColor: 'black.500',
            _focus: { borderColor: 'brink-pink.600', bg: 'black.900' },
            _hover: { borderColor: 'brink-pink.600' },
            _invalid: { borderColor: 'danger.600' },
            _disabled: { bg: 'black.800', borderColor: 'black.500', color: 'neutral.500' },
          },
        },
      },
      sizes: {
        sm: { fontSize: 'sm', px: 3, py: 2 },
        md: { fontSize: 'md', px: 4, py: 3 },
        lg: { fontSize: 'lg', px: 5, py: 4 },
      },
      variants: {
        outline: {
          field: {
            borderWidth: 1,
            borderRadius: 'md',
          },
        },
        filled: {
          field: {
            borderWidth: 0,
            borderRadius: 'md',
          },
        },
        unstyled: {
          field: {
            borderWidth: 0,
            bg: 'transparent',
          },
        },
      },
      defaultProps: {
        size: 'md',
        variant: 'outline',
        colorScheme: 'brink-pink',
      },
    },

    // Checkbox Component
    Checkbox: {
      baseStyle: {
        control: {
          borderColor: 'neutral.200',
          bg: 'neutral.50',
          _checked: {
            bg: 'brink-pink.500',
            borderColor: 'brink-pink.500',
            _icon: { color: 'neutral.50' },
          },
          _disabled: {
            bg: 'neutral.100',
            borderColor: 'neutral.200',
            _icon: { color: 'neutral.300' },
          },
          _focus: {
            borderColor: 'brink-pink.500',
          },
          _dark: {
            bg: 'black.900',
            borderColor: 'black.500',
            _checked: {
              bg: 'brink-pink.600',
              borderColor: 'brink-pink.600',
              _icon: { color: 'neutral.100' },
            },
            _disabled: {
              bg: 'black.800',
              borderColor: 'black.500',
              _icon: { color: 'neutral.400' },
            },
          },
        },
        label: {
          color: 'neutral.500',
          _disabled: { color: 'neutral.200' },
          _dark: { color: 'neutral.100', _disabled: { color: 'neutral.400' } },
        },
      },
      sizes: {
        sm: { size: 4 },
        md: { size: 5 },
        lg: { size: 6 },
      },
      defaultProps: {
        size: 'md',
        colorScheme: 'brink-pink',
      },
    },

    // Radio Component
    Radio: {
      baseStyle: {
        control: {
          borderColor: 'neutral.200',
          bg: 'neutral.50',
          _checked: {
            bg: 'brink-pink.500',
            borderColor: 'brink-pink.500',
            _icon: { color: 'neutral.50' },
          },
          _disabled: {
            bg: 'neutral.100',
            borderColor: 'neutral.200',
            _icon: { color: 'neutral.300' },
          },
          _focus: {
            borderColor: 'brink-pink.500',
          },
          _dark: {
            bg: 'black.900',
            borderColor: 'black.500',
            _checked: {
              bg: 'brink-pink.600',
              borderColor: 'brink-pink.600',
              _icon: { color: 'neutral.100' },
            },
            _disabled: {
              bg: 'black.800',
              borderColor: 'black.500',
              _icon: { color: 'neutral.400' },
            },
          },
        },
        label: {
          color: 'neutral.500',
          _disabled: { color: 'neutral.200' },
          _dark: { color: 'neutral.100', _disabled: { color: 'neutral.400' } },
        },
      },
      sizes: {
        sm: { size: 4 },
        md: { size: 5 },
        lg: { size: 6 },
      },
      defaultProps: {
        size: 'md',
        colorScheme: 'brink-pink',
      },
    },

    // Switch Component
    Switch: {
      baseStyle: {
        track: {
          _off: {
            bg: 'neutral.200',
          },
          _on: {
            bg: 'brink-pink.500',
          },
          _disabled: {
            _off: { bg: 'neutral.200' },
            _on: { bg: 'brink-pink.200' },
          },
          _focus: {
            shadow: '0 0 0 2px',
            shadowColor: 'brink-pink.500',
          },
          _dark: {
            _off: { bg: 'black.500' },
            _on: { bg: 'brink-pink.600' },
            _disabled: {
              _off: { bg: 'black.500' },
              _on: { bg: 'brink-pink.400' },
            },
          },
        },
        thumb: {
          bg: 'neutral.50',
          _dark: { bg: 'black.900' },
        },
      },
      sizes: {
        sm: { thumbSize: 3, trackWidth: 10, trackHeight: 5 },
        md: { thumbSize: 4, trackWidth: 12, trackHeight: 6 },
        lg: { thumbSize: 5, trackWidth: 14, trackHeight: 7 },
      },
      defaultProps: {
        size: 'md',
        colorScheme: 'brink-pink',
      },
    },

    // Select Component
    Select: {
      baseStyle: {
        field: {
          bg: 'neutral.50',
          borderColor: 'neutral.200',
          _focus: { borderColor: 'brink-pink.500', bg: 'neutral.50' },
          _hover: { borderColor: 'brink-pink.100' },
          _invalid: { borderColor: 'danger.500' },
          _disabled: { bg: 'neutral.100', borderColor: 'neutral.200', color: 'neutral.500' },
          _dark: {
            bg: 'black.900',
            borderColor: 'black.500',
            _focus: { borderColor: 'brink-pink.600', bg: 'black.900' },
            _hover: { borderColor: 'brink-pink.600' },
            _invalid: { borderColor: 'danger.600' },
            _disabled: { bg: 'black.800', borderColor: 'black.500', color: 'neutral.500' },
          },
        },
      },
      sizes: {
        sm: { fontSize: 'sm', px: 3, py: 2 },
        md: { fontSize: 'md', px: 4, py: 3 },
        lg: { fontSize: 'lg', px: 5, py: 4 },
      },
      variants: {
        outline: {
          field: {
            borderWidth: 1,
            borderRadius: 'md',
          },
        },
        filled: {
          field: {
            borderWidth: 0,
            borderRadius: 'md',
          },
        },
        unstyled: {
          field: {
            borderWidth: 0,
            bg: 'transparent',
          },
        },
      },
      defaultProps: {
        size: 'md',
        variant: 'outline',
        colorScheme: 'brink-pink',
      },
    },

    // Slider Component
    Slider: {
      baseStyle: {
        track: {
          bg: 'neutral.200',
          height: '4px',
          _dark: {
            bg: 'neutral.500',
          },
        },
        filledTrack: {
          bg: 'brink-pink.500',
          _dark: {
            bg: 'brink-pink.600',
          },
        },
        thumb: {
          bg: 'brink-pink.500',
          borderColor: 'neutral.50',
          borderWidth: 2,
          _dark: {
            bg: 'brink-pink.600',
            borderColor: 'neutral.100',
          },
        },
        _disabled: {
          track: {
            bg: 'neutral.200',
          },
          filledTrack: {
            bg: 'brink-pink.200',
          },
          thumb: {
            bg: 'brink-pink.200',
            borderColor: 'neutral.200',
          },
        },
      },
      sizes: {
        sm: { thumbSize: 4 },
        md: { thumbSize: 5 },
        lg: { thumbSize: 6 },
      },
      defaultProps: {
        size: 'md',
        colorScheme: 'brink-pink',
      },
    },

    // Badge Component
    Badge: {
      baseStyle: {
        container: {
          bg: 'brink-pink.100',
          _text: {
            color: 'brink-pink.600',
            fontSize: 'xs',
            fontWeight: 'bold',
          },
          _dark: {
            bg: 'brink-pink.700',
            _text: {
              color: 'neutral.50',
            },
          },
        },
      },
      sizes: {
        sm: { px: 2, py: 1 },
        md: { px: 3, py: 2 },
        lg: { px: 4, py: 3 },
      },
      variants: {
        solid: {},
        subtle: {
          container: {
            bg: 'brink-pink.50',
            _text: {
              color: 'brink-pink.500',
            },
            _dark: {
              bg: 'brink-pink.600',
              _text: {
                color: 'neutral.100',
              },
            },
          },
        },
        outline: {
          container: {
            borderWidth: 1,
            borderColor: 'brink-pink.500',
            bg: 'transparent',
            _text: {
              color: 'brink-pink.500',
            },
            _dark: {
              borderColor: 'brink-pink.600',
              _text: {
                color: 'brink-pink.600',
              },
            },
          },
        },
      },
      defaultProps: {
        size: 'md',
        variant: 'solid',
        colorScheme: 'brink-pink',
      },
    },

    // Alert Component
    Alert: {
      baseStyle: {
        container: {
          flexDirection: 'row',
          alignItems: 'center',
          px: 4,
          py: 3,
          borderRadius: 'md',
          _dark: {
            bg: 'neutral.700',
          },
        },
        _text: {
          flex: 1,
          fontSize: 'md',
          fontWeight: 'medium',
          color: 'neutral.50',
          _dark: { color: 'neutral.50' },
        },
        _icon: {
          mr: 2,
          size: '6',
          color: 'neutral.50',
          _dark: { color: 'neutral.50' },
        },
      },
      variants: {
        info: {
          container: {
            bg: 'neutral.50',
            _dark: {
              bg: 'neutral.700',
            },
          },
          _text: { color: 'brink-pink.500', _dark: { color: 'neutral.50' } },
          _icon: { color: 'brink-pink.500', _dark: { color: 'neutral.50' } },
        },
        success: {
          container: {
            bg: 'success.100',
            _dark: {
              bg: 'success.700',
            },
          },
          _text: { color: 'success.700', _dark: { color: 'neutral.50' } },
          _icon: { color: 'success.500', _dark: { color: 'neutral.50' } },
        },
        warning: {
          container: {
            bg: 'warning.100',
            _dark: {
              bg: 'warning.700',
            },
          },
          _text: { color: 'warning.700', _dark: { color: 'neutral.50' } },
          _icon: { color: 'warning.500', _dark: { color: 'neutral.50' } },
        },
        danger: {
          container: {
            bg: 'danger.100',
            _dark: {
              bg: 'danger.700',
            },
          },
          _text: { color: 'danger.700', _dark: { color: 'neutral.50' } },
          _icon: { color: 'danger.500', _dark: { color: 'neutral.50' } },
        },
      },
      defaultProps: {
        variant: 'info',
      },
    },

    // Spinner Component
    Spinner: {
      baseStyle: {
        color: 'brink-pink.500',
        _dark: {
          color: 'brink-pink.600',
        },
      },
      sizes: {
        sm: { size: 'small' },
        md: { size: 'large' },
        lg: { size: 'xl' },
      },
      defaultProps: {
        size: 'md',
        colorScheme: 'brink-pink',
      },
    },

    // Avatar Component
    Avatar: {
      baseStyle: {
        bg: 'neutral.100',
        _text: {
          color: 'neutral.500',
        },
        _dark: {
          bg: 'black.900',
          _text: {
            color: 'neutral.100',
          },
        },
      },
      sizes: {
        sm: { size: 30 },
        md: { size: 40 },
        lg: { size: 50 },
        xl: { size: 60 },
      },
      defaultProps: {
        size: 'md',
        bg: 'neutral.100',
      },
    },

    // Progress Component
    Progress: {
      baseStyle: {
        track: {
          bg: 'neutral.200',
          height: '4px',
          borderRadius: 'full',
          _dark: {
            bg: 'neutral.500',
          },
        },
        filledTrack: {
          bg: 'brink-pink.500',
          _dark: {
            bg: 'brink-pink.600',
          },
        },
        _disabled: {
          filledTrack: {
            bg: 'brink-pink.200',
          },
        },
      },
      sizes: {
        sm: { height: '2px' },
        md: { height: '4px' },
        lg: { height: '6px' },
      },
      defaultProps: {
        size: 'md',
        colorScheme: 'brink-pink',
      },
    },

    // Text Component
    Text: {
      baseStyle: {
        color: 'neutral.500',
        _dark: { color: 'neutral.100' },
        _highlight: { color: 'brink-pink.500', fontWeight: 'bold' },
        _disabled: { color: 'neutral.200' },
      },
      sizes: {
        xs: { fontSize: 'xs' },
        sm: { fontSize: 'sm' },
        md: { fontSize: 'md' },
        lg: { fontSize: 'lg' },
        xl: { fontSize: 'xl' },
        '2xl': { fontSize: '2xl' },
      },
      variants: {
        default: {},
        subtle: {
          color: 'neutral.600',
          _dark: { color: 'neutral.300' },
        },
        link: {
          color: 'brink-pink.500',
          textDecoration: 'underline',
          _hover: { color: 'brink-pink.600' },
          _pressed: { color: 'brink-pink.700' },
          _disabled: { color: 'neutral.200' },
          _dark: {
            color: 'brink-pink.400',
            _hover: { color: 'brink-pink.500' },
            _pressed: { color: 'brink-pink.600' },
            _disabled: { color: 'neutral.400' },
          },
        },
        heading: {
          fontWeight: 'bold',
          color: 'neutral.700',
          _dark: { color: 'neutral.100' },
        },
      },
      defaultProps: {
        size: 'md',
        variant: 'default',
      },
    },

    // Modal Component
    Modal: {
      baseStyle: {
        dialog: {
          bg: 'neutral.50',
          _dark: {
            bg: 'black.900',
          },
          borderRadius: 'md',
          shadow: 2,
        },
        header: {
          _text: {
            fontSize: 'lg',
            fontWeight: 'bold',
            color: 'neutral.700',
            _dark: { color: 'neutral.100' },
          },
        },
        body: {
          _text: {
            color: 'neutral.500',
            _dark: { color: 'neutral.100' },
          },
        },
        footer: {
          flexDirection: 'row',
          justifyContent: 'flex-end',
        },
      },
      sizes: {
        sm: {
          dialog: { width: '90%' },
        },
        md: {
          dialog: { width: '95%' },
        },
        lg: {
          dialog: { width: '100%' },
        },
      },
      defaultProps: {
        size: 'md',
      },
    },

    // Tooltip Component
    Tooltip: {
      baseStyle: {
        container: {
          bg: 'neutral.700',
          _text: { color: 'neutral.50', fontSize: 'sm' },
          px: 3,
          py: 2,
          borderRadius: 'md',
          _dark: { bg: 'neutral.700' },
        },
      },
      defaultProps: {
        placement: 'top',
      },
    },

    // Toast Component
    Toast: {
      baseStyle: {
        container: {
          bg: 'neutral.800',
          _text: { color: 'neutral.50' },
          borderRadius: 'md',
          px: 4,
          py: 3,
          _dark: { bg: 'neutral.800' },
        },
      },
      variants: {
        success: {
          container: {
            bg: 'success.500',
            _text: { color: 'neutral.50' },
          },
        },
        error: {
          container: {
            bg: 'danger.500',
            _text: { color: 'neutral.50' },
          },
        },
        warning: {
          container: {
            bg: 'warning.500',
            _text: { color: 'neutral.50' },
          },
        },
        info: {
          container: {
            bg: 'brink-pink.500',
            _text: { color: 'neutral.50' },
          },
        },
      },
      defaultProps: {
        variant: 'info',
      },
    },

    // Tag Component
    Tag: {
      baseStyle: {
        container: {
          bg: 'brink-pink.100',
          _text: { color: 'brink-pink.600', fontSize: 'xs' },
          borderRadius: 'full',
          px: 2,
          py: 1,
          _dark: {
            bg: 'brink-pink.700',
            _text: { color: 'neutral.50' },
          },
        },
      },
      variants: {
        solid: {},
        subtle: {
          container: {
            bg: 'brink-pink.50',
            _text: { color: 'brink-pink.500' },
            _dark: {
              bg: 'brink-pink.600',
              _text: { color: 'neutral.100' },
            },
          },
        },
        outline: {
          container: {
            bg: 'transparent',
            borderWidth: 1,
            borderColor: 'brink-pink.500',
            _text: { color: 'brink-pink.500' },
            _dark: {
              borderColor: 'brink-pink.600',
              _text: { color: 'brink-pink.600' },
            },
          },
        },
      },
      sizes: {
        sm: { px: 2, py: 1 },
        md: { px: 3, py: 2 },
        lg: { px: 4, py: 3 },
      },
      defaultProps: {
        variant: 'solid',
        size: 'md',
        colorScheme: 'brink-pink',
      },
    },

    // Divider Component
    Divider: {
      baseStyle: {
        bg: 'neutral.200',
        _dark: { bg: 'neutral.500' },
        thickness: '1px',
      },
      defaultProps: {},
    },

    // Additional Components can be customized similarly
  },
});

export default theme;
