// All landing-page copy and facts. Facts are verified against FIRST frc-events, The Blue Alliance,
// FTCScout and the team's own documents (see PRODUCT.md). Do not add figures that are not sourced there.
// Strings may contain <em>FIRST</em> (FIRST brand rule: the word is set in italics); components render them with set:html.

const F = "<em>FIRST</em>"

export const contact = {
  email: "stealthrobotics@gmail.com",
  // The booster club's own address (from its page on the old site); used for anything about giving.
  boosters: "stealthboosters@gmail.com",
  instagram: "https://www.instagram.com/stealthrobotics",
  youtube: "https://www.youtube.com/@stealthrobotics",
  facebook: "https://www.facebook.com/stealthrobotics",
  x: "https://x.com/stealthrobotics",
  github: "https://github.com/Stealth-Robotics",
}

export const meta = {
  title: "Stealth Robotics · FRC Team 4089, Duvall, WA",
  description:
    "Student-built FIRST robots from Cedarcrest High School in Duvall, WA. FRC Team 4089 and two FTC teams. Donate to support the team.",
}

export const nav = {
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Robots", href: "/robots" },
    { label: "Sponsors", href: "/sponsors" },
  ],
  cta: "Donate",
  ctaHref: "/donate",
}

export const hero = {
  titleA: "More than",
  titleB: "robots.",
  lead: `Stealth Robotics is the ${F} robotics program at Cedarcrest High School in Duvall, Washington. Students gain real engineering experience building robots from the ground up and competing with teams from around the world.`,
  primary: "Join the team",
  secondary: "Support Stealth",
}

export const about = {
  titleA: "Stealth Robotics",
  titleB: "4089",
  body: [
    // The hero already says where we are; this section carries when we started and who we are.
    `Since 2012 we have grown into a team and club of student members and adult mentors who want to spread STEM through our school community and beyond.`,
    `We do it by competing in multiple ${F} programs, and by taking our robots out to demos and outreach events in our local community.`,
  ],
  cta: "More about us",
  ctaHref: "/about",
  photo: "/photos/team-glacier-peak-2024.jpg",
  photoAlt: "About thirty Stealth Robotics students and mentors in black team shirts posing on the field at the 2024 Glacier Peak event",
}

// Program facts (founding years, age ranges) are FIRST's own, from firstinspires.org.
export const first = {
  title: `What is ${F}?`,
  lead: `${F} is a global nonprofit that runs robotics programs for students from age 4 through high school, taking them from LEGO robots to industrial-size machines. Every season brings a new game, and a culture where rival teams help each other out. Stealth fields teams in two of its programs: FTC and FRC.`,
  home: { label: "firstinspires.org", href: "https://www.firstinspires.org/" },
  programs: [
    {
      short: "FLL",
      name: `${F} LEGO League`,
      meta: "Ages 4–16 · Since 1998",
      text: "Kids start with LEGO and build up to designing and coding their own robots for a themed challenge, learning teamwork and problem solving along the way.",
      href: "https://www.firstinspires.org/programs/fll/",
      photo: "/photos/first-fll-table.jpg",
      photoAlt: "Students leaning over a FIRST LEGO League table, adjusting a LEGO robot while mentors watch",
      w: 1024,
      h: 768,
    },
    {
      short: "FTC",
      name: `${F} Tech Challenge`,
      meta: "Grades 7–12 · Since 2005",
      text: "Teams design, build and code robots from a reusable kit to play a new game each season, working with the same tools and methods engineers use.",
      ours: "Our teams: 7759 Autonomous Prime, 22152 Smelt",
      href: "https://www.firstinspires.org/programs/ftc/",
      photo: "/photos/first-ftc-22152-pit.jpg",
      photoAlt: "Smelt students in safety glasses working on FTC robot 22152 and a laptop at a pit table",
      w: 1160,
      h: 786,
    },
    {
      short: "FRC",
      name: `${F} Robotics Competition`,
      meta: "Grades 9–12 · Since 1992",
      text: "The biggest of the three. Each January, teams get a few weeks to design and build an industrial-size robot, then compete in alliances at events around the world.",
      ours: "Our team: 4089 Stealth Robotics",
      href: "https://www.firstinspires.org/programs/frc/",
      photo: "/photos/first-frc-4089-pit.jpg",
      photoAlt: "Three Stealth students working on the 4089 FRC robot in blue bumpers at an event",
      w: 1200,
      h: 893,
    },
  ],
}

