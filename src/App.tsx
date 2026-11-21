import TopBar from './components/TopBar'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SpacesSection from './components/SpacesSection'
import FeatureStories from './components/FeatureStories'
import FoodCommunitySection from './components/FoodCommunitySection'
import EventsSection from './components/EventsSection'
import VisitMapSection from './components/VisitMapSection'
import MilestonesSection from './components/MilestonesSection'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f6f0] text-[#26221d] font-['Archivo',sans-serif] selection:bg-[#c47335] selection:text-white">
      {/* 1. Top Announcement & Quick Contact Bar */}
      <TopBar />

      {/* 2. Main Sticky Header with Dropdowns, Logo & CTA */}
      <Header />

      {/* 3. Main Page Sections in exact order with fresh copyright-safe theme */}
      <main className="flex-1">
        {/* Section 0: Hero with Background Image, Search form & 4 Quick Paths */}
        <HeroSection />

        {/* Section 1: Spaces Built For A Crowd (Woolshed, Farmhouse, Alfresco, Pavilion) */}
        <SpacesSection />

        {/* Sections 2-6: Themed Feature Story Cards (Christmas, Corporate, Kids, Dining, Catering) */}
        <FeatureStories />

        {/* Section 7: Food Community (Freddy's, Taproom, Bakery Brothers, OMG Donuts) */}
        <FoodCommunitySection />

        {/* Section 8: What's On This Month (Markets, Gala, Convoy) */}
        <EventsSection />

        {/* Section 9: Visit Buzz Box & Interactive Precinct Map */}
        <VisitMapSection />

        {/* Section 10: Milestones (Your People, Your Culture, Your Party - 4 Photo Collage) */}
        <MilestonesSection />
      </main>

      {/* 4. Complete Footer with Directory, Acknowledgement of Country & Legal */}
      <Footer />
      <ScrollReveal />
    </div>
  )
}
