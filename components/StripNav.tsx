import React from 'react';

const StripNav: React.FC = () => {
  const href = 'https://vidyatestudenthub.blogspot.com/';
  const content = (
    <>
      <strong className="font-semibold">Visit blogs</strong>
      <span className="font-normal"> - to get updated on latest pharmacy update</span>
    </>
  );

  return (
    <div className="w-full border-b border-white/10 bg-[#111827] text-[11px] uppercase tracking-[0.2em] text-white/90">
      <div className="overflow-hidden">
        <div className="inline-flex min-w-max animate-marquee whitespace-nowrap py-2">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-10 inline-flex items-center gap-1 text-white no-underline"
          >
            {content}
          </a>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-10 inline-flex items-center gap-1 text-white no-underline"
          >
            {content}
          </a>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-10 inline-flex items-center gap-1 text-white no-underline"
          >
            {content}
          </a>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-10 inline-flex items-center gap-1 text-white no-underline"
          >
            {content}
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default StripNav;
