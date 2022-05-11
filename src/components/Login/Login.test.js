/* eslint-disable react/jsx-filename-extension */
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Login from './Login';
// pasarle las props al componente
test('renders Login component', () => {
  render(<BrowserRouter><Login /></BrowserRouter>);
  expect(screen.getByText(/Registrate/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Correo electronico'));
  expect(screen.getByPlaceholderText('Contraseña'));
});
