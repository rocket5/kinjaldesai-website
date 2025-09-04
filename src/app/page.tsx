import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-8 md:px-[150px] md:py-16">
        <div className="flex flex-col gap-8 md:gap-16">
          {/* Header */}
          <header className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-8">
            <div className="flex w-full flex-col md:w-[472px]">
              <div className="job-title text-2xl font-bold leading-normal text-[var(--gray-3)] md:text-[32px]">
                Senior Research Associate
              </div>
              <div className="name text-3xl font-bold leading-normal text-black md:text-[36px]">
                Kinjal Desai, PhD
              </div>
            </div>
            <nav className="navigation flex flex-col gap-4 md:flex-row md:items-end md:gap-6">
              <Link href="/presentations" className="link-text text-[var(--blue-1)] underline">
                Presentations
              </Link>
              <Link href="/press-mentions" className="link-text text-[var(--blue-1)] underline">
                Press Mentions
              </Link>
              <Link href="/mentorship" className="link-text text-[var(--blue-1)] underline">
                Mentorship, Academic & Community Service
              </Link>
            </nav>
          </header>

          {/* Hero Section */}
          <section className="hero flex flex-col gap-8 md:flex-row md:gap-16">
            {/* Sidebar */}
            <aside className="sidebar flex flex-col items-center gap-6 md:items-start md:gap-8">
              <div className="headshot-container relative h-[150px] w-[150px] md:h-[177px] md:w-[177px]">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d856b6037570b4f93d7ae7d0075f276fd8a54b83?width=442"
                  alt="Dr. Kinjal Desai headshot"
                  width={221}
                  height={205}
                  className="absolute -left-[18px] top-0 h-[175px] w-[187px] flex-shrink-0 md:-left-[22px] md:h-[205px] md:w-[221px]"
                />
              </div>
              <div className="links flex flex-col gap-4 md:gap-4">
                <Link href="#" className="link-item flex items-center gap-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                  >
                    <g clipPath="url(#clip0_7_738)">
                      <path
                        d="M3.49467 9.17933L0 6.33333L8 0L16 6.33333L12.5053 9.17933C11.6987 7.49933 9.98533 6.33333 8 6.33333C6.01533 6.33333 4.30133 7.49867 3.49467 9.17933ZM8 6.66667C6.76232 6.66667 5.57534 7.15833 4.70017 8.0335C3.825 8.90867 3.33333 10.0957 3.33333 11.3333C3.33333 12.571 3.825 13.758 4.70017 14.6332C5.57534 15.5083 6.76232 16 8 16C9.23768 16 10.4247 15.5083 11.2998 14.6332C12.175 13.758 12.6667 12.571 12.6667 11.3333C12.6667 10.0957 12.175 8.90867 11.2998 8.0335C10.4247 7.15833 9.23768 6.66667 8 6.66667Z"
                        fill="#2F80ED"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_738">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="link-text text-[var(--blue-1)] underline">My Google Scholar</span>
                </Link>
                <Link href="#" className="link-item flex items-center gap-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                  >
                    <path
                      d="M12.6667 2C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667ZM12.3333 12.3333V8.8C12.3333 8.2236 12.1044 7.6708 11.6968 7.26322C11.2892 6.85564 10.7364 6.62667 10.16 6.62667C9.59333 6.62667 8.93333 6.97333 8.61333 7.49333V6.75333H6.75333V12.3333H8.61333V9.04667C8.61333 8.53333 9.02667 8.11333 9.54 8.11333C9.78754 8.11333 10.0249 8.21167 10.2 8.3867C10.375 8.56173 10.4733 8.79913 10.4733 9.04667V12.3333H12.3333ZM4.58667 5.70667C4.88371 5.70667 5.16859 5.58867 5.37863 5.37863C5.58867 5.16859 5.70667 4.88371 5.70667 4.58667C5.70667 3.96667 5.20667 3.46 4.58667 3.46C4.28786 3.46 4.00128 3.5787 3.78999 3.78999C3.5787 4.00128 3.46 4.28786 3.46 4.58667C3.46 5.20667 3.96667 5.70667 4.58667 5.70667ZM5.51333 12.3333V6.75333H3.66667V12.3333H5.51333Z"
                      fill="#2F80ED"
                    />
                  </svg>
                  <span className="link-text text-[var(--blue-1)] underline">LinkedIn Profile</span>
                </Link>
                <Link href="#" className="link-item flex items-center gap-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                  >
                    <path
                      d="M3.33333 14C2.96667 14 2.65289 13.8696 2.392 13.6087C2.13111 13.3478 2.00044 13.0338 2 12.6667V3.33333C2 2.96667 2.13067 2.65289 2.392 2.392C2.65333 2.13111 2.96711 2.00044 3.33333 2H12.6667C13.0333 2 13.3473 2.13067 13.6087 2.392C13.87 2.65333 14.0004 2.96711 14 3.33333V12.6667C14 13.0333 13.8696 13.3473 13.6087 13.6087C13.3478 13.87 13.0338 14.0004 12.6667 14H3.33333ZM4.66667 11.3333H9.33333V10H4.66667V11.3333ZM4.66667 8.66667H11.3333V7.33333H4.66667V8.66667ZM4.66667 6H11.3333V4.66667H4.66667V6Z"
                      fill="#2F80ED"
                    />
                  </svg>
                  <span className="link-text text-[var(--blue-1)] underline">My ORCiD Profile</span>
                </Link>
                <Link href="#" className="link-item flex items-center gap-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                  >
                    <path
                      d="M13.3333 2.66669H2.66666C1.93333 2.66669 1.33999 3.26669 1.33999 4.00002L1.33333 12C1.33333 12.7334 1.93333 13.3334 2.66666 13.3334H13.3333C14.0667 13.3334 14.6667 12.7334 14.6667 12V4.00002C14.6667 3.26669 14.0667 2.66669 13.3333 2.66669ZM13.3333 5.33335L7.99999 8.66669L2.66666 5.33335V4.00002L7.99999 7.33335L13.3333 4.00002V5.33335Z"
                      fill="#2F80ED"
                    />
                  </svg>
                  <span className="link-text text-[var(--blue-1)] underline">Contact</span>
                </Link>
                <Link href="#" className="link-item flex items-center gap-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.00001 1.33331V5.66665C8.00001 5.93186 8.10536 6.18622 8.2929 6.37375C8.48043 6.56129 8.73479 6.66665 9.00001 6.66665H13.3333V13.3333C13.3333 13.6869 13.1929 14.0261 12.9428 14.2761C12.6928 14.5262 12.3536 14.6666 12 14.6666H4.00001C3.64638 14.6666 3.30724 14.5262 3.0572 14.2761C2.80715 14.0261 2.66667 13.6869 2.66667 13.3333V2.66665C2.66667 2.31302 2.80715 1.97389 3.0572 1.72384C3.30724 1.47379 3.64638 1.33331 4.00001 1.33331H8.00001ZM7.34067 7.89865C7.18109 8.91402 6.65009 9.83393 5.85067 10.48C5.25934 10.9573 5.80001 11.894 6.50934 11.6213C7.46855 11.2519 8.53079 11.2519 9.49001 11.6213C10.1993 11.8946 10.74 10.958 10.1487 10.48C9.34925 9.83393 8.81826 8.91402 8.65867 7.89865C8.54067 7.14798 7.45867 7.14731 7.34067 7.89865ZM8.00001 9.53531L8.53734 10.4646H7.46401L8.00001 9.53531ZM9.33334 1.36198C9.58592 1.41555 9.81752 1.54131 10 1.72398L12.9427 4.66665C13.1253 4.84913 13.2511 5.08073 13.3047 5.33331H9.33334V1.36198Z"
                      fill="#2F80ED"
                    />
                  </svg>
                  <span className="link-text text-[var(--blue-1)]">CV</span>
                </Link>
              </div>
            </aside>

            {/* Main Content */}
            <main className="main-content flex w-full flex-col gap-6 md:w-[843px] md:gap-8">
              <section className="content-section flex flex-col gap-2">
                <h2 className="section-title text-xl font-bold leading-normal text-[var(--heading)] md:text-2xl">
                  Position
                </h2>
                <p className="section-description text-sm leading-6 text-black md:text-base">
                  Senior Research Associate | Developmental, Stem Cell, and Cancer Biology | The Hospital for Sick Children
                </p>
              </section>

              <section className="content-section flex flex-col gap-2">
                <h2 className="section-title text-xl font-bold leading-normal text-[var(--heading)] md:text-2xl">
                  Location
                </h2>
                <p className="section-description text-sm leading-6 text-black md:text-base">
                  The Hospital for Sick Children Research Institute Peter Gilgan Centre for Research and Learning<br />
                  686 Bay Street, 16-22 PGCRL | Toronto, ON M5G 0A4
                </p>
              </section>

              <section className="content-section flex flex-col gap-2">
                <h2 className="section-title text-xl font-bold leading-normal text-[var(--heading)] md:text-2xl">
                  Research Interests
                </h2>
                <p className="section-description text-sm leading-6 text-black md:text-base">
                  Cancer biology | Tumour initiation and progression | Functional genomics | Bioinformatics | Computational epigenetics | Transcriptional regulation | Epigenomics | Developmental and stem cell biology | Pediatric neuro-oncology | Preclinical drug targeting
                </p>
              </section>

              <section className="content-section flex flex-col gap-2">
                <h2 className="section-title text-xl font-bold leading-normal text-[var(--heading)] md:text-2xl">
                  About
                </h2>
                <p className="section-description text-sm leading-6 text-black md:text-base">
                  Dr. Desai is an emerging expert in clinically targeting early tumour progression. Her PhD research highlighted the role of noncoding genetic variation in disease. As a postdoc with Dr. Peter Dirks at the Hospital for Sick Children, Toronto, she discovered a crucial early and targetable stem cell fate transition in medulloblastoma, showing that pharmacological inhibition prevents tumour emergence and relapse in vivo.<br /><br />
                  Her research defines and dissects early regulatory circuits driving tumour evolution and recurrence in high-risk pediatric brain cancers. Building on her previous discovery, she aims to map the broader regulatory network by identifying transcription factors and epigenetic regulators across medulloblastoma and high-grade tumours, with a strong translational focus on novel molecular targets and therapeutic vulnerabilities.
                </p>
              </section>

              <section className="content-section flex flex-col gap-2">
                <h2 className="section-title text-xl font-bold leading-normal text-[var(--heading)] md:text-2xl">
                  Select Publications
                </h2>
                <div className="publications-content flex flex-col gap-4">
                  <div className="publications-list text-sm leading-6 text-black md:text-base">
                    Desai, K., Wanggou, S., Luis, E., Whetstone, H., Yu, C., Vanner, R. J., Selvadurai, H. J., Lee, L., Vijay, J., Jaramillo, J. E., Fan, J., Guilhamon, P., Kushida, M., Li, X., Stein, G., Kesari, S., Simons, B. D., Huang, X., & Dirks, P. B. (2025). <span className="text-[var(--blue-1)]">OLIG2 mediates a rare targetable stem cell fate transition in sonic hedgehog medulloblastoma. Nature Communications</span>, 16(1), 1092.<br /><br />
                    Selvadurai, H. J.*, Luis, E.*, Desai, K., Lan, X., Vladoiu, M. C., Whitley, O., Galvin, C., Vanner, R. J., Lee, L., Whetstone, H., Kushida, M., Nowakowski, T., Diamandis, P., Hawkins, C., Bader, G., Kriegstein, A., Taylor, M. D., & Dirks, P. B. (2020). <span className="text-[var(--blue-1)]">Medulloblastoma Arises from the Persistence of a Rare and Transient Sox2 Granule Neuron Precursor.</span> Cell Reports, 31(2), 107511.<br /><br />
                    Park, N. I., Guilhamon, P., Desai, K., McAdam, R. F., Langille, E., O'Connor, M., Lan, X., Whetstone, H., Coutinho, F. J., Vanner, R. J., Ling, E., Prinos, P., Lee, L., Selvadurai, H., Atwal, G., Kushida, M., Clarke, I. D., Voisin, V., Cusimano, M. D., … Dirks, P. B. (2017). <span className="text-[var(--blue-1)]">ASCL1 Reorganizes Chromatin to Direct Neuronal Fate and Suppress Tumorigenicity of Glioblastoma Stem Cells</span>. Cell Stem Cell, 21(3), 411.<br /><br />
                    Bailey, S. D.*, Desai, K.*, Kron, K. J., Mazrooei, P., Sinnott-Armstrong, N. A., Treloar, A. E., Dowar, M., Thu, K. L., Cescon, D. W., Silvester, J., Yang, S. Y. C., Wu, X., Pezo, R. C., Haibe-Kains, B., Mak, T. W., Bedard, P. L., Pugh, T. J., Sallari, R. C., & Lupien, M. (2016). <span className="text-[var(--blue-1)]">Noncoding somatic and inherited single-nucleotide variants converge to promote ESR1 expression in breast cancer</span>. Nature Genetics, 48(10), 1260–1266.<br /><br />
                    Darabos, C.*, Desai, K.*, Cowper-Sal·lari, R., Giacobini, M., Graham, B. E., Lupien, M., & Moore, J. H. (2013). <span className="text-[var(--blue-1)]">Inferring Human Phenotype Networks from Genome-Wide Genetic Associations.</span> Evolutionary Computation, Machine Learning and Data Mining in Bioinformatics, 23–34.
                  </div>
                  <Link href="#" className="publications-link flex items-center gap-1">
                    <span className="link-text text-sm text-[var(--blue-1)] underline md:text-base">
                      View a full list of Dr. Desai's publications
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="external-link-icon flex-shrink-0"
                    >
                      <path
                        d="M10 2H14V6"
                        stroke="#2F80ED"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66669 9.33333L14 2"
                        stroke="#2F80ED"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333"
                        stroke="#2F80ED"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </section>
            </main>
          </section>

          {/* Footer */}
          <footer className="footer flex justify-center">
            <p className="copyright-text text-sm leading-6 text-black md:text-base">
              © 2025 Kinjal Desai, All Rights Reserved.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
