import Link from "next/link";
import Image from "next/image";
import profileData from "~/data/profile.json";
import contentData from "~/data/content.json";
import { icons } from "~/components/icons";

export default function Home() {
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
                <Link key={index} href={item.href} className="link-text text-[var(--blue-1)] underline">
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>

          {/* Hero Section */}
          <section className="hero flex flex-col gap-8 md:flex-row md:gap-16">
            {/* Sidebar */}
            <aside className="sidebar flex flex-col items-center gap-6 md:items-start md:gap-8">
              <div className="headshot-container relative h-[150px] w-[150px] md:h-[177px] md:w-[177px]">
                <Image
                  src={profileData.headshot.src}
                  alt={profileData.headshot.alt}
                  width={221}
                  height={205}
                  className="absolute -left-[18px] top-0 h-[175px] w-[187px] flex-shrink-0 md:-left-[22px] md:h-[205px] md:w-[221px]"
                />
              </div>
              <div className="links flex flex-col gap-4 md:gap-4">
                {profileData.profileLinks.map((link, index) => (
                  <Link key={index} href={link.href} className="link-item flex items-center gap-1">
                    {icons[link.icon as keyof typeof icons]}
                    <span className={`link-text text-[var(--blue-1)] ${link.icon !== 'document' ? 'underline' : ''}`}>
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </aside>

            {/* Main Content */}
            <main className="main-content flex w-full flex-col gap-6 md:w-[843px] md:gap-8">
              {contentData.sections.map((section, index) => (
                <section key={index} className="content-section flex flex-col gap-2">
                  <h2 className="section-title text-xl font-bold leading-normal text-[var(--heading)] md:text-2xl">
                    {section.title}
                  </h2>
                  <p className="section-description text-sm leading-6 text-black md:text-base">
                    {section.content.split('\n').map((line, lineIndex) => (
                      <span key={lineIndex}>
                        {line}
                        {lineIndex < section.content.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </section>
              ))}

              <section className="content-section flex flex-col gap-2">
                <h2 className="section-title text-xl font-bold leading-normal text-[var(--heading)] md:text-2xl">
                  {contentData.publications.title}
                </h2>
                <div className="publications-content flex flex-col gap-4">
                  <div className="publications-list text-sm leading-6 text-black md:text-base">
                    {contentData.publications.entries.map((publication, index) => (
                      <span key={index}>
                        {publication.authors} {publication.year}. <span className="text-[var(--blue-1)]">{publication.title}</span> {publication.journal}, {publication.details}
                        {index < contentData.publications.entries.length - 1 && <><br /><br /></>}
                      </span>
                    ))}
                  </div>
                  <Link href={contentData.publications.viewAllLink.href} className="publications-link flex items-center gap-1">
                    <span className="link-text text-sm text-[var(--blue-1)] underline md:text-base">
                      {contentData.publications.viewAllLink.text}
                    </span>
                    {icons.externalLink}
                  </Link>
                </div>
              </section>
            </main>
          </section>

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
