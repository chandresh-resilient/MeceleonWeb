import { PageIntro } from '../../components/PageIntro';
import { Section } from '../../components/Section';
import { VideoGallery } from '../../components/VideoGallery';

const videos = [
  {
    title: 'Power Team Hydraulic Pump Setup',
    description: 'Step-by-step walkthrough of configuring a pump for shop-floor operations.',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    title: 'Bolting Safety Essentials',
    description: 'Best practices for torque control and joint integrity in the field.',
    embedUrl: 'https://www.youtube.com/embed/oHg5SJYRHA0'
  },
  {
    title: 'Puller Maintenance Tips',
    description: 'Keep your puller kits operating smoothly with regular inspection routines.',
    embedUrl: 'https://www.youtube.com/embed/ub82Xb1C8os'
  }
];

export const metadata = {
  title: 'Videos – Product Demos & Maintenance Tips',
  description: 'Embedded demos from YouTube showcasing product setup, usage, and safety.'
};

export default function VideosPage() {
  return (
    <>
      <PageIntro
        title="Videos"
        tagline="Product Demos"
        description="Watch setup walkthroughs, maintenance tips, and safety explainers from our experts."
      />
      <Section>
        <VideoGallery videos={videos} />
      </Section>
    </>
  );
}
