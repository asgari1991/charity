import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ children, title }) {
  const navigate = useNavigate();
  const username = localStorage.getItem("name");

  const handleExit = () => {
    console.log("Exit button clicked");
    localStorage.removeItem("token")
    navigate("/")

  };

  return (
    <div className="h-[60px] flex justify-between items-center">
      <div className="flex items-center gap-x-3">
        {children}
        <span className="font-DanaDemiBold text-base">{title}</span>
      </div>
      
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <MenuButton className="flex items-center gap-x-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-full p-1">
              <img
                src="./img/moh.jpeg"
                alt="profile pic"
                className="w-8 h-8 rounded-full cursor-pointer hover:opacity-80 transition-opacity ring-2 ring-offset-2 ring-transparent "
              />
              <svg
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              >
                <path d="M5.6203 6L10.4005 0H0.840087L5.6203 6Z" fill="#4E6F88" />
              </svg>
            </MenuButton>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute -right-36 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                {/* User info section */}
                <div className="px-4 py-3">
                  <p className="text-sm text-start font-medium text-gray-900">{username || ""}</p>
                  {/* <p className="text-xs text-gray-500 truncate">moh@example.com</p> */}
                </div>
                
                {/* <div className="py-1">
                  <MenuItem>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-gray-50 text-gray-900' : 'text-gray-700'
                        } group flex w-full items-center px-4 py-2.5 text-sm transition-colors duration-150`}
                        onClick={() => console.log("Profile clicked")}
                      >
                        Profile Settings
                      </button>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-gray-50 text-gray-900' : 'text-gray-700'
                        } group flex w-full items-center px-4 py-2.5 text-sm transition-colors duration-150`}
                        onClick={() => console.log("Account clicked")}
                      >
                        Account
                      </button>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-gray-50 text-gray-900' : 'text-gray-700'
                        } group flex w-full items-center px-4 py-2.5 text-sm transition-colors duration-150`}
                        onClick={() => console.log("Notifications clicked")}
                      >
                        Notifications
                      </button>
                    )}
                  </MenuItem>
                </div> */}
                
                <div className="py-1">
                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={handleExit}
                        className={`${
                          active ? 'bg-red-50 text-red-700' : 'text-red-600'
                        } group flex w-full items-center px-4 py-2.5 text-sm transition-colors duration-150`}
                      >
                        <div className="flex items-center gap-x-2">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
                            />
                          </svg>
                          <span className="font-medium">خروج</span>
                        </div>
                      </button>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}