/* eslint-disable react/jsx-filename-extension */
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

test('renders logo of take notes', () => {
  render(<Logo />);
  expect(screen.getByRole('img', { alt: 'logo of take notes' })).toBeInTheDocument();
});