export const teams = {
  title: "The Stealth family",
  list: [
    {
      program: "FRC",
      number: "4089",
      name: "Stealth Robotics",
      logo: "/brand/stealth-lockup.png",
      since: "Rookie year 2012",
      text: `Our flagship team. Every January, students design, machine, wire and code a full-size robot from scratch. This year's robot, Jeff, took the team to the ${F} Championship in Houston, the program's fourth trip.`,
      photo: "/photos/robot-02-auburn-blue-hopper-hub.jpg",
      photoAlt: "Jeff in blue bumpers with an overflowing hopper beside the hub at Auburn",
    },
    {
      program: "FTC",
      number: "7759",
      name: "Autonomous Prime",
      logo: "/brand/ftc-7759-autoprime.png",
      since: "Rookie year 2013",
      text: "Our longest-running FTC team, competing since 2013. Part of the alliance that won the 2021–22 Washington State Championship, and 6–0 to open this season.",
      photo: "/photos/ftc-7759-robot.jpg",
      photoAlt: "Autonomous Prime's 2026–27 FTC robot, number 7759, on a bench in the Cedarcrest shop",
    },
    {
      program: "FTC",
      number: "22152",
      name: "Smelt",
      logo: "/brand/ftc-22152-smelt.png",
      since: "Rookie year 2022",
      text: "Our newest team, started in 2022 and named for a fish. Last season brought two Innovate Awards and a trip to the State Championship; this one opened 6–0.",
      photo: "/photos/ftc-01-22152-on-field.jpg",
      photoAlt: "Smelt's FTC robot, number 22152, on the field",
    },
  ],
  retired: {
    label: "Retired team numbers",
    items: [
      { number: "7760", name: "Mishap", logo: "/brand/ftc-7760-mishap.png" },
      { number: "13648", name: "Jankbot", logo: "/brand/ftc-13648-jankbot.png" },
      { number: "22153", name: "Xero", logo: "/brand/ftc-22153-xero.png" },
    ],
  },
}

// /about: the team's story, how the program works, then the robot history, outreach and joining.
// Story facts (founder, 400+ students, outreach venues) are from the team's own About Us page on the old site.
export const aboutPage = {
  meta: {
    title: "About · Stealth Robotics",
    description: "Stealth Robotics is the FIRST robotics program at Cedarcrest High School in Duvall, WA: FRC Team 4089 and its FTC teams, founded in 2012.",
  },
  titleA: "About",
  titleB: "Stealth",
  lead: `Stealth Robotics is the ${F} robotics team and club at Cedarcrest High School in Duvall, Washington. Head mentor Kevin Ross started it in 2012, and since then more than 400 students have come through the shop.`,
  body: `Students and adult mentors build robots together, compete in multiple ${F} programs, and take what they make out into the community: freshman orientation, elementary schools, expos, parades and classes at local art centers.`,
  plate: [
    { label: "Founded", value: "2012" },
    { label: "Home", value: "Cedarcrest HS" },
    { label: "Students", value: "400+" },
  ],
  photo: "/photos/IMG_5281.jpg",
  photoAlt: "A Stealth student waving the team's black STEALTH flag in the stands above the field",
  how: {
    title: "How Stealth works",
    items: [
      { title: "One program, several teams", text: `FRC Team 4089 is the flagship. Alongside it run our ${F} Tech Challenge teams, each with its own robot, name and identity.` },
      { title: "Students do the work", text: "Students design in CAD, machine parts, wire, code and drive. They also run the business side, from sponsorship to outreach." },
      { title: "Mentors alongside", text: "Adult mentors teach, guide and help students work through problems, and the robots stay student-built." },
      { title: "Two seasons a year", text: "FTC kicks off in September and FRC in January, so the shop is busy for most of the school year." },
    ],
  },
}

