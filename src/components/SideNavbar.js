import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BadgeIcon from "@mui/icons-material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MapIcon from "@mui/icons-material/Map";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Button from "@mui/material/Button";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

function SideNavbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-display">
      <div
        className={`fixed top-0 left-0 min-h-screen flex flex-col m-0 border-r-[1px] w-1/6 ${
          !isMenuOpen ? "hidden md:flex" : ""
        }`}
      >
        <div className="ml-7 mt-6 font-bold w-10 flex">
          <img
            src="https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/348222175_646842823933353_1170260518621105921_n.jpg?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeENm_a4MJ1I9t7Fd3RsFYBO53Hz4IGzrsLncfPggbOuwimSmCUMIpozr5O6olwDQg2jopvofSXmAPja2NhfjZD-&_nc_ohc=Z2JixjQP7z0AX81HMoe&_nc_ht=scontent.fbkk13-1.fna&oh=00_AfAItKlHN1KHrLZuCwbjy1CZeBaGKe1WLrn5xFukF1F2jg&oe=648F1323"
            alt="logo"
          ></img>
          <div className="ml-4  my-auto">Baoji</div>
        </div>

        <div className="flex mx-6 mt-12 justify-between bg-slate-100 px-6 py-6 rounded-xl">
          <div>
            <AccountCircleIcon fontSize="large"></AccountCircleIcon>
          </div>{" "}
          <div className="my-auto">Jane Smith</div>
          
        </div>

        <div className="flex mx-6 px-6 mt-8">
          <Button variant="outlined" color="error" sx={{ width: 300 }}>
            Log out
          </Button>
        </div>

        <div className="flex flex-col mx-6 mt-14 rounded-xl">
          <Link to="/Employee">
            <div
              className={`flex mb-8 ${
                location.pathname === "/Employee" ? "bg-gray-200" : ""
              } px-2 py-2 rounded-md hover:bg-gray-200 transition duration-500`}
            >
              <div className="mr-2 pb-1">
                <BadgeIcon fontSize="medium"></BadgeIcon>
              </div>{" "}
              <div className="my-auto">Employee</div>
            </div>
          </Link>
          <Link to="/Counter">
            <div
              className={`flex mb-8 ${
                location.pathname === "/Counter" ? "bg-gray-200" : ""
              } px-2 py-2 rounded-md hover:bg-gray-200 transition duration-500`}
            >
              <div className="mr-2">
                <MapIcon></MapIcon>
              </div>{" "}
              <div className="my-auto">Counter</div>
            </div>
          </Link>
          <Link to="/Shift">
            <div
              className={`flex mb-8 ${
                location.pathname === "/Shift" ? "bg-gray-200" : ""
              } px-2 py-2 rounded-md hover:bg-gray-200 transition duration-500`}
            >
              <div className="mr-2 ">
                <TrackChangesIcon></TrackChangesIcon>
              </div>{" "}
              <div className="my-auto">Shift</div>
            </div>
          </Link>
          <Link to="/CounterWork">
            <div
              className={`flex mb-8 ${
                location.pathname === "/CounterWork" ? "bg-gray-200" : ""
              } px-2 py-2 rounded-md hover:bg-gray-200 transition duration-500`}
            >
              <div className="mr-2">
                <AccessTimeIcon></AccessTimeIcon>
              </div>{" "}
              <div className="my-auto"> CounterWork</div>
            </div>
          </Link>
          <Link to="/CheckIn">
            <div
              className={`flex mb-8 ${
                location.pathname === "/CheckIn" ? "bg-gray-200" : ""
              } px-2 py-2 rounded-md hover:bg-gray-200 transition duration-500`}
            >
              <div className="mr-2">
                <EventAvailableIcon></EventAvailableIcon>
              </div>{" "}
              <div className="my-auto"> Check In</div>
            </div>
          </Link>
        </div>
      </div>

      <div className="fixed top-0 left-0 md:hidden">
        <IconButton
          color="primary"
          aria-label="menu"
          onClick={toggleMenu}
          sx={{ m: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default SideNavbar;
