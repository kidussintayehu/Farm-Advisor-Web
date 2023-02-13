import { render} from "@testing-library/react";
import Button from "../../../Components/button/button.component";
test("Button component correctly rendered", () => {
    render( <Button children={"Add new Farm"} buttonType="" /> )
});