import './BeachScene.css'

export const BeachScene = () => {
  return (
    <div className="beach-scene" aria-hidden="true">
      {/* Sun illustration adapted from Twemoji (MIT, https://github.com/jdecked/twemoji) */}
      <svg
        className="sun"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="sun"
      >
        <defs>
          <radialGradient id="sunCore" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFF1B8" />
            <stop offset="55%" stopColor="#FFC94A" />
            <stop offset="100%" stopColor="#FF8A3C" />
          </radialGradient>
        </defs>
        <g className="sun-rays-group">
          <path
            fill="#FFAC33"
            d="M16 2s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2V2zm18 14s2 0 2 2-2 2-2 2h-2s-2 0-2-2 2-2 2-2h2zM4 16s2 0 2 2-2 2-2 2H2s-2 0-2-2 2-2 2-2h2zm5.121-8.707s1.414 1.414 0 2.828-2.828 0-2.828 0L4.878 8.708s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0l1.414 1.414zm21 21s1.414 1.414 0 2.828-2.828 0-2.828 0l-1.414-1.414s-1.414-1.414 0-2.828 2.828 0 2.828 0l1.414 1.414zm-.413-18.172s-1.414 1.414-2.828 0 0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0 0 2.828 0 2.828l-1.414 1.414zm-21 21s-1.414 1.414-2.828 0 0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0 0 2.828 0 2.828l-1.414 1.414zM16 32s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2v-2z"
          />
        </g>
        <circle fill="url(#sunCore)" cx="18" cy="18" r="10" />
      </svg>

      <div className="clouds">
        <div className="cloud cloud-1" />
        <div className="cloud cloud-2" />
        <div className="cloud cloud-3" />
      </div>

      <div className="waves">
        <svg
          className="wave wave-back"
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,80 C180,140 360,20 540,60 C720,100 900,140 1080,80 C1260,20 1380,60 1440,80 L1440,140 L0,140 Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="wave wave-mid"
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,90 C200,40 400,130 600,90 C800,50 1000,120 1200,80 C1320,60 1400,90 1440,90 L1440,140 L0,140 Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="wave wave-front"
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,100 C240,60 480,130 720,100 C960,70 1200,130 1440,100 L1440,140 L0,140 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  )
}