export const history = {
  title: "Robots named for our mentors, 2016 to 2026",
  intro: `Our rookie year, 2012, brought a Rookie All-Star award and a first trip to the ${F} Championship. Since 2016, every robot has been named after one of our mentors.`,
  robots: [
    { year: "2026", name: "Jeff", line: "Turret shooter on swerve. Won Glacier Peak; 9th in Milstein.", hot: true },
    { year: "2025", name: "Sidd", line: "PVC coral and rubber algae balls in REEFSCAPE." },
    { year: "2024", name: "Mike", line: "Creativity Award and Innovation in Control, same season." },
    { year: "2023", name: "Ben", line: "Cones, cubes and a tilting charge station in CHARGED UP." },
    { year: "2022", name: "Casey", line: "Swerve drive. Won Glacier Peak and West Valley.", hot: true },
    { year: "2020", name: "David", line: "Innovation in Control, before the pandemic stopped the season." },
    { year: "2019", name: "Monte", line: "Excellence in Engineering, then the Championship's Galileo division." },
    { year: "2018", name: "Lloyd", line: "Cubes onto a giant tipping scale in POWER UP." },
    { year: "2017", name: "Jim", line: "Gears, fuel balls and a rope climb in STEAMWORKS." },
    { year: "2016", name: "Kevin", line: `Built for ${F} STRONGHOLD: boulders, defenses and a castle tower.` },
  ],
  more: "See every robot",
  moreHref: "/robots",
}

export const outreach = {
  title: "Outreach across the Snoqualmie Valley",
  intro: "The team takes robots out of the shop to younger kids, and brings other teams in to Cedarcrest.",
  items: [
    { title: "Byte Sized Builders", text: "Our robotics program for kids ages 6 to 16." },
    { title: "Bardeen League meets", text: `We host ${F} Tech Challenge league meets at Cedarcrest High School, and our own FTC teams compete in them.` },
    { title: "Robotics merit badge", text: "About 20 Scouts from Troop 745 worked through the robotics merit badge with us." },
    { title: `STEAM nights and ${F} LEGO League`, text: `Robot demos at elementary STEAM nights and ${F} LEGO League events.` },
  ],
  photos: [
    { src: "/photos/outreach-02-gym-demo-wide.jpg", alt: "An elementary gym demo with kids, cones and yellow balls everywhere" },
    { src: "/photos/outreach-03-kids-feeding-robot.jpg", alt: "Kids loading foam balls into Jeff with team members" },
  ],
}

// A sponsor shows as a name plate until a logo file (in /public/sponsors/) and website are added.
// size "lg": compact badges get a bigger box so they carry the same weight as wide wordmarks.
// wordmark: for logos that are only a mark, the name is set beside or under it in the sponsor's own style.
export type Sponsor = {
  name: string
  logo?: string
  url?: string
  size?: "lg"
  wordmark?: { text: string; position: "above" | "below" | "right"; style: string }
}

// 2025–26 season sponsors of the whole program (FRC and FTC). Source: the end card of the 2026 "Robot Reveal: Jeff"
// video (see PRODUCT.md). Add any FTC-only sponsors that card missed.
const sponsors2026: Sponsor[] = [
  { name: "Aldermoss", logo: "/sponsors/aldermoss.png", url: "https://aldermoss.com" },
  { name: "Station 68" },
  { name: "MOD Pizza", logo: "/sponsors/mod-pizza.svg", url: "https://modpizza.com" },
  { name: "Gene Haas Foundation", logo: "/sponsors/gene-haas-foundation.png", url: "https://www.ghaasfoundation.org", size: "lg" },
  {
    name: "Sani-Tech", logo: "/sponsors/sani-tech.svg", url: "https://www.sanitech.net",
    // Matches their lockup: heavy italic caps set above the auger mark.
    wordmark: { text: "Sani-Tech", position: "above", style: "font-style:italic;font-weight:900;font-stretch:100%;letter-spacing:0.01em;color:#111" },
  },
  { name: "The Grange", logo: "/sponsors/the-grange.png", url: "https://thegrangeduvall.com", size: "lg" },
  { name: "Google", logo: "/sponsors/google.svg", url: "https://www.google.com" },
  { name: "Boeing", logo: "/sponsors/boeing.svg", url: "https://www.boeing.com" },
  { name: "Costco", logo: "/sponsors/costco.svg", url: "https://www.costco.com" },
  { name: `${F} Washington`, logo: "/sponsors/first-washington.png", url: "https://firstwa.org" },
  { name: "Microsoft", logo: "/sponsors/microsoft.svg", url: "https://www.microsoft.com" },
  {
    name: "Novelty Hill IP", logo: "/sponsors/novelty-hill-ip-mark.svg", url: "https://www.noveltyhillip.com",
    // Matches noveltyhillip.com's header: the hex mark with widely tracked caps in deep indigo beside it.
    wordmark: { text: "Novelty Hill IP", position: "right", style: "font-weight:600;font-stretch:100%;letter-spacing:0.22em;color:#241268" },
  },
  { name: "Issaquah Lumber", logo: "/sponsors/issaquah-lumber.png", url: "https://issaquahlumber.com" },
  { name: "Riverview School District", logo: "/sponsors/riverview-school-district.png", url: "https://www.rsd407.org", size: "lg" },
  {
    name: "Cedarcrest High School", logo: "/sponsors/cedarcrest-high-school.png", url: "https://www.chs.rsd407.org",
    // The Red Wolves head carries no name; set it in the school's maroon underneath.
    wordmark: { text: "Cedarcrest High School", position: "below", style: "font-weight:850;font-stretch:74%;letter-spacing:0.02em;color:#7a1c25" },
  },
  { name: "Cedarcrest PTSA", logo: "/sponsors/cedarcrest-ptsa.jpg", url: "https://cedarcrestptsa.org", size: "lg" },
]

