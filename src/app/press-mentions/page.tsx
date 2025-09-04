import Link from "next/link";
import { type Metadata } from "next";
import profileData from "~/data/profile.json";
import pressData from "~/data/press.json";
import { icons } from "~/components/icons";
import { generatePageMetadata } from "~/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Press Mentions",
  description: "Press coverage and mentions of Dr. Kinjal Desai's research in scientific community and popular media, including national news outlets and university features.",
  keywords: [
    "press coverage",
    "media mentions",
    "research news",
    "scientific news",
    "cancer research news",
    "medulloblastoma news",
    "academic research coverage",
    "science journalism"
  ],
  path: "/press-mentions"
});

export default function PressMentions() {
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
                  className={`link-text text-[var(--blue-1)] hover:underline border-b-2 ${
                    item.label === 'Press Mentions' 
                      ? 'border-[var(--blue-1)]' 
                      : 'border-transparent'
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
            <main className="flex flex-1 flex-col gap-6 md:gap-12">
              {/* Press Coverage Section */}
              <section className="press-coverage flex flex-col gap-4">
                <h2 className="section-title text-xl font-bold leading-normal text-[var(--heading)] md:text-2xl">
                  {pressData.title}
                </h2>
                <p className="section-description text-sm leading-6 text-black md:text-base">
                  {pressData.description}
                </p>
                
                {/* Press Items */}
                <div className="press-items flex flex-col gap-4">
                  {pressData.pressItems.map((item, index) => (
                    <div key={index} className="press-item flex flex-col gap-1">
                      <div className="press-title text-sm leading-6 text-black md:text-base">
                        {item.title}
                      </div>
                      <div className="press-source-link flex items-center gap-2">
                        <Link 
                          href={item.url} 
                          className="press-source text-sm leading-6 text-[var(--blue-1)] hover:underline md:text-base"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.source}
                        </Link>
                        <div className="external-link-icon">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-shrink-0"
                          >
                            <path
                              d="M13.5 5.3125C13.5 5.46168 13.4407 5.60476 13.3352 5.71025C13.2298 5.81574 13.0867 5.875 12.9375 5.875C12.7883 5.875 12.6452 5.81574 12.5398 5.71025C12.4343 5.60476 12.375 5.46168 12.375 5.3125V2.17094L7.71117 6.83547C7.60562 6.94102 7.46247 7.00031 7.3132 7.00031C7.16394 7.00031 7.02078 6.94102 6.91523 6.83547C6.80969 6.72992 6.75039 6.58677 6.75039 6.4375C6.75039 6.28823 6.80969 6.14508 6.91523 6.03953L11.5791 1.375H8.4375C8.28832 1.375 8.14524 1.31574 8.03975 1.21025C7.93426 1.10476 7.875 0.961684 7.875 0.8125C7.875 0.663316 7.93426 0.520242 8.03975 0.414753C8.14524 0.309263 8.28832 0.25 8.4375 0.25H12.9375C13.0867 0.25 13.2298 0.309263 13.3352 0.414753C13.4407 0.520242 13.5 0.663316 13.5 0.8125V5.3125ZM10.6875 7C10.5383 7 10.3952 7.05926 10.2898 7.16475C10.1843 7.27024 10.125 7.41332 10.125 7.5625V12.625H1.125V3.625H6.1875C6.33668 3.625 6.47976 3.56574 6.58525 3.46025C6.69074 3.35476 6.75 3.21168 6.75 3.0625C6.75 2.91332 6.69074 2.77024 6.58525 2.66475C6.47976 2.55926 6.33668 2.5 6.1875 2.5H1.125C0.826631 2.5 0.540483 2.61853 0.329505 2.82951C0.118526 3.04048 0 3.32663 0 3.625V12.625C0 12.9234 0.118526 13.2095 0.329505 13.4205C0.540483 13.6315 0.826631 13.75 1.125 13.75H10.125C10.4234 13.75 10.7095 13.6315 10.9205 13.4205C11.1315 13.2095 11.25 12.9234 11.25 12.625V7.5625C11.25 7.41332 11.1907 7.27024 11.0852 7.16475C10.9798 7.05926 10.8367 7 10.6875 7Z"
                              fill="#2F80ED"
                            />
                          </svg>
                        </div>
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
