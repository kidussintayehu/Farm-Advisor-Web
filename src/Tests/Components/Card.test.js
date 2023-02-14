import { render, screen} from '@testing-library/react';
import Card from "../../Components/Card/Card";

test('renders the  correctly', () => {
  render(<Card />);
  const h1Element = screen.getByText(/5 days/)
  expect(h1Element).toBeInTheDocument()
});
