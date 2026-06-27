interface WaveDecorationProps {
  variant?: 'hero' | 'section' | 'footer';
  className?: string;
}

export function WaveDecoration({ variant = 'section', className = '' }: WaveDecorationProps) {
  const colors = {
    hero: {
      wave1: 'fill-white/30',
      wave2: 'fill-white/20',
      wave3: 'fill-white/10',
    },
    section: {
      wave1: 'fill-teal-200/50',
      wave2: 'fill-teal-300/40',
      wave3: 'fill-teal-400/30',
    },
    footer: {
      wave1: 'fill-navy-700/80',
      wave2: 'fill-navy-800/90',
      wave3: 'fill-navy-900',
    },
  };

  const { wave1, wave2, wave3 } = colors[variant];

  return (
    <div className={`absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none ${className}`}>
      <svg
        className="relative block w-full h-20 md:h-32"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          className={`${wave1} animate-wave`}
          d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
        />
        <path
          className={`${wave2} animate-wave-slow`}
          d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,112C672,117,768,107,864,101.3C960,96,1056,96,1152,101.3C1248,107,1344,117,1392,122.7L1440,128L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
        />
        <path
          className={`${wave3}`}
          d="M0,80L60,85.3C120,91,240,101,360,96C480,91,600,69,720,64C840,59,960,69,1080,74.7C1200,80,1320,80,1380,80L1440,80L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
        />
      </svg>
    </div>
  );
}

export function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute top-0 left-0 w-[200%] h-full animate-wave opacity-5"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          className="text-teal-300"
          d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,144C1120,139,1280,181,1360,202.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-1/2 animate-wave-slow opacity-5"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          className="text-teal-400"
          d="M0,400L80,382.3C160,365,320,329,480,282.7C640,236,800,180,960,175.5C1120,171,1280,217,1360,239.3L1440,262L1440,400L1360,400C1280,400,1120,400,960,400C800,400,640,400,480,400C320,400,160,400,80,400L0,400Z"
        />
      </svg>
    </div>
  );
}