// The homepage's red field: the short ask. How to give lives on /donate, the sponsor showcase on /sponsors.
export const sponsor = {
  title: "The 2026–27 season needs $25,000",
  pitch: `The booster club needs $25,000 to run all of Stealth for the 2026–27 season: FRC Team 4089 and our FTC teams, from the first build to the last event. Last season the FRC team finished in the top 2% worldwide at the ${F} Championship and FTC Smelt reached the Washington State Championship. This season both FTC teams opened 6–0.`,
  buildsTitle: "What your gift builds",
  builds: [
    { title: "Robot parts", text: "Motors, metal, wiring and electronics for the FRC robot and every FTC robot." },
    { title: "Tools and equipment", text: "The shop equipment and hand tools students use to cut, drill and assemble parts." },
    { title: "Registration and travel", text: "Entry fees for FRC district events and FTC league meets, and the trip when a team qualifies for more." },
    { title: "Community outreach", text: "Robot demos at elementary STEAM nights, workshops for younger kids, and the FTC league meets we host at Cedarcrest." },
  ],
  primary: "Ways to give",
  primaryHref: "/donate",
  secondary: "Email the booster club",
  sponsorsTitle: "Our 2025–26 sponsors",
  sponsorsLink: "Meet our sponsors",
  sponsorsHref: "/sponsors",
  sponsors: sponsors2026,
}

// /donate: the ask, what it builds and how to give.
// /donate. Giving details are from the old site's Donate and Booster Club pages.
export const donatePage = {
  meta: {
    title: "Donate · Stealth Robotics",
    description: "Donate to Stealth Robotics, the FIRST robotics program at Cedarcrest High School in Duvall, WA (FRC Team 4089 and its FTC teams). Give online, by check, through a matching gift or as a sponsor.",
  },
  titleA: "Support",
  titleB: "Stealth Robotics",
  lead: `Students design, build and code every Stealth robot, and they run the business side too. What they can't do alone is pay for it. Gifts from families, neighbors and local businesses are what keep our ${F} teams competing.`,
  proof: "Backed by Boeing, Microsoft, Google, the Gene Haas Foundation and 12 more.",
  proofLink: "Meet our sponsors",
  proofHref: "/sponsors",
  online: { label: "Donate online", href: "https://secure.givelively.org/donate/washington-first-robotics/frc-4089" },
  photo: "/photos/team-banner-field.jpg",
  photoAlt: "The Stealth team with the 2026 Glacier Peak event winner banner on the field",
  give: {
    title: "How to give",
    intro: "Pick whichever route suits you. Every one of them reaches the team, and if you are unsure, write to the booster club and they will walk you through it.",
    routes: [
      {
        title: "Give online",
        text: "Make a one-time or monthly gift through our GiveLively campaign. It takes a couple of minutes.",
        link: { label: "Donate online", href: "https://secure.givelively.org/donate/washington-first-robotics/frc-4089" },
      },
      {
        title: "Mail a check",
        text: `Make it out to the CHS ${F} Robotics Stealth 4089 Booster Club and send it to:<br><strong>PO Box 1056, Duvall, WA 98019</strong>`,
      },
      {
        title: "Double it with a matching gift",
        // PRODUCT.md: never publish the booster club's EIN. FIRST Washington's is needed for the fallback route.
        text: `Find the CHS ${F} Robotics Stealth 4089 Booster Club in your employer's matching system. Not listed? Give to ${F} Washington (EIN 45-2443839) instead, then email accounting@firstwa.org to designate it for Team 4089.`,
      },
      {
        title: "Stock and donor-advised funds",
        text: `Gifts of stock, donor-advised fund grants and other gifts go through ${F} Washington's finance team. Designate the gift for Team 4089.`,
        link: { label: `Contact ${F} Washington`, href: "https://firstwa.org/contact-us/" },
      },
      {
        title: "Become a sponsor",
        text: "Business sponsors are recognized on our website, social media, robot, signage and team uniforms, depending on support level. Ask the booster club for the sponsor information packet.",
      },
      {
        title: "Give your time",
        text: "Adults can mentor. We can always use more help, and we meet Mondays and Wednesdays at 3 p.m. in the Cedarcrest High School shop.",
      },
    ],
    contactLabel: "Questions about giving? Write to",
    // The booster club's own wording; keep it exact.
    fine: "All donations for Stealth Robotics are made to 501(c)(3) organizations. Contributions to organizations with 501(c)(3) status may be tax deductible. Please consult your tax professional to determine deductibility.",
  },
}

