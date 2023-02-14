import { render} from "@testing-library/react";
import Button from "../../../Components/Button/ButtonField";
import { click } from "@testing-library/user-event/dist/click";

test("mapbox-gl/dist/mapbox-gl", () => {
    render( <Button text={"Add new Farm"} onClick={click} /> )
});