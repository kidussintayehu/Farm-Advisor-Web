import AddOptionMenu from "../Menu/AddOptionMenu";
import ProfileOptionMenu from "../Menu/ProfileOptionMenu";
import {Link} from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="w-full bg-emerald-900 shadow">
      <div className="justify-between md:items-center md:flex px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block text-green">
          <Link to="/">
            <h2 className="text-2xl font-bold text-green-400 object-left-top">
              agino
            </h2>
          </Link>
        </div>
        <div className="hidden space-x-4 md:inline-block">
          <AddOptionMenu />
          <ProfileOptionMenu />
        </div>
      </div>
    </nav>
  );
}