// /sponsors: the showcase. Sponsors are thanked here, not on the giving page.
export const sponsorsPage = {
  meta: {
    title: "Our sponsors · Stealth Robotics",
    description: "The businesses and organizations that fund a full season for every Stealth Robotics team, FRC and FTC, at Cedarcrest High School in Duvall, WA.",
  },
  titleA: "Powered by",
  titleB: "our sponsors",
  lead: "From the first day of build season to the last match, every Stealth team, FRC and FTC, runs on our sponsors. Their support becomes the parts students build robots from, the tools in the Cedarcrest shop and the trip to every event. Just as important, it shows our students that local businesses and organizations believe in what they are building.",
  photo: "/photos/PXL_20260316_001849702.jpg",
  photoAlt: "Stealth and its alliance partners with their robots and the 2026 Glacier Peak event winner banner",
  wallTitle: "Our 2025–26 sponsors",
  sponsors: sponsors2026,
  join: {
    title: "Join them",
    text: "Businesses, organizations and families of every size help keep Stealth building. Find the way to give that works for you.",
    primary: "Become a sponsor",
    href: "/donate",
  },
}

export const join = {
  title: "Join the team in the Cedarcrest shop",
  intro: "Riverview School District students and families are welcome to visit before signing up.",
  plate: [
    { label: "Meets", value: "Mon & Wed" },
    { label: "Time", value: "3:00 p.m." },
    { label: "Where", value: "Cedarcrest shop" },
  ],
  reasons: [
    { title: "Build a real robot", text: "Design it in Onshape, machine it, wire it, code it, then drive it on the field." },
    { title: "Not only engineers", text: "Students also run the business side, including sponsorship." },
  ],
  primary: "Plan a visit to the shop",
  photo: { src: "/photos/IMG_20260403_144204_341.jpg", alt: "The Stealth team with the robot in front of the Cedarcrest High School sign" },
  strip: [
    { src: "/photos/pit-01-auburn-pit-banner.jpg", alt: "The Stealth pit at Auburn, team working on Jeff under the team banner" },
    { src: "/photos/pit-03-wiring-closeup.jpg", alt: "Hands wiring the turret and cable chain" },
    { src: "/photos/pit-02-hands-on-robot-pit.jpg", alt: "Three team members working on Jeff in the pit" },
  ],
}

// Homepage closing band: the page's one red field.
export const contactCta = {
  title: "Get in touch",
  text: "Thinking about joining, sponsoring or just want to see a robot up close? We would love to hear from you.",
  primary: "Email us",
  secondary: "Plan a visit to the shop",
  secondaryHref: "/about#join",
}

export const footer = {
  top: "Back to top",
  legal: "© 2026 Stealth Robotics",
}
