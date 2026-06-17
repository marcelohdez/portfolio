#set page(
  paper: "us-letter",
  margin: (top: 0.5cm, bottom: 0.5cm, left: 1cm, right: 1cm),
)
#set text(size: 10pt, font: "Libertinus Serif", fallback: false)
#set par(justify: false, leading: 0.25cm)
#set block(spacing: 0.25cm)

#let section(title) = {
  v(2pt)
  text(size: 12pt, weight: "bold")[#title]
  v(-4pt)
  line(length: 100%, stroke: 0.5pt + black)
  v(-2pt)
}

// for experiences and projects
#let twocol(title: [], info: []) = {
  v(1pt)
  grid(
    columns: (1fr, auto),
    title, align(right)[#info],
  )
}

// bulleted list
#let highlights(items) = {
  pad(left: 0.6cm)[
    #for item in items [
      #list.item(item)
    ]
  ]
}

#align(center)[
  #text(size: 25pt)[Marcelo Hernandez]
  #v(-20pt)
  #link("mailto:marcelohdez.inq@gmail.com")[marcelohdez.inq\@gmail.com]
  #h(5pt) $|$ #h(5pt)
  #link("https://marcelohdez.com/")[marcelohdez.com]
  #h(5pt) $|$ #h(5pt)
  #link("https://linkedin.com/in/marcelohdez")[linkedin.com/in/marcelohdez]
  #h(5pt) $|$ #h(5pt)
  #link("https://github.com/marcelohdez")[github.com/marcelohdez]
  #v(-5pt)
]

#section("Education")

#twocol(
  title: [*Florida International University*, _BS in Computer Science_],
  info: [Aug 2024 – May 2027],
)
#highlights((
  [*Courses:* Programming I & II, Data Structures, Algorithm Techniques, Computer Architecture, Database Management.],
  [*Activities:* Break Through Tech, INIT, ColorStack, Society of Hispanic Professional Engineers (SHPE).],
))

#twocol(
  title: [*Google Tech Exchange*, _Technical Program_],
  info: [Jan 2025 – May 2025],
)
#highlights((
  [*Selected from 1,500+ candidates* to receive technical interviews and system architecture/software engineering coaching.],
  [*Courses:* Algorithm & System Design, Introduction to Software Engineering, and Careers in Tech.],
))

#section("Experience")

#twocol(
  title: [*Lyft*],
  info: [May 2026 - Aug 2026],
)
_Software Engineer Intern_
#highlights((
  [Building *AI agents* harnessing telematics data to automatically verify rider self-service reports, in Python with LangSmith.],
))

#twocol(
  title: [*Cloudflare*],
  info: [Jan 2026 – Apr 2026],
)
_Software Engineer Intern_
#highlights((
  [Implemented network session logs for L4 traffic in Rust for Apollo, an internal routing service handling *100K+ requests/second* globally, *improving observability* to our teams and customers routing through our Zero Trust network.],
  [Built *end-to-end verification tests* into the existing test suite, ensuring correctness across service hops and restart scenarios.],
  [Coordinated schema and field precedence logic changes across three teams for connections with multi-service hops.],
))

#twocol(
  title: [*Florida International University*],
  info: [Jun 2025 – Jan 2026],
)
_Student Program Assistant_
#highlights((
  [Contributed to the expansion of computer science education for 100+ students by *coordinating workshops and curriculum* for Break Through Tech's Sprinternship program, and facilitating workshops initiatives for organizations like Code.org.],
))

#twocol(
  title: [*KBR, Inc.*],
  info: [May 2025],
)
_Software Engineer Intern_
#highlights((
  [Designed and implemented a *J1708 to MDF4 conversion mechanism in C++* targeting bare-metal embedded devices.],
  [*Developed a CI/CD pipeline* with a Python testing harness generating test byte streams on Azure DevOps.],
  [Delivered quickly in a *three-week-long sprint internship* hosted in collaboration with Break Through Tech.],
))

#twocol(
  title: [*Miami Dade College*],
  info: [Feb 2023 – Aug 2025],
)
_Computer Science Tutor_
#highlights((
  [Coached *over 100 students* on implementing data structures and creating projects using Java, C/C++, SQL, and Python.],
  [*Increased students' grades by 50%* and increased their classroom participation rates.],
))

#section("Competitions")

#twocol(
  title: [*NASA Lunabotics Challenge 2025*, _FIU Panther Robotics_],
  info: [#link("https://github.com/FIU-Lunabotics/FIU-Luna0")[github.com/FIU-Lunabotics/FIU-Luna0]],
)
#highlights((
  [Developed a client-server architecture in Python for a lunar rover in a team of 15+ people, for real-time communication through Unix sockets between inputs from a Linux device to the rover's Raspberry Pi, using Arduinos for motor control.],
))

*ICPC Southeast USA Regional 2022*, _MDC Cybersharks_
#highlights((
  [Won silver medal in Division 2 with my group of 3 teammates, solving the proposed challenges using Java and Python.],
))

#section("Projects")

#twocol(
  title: [*dim* – _Rust, Wayland, Github CI, Linux Packaging_],
  info: [#link("https://github.com/marcelohdez/dim")[github.com/marcelohdez/dim]],
)
#highlights((
  [CLI utilizing *Wayland's single pixel buffer protocol or SHM buffers* depending on support to dim screens programmatically.],
  [Packaged for RPM and AUR with shell completion installation. *GitHub CI ensures compilation and manpage generation*.],
))

#twocol(
  title: [*atmpt* – _Rust, Github CI, Command-Line_],
  info: [#link("https://github.com/marcelohdez/atmpt")[github.com/marcelohdez/atmpt]],
)
#highlights((
  [Create and open temporary coding projects in your editor, leading to a *decrease in time-to-code by 40%*.],
  [Implemented CI/CD pipeline with GitHub Actions for *automated testing*.],
))

#twocol(
  title: [*Bedroom* – _Java, Swing API, Data Visualization_],
  info: [#link("https://github.com/marcelohdez/bedroom")[github.com/marcelohdez/bedroom]],
)
#highlights((
  [*Zero-dependency Java application* for call center agents to track their orders with *interactive data visualization*.],
  [Implemented customizable UI and shortcuts, *improving productivity and reducing manual calculations.*],
))

#section("Skills")

#v(1pt)
#list(
  marker: none,
  body-indent: 0pt,
  [*Languages:* Rust, Go, Python, C/C++, JavaScript/TypeScript, Java, Bash/Shell, SQL],
  [*Technologies:* Git, CI/CD, Linux/Unix, Azure DevOps, Node.js, React/Next.js, Vim, Streamlit],
)
