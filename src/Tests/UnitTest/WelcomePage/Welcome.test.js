import { render, screen} from '@testing-library/react';
import Welcome from '../../../Pages/Welcome/Welcome';

test('renders the greeter correctly', () => {
  render(<Welcome />);
  const h1Element = screen.getByText(/Welcome to Agino/)
  expect(h1Element).toBeInTheDocument()
});
