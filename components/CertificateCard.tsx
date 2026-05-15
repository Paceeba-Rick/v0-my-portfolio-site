'use client';

import Image from 'next/image';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
  index: number;
}

const staggerClasses = ['animate-stagger-1', 'animate-stagger-2'];

export function CertificateCard({ title, issuer, date, image, index }: CertificateCardProps) {
  return (
    <div
      className={`group relative rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 ${staggerClasses[index]}`}
    >
      <Image
        src={image}
        alt={`${title} certificate from ${issuer}`}
        width={600}
        height={500}
        className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <p className="text-sm text-accent font-semibold mb-1">{issuer}</p>
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-xs text-muted-foreground">{date}</p>
      </div>
    </div>
  );
}
