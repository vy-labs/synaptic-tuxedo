import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Theme from 'theme';

export function renderWithTheme(component) {
  return renderer.create(
    <ThemeProvider theme={Theme}>{component}</ThemeProvider>
  );
}
