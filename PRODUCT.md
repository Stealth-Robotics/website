# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary (confirmed): **sponsors and families.**
- Local businesses, foundations and corporate matching programs deciding whether to fund the team. They arrive from a sponsorship letter, an event, or a search, and need to see that the program is real, serious and well run before they give.
- Parents and families of Riverview School District students: they want to know what the program is, what their kid would do, and how to get involved.

Secondary: prospective students (middle and high school) looking for a team to join, and the wider FIRST community (other teams, volunteers, alumni) checking robots and results.

## Product Purpose

The public home of **Stealth Robotics**, a student robotics program at Cedarcrest High School (Riverview School District, Washington). It runs FRC Team 4089 (the flagship, also called "Stealth") and acts as the umbrella organization for its FIRST Tech Challenge teams.

Success: sponsors give (the 2026–27 booster club goal is $25,000 after cuts to OSPI funding), families and students join, and visitors leave knowing the program is one organization with several teams.

## Positioning

One program, two FIRST competitions under one roof: a full FRC team plus a bench of FTC teams that has rotated over the years, all from one rural high school. Students design in CAD, machine, wire, code and run the business side themselves. The robots are real and competitive: last season the team placed in the top 2% worldwide at the FIRST Championship in Houston (source: 2026–27 sponsorship letter).

## Operating Context

