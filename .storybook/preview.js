import { ThemeProvider } from 'theme-ui';
import { CustomTheme } from '../src/theme/index';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={CustomTheme}>
      <div style={{ maxWidth: 1280 }}>
        <Story/>
      </div>
    </ThemeProvider>
  ),
];
