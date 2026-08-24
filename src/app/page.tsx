import { SiteHeader } from "@/components/portfolio/site-header";
import { ProfileCover } from "@/components/portfolio/profile-cover";
import { ProfileHeader } from "@/components/portfolio/profile-header";
import { Overview } from "@/components/portfolio/overview";
import { SocialLinks } from "@/components/portfolio/social-links";
import { About } from "@/components/portfolio/about";
import { GitHubContributions } from "@/components/portfolio/github-contributions";
import { TechStack } from "@/components/portfolio/tech-stack";
import { ExperienceSection } from "@/components/portfolio/experience";
import { EducationSection } from "@/components/portfolio/education";
import { Achievements } from "@/components/portfolio/achievements";
import { Projects } from "@/components/portfolio/projects";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { ScrollToTop } from "@/components/portfolio/scroll-to-top";

function StripeDivider() {
  return (
    <div className="stripe-divider w-full border-x border-line" aria-hidden />
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="w-full overflow-x-clip">
        <div className="mx-auto w-full md:max-w-3xl">
          <ProfileCover />
          <ProfileHeader />
          <Overview />
          <SocialLinks />
          <StripeDivider />
          <About />
          <GitHubContributions />
          <StripeDivider />
          <TechStack />
          <ExperienceSection />
          <EducationSection />
          <Achievements />
          <StripeDivider />
          <Projects />
          <StripeDivider />
          <SiteFooter />
        </div>
      </main>
      <ScrollToTop />
    </div>
  );
}
