import Hero from '@/components/home/Hero';
import Featured from '@/components/home/Featured';
import Manifesto from '@/components/home/Manifesto';
import Craft from '@/components/home/Craft';
import LifestyleStrip from '@/components/home/LifestyleStrip';
import StoryTeaser from '@/components/home/StoryTeaser';
import NewsletterBand from '@/components/home/NewsletterBand';

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Manifesto />
      <Craft />
      <LifestyleStrip />
      <StoryTeaser />
      <NewsletterBand />
    </>
  );
}