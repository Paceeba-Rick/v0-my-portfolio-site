'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { ImageViewer } from './ImageViewer';

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
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`group cursor-pointer ${isVisible ? 'scroll-animate-delay-' + ((index % 4) + 1) : ''}`}>
      <div className="relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 h-full">
        <ImageViewer
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-48 sm:h-56 md:h-64"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">{title}</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-3">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t) => (
              <span key={t} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary font-semibold group-hover:translate-x-2 transition-transform w-fit"
            onClick={(e) => e.stopPropagation()}
          >
            Visit Project <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
