// /robots: every FRC robot and the FTC teams.
// Sources: the team's old Past Robots page (features, events, awards per season) and the verified history in
// PRODUCT.md (FIRST frc-events, FTCScout). Strings may contain <em>FIRST</em>; components render them with set:html.

const F = "<em>FIRST</em>"

/** date: the event's dates (year implied by the season), checked against The Blue Alliance. */
export type Result = { event: string; date: string; result: string }

/** The team's results for a season on The Blue Alliance. */
export const tba = (year: string) => `https://www.thebluealliance.com/team/4089/${year}`
const yt = (id: string) => `https://www.youtube.com/watch?v=${id}`
export type Robot = {
  id: string
  year: string
  name: string
  game: string
  /** What the season's game asked robots to do (condensed from the old Past Robots page). */
  season: string
  /** The game's logo, in /public/games (from the old Past Robots page; 2015 from Wikipedia). */
  logo: string
  /** FIRST's official game animation on YouTube (links from the old Past Robots page, titles checked). */
  animation: string
  photo: string
  photoAlt: string
  /** object-position for the photo frame */
  focus?: string
  features: string[]
  results: Result[]
  hot?: boolean
}

export const robotsPage = {
  meta: {
    title: "Robots · Stealth Robotics",
    description: "Every robot Stealth Robotics has built: FRC Team 4089's robots from 2012 to 2026, each named after a mentor since 2016, and our FTC teams.",
  },
  titleA: "Built by",
  titleB: "students",
  lead: `Every season brings a new game and a new robot, designed, machined, wired and coded by students. Since 2016, each FRC robot has been named after one of our mentors.`,
  plate: [
    { label: "FRC seasons", value: "16" },
    { label: `${F} Championships`, value: "4" },
    { label: "Event wins", value: "3" },
    { label: "Awards", value: "22" },
  ],
  photo: "/photos/robot-02-auburn-blue-hopper-hub.jpg",
  photoAlt: "Jeff in blue bumpers with an overflowing hopper beside the hub at Auburn",
  currentLabel: "This season's robot",
  pastTitle: "Past FRC robots",
  earlyTitle: "Before the names, 2012 to 2015",
  ftcTitle: "FTC teams",
  ftcIntro: `Our ${F} Tech Challenge teams build smaller robots on a season that starts each September. They are where many rookies learn before moving up to FRC.`,
  cta: {
    title: "Help build the next one",
    text: "The next robot starts with sponsors and donors like you.",
    primary: "Donate",
    href: "/donate",
  },
}

export const current: Robot = {
  id: "2026-jeff",
  year: "2026",
  name: "Jeff",
  game: "REBUILT",
  season: "REBUILT, presented by Haas, is themed around reimagining the past and archaeology. Two alliances of three teams shoot fuel balls into their own hub, which switches on and off as the match goes on, and finish with a climb on either side of the field.",
  logo: "/games/2026.webp",
  animation: yt("_fybREErgyM"),
  photo: "/robots/2026-jeff.jpg",
  photoAlt: "Jeff, the 2026 robot, in red 4089 bumpers with its netted hopper and turret, on a white background",
  features: ["Over-the-bumper fuel intake", "172° turret", "Limelight vision", "4-wheel swerve drive"],
  results: [
    { event: "Glacier Peak", date: "Mar 13–15", result: "Event winner, ranked #1 (11–1) · Quality Award" },
    { event: "Auburn", date: "Mar 27–29", result: "Finalist · Quality Award" },
    { event: "PNW District Championship", date: "Apr 8–11", result: "Competed" },
    { event: `${F} Championship, Milstein`, date: "Apr 29 – May 2", result: "Ranked 9th of 74 · alliance 6 captain" },
  ],
  hot: true,
}

