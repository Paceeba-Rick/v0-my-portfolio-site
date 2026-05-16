'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

interface ImageViewerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export function ImageViewer({ src, alt, width = 600, height = 400, className = '' }: ImageViewerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`relative group cursor-pointer transition-transform duration-300 hover:scale-105 ${className}`}
        aria-label={`Open full size image: ${alt}`}
      >
        <Image src={src} alt={alt} width={width} height={height} className="w-full h-auto object-cover rounded-lg" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 rounded-lg flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <ZoomIn className="w-8 h-8 text-white" />
          </div>
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur p-2 rounded-lg border border-border hover:bg-background transition-colors"
              aria-label="Close image viewer"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>

            <Image
              src={src}
              alt={alt}
              width={1920}
              height={1440}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
