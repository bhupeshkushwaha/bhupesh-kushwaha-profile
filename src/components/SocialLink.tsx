import React from 'react';

const SocialLink = ({ href, label, icon: Icon }: { href: string; label: string; icon: React.ElementType }) => {
  return (
    <a href={href} className="p-2 border border-black hover:bg-black hover:text-white rounded-md" aria-label={label}>
      <Icon />
    </a>
  );
};

export default SocialLink;