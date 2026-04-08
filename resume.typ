#set page(
  paper: "us-letter",
  margin: (top: 0.8cm, bottom: 0.8cm, left: 1cm, right: 1cm),
)
#set text(size: 10pt, font: "Libertinus Serif", fallback: false)
#set par(justify: false, leading: 0.25cm)
#set block(spacing: 0.25cm)

#let section(title) = {
  v(2pt)
  text(size: 12pt, weight: "bold")[#title]
  v(-5pt)
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
  pad(left: 0.75cm)[
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
  [*Relevant Coursework:* Programming I & II, Data Structures & Algorithm Techniques, Computer Architecture.],
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
  info: [Incoming May 2026],
)
_Software Engineer Intern_
#highlights((
  [Will be joining the Self-service Intelligence team to create *AI agents* to address suboptimal experiences for drivers and users.],
))

#twocol(
  title: [*Cloudflare*],
  info: [Jan 2026 – Apr 2026],
)
_Software Engineer Intern_
#highlights((
  [Implemented network session logs for L4 traffic in Cloudflare One's Zero Trust Connectivity team, *improving observability* for our internal routing service, Apollo, which handles *over 100K requests per second* globally.],
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
  [*Redesigned and maintained* websites with consistency utilizing WordPress to showcase our programs and contact avenues.],
))

#twocol(
  title: [*KBR, Inc.*],
  info: [May 2025],
)
_Software Engineer Intern_
#highlights((
  [*Designed and implemented* a conversion mechanism for J1708 vehicle diagnostic messages to the ASAM MDF 4 format using C++ intended to run on a large-scale embedded device, in a *team of five software engineers*.],
  [*Established a CI/CD pipeline* on the Azure DevOps cloud platform for automated testing and enforcing formatting.],
  [Delivered quickly and effectively in a three week long sprint internship hosted in collaboration with *Break Through Tech*.],
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
  [Developed a client-server architecture in Python for a lunar rover in a team of 15+ people, for real-time communication between an operator's inputs on a Linux device and the rover's Raspberry Pi.],
))

*ICPC Southeast USA Regional 2022*, _MDC Cybersharks_
#highlights((
  [Won silver medal in Division 2 with my group of 3 teammates, solving the proposed challenges using Java and Python.],
))

#section("Projects")

#twocol(
  title: [*atmpt* – _Rust, Github CI, Command-Line_],
  info: [#link("https://github.com/marcelohdez/atmpt")[github.com/marcelohdez/atmpt]],
)
#highlights((
  [Create and open temporary coding projects in your editor, leading to a *decrease in time-to-code by 40%*.],
  [Implemented CI/CD pipeline with GitHub Actions for *automated testing and deployment*.],
))

#twocol(
  title: [*Bedroom* – _Java, Swing API, Data Visualization_],
  info: [#link("https://github.com/marcelohdez/bedroom")[github.com/marcelohdez/bedroom]],
)
#highlights((
  [*Zero-dependency Java application* for call center agents to track their orders with *interactive data visualization*.],
  [Implemented customizable UI and shortcuts, *improving productivity and reducing manual calculations.*],
))

#twocol(
  title: [*dim* – _Rust, Wayland, Github CI, Linux Packaging_],
  info: [#link("https://github.com/marcelohdez/dim")[github.com/marcelohdez/dim]],
)
#highlights((
  [Native Wayland screen dimming tool which can be chained in scripts, *CI tests compilation and generates manpages*.],
))

#section("Skills")

#v(1pt)
#list(
  marker: none,
  body-indent: 0pt,
  [*Languages:* Rust, Go, Python, C/C++, JavaScript/TypeScript, Java, Bash/Shell, SQL],
  [*Technologies:* Git, CI/CD, Linux/Unix, Azure DevOps, Node.js, React/Next.js, Vim, Streamlit, BigQuery],
)
