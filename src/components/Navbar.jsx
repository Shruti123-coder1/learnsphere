﻿import { useState } from "react";
import { Link } from "react-router-dom";
import NotificationButton from "./NotificationButton";
import NotificationPanel from "./NotificationPanel";
import notifications from "../data/notifications";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "My Learning", path: "/mylearning" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-sm font-bold text-white shadow-lg shadow-blue-500/25">
              LS
            </div>

            <span className="text-xl font-bold text-blue-600">
              LearnSphere
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-base font-medium text-gray-600 transition-colors hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden items-center gap-4 md:flex">
            {/* Search */}
            <button
              className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Search"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Notification */}
            <div className="relative">
              <NotificationButton
                unreadCount={unreadCount}
                isOpen={notificationsOpen}
                onClick={() =>
                  setNotificationsOpen(!notificationsOpen)
                }
              />

              <NotificationPanel
                notifications={notifications}
                isOpen={notificationsOpen}
                onClose={() => setNotificationsOpen(false)}
              />
            </div>

            {/* Auth */}
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="rounded-lg px-4 py-2 font-medium text-gray-600 transition hover:text-blue-600"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-blue-600/25 transition duration-300 hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Right */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="relative">
              <NotificationButton
                unreadCount={unreadCount}
                isOpen={notificationsOpen}
                onClick={() =>
                  setNotificationsOpen(!notificationsOpen)
                }
              />

              <NotificationPanel
                notifications={notifications}
                isOpen={notificationsOpen}
                onClose={() => setNotificationsOpen(false)}
              />
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="space-y-2 border-t border-gray-100 py-4 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2 text-base text-gray-600 transition hover:bg-gray-50 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-3 flex flex-col gap-2 border-t border-gray-100 px-3 pt-3">
              <Link
                to="/login"
                className="py-2 font-medium text-gray-600 hover:text-blue-600"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-lg bg-blue-600 py-2 text-center text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;