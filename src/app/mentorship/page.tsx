import Link from "next/link";
import { type Metadata } from "next";
import profileData from "~/data/profile.json";
import mentorshipData from "~/data/mentorship.json";
import { icons } from "~/components/icons";
import { renderTextWithLinks } from "~/utils/linkRenderer";

export const metadata: Metadata = {
  title: "Mentorship, Academic & Community Service - Kinjal Desai, PhD",
  description: "Teaching and mentorship experience, academic service, and community service by Dr. Kinjal Desai, Senior Research Associate specializing in cancer biology and pediatric neuro-oncology.",
};

export default function Mentorship() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-8 md:px-[150px] md:py-16">
        <div className="flex flex-col gap-8 md:gap-16">
          {/* Header */}
          <header className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-8">
            <div className="flex w-full flex-col md:w-[472px]">
              <div className="job-title text-2xl font-bold leading-normal text-[var(--gray-3)] md:text-[32px]">
                {profileData.header.jobTitle}
              </div>
              <div className="name text-3xl font-bold leading-normal text-black md:text-[36px]">
                {profileData.header.name}
              </div>
            </div>
            <nav className="navigation flex flex-col gap-4 md:flex-row md:items-end md:gap-6">
              {profileData.navigation.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href} 
                  className={`link-text text-[var(--blue-1)] hover:underline ${
                    item.label === 'Mentorship, Academic & Community Service' 
                      ? 'font-bold' 
                      : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>

          {/* Main Content */}
          <div className="flex flex-col gap-8 md:flex-row md:gap-16">
            {/* Left Sidebar */}
            <aside className="flex w-full flex-col items-start gap-6 md:w-[177px] md:gap-8">
              <div className="home-link-container flex items-center gap-2 self-stretch">
                {icons.arrowLeft}
                <Link href="/" className="home-link flex-1 text-base leading-6 text-[var(--blue-1)] hover:underline">
                  Home
                </Link>
              </div>
            </aside>

            {/* Right Content */}
            <main className="flex flex-1 flex-col gap-8 md:gap-16">
              {/* Teaching and Mentorship Experience Section */}
              <section className="teaching-mentorship flex flex-col gap-4">
                <h2 className="section-title text-xl font-bold leading-normal text-[var(--heading)] md:text-2xl">
                  {mentorshipData.teachingAndMentorship.title}
                </h2>
                
                <div className="experience-section flex flex-col gap-6 md:gap-8">
                  {mentorshipData.teachingAndMentorship.experiences.map((experience, index) => (
                    <div key={index} className="experience-item flex flex-col gap-2">
                      <h3 className="experience-title text-lg font-normal leading-normal text-black md:text-xl">
                        {experience.title}
                      </h3>
                      <p className="experience-details text-sm italic leading-6 text-black md:text-base">
                        {experience.institution} | {experience.period}
                      </p>
                      <div className="experience-description text-sm leading-6 text-black md:text-base">
                        {renderTextWithLinks(experience.description, experience.links)}
                      </div>
                    </div>
                  ))}

                  {/* Additional Teaching Experience */}
                  <div className="additional-teaching flex flex-col gap-2">
                    <h3 className="section-subtitle text-lg font-normal leading-normal text-black md:text-xl">
                      {mentorshipData.teachingAndMentorship.additionalTeaching.title}
                    </h3>
                    <div className="additional-items flex flex-col gap-2">
                      {mentorshipData.teachingAndMentorship.additionalTeaching.items.map((item, index) => (
                        <div key={index} className="additional-item flex gap-4">
                          <div className="experience-date w-24 flex-shrink-0 text-sm leading-6 text-black md:w-32 md:text-base">
                            {item.period}
                          </div>
                          <div className="experience-details flex-1 text-sm leading-6 text-black md:text-base">
                            <span className="font-bold">{item.role}</span> | {item.institution}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Academic Service and Professional Experience Section */}
              <section className="academic-service flex flex-col gap-2">
                <h2 className="section-title text-xl font-bold leading-normal text-[var(--heading)] md:text-2xl">
                  {mentorshipData.academicService.title}
                </h2>
                
                <div className="service-items flex flex-col gap-2">
                  {mentorshipData.academicService.items.map((item, index) => (
                    <div key={index} className="service-item flex gap-4">
                      <div className="experience-date w-24 flex-shrink-0 text-sm leading-6 text-black md:w-32 md:text-base">
                        {item.period}
                      </div>
                      <div className="experience-details flex-1 text-sm leading-6 text-black md:text-base">
                        <span className="font-bold">{item.role}</span>{item.details && `, ${item.details}`} | {item.institution}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Community Service Section */}
              <section className="community-service flex flex-col gap-2">
                <h2 className="section-title text-xl font-bold leading-normal text-[var(--heading)] md:text-2xl">
                  {mentorshipData.communityService.title}
                </h2>
                
                <div className="service-items flex flex-col gap-2">
                  {mentorshipData.communityService.items.map((item, index) => (
                    <div key={index} className="service-item flex gap-4">
                      <div className="experience-date w-24 flex-shrink-0 text-sm leading-6 text-black md:w-32 md:text-base">
                        {item.period}
                      </div>
                      <div className="experience-details flex-1 text-sm leading-6 text-black md:text-base">
                        <span className="font-bold">{item.role}</span> | {item.institution}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </main>
          </div>

          {/* Footer */}
          <footer className="footer flex justify-center">
            <p className="copyright-text text-sm leading-6 text-black md:text-base">
              © {new Date().getFullYear()} Kinjal Desai, All Rights Reserved.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
