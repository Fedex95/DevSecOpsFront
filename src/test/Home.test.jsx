import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../components/home/Home';

describe('Home Component', () => {
  test('renders welcome message', () => {
    render(<Home />);
    expect(screen.getByText('Bienvenido a Library Master')).toBeInTheDocument();
  });

  test('renders list of libros', () => {
    render(<Home />);
    expect(screen.getByText('Libro 1')).toBeInTheDocument();
    expect(screen.getByText('Libro 2')).toBeInTheDocument();
  });
});