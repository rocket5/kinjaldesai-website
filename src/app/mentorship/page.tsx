import Link from "next/link";
import { type Metadata } from "next";
import profileData from "~/data/profile.json";
import { icons } from "~/components/icons";

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
                      ? 'border-b border-[var(--blue-1)] pb-1' 
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
                  Teaching and Mentorship Experience
                </h2>
                
                <div className="experience-section flex flex-col gap-6 md:gap-8">
                  {/* Mentorship of Trainees */}
                  <div className="experience-item flex flex-col gap-2">
                    <h3 className="experience-title text-lg font-normal leading-normal text-black md:text-xl">
                      Mentorship of Trainees
                    </h3>
                    <p className="experience-details text-sm italic leading-6 text-black md:text-base">
                      The Hospital for Sick Children and University of Toronto | 2011 – present
                    </p>
                    <div className="experience-description text-sm leading-6 text-black md:text-base">
                      PhD co-supervisor: Juan Pablo Escorcia (2024–present, co-supervised with Dr. Peter Dirks)<br />
                      MHSc research practicum supervisor: Aastha Patel (2024–2025); Connie Fierro (2025–2026)<br />
                      Research mentorship: providing conceptual feedback and advice, helping with experimental design, monitoring progress, and sharing feedback on their results; 3 PhD students, 3 PhD rotation students, 2 MSc students, 6 summer students.<br />
                      Undergraduate engagement & outreach: Hosted site visits and informational interviews for 5 students from U of T Mississauga's Anatomy and Physiology program.
                    </div>
                  </div>

                  {/* Course Coordinator and Lead Instructor */}
                  <div className="experience-item flex flex-col gap-2">
                    <h3 className="experience-title text-lg font-normal leading-normal text-black md:text-xl">
                      Course Coordinator and Lead Instructor
                    </h3>
                    <p className="experience-details text-sm italic leading-6 text-black md:text-base">
                      Advanced Human Genetics (MMG 3001Y), Department of Molecular Genetics, University of Toronto | 2023 – 2026
                    </p>
                    <div className="experience-description text-sm leading-6 text-black md:text-base">
                      <Link href="#" className="text-[var(--blue-1)] underline hover:no-underline">Lead instructor and coordinator</Link> for a two-semester core <Link href="#" className="text-[var(--blue-1)] underline hover:no-underline">graduate course</Link> in the Master of Health Sciences (MHSc) in Medical Genomics program, enrolling approximately 22–25 students annually.<br />
                      This includes hands-on teaching, mentorship, and course coordination, and conveying complex material in an accessible way over a sustained period of time (1 or 2 terms).
                    </div>
                  </div>

                  {/* Co-Organizer and Instructor */}
                  <div className="experience-item flex flex-col gap-2">
                    <h3 className="experience-title text-lg font-normal leading-normal text-black md:text-xl">
                      Co-Organizer and Instructor
                    </h3>
                    <p className="experience-details text-sm italic leading-6 text-black md:text-base">
                      Low Input Epigenomics Workshop, Wellcome Genome Campus, UK | 2024 & 2025
                    </p>
                    <div className="experience-description text-sm leading-6 text-black md:text-base">
                      Co-organizer and lead instructor (CUT&RUN and CUT&Tag module) of this competitive, international 8-day <Link href="#" className="underline hover:no-underline">workshop</Link> for senior PhD students, postdocs, and early-career investigators.<br />
                      Delivered comprehensive and hands-on theoretical and laboratory training on epigenomic profiling in rare cell populations and low-input samples.
                    </div>
                  </div>

                  {/* Additional Teaching Experience */}
                  <div className="additional-teaching flex flex-col gap-2">
                    <h3 className="section-subtitle text-lg font-normal leading-normal text-black md:text-xl">
                      Additional Teaching Experience
                    </h3>
                    <div className="additional-items flex flex-col gap-2">
                      <div className="additional-item flex gap-4">
                        <div className="experience-date w-24 flex-shrink-0 text-sm leading-6 text-black md:w-32 md:text-base">
                          2019 - 2023
                        </div>
                        <div className="experience-details flex-1 text-sm leading-6 text-black md:text-base">
                          <span className="font-bold">Instructor</span> | University of Toronto School of Continuing Studies, Toronto, Canada
                        </div>
                      </div>
                      <div className="additional-item flex gap-4">
                        <div className="experience-date w-24 flex-shrink-0 text-sm leading-6 text-black md:w-32 md:text-base">
                          2020 - 2025
                        </div>
                        <div className="experience-details flex-1 text-sm leading-6 text-black md:text-base">
                          <span className="font-bold">Guest Lecturer</span> | Advanced Human Genetics (MMG 3001Y) | Department of Molecular Genetics, University of Toronto, Toronto, Canada
                        </div>
                      </div>
                      <div className="additional-item flex gap-4">
                        <div className="experience-date w-24 flex-shrink-0 text-sm leading-6 text-black md:w-32 md:text-base">
                          2019
                        </div>
                        <div className="experience-details flex-1 text-sm leading-6 text-black md:text-base">
                          <span className="font-bold">Guest Lecturer</span> | Royal Conservatory of Music, Toronto, Canada
                        </div>
                      </div>
                      <div className="additional-item flex gap-4">
                        <div className="experience-date w-24 flex-shrink-0 text-sm leading-6 text-black md:w-32 md:text-base">
                          2020
                        </div>
                        <div className="experience-details flex-1 text-sm leading-6 text-black md:text-base">
                          <span className="font-bold">Guest Expert</span> | Online Healthcare Forum, Toronto, Canada
                        </div>
                      </div>
                      <div className="additional-item flex gap-4">
                        <div className="experience-date w-24 flex-shrink-0 text-sm leading-6 text-black md:w-32 md:text-base">
                          2011
                        </div>
                        <div className="experience-details flex-1 text-sm leading-6 text-black md:text-base">
                          <span className="font-bold">Teaching Assistant</span> | Dartmouth College, Hanover, USA
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Academic Service and Professional Experience Section */}
              <section className="academic-service flex flex-col gap-2">
                <h2 className="section-title text-xl font-bold leading-normal text-[var(--heading)] md:text-2xl">
                  Academic Service and Professional Experience
                </h2>
                
                <div className="service-items flex flex-col gap-2">
                  <div className="service-item flex gap-4">
                    <div className="experience-date w-24 flex-shrink-0 text-sm leading-6 text-black md:w-32 md:text-base">
                      June 2025
                    </div>
                    <div className="experience-details flex-1 text-sm leading-6 text-black md:text-base">
                      <span className="font-bold">Session Chair</span> | Scientific Retreat, Departments of Genetics and Genome Biology & Developmental, Stem Cell, and Cancer Biology, The Hospital for Sick Children, Blue Mountain, Ontario, Canada
                    </div>
                  </div>
                  <div className="service-item flex gap-4">
                    <div className="experience-date w-24 flex-shrink-0 text-sm leading-6 text-black md:w-32 md:text-base">
                      June 2025
                    </div>
                    <div className="experience-details flex-1 text-sm leading-6 text-black md:text-base">
                      <span className="font-bold">Judge</span>, Oral Presentations & Posters| Garron Family Cancer Centre Research Day, The Hospital for Sick Children, Toronto, Canada
                    </div>
                  </div>
                  <div className="service-item flex gap-4">
                    <div className="experience-date w-24 flex-shrink-0 text-sm leading-6 text-black md:w-32 md:text-base">
                      2023 - 2025
                    </div>
                    <div className="experience-details flex-1 text-sm leading-6 text-black md:text-base">
                      <span className="font-bold">Panelist (Scientific Reviewer and Scientific Officer), Grant and Fellowship Applications</span> | Canadian Cancer Society, Toronto, Canada
                    </div>
                  </div>
                  <div className="service-item flex gap-4">
                    <div className="experience-date w-24 flex-shrink-0 text-sm leading-6 text-black md:w-32 md:text-base">
                      October 2024
                    </div>
                    <div className="experience-details flex-1 text-sm leading-6 text-black md:text-base">
                      <span className="font-bold">Invited Speaker</span> | University of Toronto – Molecular Genetics & Microbiology Student Union (MGYSU), Toronto, Canada
                    </div>
                  </div>
                  <div className="service-item flex gap-4">
                    <div className="experience-date w-24 flex-shrink-0 text-sm leading-6 text-black md:w-32 md:text-base">
                      August 2024
                    </div>
                    <div className="experience-details flex-1 text-sm leading-6 text-black md:text-base">
                      <span className="font-bold">Judge</span>, Student Poster Presentations | Summer Research Symposium (SSuRe), SickKids, Toronto, Canada
                    </div>
                  </div>
                  <div className="service-item flex gap-4">
                    <div className="experience-date w-24 flex-shrink-0 text-sm leading-6 text-black md:w-32 md:text-base">
                      July 2024
                    </div>
                    <div className="experience-details flex-1 text-sm leading-6 text-black md:text-base">
                      <span className="font-bold">Invited Participant</span> | CRUK Children's Brain Tumour Excellence Summer School, University of Cambridge, UK
                    </div>
                  </div>
                  <div className="service-item flex gap-4">
                    <div className="experience-date w-24 flex-shrink-0 text-sm leading-6 text-black md:w-32 md:text-base">
                      July 2024
                    </div>
                    <div className="experience-details flex-1 text-sm leading-6 text-black md:text-base">
                      <span className="font-bold">Invited Panelist</span> | The Hospital for Sick Children Research Integrity Symposium, Toronto, Canada
                    </div>
                  </div>
                </div>
              </section>

              {/* Community Service Section */}
              <section className="community-service flex flex-col gap-2">
                <h2 className="section-title text-xl font-bold leading-normal text-[var(--heading)] md:text-2xl">
                  Community Service
                </h2>
                
                <div className="service-items flex flex-col gap-2">
                  <div className="service-item flex gap-4">
                    <div className="experience-date w-24 flex-shrink-0 text-sm leading-6 text-black md:w-32 md:text-base">
                      2024 - Present
                    </div>
                    <div className="experience-details flex-1 text-sm leading-6 text-black md:text-base">
                      <span className="font-bold">Advisory Board Member</span> | Stay at Home Nursing Care, Toronto, Canada
                    </div>
                  </div>
                  <div className="service-item flex gap-4">
                    <div className="experience-date w-24 flex-shrink-0 text-sm leading-6 text-black md:w-32 md:text-base">
                      2023 - Present
                    </div>
                    <div className="experience-details flex-1 text-sm leading-6 text-black md:text-base">
                      <span className="font-bold">Scientist Partner</span> | Skype a Scientist, Philadelphia, USA
                    </div>
                  </div>
                  <div className="service-item flex gap-4">
                    <div className="experience-date w-24 flex-shrink-0 text-sm leading-6 text-black md:w-32 md:text-base">
                      2023 - Present
                    </div>
                    <div className="experience-details flex-1 text-sm leading-6 text-black md:text-base">
                      <span className="font-bold">Community Outreach Representative</span> | Canadian Cancer Society, Toronto, Canada
                    </div>
                  </div>
                  <div className="service-item flex gap-4">
                    <div className="experience-date w-24 flex-shrink-0 text-sm leading-6 text-black md:w-32 md:text-base">
                      2016 - 2023
                    </div>
                    <div className="experience-details flex-1 text-sm leading-6 text-black md:text-base">
                      <span className="font-bold">Community Outreach Lead</span> | Toronto Research Information Outreach Team (R.I.O.T.) and the Canadian Cancer Society, Toronto, Canada
                    </div>
                  </div>
                  <div className="service-item flex gap-4">
                    <div className="experience-date w-24 flex-shrink-0 text-sm leading-6 text-black md:w-32 md:text-base">
                      2019 - 2022
                    </div>
                    <div className="experience-details flex-1 text-sm leading-6 text-black md:text-base">
                      <span className="font-bold">Child Life Volunteer</span> | The Hospital for Sick, Toronto, Canada
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>

          {/* Footer */}
          <footer className="footer flex justify-center">
            <p className="copyright-text text-sm leading-6 text-black md:text-base">
              {profileData.footer.copyright}
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
