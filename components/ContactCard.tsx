'use client';

import { ReactNode } from 'react';

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  label: string;
  index: number;
}

const staggerClasses = ['animate-stagger-1', 'animate-stagger-2', 'animate-stagger-3', 'animate-stagger-4'];

export function ContactCard({ icon, title, description, href, label, index }: ContactCardProps) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      className={`${staggerClasses[index]} group p-8 rounded-xl border border-border hover:border-primary/50 bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 text-center hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
      aria-label={title}
    >
      <div className="mx-auto mb-4 text-primary group-hover:scale-125 transition-transform">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <span className="text-primary font-semibold group-hover:translate-x-2 transition-transform inline-block">
        {label} →
      </span>
    </a>
  );
}