- Season rhythm: kickoff in January (FRC) and September (FTC), build season, district events (e.g. Glacier Peak, Auburn, Bear Creek), District Championship, World Championship in Houston.
- Robots are designed in Onshape; parts follow the team's own numbering (e.g. `26-3-008 Brainpan`, `26-3-032 washing machine bottom`).
- Outreach: FIRST LEGO League / community demo events, school STEM nights.
- Sponsorship is handled by the **Stealth Robotics Booster Club**, a 501(c)(3) ("CHS FIRST Robotics Stealth 4089 Booster Club"), run by parents, mentors and volunteers. Team contact: stealthrobotics@gmail.com. Booster club (all giving questions on the site): stealthboosters@gmail.com. Site: stealthrobotics.org.
- Giving (from the old site's Donate and Booster Club pages): online via GiveLively, secure.givelively.org/donate/washington-first-robotics/frc-4089 (one-time or monthly); checks to the booster club at PO Box 1056, Duvall, WA 98019; matching through the booster club, or through FIRST Washington (EIN 45-2443839, then email accounting@firstwa.org to designate FRC 4089); stock and donor-advised funds through FIRST Washington's finance team. Sponsors are recognized on the website, social media, robot, signage and uniforms by support level; the sponsor packet PDF still needs a public home.
- Tax wording must stay the booster club's own: contributions "may be tax deductible. Please consult your tax professional to determine deductibility." Never state gifts are tax-deductible outright.

## Capabilities and Constraints

Teams (confirmed by the user and the team's logo files):

| Program | Number | Name | Status |
|---|---|---|---|
| FRC | 4089 | Stealth Robotics | Active (flagship) |
| FTC | 7759 | Autonomous Prime | Active |
| FTC | 22152 | Smelt | Active |
| FTC | 7760 | Mishap | Inactive |
| FTC | 13648 | Jankbot | Inactive |
| FTC | 22153 | Xero | Inactive |
| FTC | 12028 | Xero (first competed as "Charlie"; older team, per 2018 site) | Inactive |

Verified history (FIRST frc-events, FTCScout, archived team site; research 2026-11-21):
- Program created 2012, Duvall, WA (Snoqualmie Valley). Meets Mondays and Wednesdays, 3 p.m., Cedarcrest shop.
- FRC 4089: rookie 2012, PNW District. 16 seasons, 4 FIRST Championship appearances (2012 Newton, 2019 Galileo, 2022 Turing, 2026 Milstein), 3 event wins (2022 Glacier Peak, 2022 West Valley, 2026 Glacier Peak), 22 awards.
- Robots by name: Kevin (2016), Jim (2017), Lloyd (2018), Monte (2019), David (2020), Casey (2022, swerve), Ben (2023), Mike (2024), Sidd (2025), Jeff (2026, named after a mentor).
- 2026 season (Jeff): won Glacier Peak (ranked #1, 11–1, alliance 1 captain) + Quality Award; Auburn finalist + Quality Award; District Championship; Championship Milstein division ranked 9/74, alliance 6 captain.
- Awards include Rookie All-Star (2012), Excellence in Engineering (2019), Innovation in Control (2020, 2022 ×2, 2024), Quality (2026 ×2), Creativity, Gracious Professionalism, Imagery.
- FTC 7759: rookie 2013; WA State Championship winning alliance 2021–22; Inspire 3rd, Think 3rd, Design, Control awards over the years.
- FTC 22152 Smelt: rookie 2022; Innovate Award ×2 and Asimov Super Qualifier finalist 2025–26; WA State Championship (12th).
- FTC 13648 Jankbot: rookie 2017; 2021–22 event champions + Think Award.
- Open conflict: public records show 7760 Mishap competing in 2025–26; the user lists it as inactive. Ask before publishing.
- Outreach: hosted Bardeen League FTC meets at Cedarcrest; Byte Sized Builders (ages 6–16); Scouts robotics merit badge; FLL and elementary STEAM nights.
- 2026 sponsors listed on FIRST: Boeing, Microsoft, Washington OSPI, SPEEA, FIRST Washington, SolidWorks, Cedarcrest High School.
- Giving routes: Booster Club (501(c)(3), takes Microsoft/Google matching), FIRST Washington designated gift, GiveLively campaign. Social handle `stealthrobotics` (Instagram, YouTube, Facebook, X); GitHub `Stealth-Robotics`.
- stealthrobotics.org currently does not resolve (domain issue); the old WordPress site is only on the Wayback Machine.

- Stack: existing Astro 7 + React 19 + Tailwind 4 + shadcn/ui (base-nova) project. Static output.
- Decided: donations go through GiveLively (above); the team meets Mondays and Wednesdays at 3 p.m. in the Cedarcrest shop.
- Undecided: sponsor tiers and amounts, join/interest form destination. Do not invent these; leave clearly marked slots.
- Do not publish the booster club EIN on the page.
- The site does not state a fundraising goal or season on the donate page, and does not mention OSPI funding (user, 2026-11-21).

## Site Structure

- Menu: Home, About, Robots, Sponsors, and a red "Donate" action.
- `/` Home: hero reel → Who are we (Stealth Robotics 4089) → Meet Jeff → What is FIRST (FLL, FTC, FRC) → The Stealth family (teams) → footer.
- `/about`: team story (founded 2012 by head mentor Kevin Ross; 400+ students, from the old About Us page) → How Stealth works → robots named for mentors → outreach → join (meets Mon/Wed 3 p.m.).
- `/robots`: this season's robot (Jeff) → past FRC robots 2016–2025 (each named after a mentor) → 2012–2015 → FTC teams. Every season has its game logo, a summary, FIRST's game animation, and a link to The Blue Alliance.
- `/sponsors`: sponsor showcase (logo wall, 2025–26 season; sponsors back every team, FRC and FTC, for a full season).
- `/donate`: why give → what a gift builds → how to give (online, check, matching, stock/DAF, sponsor, mentor).

## Brand Commitments

- Name: **Stealth Robotics**, FRC Team **#4089**. "FIRST" is always set as *FIRST* per FIRST brand rules when used.
- Primary mark: the horned robot-head silhouette (graphite #575757) with the heavy, tightly fitted STEALTH wordmark and squared ROBOTICS lockup, white, designed for dark grounds. Source: `~/Downloads/StealthLogos`.
- Existing variants the team made: Limelight (green vision beam from the mascot's eyes, #28ff00), Pride, Stealthtrons, wireframe shirt art.
- Each FTC team keeps its own logo and colors (Autonomous Prime pastel rainbow, Smelt orange/blue fish, Xero pink orbit, Mishap primary rainbow, Jankbot white brush). The umbrella identity hosts them; it never redraws them.
- Team wear is black with the white Stealth mark.
- **Secondary colour (user-pinned, 2026-11-21): deep Cedarcrest High School red**, the red of the robot's bumpers. Measured from robot photos: studio median #C72737, shadow #9D2930; working token #B01E2F (deep), with the bumper's lit value ~#C72737 available as its brighter step. Primary stays the Stealth black/graphite/white.

## Evidence on Hand

- Logos: `~/Downloads/StealthLogos` (SVG + PNG, team logos with and without numbers).
- Photos: `~/Downloads/*.jpg`, `~/Downloads/DCMP_extracted`, `~/Downloads/Glacier_Peak`, `~/Downloads/Auburn` (match action, pits, team photos with banners, outreach events, sponsor board).
- Video: `~/Downloads/Bear`, `~/Downloads/DCMP_extracted`, `~/Downloads/Auburn` (match footage).
- CAD: `FRC4089 - 2026.glb` (2026 robot), `FRC4089 - 2022.glb`, `4089 2025.glb`, `FTC 7759 - 2026.glb`, `FTC 13648 - 2020/2021.glb`.
- Documents: sponsorship letter template, 2027 letter, donate flyer, thank-you templates.
- Sponsors visible on the 2026 robot's sponsor board include Boeing, Microsoft, Google, Gene Haas Foundation, Novelty Hill IP, FIRST Washington and Cedarcrest PTSA (confirm the full list before publishing logos).
- 2026 sponsor list as credited by the team (end card of the "Robot Reveal: Jeff" video, youtube.com/watch?v=YRN_NeaJfCo): Aldermoss, Station 68, MOD Pizza, Gene Haas Foundation, Sani-Tech, The Grange, Google, Boeing, Costco, FIRST Washington, Microsoft, Novelty Hill IP, Issaquah Lumber, Riverview School District, Cedarcrest High School, Cedarcrest PTSA.
- Official match video (FIRST uploads, user-approved for use): Glacier Peak Final Tiebreaker (RED won 299–131) youtube.com/watch?v=BhJFbdHT4lk; Milstein Playoff Match 10 (won 578–449) youtube.com/watch?v=Dv7LZbRTz1I; full list of 2026 match videos via TBA team/4089/2026.
- Best hero footage: `~/Downloads/DCMP_extracted/DCMP/P1070174.MP4` (4K follow-cam of Jeff at DCMP; ~26–36 s wide in the ball field with crowd, ~104–113 s close on the full hopper).
- Old team site (WordPress, 984846.us30.myftpupload.com): About Us, Past Robots (features, events, game descriptions and animation links per season), Donate, Booster Club, Sponsors, Resources, Calendar, News. Event dates on /robots were checked against The Blue Alliance; the old site's 2012 Championship location (Houston) was wrong, it was St. Louis.
- Sponsor logos: `public/sponsors/`, from each sponsor's site or Wikimedia; FIRST Washington and Riverview from the old site. Station 68 is unidentified (name plate only). Game logos: `public/games/` (old site; 2015 from Wikipedia). Robot photos: `public/robots/` (old site).
- Open questions: Mishap 7760 status; Station 68 identity; Ben's "4-Degree Of Scoring Mechanism" wording; whether "400+ students" is current; a larger Riverview logo.
- Absent, must not be fabricated: testimonials, student counts, alumni outcomes, award list (pending verification), sponsor tier pricing.

## Product Principles

1. Show the work: robots, CAD and match footage carry the argument; claims stay sourced.
2. One program, many teams: Stealth is the house, the FTC teams are residents with their own identities.
3. Make giving easy and specific: every visitor can see what money buys and how to give.
4. Student-made and honest: the voice is the team's, plain and proud, never corporate.

## Accessibility & Inclusion

- WCAG 2.2 AA. Families and sponsors on phones are the main readers.
- Photos: group and action shots only; no close-up portraits of individual students (confirmed). No student names.
- Reduced-motion support for any 3D or animated content, with a still fallback.