export const past: Robot[] = [
  {
    id: "2025-sidd", year: "2025", name: "Sidd", game: "REEFSCAPE",
    season: "An ocean-themed game for two alliances of three teams. Robots place PVC coral on a central reef, move inflatable algae into the processor and the net, and end the match with a climb in the middle of the field.",
    logo: "/games/2025.jpg", animation: yt("YWbxcjlY9JY"),
    photo: "/robots/2025-sidd.jpg", photoAlt: "Sidd, the 2025 robot, in red bumpers with its arm raised at the reef", focus: "50% 60%",
    features: ["4-wheel swerve drive", "Coral ground intake", "Scores on the full reef, processor and net"],
    results: [{ event: "Glacier Peak", date: "Feb 28 – Mar 2", result: "Competed" }, { event: "Bonney Lake", date: "Mar 14–16", result: "Gracious Professionalism Award" }],
  },
  {
    id: "2024-mike", year: "2024", name: "Mike", game: "CRESCENDO",
    season: "A music-themed game for two alliances of three teams. Robots shoot foam rings called notes into goals around the field, and finish by hanging from chains at the end of the match.",
    logo: "/games/2024.png", animation: yt("9keeDyFxzY4"),
    photo: "/robots/2024-mike.jpg", photoAlt: "Mike, the 2024 robot, in blue bumpers on the field",
    features: ["4-wheel swerve drive", "Distance-adjusting shooter", "Passively deploying climb"],
    results: [{ event: "Glacier Peak", date: "Mar 1–3", result: "Creativity Award" }, { event: "SunDome", date: "Mar 14–16", result: "Innovation in Control Award" }],
  },
  {
    id: "2023-ben", year: "2023", name: "Ben", game: "CHARGED UP",
    season: "Two alliances of three teams compete to bring energy to their community. Robots retrieve cones and cubes from substations, score them on the grid, and finish by balancing together on the charge station.",
    logo: "/games/2023.png", animation: yt("0zpflsYc4PA"),
    photo: "/robots/2023-ben.jpg", photoAlt: "Ben, the 2023 robot, in red bumpers in the Cedarcrest shop", focus: "50% 70%",
    features: ["One intake for both cones and cubes", "4-wheel swerve drive", "Four-degree scoring mechanism"],
    results: [{ event: "Glacier Peak", date: "Mar 3–5", result: "Competed" }, { event: "Oregon State Fairgrounds", date: "Mar 23–25", result: "Competed" }],
  },
  {
    id: "2022-casey", year: "2022", name: "Casey", game: "RAPID REACT", hot: true,
    season: "A transportation-themed game for two alliances of three teams. Robots shoot balls called cargo into high and low hubs, then climb a series of rungs at the end of the match, going as high as they can.",
    logo: "/games/2022.png", animation: yt("LgniEjI9cCM"),
    photo: "/robots/2022-casey.jpg", photoAlt: "Casey, the 2022 robot, in blue bumpers on the field in front of a full gym", focus: "20% 75%",
    features: ["4-wheel swerve drive", "Distance-adjusting shooter", "Full traversal climb"],
    results: [
      { event: "Glacier Peak", date: "Mar 4–6", result: "Event winner · Innovation in Control Award" },
      { event: "West Valley", date: "Mar 31 – Apr 2", result: "Event winner · Innovation in Control Award" },
      { event: "PNW District Championship", date: "Apr 6–9", result: "Competed" },
      { event: `${F} Championship, Turing`, date: "Apr 20–23", result: "Competed" },
    ],
  },
  {
    id: "2020-david", year: "2020", name: "David", game: "INFINITE RECHARGE",
    season: "A futuristic city. Robots shoot power cells to energize a shield generator, spin a control panel and finish by parking or climbing on the generator. The pandemic cut the season short.",
    logo: "/games/2020.png", animation: yt("gmiYWTmFRVE"),
    photo: "/robots/2020-david.jpg", photoAlt: "David, the 2020 robot, in blue bumpers on the field with yellow power cells", focus: "45% 70%",
    features: ["6-wheel West Coast drive", "Variable-angle high shooter", "Self-aligning climb", "Fits under the trench"],
    results: [{ event: "Glacier Peak", date: "Feb 28 – Mar 1", result: "Competed" }, { event: "West Valley", date: "Mar 5–7", result: "Finalist · Innovation in Control Award" }],
  },
  {
    id: "2019-monte", year: "2019", name: "Monte", game: "DESTINATION: DEEP SPACE",
    season: "Robots load hatch panels and cargo onto rockets and cargo ships, then climb back onto their habitat platform before time runs out.",
    logo: "/games/2019.jpg", animation: yt("Mew6G_og-PI"),
    photo: "/robots/2019-monte.jpg", photoAlt: "Monte, the 2019 robot, in blue bumpers with its elevator raised",
    features: ["4-wheel mecanum drive", "Cargo intake", "Elevator to score on the rocket", "Level 3 HAB climb"],
    results: [
      { event: "Mount Vernon", date: "Mar 1–3", result: "Competed" },
      { event: "Glacier Peak", date: "Mar 22–24", result: "Competed" },
      { event: "Auburn", date: "Mar 29–31", result: "Finalist · Excellence in Engineering Award" },
      { event: `${F} Championship, Galileo`, date: "Apr 17–20", result: "Competed" },
    ],
  },
  {
    id: "2018-lloyd", year: "2018", name: "Lloyd", game: `${F} POWER UP`,
    season: "Robots stack power cubes on giant balancing scales to tip them their way, trade cubes for power-ups and climb the central tower at the end.",
    logo: "/games/2018.png", animation: yt("HZbdwYiCY74"),
    photo: "/robots/2018-lloyd.jpg", photoAlt: "Lloyd, the 2018 robot, in red bumpers with its tall elevator",
    features: ["6-wheel West Coast drive", "Power cube intake", "Elevator to score on the scale"],
    results: [{ event: "Mount Vernon", date: "Mar 2–4", result: "Competed" }, { event: "West Valley", date: "Mar 22–24", result: "Competed" }],
  },
  {
    id: "2017-jim", year: "2017", name: "Jim", game: `${F} STEAMWORKS`,
    season: "Robots score fuel into a boiler and deliver gears to their airship, then climb team-built ropes to board it.",
    logo: "/games/2017.png", animation: yt("EMiNmJW7enI"),
    photo: "/robots/2017-jim.jpg", photoAlt: "Jim, the 2017 robot, a clear-sided box robot in blue 4089 bumpers",
    features: ["6-wheel West Coast drive", "Passive gear mechanism", "Fuel intake", "Airship rope climber"],
    results: [{ event: "Auburn Mountainview", date: "Mar 3–5", result: "Competed" }, { event: "Glacier Peak", date: "Mar 24–26", result: "Competed" }],
  },
  {
    id: "2016-kevin", year: "2016", name: "Kevin", game: `${F} STRONGHOLD`,
    season: "A medieval siege. Robots breach the other alliance's defenses, fire foam boulders at its tower and finish by surrounding or scaling it.",
    logo: "/games/2016.png", animation: yt("VqOKzoHJDjA"),
    photo: "/robots/2016-kevin.jpg", photoAlt: "Kevin, the 2016 robot, a low aluminum-frame robot on a dark floor",
    features: ["Custom pneumatic West Coast drive", "Boulder intake and shooter", "Fits under the low bar"],
    results: [
      { event: "Glacier Peak", date: "Mar 11–13", result: "Competed" },
      { event: "Mount Vernon", date: "Mar 18–20", result: "Competed" },
      { event: "PNW District Championship", date: "Apr 6–9", result: "Competed" },
    ],
  },
]

