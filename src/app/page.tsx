import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { Creator } from '@/components/sections/creator';
import { Services } from '@/components/sections/services';
import { Impact } from '@/components/sections/impact';
import { Contact } from '@/components/sections/contact';
import { Gallery } from '@/components/sections/gallery';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Creator />
      <Services />
      <Impact />
      <Gallery />
      <Contact />
    </div>
  );
}
