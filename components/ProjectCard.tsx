'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  image: string;
  tech: string[];
  index: number;
}

const staggerClasses = ['animate-stagger-1', 'animate-stagger-2', 'animate-stagger-3', 'animate-stagger-4'];

export function ProjectCard({ title, description, url, image, tech, index }: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group cursor-pointer ${staggerClasses[index] || ''}`}
      aria-label={`${title} project`}
    >
      <div className="relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 h-full hover:scale-105">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-2xl font-bold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t) => (
              <span key={t} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-primary font-semibold group-hover:translate-x-2 transition-transform">
            Visit Project <ExternalLink size={16} />
          </div>
        </div>
      </div>
    </a>
  );
}
