import { useAuthStore } from '../store/authStore';

export default function Hero() {
  const { isLoggedIn, login, logout } = useAuthStore();
  return (
    <section className="relative overflow-hidden py-20 sm:py-32" style={{ backgroundColor: 'var(--purple-deep)' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" style={{ backgroundColor: 'var(--gold-honey)' }}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" style={{ backgroundColor: 'var(--gold-honey)' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Main Headline */}
          <h1 className="mb-6 leading-tight" style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--gold-honey)' }}>
            Welcome to Emersons
            <span className="block mt-4" style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', color: 'var(--gold-honey)', fontWeight: 600 }}>
              One platform 
            </span>
          </h1>

          {/* Subtext */}
          <p className="max-w-2xl mb-12 leading-relaxed" style={{ fontSize: '16px', color: 'var(--purple-mist)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>
            Three powerful tools.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {!isLoggedIn ? (
              <>
                <button className="px-8 py-4 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl" style={{ backgroundColor: 'var(--gold-honey)', color: 'var(--neutral-obsidian)' }}>
                  Explore all Products
                </button>
                <button
                  onClick={login}
                  className="px-8 py-4 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-200"
                  style={{ backgroundColor: 'transparent', border: `2px solid var(--gold-honey)`, color: 'var(--gold-honey)' }}
                >
                  Log in to dashboard
                </button>
              </>
            ) : (
              <>
                <button className="px-8 py-4 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl" style={{ backgroundColor: 'var(--gold-honey)', color: 'var(--neutral-obsidian)' }}>
                  Go to Dashboard
                </button>
                <button
                  onClick={logout}
                  className="px-8 py-4 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-200"
                  style={{ backgroundColor: 'transparent', border: `2px solid var(--gold-honey)`, color: 'var(--gold-honey)' }}
                >
                  Log Out
                </button>
              </>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 w-full" style={{ borderTop: `1px solid var(--gold-honey)` }}>
            <p className="mb-4" style={{ fontSize: '12px', color: 'var(--gold-honey)', fontFamily: 'var(--font-body)', fontWeight: 300 }}>Trusted by leading companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="font-semibold" style={{ color: 'var(--gold-honey)', fontSize: '13px' }}>Company 1</div>
              <div className="font-semibold" style={{ color: 'var(--gold-honey)', fontSize: '13px' }}>Company 2</div>
              <div className="font-semibold" style={{ color: 'var(--gold-honey)', fontSize: '13px' }}>Company 3</div>
              <div className="font-semibold" style={{ color: 'var(--gold-honey)', fontSize: '13px' }}>Company 4</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={{ color: 'var(--gold-honey)' }}
        >
          <path d="M19 14l-7 7m0 0l-7 -7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
