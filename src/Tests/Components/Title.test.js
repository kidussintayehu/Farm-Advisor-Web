import { render, screen} from "@testing-library/react";
import Title from "../../Components/Title/Title";

test("mapbox-gl/dist/mapbox-gl", () => {
    render( <Title/> )
    const h1Element = screen.getByText(/Last sensor reset/)
    expect(h1Element).toBeInTheDocument()
});