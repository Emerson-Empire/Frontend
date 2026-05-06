import { useMenuStore } from '../store/menuStore';
import { useAuthStore } from '../store/authStore';

export default function Navbar() {
  const { isOpen, toggle, close } = useMenuStore();
  const { isLoggedIn, login, logout } = useAuthStore();

  const handleAuth = () => {
    if (isLoggedIn) {
      logout();
    } else {
      login();
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white shadow-lg border-b-2" style={{ borderColor: 'var(--gold-honey)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="px-4 py-2 font-semibold text-2xl transition-colors duration-200" style={{ color: 'var(--purple-deep)', fontFamily: 'var(--font-display)' }}>
                EMERSON
              </div>
            </div>

            {/* Center Navigation - Hidden on Mobile */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#"
                className="font-medium transition-colors duration-200"
                style={{ color: 'var(--neutral-slate)', fontSize: '13px', fontWeight: 500 }}
              >
                PRODUCTS
              </a>
              <a
                href="#"
                className="font-medium transition-colors duration-200"
                style={{ color: 'var(--neutral-slate)', fontSize: '13px', fontWeight: 500 }}
              >
                ABOUT
              </a>
              <a
                href="#"
                className="font-medium transition-colors duration-200"
                style={{ color: 'var(--neutral-slate)', fontSize: '13px', fontWeight: 500 }}
              >
                CONTACT
              </a>
            </div>

            {/* Right Auth Buttons - Hidden on Mobile */}
            <div className="hidden md:flex items-center gap-4">
              {!isLoggedIn ? (
                <>
                  <button
                    onClick={handleAuth}
                    className="px-4 py-2 font-medium rounded transition-all duration-200 text-white"
                    style={{ backgroundColor: 'var(--purple-deep)' }}
                  >
                    Login
                  </button>
                  <button className="px-6 py-2 font-medium rounded transition-all duration-200 text-white hover:shadow-lg"
                    style={{ backgroundColor: 'var(--gold-honey)', color: 'var(--neutral-obsidian)' }}
                  >
                    Get Started
                  </button>
                </>
              ) : (
                <>
                  <button className="px-4 py-2 font-medium rounded transition-all duration-200" style={{ color: 'var(--purple-deep)' }}>
                      Dashboard
                  </button>
                  <button
                    onClick={handleAuth}
                    className="px-6 py-2 font-medium rounded transition-all duration-200 text-white"
                    style={{ backgroundColor: 'var(--gold-honey)', color: 'var(--neutral-obsidian)' }}
                  >
                    Logout
                  </button>
                </>
              )}
            </div>

            {/* Hamburger Menu - Visible on Mobile */}
            <button
              onClick={toggle}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset transition-colors duration-200"
              style={{ color: 'var(--purple-deep)', '--tw-ring-color': 'var(--purple-royal)' } as React.CSSProperties}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-30">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={close}
          ></div>

          {/* Drawer */}
          <div className="fixed left-0 top-16 right-0 shadow-lg animate-in slide-in-from-top-2 duration-300" style={{ backgroundColor: 'var(--neutral-white)' }}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                style={{ color: 'var(--neutral-slate)' }}
                onClick={close}
              >
                OUR SERVICES
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                style={{ color: 'var(--neutral-slate)' }}
                onClick={close}
              >
                About
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                style={{ color: 'var(--neutral-slate)' }}
                onClick={close}
              >
                Contact
              </a>

              {/* Mobile Auth Buttons */}
              <div className="pt-2 mt-2 space-y-2" style={{ borderTop: `1px solid var(--purple-mist)` }}>
                {!isLoggedIn ? (
                  <>
                    <button
                      onClick={() => {
                        handleAuth();
                        close();
                      }}
                      className="w-full px-4 py-2 font-medium rounded-md text-left transition-colors duration-200 text-white"
                      style={{ backgroundColor: 'var(--purple-deep)' }}
                    >
                      Login
                    </button>
                    <button className="w-full px-4 py-2 text-white font-medium rounded-md transition-colors duration-200" style={{ backgroundColor: 'var(--gold-honey)', color: 'var(--neutral-obsidian)' }}>
                      Get Started
                    </button>
                  </>
                ) : (
                  <>
                    <button className="w-full px-4 py-2 font-medium rounded-md text-left transition-colors duration-200" style={{ color: 'var(--purple-deep)' }}>
                      Dashboard
                    </button>
                    <button
                      onClick={() => {
                        handleAuth();
                        close();
                      }}
                      className="w-full px-4 py-2 text-white font-medium rounded-md transition-colors duration-200"
                      style={{ backgroundColor: 'var(--gold-honey)', color: 'var(--neutral-obsidian)' }}
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