/** The unnamed early robots, as a compact ledger. */
export const early = [
  { year: "2015", logo: "/games/2015.png", animation: yt("W6UYFKNGHJ8"), game: "RECYCLE RUSH", season: "Robots stack totes, cap them with recycling containers and clear pool-noodle litter.", line: "Competed at Glacier Peak (Mar 6–8) and Shorewood (Mar 20–22)." },
  { year: "2014", logo: "/games/2014.png", animation: yt("oxp4dkMQ1Vo"), game: "AERIAL ASSIST", season: "Robots pass giant exercise balls between partners, over a truss and into goals.", line: "Imagery Award at Auburn Mountainview (Feb 28 – Mar 1), then Mount Vernon (Mar 14–15)." },
  { year: "2013", logo: "/games/2013.jpg", animation: yt("itHNW2OFr4Y"), game: "ULTIMATE ASCENT", season: "Robots shoot flying discs into goals at different heights and climb a pyramid.", line: "Innovation in Control at the Central Washington Regional (Mar 21–23), Creativity Award at the Seattle Regional (Mar 28–30)." },
  { year: "2012", logo: "/games/2012.jpg", animation: yt("nOXsdhZZSdM"), game: "REBOUND RUMBLE", season: "Basketball for robots: foam basketballs into four hoops, then balance on bridges.", line: `Rookie year. Seattle Olympic Regional (Mar 22–24), Rookie All-Star Award at the Spokane Regional (Apr 5–7), then the ${F} Championship's Newton division in St. Louis (Apr 25–28).`, hot: true },
]

/** Active FTC teams (Mishap is left off until its 2025–26 status is confirmed; see PRODUCT.md). */
export const ftc = [
  {
    number: "7759", name: "Autonomous Prime", since: "Rookie year 2013",
    photo: "/photos/ftc-7759-robot.jpg", photoAlt: "Autonomous Prime's 2026–27 FTC robot, number 7759, on a bench in the Cedarcrest shop",
    text: "On the alliance that won the 2021–22 Washington State Championship. Inspire, Think, Design and Control awards over the years.",
  },
  {
    number: "22152", name: "Smelt", since: "Rookie year 2022",
    photo: "/photos/ftc-01-22152-on-field.jpg", photoAlt: "Smelt's FTC robot, number 22152, on the field",
    text: "Two Innovate Awards and an Asimov Super Qualifier final in 2025–26, then the Washington State Championship.",
  },
  {
    number: "13648", name: "Jankbot", since: "Rookie year 2017 · retired",
    photo: "/reel/ftc2020-jankbot-rings.jpg", photoAlt: "Jankbot's FTC robot shooting rings on the field",
    text: "Event champions and the Think Award in 2021–22.",
  },
]
