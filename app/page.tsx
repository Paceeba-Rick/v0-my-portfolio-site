'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, TrendingUp, Mail, MessageCircle, ChevronDown } from 'lucide-react';
import { ProjectCard } from '@/components/ProjectCard';
import { CertificateCard } from '@/components/CertificateCard';
import { ContactCard } from '@/components/ContactCard';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Update active section based on scroll
      const sections = ['home', 'about', 'projects', 'certificates', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-background text-foreground overflow-hidden">
      {/* Skip to main content link */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fadeIn">
            PY
          </div>
          <div className="hidden md:flex items-center gap-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'projects', label: 'Projects' },
              { id: 'certificates', label: 'Certificates' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <section
          id="home"
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
          aria-label="Hero section"
        >
        {/* Animated background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="animate-slideInLeft">
            <div className="animate-pulse-glow mb-2 inline-block">
              <span className="text-sm font-semibold text-primary px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                ✨ Full Stack Developer
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hey, I&apos;m{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Paceeba Yakubu
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Full Stack Developer crafting beautiful, performant web and mobile experiences. I specialize in turning
              complex ideas into elegant solutions.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="#projects"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                View My Work
              </Link>
              <a
                href="https://github.com/Paceeba-Rick"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                GitHub Profile
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/Paceeba-Rick"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@_ceeba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-2.4-2.4c.34 0 .67.04 1 .12V9.41a5.5 5.5 0 1 0 6.85 5.56V10a7.18 7.18 0 0 0 3.77-1.16v-3.15z" />
                </svg>
              </a>
              <a
                href="mailto:yakubceeba@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative group animate-scaleIn">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity blur group-hover:blur-lg duration-300" />
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 group-hover:border-primary/60 transition-colors">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-15%20at%2013.08.36-CXac2xsv4J9MgwBUx8nB87ImCWiHyy.jpeg"
                alt="Paceeba Yakubu - Developer"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {/* Floating Achievement Badge */}
            <div className="absolute -bottom-6 -right-6 animate-float">
              <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-full shadow-lg shadow-primary/50 border border-primary/30 w-24 h-24 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm font-bold text-foreground">4+ Years</p>
                  <p className="text-xs text-foreground/80">Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-primary" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="animate-stagger-1 group p-8 rounded-xl border border-border hover:border-primary/50 bg-background hover:bg-card/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer hover:scale-105">
                <TrendingUp className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold mb-2">Full Stack Development</h3>
                <p className="text-muted-foreground">
                  Building complete web applications from frontend to backend, with expertise in modern frameworks and
                  technologies.
                </p>
              </div>

              <div className="animate-stagger-2 group p-8 rounded-xl border border-border hover:border-primary/50 bg-background hover:bg-card/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer hover:scale-105">
                <svg
                  className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                  />
                </svg>
                <h3 className="text-xl font-bold mb-2">Mobile Apps</h3>
                <p className="text-muted-foreground">
                  Creating responsive and intuitive mobile applications for iOS and Android platforms.
                </p>
              </div>

              <div className="animate-stagger-3 group p-8 rounded-xl border border-border hover:border-primary/50 bg-background hover:bg-card/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer hover:scale-105">
                <svg
                  className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                <p className="text-muted-foreground">
                  Designing elegant and user-centered interfaces that look great and function beautifully.
                </p>
              </div>
            </div>

            <div className="mt-16 p-8 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-slideUp">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a passionate full-stack developer studying at the <span className="text-primary font-semibold">University of Ghana</span>, with a proven track record of building production-grade applications. With certifications from IBM and Coursera in Software Engineering and Mobile App Development, I combine technical expertise with creative problem-solving. When I&apos;m not coding, you can find me on TikTok sharing development insights or working on innovative projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Lens J-Pixels',
                  description: 'Professional photography portfolio and service booking platform',
                  url: 'https://lensjpixels.com',
                  tech: ['Next.js', 'React', 'Tailwind CSS'],
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lensjpixels-0syVW5gjGiu8NcsQLJ47H4uWqtpm4t.jpeg',
                },
                {
                  title: 'Ekduol LTD',
                  description: 'A palm products production company website',
                  url: 'https://ekduoltd.vercel.app',
                  tech: ['React', 'Node.js', 'MongoDB'],
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ekduo-OEvnTOjl2m0sQOw7XxV9uTaq7TgJMH.jpeg',
                },
                {
                  title: 'Doyin',
                  description: 'A Campus E-Commence Marketplace mobible application',
                  url: 'https://doyin.site',
                  tech: ['FlutterFlow', 'Firebase', 'Node.js'],
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-15%20at%2012.28.32-i2md440LhXHuAdfKzasAlHoYRc5uq8.jpeg',
                },
                {
                  title: 'MZ Deer Farms',
                  description: 'A Fresh Whole checken and poultry business',
                  url: 'https://mzdeerfarms.com',
                  tech: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mzdeerfarms-h3foyyHniyKZzavznhTt7Un7u46oIF.jpeg',
                },
              ].map((project, index) => (
                <ProjectCard key={index} {...project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Certifications & Achievements
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Introduction to Software Engineering',
                  issuer: 'IBM / Coursera',
                  date: 'August 2, 2025',
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-15%20at%2012.28.30-BkyIkfAg4EtS6XefxJ8vedWmKiWnAj.jpeg',
                },
                {
                  title: 'Introduction to Mobile App Development',
                  issuer: 'IBM / Coursera',
                  date: 'August 6, 2025',
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-15%20at%2012.28.31-uAAfeekTNokmHiJRQXDURf8ZQ8SOUE.jpeg',
                },
              ].map((cert, index) => (
                <CertificateCard key={index} {...cert} index={index} />
              ))}
            </div>

            {/* Additional info */}
            <div className="animate-slideUp mt-12 p-8 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
              <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m committed to staying at the forefront of technology. My certifications demonstrate my dedication
                to professional development in software engineering and mobile app development. I&apos;m constantly
                exploring new frameworks, tools, and best practices to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Speaking Section */}
      <section id="leadership" className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Leadership & Community Impact
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Leadership Development Training</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    African Innovators Leadership Program
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Participated in an intensive leadership development program designed for emerging African innovators and tech entrepreneurs. This experience enhanced my ability to communicate ideas, lead teams, and inspire others in the tech ecosystem. The program focused on practical leadership skills, strategic thinking, and building impactful communities.
                  </p>
                </div>

                <div className="p-6 rounded-lg border border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
                  <h4 className="font-semibold text-primary mb-2">Key Takeaways:</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Public speaking and effective communication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Team leadership and mentoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Strategic vision and innovation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Building networks in the African tech ecosystem</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group relative rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-15%20at%2013.08.35-VB1qR90Nsds8DRqBeExqer2RNgFun4.jpeg"
                  alt="Leadership Development Training - African Innovators"
                  width={600}
                  height={500}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-sm text-accent font-semibold">Speaking at African Innovators Leadership Program</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Let&apos;s Connect
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
              <ContactCard
                icon={<Github size={40} />}
                title="GitHub"
                description="Check out my repositories and open source work"
                href="https://github.com/Paceeba-Rick"
                label="Visit GitHub"
                index={0}
              />
              <ContactCard
                icon={
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.237-1.668-2.237-.909 0-1.451.613-1.688 1.205-.087.216-.109.517-.109.817v5.784h-3.554s.047-9.381 0-10.355h3.554v1.468c-.009.015-.022.03-.033.046h.033v-.046c.456-.704 1.27-1.708 3.088-1.708 2.258 0 3.95 1.476 3.95 4.64v5.955zM5.337 8.855c-1.176 0-1.95-.775-1.95-1.743 0-.975.774-1.743 1.95-1.743 1.176 0 1.95.768 1.95 1.743 0 .968-.774 1.743-1.95 1.743zm1.549 11.597H3.787V9.097h3.099v11.355zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                }
                title="LinkedIn"
                description="Connect with me professionally"
                href="https://www.linkedin.com/in/paceeba-yakubu-87ba27352/"
                label="View Profile"
                index={1}
              />
              <ContactCard
                icon={<MessageCircle size={40} />}
                title="WhatsApp"
                description="Let's discuss your project ideas"
                href="https://wa.me/0533125955"
                label="Send Message"
                index={2}
              />
              <ContactCard
                icon={
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-2.4-2.4c.34 0 .67.04 1 .12V9.41a5.5 5.5 0 1 0 6.85 5.56V10a7.18 7.18 0 0 0 3.77-1.16v-3.15z" />
                  </svg>
                }
                title="TikTok"
                description="Follow for dev content and tutorials"
                href="https://www.tiktok.com/@_ceeba"
                label="Follow"
                index={3}
              />
              <ContactCard
                icon={
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
                title="Email"
                description="yakubceeba@gmail.com"
                href="mailto:yakubceeba@gmail.com"
                label="Send Email"
                index={4}
              />
            </div>

            <div className="text-center p-8 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
              <p className="text-lg text-muted-foreground mb-6">
                Whether you have a project in mind or just want to chat, I&apos;m always happy to connect with fellow
                developers and creative minds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/0533125955"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                >
                  Get In Touch
                </a>
                <a
                  href="https://github.com/Paceeba-Rick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground mb-4">© 2025 Paceeba Yakubu. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Paceeba-Rick"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/paceeba-yakubu-87ba27352/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.237-1.668-2.237-.909 0-1.451.613-1.688 1.205-.087.216-.109.517-.109.817v5.784h-3.554s.047-9.381 0-10.355h3.554v1.468c-.009.015-.022.03-.033.046h.033v-.046c.456-.704 1.27-1.708 3.088-1.708 2.258 0 3.95 1.476 3.95 4.64v5.955zM5.337 8.855c-1.176 0-1.95-.775-1.95-1.743 0-.975.774-1.743 1.95-1.743 1.176 0 1.95.768 1.95 1.743 0 .968-.774 1.743-1.95 1.743zm1.549 11.597H3.787V9.097h3.099v11.355zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@_ceeba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="TikTok"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-2.4-2.4c.34 0 .67.04 1 .12V9.41a5.5 5.5 0 1 0 6.85 5.56V10a7.18 7.18 0 0 0 3.77-1.16v-3.15z" />
              </svg>
            </a>
            <a
              href="https://wa.me/0533125955"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </footer>
    </main>

    </div>
  );
}
