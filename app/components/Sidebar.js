import React from "react";

const Sidebar = () => {
  return (
    <> 
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost hover:bg-neutral drawer-button">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="drawer-overlay menu p-4 w-80 text-base-content bg-secondary">
            {/* Sidebar content here */}
            <li>
            <a className="text-xl">Personalized Treatment Plan</a>
            <ul>
              <a className="pl-6 menu bg-base-200 text-base-content text-lg hover:text-accent rounded-lg">
                Pain Management
              </a>
              <a className="pl-6 menu bg-base-200 text-base-content text-lg hover:text-accent rounded-lg">
                Medication
              </a>
              <a className="pl-6 menu bg-base-200 text-base-content text-lg hover:text-accent rounded-lg">
                Nutrition & Diet
              </a>
              <a className="pl-6 menu bg-base-200 text-base-content text-lg hover:text-accent rounded-lg">
                Exercise
              </a>
            </ul>
          </li>
          <li>
            <a className="text-xl hover:text-accent">Insights</a>
          </li>
          <li>
            <a className="text-xl hover:text-accent">Past Symptoms</a>
          </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
