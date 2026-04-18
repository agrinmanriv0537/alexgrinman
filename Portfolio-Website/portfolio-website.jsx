export default function AlexanderPortfolioSite() {
  const experience = [
    {
      title: "Software Team Member",
      org: "Longhorn Racing: Baja SAE - UT Austin",
      date: "Jun 2025 - Present",
      points: [
        "Work on telemetry, logging, and software-related systems for an off-road Baja SAE vehicle.",
        "Contribute to sensor integration, debugging, and real-world testing in a fast-paced team environment.",
        "Collaborate across engineering disciplines during design reviews, build days, and system integration."
      ]
    },
    {
      title: "Cybersecurity Intern",
      org: "Booz Allen Hamilton",
      date: "Jun 2024 - Present",
      points: [
        "Support cybersecurity solutions in a professional environment using Agile and SCRUM workflows.",
        "Worked with malware analysis concepts, API integration, GitLab, and Python-based tasks.",
        "Trusted with work requiring a maintained TS clearance."
      ]
    },
    {
      title: "Programming Classes Instructor",
      org: "iCode",
      date: "Sep 2023 - May 2024",
      points: [
        "Taught programming concepts including object-oriented programming and data structures.",
        "Helped students build technical confidence through hands-on instruction and problem solving."
      ]
    },
    {
      title: "Lead Programmer, President",
      org: "FRC Robotics Team 5572",
      date: "Oct 2021 - May 2024",
      points: [
        "Led programming efforts for competition robotics projects in C++ and Java.",
        "Worked on target detection, trajectory calculations, PID tuning, AprilTags, and repository management.",
        "Balanced technical leadership with team coordination and mentoring."
      ]
    }
  ];

  const skills = [
    "Python",
    "C++",
    "Java",
    "Git",
    "REST APIs",
    "Cybersecurity",
    "SCRUM / Agile",
    "Robotics",
    "Telemetry",
    "Troubleshooting",
    "Spanish",
    "Team Collaboration"
  ];

  const highlights = [
    "Computational Engineering student at UT Austin",
    "Business minor through the McCombs MSI program",
    "Cybersecurity internship experience at Booz Allen Hamilton",
    "Hands-on engineering experience through Longhorn Baja Racing",
    "Background in robotics leadership, programming, and systems thinking"
  ];

  const projects = [
    {
      name: "Baja SAE Telemetry and Dashboard Work",
      description:
        "Building and improving software systems for data logging, telemetry visualization, and engineering analysis to support the Baja car during testing and development."
    },
    {
      name: "Robotics Vision and Controls",
      description:
        "Worked on robotics software involving target detection, object trajectory calculations, PID tuning, and robot positioning strategies."
    },
    {
      name: "Programming Instruction and Technical Mentorship",
      description:
        "Designed lessons and guided students through core programming ideas, helping turn difficult technical concepts into usable skills."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_0.9fr]">
            <div>
              <p className="mb-4 inline-block rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1 text-sm text-orange-200">
                Computational Engineering Student • UT Austin
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Alexander Grinman Rivera
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                I am a student engineer focused on software, cybersecurity, and real-world technical systems. My work blends programming, engineering teamwork, and hands-on problem solving across robotics, vehicle systems, and cybersecurity environments.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:agrinmanriv@gmail.com"
                  className="rounded-2xl bg-orange-500 px-5 py-3 font-medium text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5"
                >
                  Contact Me
                </a>
                <a
                  href="https://github.com/agrinmanriv0537"
                  className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-slate-100 transition hover:bg-white/5"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/alexander-grinman-rivera/"
                  className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-slate-100 transition hover:bg-white/5"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm text-slate-400">Degree</p>
                  <p className="mt-2 text-lg font-semibold">B.S. Computational Engineering</p>
                  <p className="mt-1 text-sm text-slate-300">University of Texas at Austin</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm text-slate-400">Additional Study</p>
                  <p className="mt-2 text-lg font-semibold">Business Minor / MSI</p>
                  <p className="mt-1 text-sm text-slate-300">McCombs School of Business</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm text-slate-400">Strengths</p>
                  <p className="mt-2 text-lg font-semibold">Software • Cyber • Robotics</p>
                  <p className="mt-1 text-sm text-slate-300">Built through coursework, internships, and engineering teams</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm text-slate-400">Professional Note</p>
                  <p className="mt-2 text-lg font-semibold">TS Clearance</p>
                  <p className="mt-1 text-sm text-slate-300">Maintained through internship experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-300">About</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              A portfolio built around technical growth and real work
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-slate-300">
              I am interested in building systems that are practical, reliable, and useful. My background spans programming, cybersecurity, robotics, and engineering teamwork. I enjoy solving technical problems in environments where software connects to real hardware, real users, or real operational needs.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 md:px-10 lg:px-12">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-300">Experience</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                What I have been building and contributing to
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6">
            {experience.map((role) => (
              <div key={`${role.title}-${role.org}`} className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{role.title}</h3>
                    <p className="text-base text-orange-200">{role.org}</p>
                  </div>
                  <p className="text-sm text-slate-400">{role.date}</p>
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-orange-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-300">Projects and Interests</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Technical work I care about</h2>
            <div className="mt-6 space-y-4">
              {projects.map((project) => (
                <div key={project.name} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-300">Skills</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Tools and strengths</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-orange-400/20 bg-orange-400/10 p-5">
              <h3 className="text-lg font-semibold text-orange-100">Certifications</h3>
              <p className="mt-3 text-sm leading-7 text-orange-50/90">
                Certified Entry Level Python Programmer (PCEP) and Microsoft Technology Associate Python Certification.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-r from-orange-500/10 to-amber-300/10 p-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-300">Contact</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Let’s connect
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                I am always open to conversations about engineering, software, robotics, cybersecurity, and opportunities where I can keep learning while contributing to real projects.
              </p>
            </div>
            <div className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/60 p-6">
              <a href="mailto:agrinmanriv@gmail.com" className="block text-lg font-medium text-white hover:text-orange-200">
                agrinmanriv@gmail.com
              </a>
              <p className="text-slate-300">(210) 907-5934</p>
              <a href="https://github.com/agrinmanriv0537" className="block text-slate-200 hover:text-orange-200">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/alexander-grinman-rivera/" className="block text-slate-200 hover:text-orange-200">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
