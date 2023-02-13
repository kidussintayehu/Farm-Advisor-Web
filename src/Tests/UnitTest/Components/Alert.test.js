import { render} from "@testing-library/react";
import Alerts from "../../../Components/Alerts/Alerts";
test("mapbox-gl/dist/mapbox-gl", () => {
    render( <Alerts name="Low battery" value={23132} day="Today"/> )
});