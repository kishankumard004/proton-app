import { yellow } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      appBackground: string;
      buttonBorderRadius: number;
    },
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  // Allow configuration using `createTheme`
  interface ThemeOptions {
    custom?: {
      appBackground?: string;
      buttonBorderRadius?: number;
    };
    status?: {
      danger?: React.CSSProperties["color"];
    };
  }
}

// Create a theme instance with the new `status` field.
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#d32f2f",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  custom: {
    appBackground: '#ffffff',
    buttonBorderRadius: 8,
  },
});

// Dark theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#121212",
    },
  },
  custom: {
    appBackground: '#000000',
    buttonBorderRadius: 8,
  },
});
