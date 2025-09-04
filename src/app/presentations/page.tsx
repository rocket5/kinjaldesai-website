import Link from "next/link";
import { type Metadata } from "next";
import profileData from "~/data/profile.json";
import presentationsData from "~/data/presentations.json";
import { icons } from "~/components/icons";
import { generatePageMetadata } from "~/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Presentations",
  description: "Oral presentations and poster presentations by Dr. Kinjal Desai, Senior Research Associate specializing in cancer biology and pediatric neuro-oncology.",
  keywords: [
    "scientific presentations",
    "research presentations",
    "poster presentations", 
    "oral presentations",
    "academic conferences",
    "cancer research presentations",
    "medulloblastoma research",
    "scientific conferences"
  ],
  path: "/presentations"
});

export default function Presentations() {
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
                    item.label === 'Presentations' 
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
            <main className="flex flex-1 flex-col gap-6 md:gap-8">
              {/* Oral Presentations Section */}
              <section className="oral-presentations flex flex-col gap-4">
                <h2 className="section-title text-xl font-bold leading-normal text-[var(--heading)] md:text-2xl">
                  Oral Presentations
                </h2>
                <div className="presentations-content text-sm leading-6 text-black md:text-base">
                  {presentationsData.oralPresentations
                    .filter(presentation => presentation.trim() !== "")
                    .map((presentation, index) => (
                      <p key={index} className="mb-4">
                        {presentation}
                      </p>
                    ))}
                </div>
              </section>

              {/* Select Poster Presentations Section */}
              <section className="poster-presentations flex flex-col gap-4">
                <h2 className="section-title text-xl font-bold leading-normal text-[var(--heading)] md:text-2xl">
                  Select Poster Presentations
                </h2>
                
                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="poster-table min-w-full border-collapse bg-white">
                    <thead>
                      <tr>
                        <th className="table-header w-[132px] border border-[#333] bg-[var(--heading)] p-2 text-center text-base font-bold leading-normal text-white md:text-xl">
                          Year
                        </th>
                        <th className="table-header min-w-[256px] border border-[#333] bg-[var(--heading)] p-2 text-center text-base font-bold leading-normal text-white md:text-xl">
                          Project Title
                        </th>
                        <th className="table-header min-w-[256px] border border-[#333] bg-[var(--heading)] p-2 text-center text-base font-bold leading-normal text-white md:text-xl">
                          Conference & Location
                        </th>
                        <th className="table-header min-w-[156px] border border-[#333] bg-[var(--heading)] p-2 text-center text-base font-bold leading-normal text-white md:text-xl">
                          Award
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {presentationsData.posterPresentations.map((poster, index) => (
                        <tr key={index}>
                          <td className="table-cell border border-[#333] p-2 align-top text-sm leading-6 text-black md:text-base">
                            {poster.year}
                          </td>
                          <td className="table-cell border border-[#333] p-2 align-top text-sm leading-6 text-black md:text-base">
                            {poster.title.includes('D. discoideum') ? (
                              <>
                                Molecular mechanisms of mood disorder using{' '}
                                <em>D. discoideum</em> as a neuropharmacological model
                              </>
                            ) : (
                              poster.title
                            )}
                          </td>
                          <td className="table-cell border border-[#333] p-2 align-top text-sm leading-6 text-black md:text-base">
                            {poster.conference}
                          </td>
                          <td className="table-cell border border-[#333] p-2 align-top text-sm leading-6 text-black md:text-base">
                            {poster.award}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
