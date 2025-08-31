import { Link } from "react-router";
import logo from "../assets/more/logo1.png";
import { useContext } from "react";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../Authentication/contexts/AuthContext";

const Header = () => {
   const { user, logOutUser } = useContext(AuthContext);

   return (
      <div className="headerBgImg py-2">
         <div className="flex justify-between items-center px-14">
            <div className="flex items-center">
               <img src={logo} alt="logo" className="w-14 mr-3" />
               <Link
                  to={"/"}
                  className="rancho text-4xl text-white hidden lg:block"
               >
                  Espresso Emporium
               </Link>
            </div>

            <div className="flex items-center text-white space-x-5 tracking-widest">
               <Link to={"/users"} className={"rancho"}>
                  All Users
               </Link>

               {user ? (
                  <>
                     <div
                        className="avatar avatar-online"
                        data-tooltip-id="user-tooltip"
                        data-tooltip-place="bottom"
                     >
                        <div className="w-10 rounded-full ring-[#D2B48C] ring-1 ring-offset-2">
                           <img
                              src={
                                 user?.photoURL
                                    ? user.photoURL
                                    : "https://i.ibb.co/mFrvXNpF/avatar.png"
                              }
                              alt="User Avatar"
                           />
                        </div>
                     </div>

                     <Tooltip
                        id="user-tooltip"
                        className="text-black bg-[#D2B48C]"
                        clickable={true}
                        style={{
                           backgroundColor: "#000",
                           color: "#000",
                           padding: "20px",
                           borderRadius: "5px",
                           textAlign: "center",
                           fontSize: "14px",
                        }}
                     >
                        <div>
                           <div>
                              <h4 className="text-[17px] text-white font-semibold capitalize">
                                 {user?.displayName}
                              </h4>
                              <p className="text-white text-[14px]">
                                 {user?.email}
                              </p>
                           </div>

                           <button
                              onClick={() => logOutUser()}
                              className="btn btn-primary hover:bg-accent text-white rounded-none yesevaOne tracking-widest mt-4"
                           >
                              Sign Out
                           </button>
                        </div>
                     </Tooltip>
                  </>
               ) : (
                  <>
                     <div className="hidden md:block space-x-3">
                        <Link to={"/signin"} className="rancho">
                           Sign In
                        </Link>
                     </div>
                  </>
               )}
            </div>
         </div>
      </div>
   );
};

export default Header;
