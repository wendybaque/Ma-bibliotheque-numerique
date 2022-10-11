import React, { useState, useEffect, useContext } from "react";
import ReactTooltip from "react-tooltip";
import { FirebaseContext } from "./Firebase";

function Logout() {
  const firebase = useContext(FirebaseContext);

  const [checked, setChecked] = useState(false);

  console.log(checked);

  useEffect(() => {
    if (checked) {
      console.log("déconnexion");
      firebase.signoutUser();
    }
  }, [checked, firebase]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div
      className="absolute top-1/4 right-10 h-16 w-16 drop-shadow-2xl "
      data-tip="Déconnexion"
    >
      <label htmlFor="checked-toggle" className="relative cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          value=""
          id="checked-toggle"
          className="sr-only peer"
          onChange={handleChange}
        />
        <div className="w-12 h-6 bg-yellow-600 rounded-full peer peer-focus:ring-4 peer-focus:ring-yellow-600 dark:peer-focus:ring-yellow-900 dark:bg-gray-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-100 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-100 peer-checked:bg-yellow-900 sm:peer-checked:bg-yellow-600" />
        <ReactTooltip place="left" effect="solid" />
      </label>
    </div>
  );
}

export default Logout;
