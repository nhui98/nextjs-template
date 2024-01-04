import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { HeadingGroup } from './heading-group';

test('HeadingGroup', () => {
  render(<HeadingGroup />);
  expect(
    screen.getByRole('heading', { level: 1, name: 'Hi There!' }),
  ).toBeDefined();
  expect(screen.getByText('Welcome to my nextjs template.')).toBeDefined();
});
