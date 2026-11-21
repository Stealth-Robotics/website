// All landing-page copy and facts. Facts are verified against FIRST frc-events, The Blue Alliance,
// FTCScout and the team's own documents (see PRODUCT.md). Do not add figures that are not sourced there.
// Strings may contain <em>FIRST</em> (FIRST brand rule: the word is set in italics); components render them with set:html.

const F = "<em>FIRST</em>"

export const contact = {
  email: "stealthrobotics@gmail.com",
  instagram: "https://www.instagram.com/stealthrobotics",
  youtube: "https://www.youtube.com/@stealthrobotics",
  facebook: "https://www.facebook.com/stealthrobotics",
  x: "https://x.com/stealthrobotics",
  github: "https://github.com/Stealth-Robotics",
}

export const meta = {
  title: "Stealth Robotics · FRC Team 4089, Duvall, WA",
  description:
    "Student-built FIRST robots from Cedarcrest High School in Duvall, WA. FRC Team 4089 and two FTC teams. Help fund the 2027 season.",
}

export const nav = {
  links: [
    { label: "Teams", href: "#teams" },
  ],
  cta: "Sponsor 2027",
}

export const hero = {
  titleA: "More than",
  titleB: "robots.",
  lead: `Founded in 2012, Stealth Robotics is the ${F} robotics program at Cedarcrest High School in Duvall, Washington. Students gain real engineering experience building robots from the ground up and competing with teams from around the world.`,
  primary: "Join the team",
  secondary: "Support Stealth",
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

export const history = {
  title: "Robots by first name, 2016 to 2026",
  intro: `Our rookie year, 2012, brought a Rookie All-Star award and a first trip to the ${F} Championship. From 2016 on, every robot got a first name.`,
  robots: [
    { year: "2026", name: "Jeff", line: "Named for a mentor. Won Glacier Peak; 9th in Milstein.", hot: true },
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
  ftc: "FTC, 2021–22 · Autonomous Prime was on the alliance that won state; Jankbot won an event and the Think Award.",
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

export const sponsor = {
  title: "The 2027 season needs $25,000",
  pitch: "State OSPI funding cuts left the program short. The booster club needs $25,000 to build and compete in 2027. Students run the robots and the business side. Last season they took Jeff to Houston, ranked 9th of 74 in the Milstein division and finished in the top 2% worldwide.",
  buildsTitle: "What $25,000 builds",
  builds: [
    { title: "Robot parts", text: "Motors, swerve modules, metal and wiring for the 2027 robots." },
    { title: "Tools and equipment", text: "The shop equipment and hand tools students use to cut, drill and assemble parts." },
    { title: "Registration and travel", text: "Entry fees for district events, and the trip if a robot qualifies for more." },
    { title: "Team uniforms", text: "Black team wear with the white Stealth mark, for the pit and the stands." },
  ],
  routes: [
    { title: "Give through the booster club", text: `Gifts go to the CHS ${F} Robotics Stealth 4089 Booster Club, a 501(c)(3), and are tax-deductible. The booster club accepts Microsoft and Google matching gifts, so check your employer's portal first.` },
    { title: `Give through ${F} Washington`, text: `Prefer to give through ${F}? Make a designated gift to ${F} Washington for Team 4089.` },
    { title: "Ask for the sponsor letter", text: "The 2027 sponsorship letter, and answers to any question, from stealthrobotics@gmail.com." },
  ],
  primary: "Sponsor the 2027 season",
  secondary: "Email the booster club",
  sponsorsTitle: "Jeff's 2026 sponsors",
  sponsors: [
    "Aldermoss", "Station 68", "MOD Pizza", "Gene Haas Foundation", "Sani-Tech", "The Grange", "Google", "Boeing", "Costco",
    `${F} Washington`, "Microsoft", "Novelty Hill IP", "Issaquah Lumber", "Riverview School District", "Cedarcrest High School", "Cedarcrest PTSA",
  ],
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

export const footer = {
  top: "Back to top",
  legal: "© 2026 Stealth Robotics",
}
