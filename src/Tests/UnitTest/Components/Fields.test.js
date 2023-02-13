import { render} from "@testing-library/react";
import Fields from "../../../Components/Fields/Fields";

test("field component correctly rendered", () => {
    render( <Fields fieldName="Farm" value={123} message="unable to fetch" /> )
});