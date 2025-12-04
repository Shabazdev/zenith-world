import React from "react";
import { Link } from "react-router-dom";
import {
  Search,
  User,
  ShoppingCart,
  X,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [notificationOpen, setNotificationOpen] = React.useState(true);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Notification Bar */}
      {notificationOpen && (
        <div className="w-full bg-[#38cb89] px-4 md:px-20 py-2 flex items-center justify-between gap-2 md:gap-10 flex-wrap">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex items-center gap-2 md:gap-3 font-semibold text-xs md:text-sm">
              <span>🎟️</span>
              <span className="text-black">
                30% off storewide — Limited time!
              </span>
            </div>
          </div>
          <button
            onClick={() => setNotificationOpen(false)}
            className="hidden md:flex items-center gap-2 text-black font-medium text-sm border-b border-black pb-1 hover:opacity-70"
          >
            Shop Now
          </button>
          <button
            onClick={() => setNotificationOpen(false)}
            className="ml-auto text-black hover:opacity-70"
          >
            <X size={16} className="md:w-5 md:h-5" />
          </button>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="w-full bg-white border-b border-gray-200 md:px-20 px-4 py-4">
        <div className="flex items-center justify-between gap-4 md:gap-10">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-medium">
            3legant<span className="text-gray-500">.</span>
          </Link>

          {/* Nav Links - Hidden on Mobile */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-900">
            <Link to="/" className="hover:opacity-70">
              Home
            </Link>
            <Link to="/" className="hover:opacity-70">
              Shop
            </Link>
            <Link to="/" className="hover:opacity-70">
              Product
            </Link>
            <Link to="/" className="hover:opacity-70">
              Contact Us
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 md:gap-4">
            <button className="hover:opacity-70">
              <Search size={20} className="md:w-6 md:h-6" />
            </button>
            <button className="hover:opacity-70">
              <User size={20} className="md:w-6 md:h-6" />
            </button>
            <button className="hover:opacity-70">
              <ShoppingCart size={20} className="md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="w-full bg-black text-white">
        <div className="px-4 md:px-20 py-12 md:py-20">
          {/* Top Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-12 md:mb-16">
            {/* Branding */}
            <div className="col-span-2 md:col-span-1">
              <h2 className="text-xl md:text-2xl font-medium mb-4 md:mb-8">
                3legant<span className="text-gray-500">.</span>
              </h2>
              <p className="text-white font-medium mb-4 md:mb-8 text-sm md:text-base">
                More than just a game. It's a lifestyle.
              </p>
              <div className="flex gap-4 md:gap-6">
                <a href="#" className="hover:opacity-70">
                  <Instagram size={20} className="md:w-6 md:h-6" />
                </a>
                <a href="#" className="hover:opacity-70">
                  <Facebook size={20} className="md:w-6 md:h-6" />
                </a>
                <a href="#" className="hover:opacity-70">
                  <Youtube size={20} className="md:w-6 md:h-6" />
                </a>
              </div>
            </div>

            {/* Page Links */}
            <div>
              <h3 className="font-medium text-white mb-4 md:mb-8 text-sm md:text-base">
                Page
              </h3>
              <div className="space-y-3 md:space-y-6 text-xs md:text-sm text-gray-300">
                <Link to="/" className="block hover:text-white">
                  Home
                </Link>
                <Link to="/" className="block hover:text-white">
                  Shop
                </Link>
                <Link to="/" className="block hover:text-white">
                  Product
                </Link>
                <Link to="/" className="block hover:text-white">
                  Articles
                </Link>
                <Link to="/" className="block hover:text-white">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Info Links */}
            <div>
              <h3 className="font-medium text-white mb-4 md:mb-8 text-sm md:text-base">
                Info
              </h3>
              <div className="space-y-3 md:space-y-6 text-xs md:text-sm text-gray-300">
                <Link to="/" className="block hover:text-white">
                  Shipping Policy
                </Link>
                <Link to="/" className="block hover:text-white">
                  Return & Refund
                </Link>
                <Link to="/" className="block hover:text-white">
                  Support
                </Link>
                <Link to="/" className="block hover:text-white">
                  FAQs
                </Link>
              </div>
            </div>

            {/* Office */}
            <div>
              <h3 className="font-medium text-white mb-4 md:mb-8 text-sm md:text-base">
                Office
              </h3>
              <div className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-300">
                <p>43111 Hai Trieu street,</p>
                <p>District 1, HCMC</p>
                <p>Vietnam</p>
                <p className="mt-2 md:mt-4">84-756-3237</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6 md:pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-xs text-gray-400">
              Copyright © 2023 3legant. All rights reserved
            </p>
            <div className="flex gap-2 md:gap-4 text-xs text-gray-500">
              <Link to="/" className="hover:text-gray-300">
                Privacy Policy
              </Link>
              <span className="text-gray-700 hidden md:block">|</span>
              <Link to="/" className="hover:text-gray-300">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
