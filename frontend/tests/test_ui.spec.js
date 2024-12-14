import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders the main header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Welcome to My App/i);
  expect(headerElement).toBeInTheDocument();
});
