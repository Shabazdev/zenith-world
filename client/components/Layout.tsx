import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingCart, X, Instagram, Facebook, Youtube } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [notificationOpen, setNotificationOpen] = React.useState(true);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Notification Bar */}
      {notificationOpen && (
        <div className="w-full bg-[#38cb89] px-20 py-2 flex items-center justify-between gap-10 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 font-semibold text-sm">
              <span>🎟️</span>
              <span className="text-black">30% off storewide — Limited time!</span>
            </div>
          </div>
          <button
            onClick={() => setNotificationOpen(false)}
            className="flex items-center gap-2 text-black font-medium text-sm border-b border-black pb-1 hover:opacity-70"
          >
            Shop Now
          </button>
          <button
            onClick={() => setNotificationOpen(false)}
            className="ml-auto text-black hover:opacity-70"
          >
            <X size={20} />
          </button>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="w-full bg-white border-b border-gray-200 px-20 py-4">
        <div className="flex items-center justify-between gap-10 flex-wrap">
          {/* Logo */}
          <Link to="/" className="text-2xl font-medium">
            3legant<span className="text-gray-500">.</span>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-10 text-sm font-medium text-gray-900">
            <Link to="/" className="hover:opacity-70">Home</Link>
            <Link to="/" className="hover:opacity-70">Shop</Link>
            <Link to="/" className="hover:opacity-70">Product</Link>
            <Link to="/" className="hover:opacity-70">Contact Us</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="hover:opacity-70">
              <Search size={24} />
            </button>
            <button className="hover:opacity-70">
              <User size={24} />
            </button>
            <button className="hover:opacity-70">
              <ShoppingCart size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full bg-black text-white">
        <div className="px-20 py-20">
          {/* Top Section */}
          <div className="flex justify-between gap-10 mb-16 flex-wrap">
            {/* Branding */}
            <div className="max-w-sm">
              <h2 className="text-2xl font-medium mb-8">
                3legant<span className="text-gray-500">.</span>
              </h2>
              <p className="text-white font-medium mb-8">More than just a game. It's a lifestyle.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:opacity-70">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:opacity-70">
                  <Facebook size={24} />
                </a>
                <a href="#" className="hover:opacity-70">
                  <Youtube size={24} />
                </a>
              </div>
            </div>

            {/* Page Links */}
            <div>
              <h3 className="font-medium text-white mb-8">Page</h3>
              <div className="space-y-6 text-sm text-gray-300">
                <Link to="/" className="block hover:text-white">Home</Link>
                <Link to="/" className="block hover:text-white">Shop</Link>
                <Link to="/" className="block hover:text-white">Product</Link>
                <Link to="/" className="block hover:text-white">Articles</Link>
                <Link to="/" className="block hover:text-white">Contact Us</Link>
              </div>
            </div>

            {/* Info Links */}
            <div>
              <h3 className="font-medium text-white mb-8">Info</h3>
              <div className="space-y-6 text-sm text-gray-300">
                <Link to="/" className="block hover:text-white">Shipping Policy</Link>
                <Link to="/" className="block hover:text-white">Return & Refund</Link>
                <Link to="/" className="block hover:text-white">Support</Link>
                <Link to="/" className="block hover:text-white">FAQs</Link>
              </div>
            </div>

            {/* Office */}
            <div>
              <h3 className="font-medium text-white mb-8">Office</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <p>43111 Hai Trieu street,</p>
                <p>District 1, HCMC</p>
                <p>Vietnam</p>
                <p className="mt-4">84-756-3237</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8 flex items-center justify-between flex-wrap gap-4">
            <p className="text-xs text-gray-400">Copyright © 2023 3legant. All rights reserved</p>
            <div className="flex gap-4 text-xs text-gray-500">
              <Link to="/" className="hover:text-gray-300">Privacy Policy</Link>
              <span className="text-gray-700">|</span>
              <Link to="/" className="hover:text-gray-300">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
