import React from 'react';

export const StudyIcon = ({ name, className = "w-6 h-6", color = "#FB8232" }) => {
  switch (name) {
    case 'academic':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle opacity="0.12" cx="12" cy="12" r="12" fill={color} />
          <path d="M6 10.35L12 7l6 3.35M7.5 10.8v3.66c0 .5.3.9.7 1.1A10.5 10.5 0 0012 17c1.5-.99 3.09-1.84 4.75-2.53-.03-1.22-.12-2.44-.28-3.65M9.12 11.4c.98.4 1.94.84 2.88 1.34 1.43-.76 2.93-1.4 4.47-1.92" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'book':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle opacity="0.12" cx="12" cy="12" r="12" fill={color} />
          <path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 01-2.5-2.5zM6 6h10M6 10h10M6 14h6" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'calendar':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle opacity="0.12" cx="12" cy="12" r="12" fill={color} />
          <rect x="4" y="5" width="16" height="15" rx="3" stroke={color} strokeWidth="1.6" />
          <path d="M16 3v4M8 3v4M4 10h16M9 14l2 2 4-4" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'docs':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle opacity="0.12" cx="12" cy="12" r="12" fill={color} />
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke={color} strokeWidth="1.6" />
          <path d="M14 2v6h6M8 13h8M8 17h5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'community':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle opacity="0.12" cx="12" cy="12" r="12" fill={color} />
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="9" cy="7" r="4" stroke={color} strokeWidth="1.6" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'fire':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle opacity="0.12" cx="12" cy="12" r="12" fill={color} />
          <path d="M12 2c1 3.5 4 5 4 8a6 6 0 11-12 0c0-3.5 2-6 3.5-7.5.5 2 1.5 3 2.5 3 1.5-1 2-2 2-3.5z" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'alert':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle opacity="0.12" cx="12" cy="12" r="12" fill={color} />
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'mail':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle opacity="0.12" cx="12" cy="12" r="12" fill={color} />
          <rect x="3" y="5" width="18" height="14" rx="3" stroke={color} strokeWidth="1.6" />
          <path d="M3 7l9 6 9-6" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'logout':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle opacity="0.12" cx="12" cy="12" r="12" fill={color} />
          <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'delete':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle opacity="0.12" cx="12" cy="12" r="12" fill={color} />
          <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11l4 4M14 11l-4 4" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'settings-v':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle opacity="0.12" cx="12" cy="12" r="12" fill={color} />
          <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'text':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle opacity="0.12" cx="12" cy="12" r="12" fill={color} />
          <path d="M6 8h12M6 12h12M6 16h8" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
};

export const StatusBar = ({ dark = false, time = "9:41" }) => {
  return (
    <div className={`w-full flex items-center justify-between px-6 pt-3 pb-2 text-xs font-semibold z-20 ${dark ? 'text-white' : 'text-[#232323]'}`}>
      <span className="tracking-tight">{time}</span>
      {/* Dynamic Island notch pill */}
      <div className="w-24 h-5 bg-black rounded-full mx-auto" />
      <div className="flex items-center space-x-1.5">
        {/* Signal */}
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <rect x="2" y="16" width="3" height="6" rx="1" />
          <rect x="7" y="12" width="3" height="10" rx="1" />
          <rect x="12" y="8" width="3" height="14" rx="1" />
          <rect x="17" y="4" width="3" height="18" rx="1" />
        </svg>
        {/* Wifi */}
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 18a2 2 0 100-4 2 2 0 000 4z" />
          <path d="M4.93 10.93a10 10 0 0114.14 0l-1.41 1.41a8 8 0 00-11.32 0l-1.41-1.41z" />
          <path d="M1.39 7.39a15 15 0 0121.22 0l-1.41 1.41a13 13 0 00-18.4 0L1.39 7.39z" />
        </svg>
        {/* Battery */}
        <div className="flex items-center">
          <div className="w-5 h-2.5 border border-current rounded-[3px] p-[1px] flex">
            <div className="w-3.5 h-full bg-current rounded-[1px]" />
          </div>
          <div className="w-0.5 h-1 bg-current rounded-r-[1px] ml-[1px]" />
        </div>
      </div>
    </div>
  );
};
