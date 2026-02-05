import React from 'react';

export default function Logo({ className = "logo-icon" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                fill="url(#logo-gradient)"
            />
            <circle cx="12" cy="12" r="3" fill="#ffffff" opacity="0.9" />
            <defs>
                <linearGradient id="logo-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366f1" />
                    <stop offset="1" stopColor="#38bdf8" />
                </linearGradient>
            </defs>
        </svg>
    );
}
