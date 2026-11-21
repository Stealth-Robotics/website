// Hero reel: separate clips the Hero component plays in order with a crossfade, looping, with no controls.
// Video clips live in /public/reel: H.264 MP4, 1280x720, no audio track, roughly 2.5-7.5 s, cropped/recentred on the robot
// from official FIRST / FIRST Washington match video and the team's own recaps (see media-manifest).
// Each video has a JPG poster of the same name. Photos hold for `hold` ms with a slow push-in.
// Encode: the untouched masters are in /media-originals/reel (not deployed); the served files are made with
//   ffmpeg -i media-originals/reel/<id>.mp4 -an -c:v libx264 -preset slow -crf 28 -maxrate 1600k -bufsize 3200k \
//     -profile:v high -pix_fmt yuv420p -movflags +faststart public/reel/<id>.mp4

export type ReelSlide = {
  id: string
  kind: "video" | "photo"
  src: string
  poster?: string
  title: string
  meta: string
  /** object-position for the frame, e.g. "50% 40%" */
  focus?: string
  /** photo hold time in ms */
  hold?: number
  /** full-bleed desktop layout: slide the frame right by this fraction of the width (0–0.32) so the subject
   * clears the copy; the left edge fades into the hero gradient. Clips cut with the robot at 50–70% need 0. */
  shift?: number
  alt?: string
}

const v = (id: string, title: string, meta: string, alt: string, focus?: string): ReelSlide => ({
  id,
  kind: "video",
  src: `/reel/${id}.mp4`,
  poster: `/reel/${id}.jpg`,
  title,
  meta,
  alt,
  focus,
})

const p = (id: string, src: string, title: string, meta: string, alt: string, focus: string, hold = 3000): ReelSlide => ({
  id,
  kind: "photo",
  src,
  title,
  meta,
  alt,
  focus,
  hold,
})

/** Slide shown on its own, with no clips downloaded, when the reel can't play (Save-Data, load/decode error,
 * autoplay blocked, stalled network). Must be a photo. */
export const reelFallbackId = "flag"

// Order rule: no two slides from the same event or two photos back to back (including the wrap from last to first);
// spread FRC/FTC and seasons as evenly as the set allows.
export const reel: ReelSlide[] = [
  v("worlds-volley", "Houston, autonomous", "FIRST Championship 2026 · Milstein division", "Jeff fires a volley of balls in a high arc into the hub during autonomous at the FIRST Championship", "50% 50%"),
  v("ftc2026-7759-shooting", "Autonomous Prime shoots", "FTC 2026–27 · Bardeen Meet 1, Q20 · Won 172–46", "7759 fires a stream of balls up into the blue hive", "50% 50%"),
  { ...v("frc2022-casey-traversal", "Casey climbs", "FRC 2022 · Bordie React, won", "Casey, the 2022 robot, swinging from one hangar rung to the next", "0% 50%"), shift: 0.2 },
  p("flag", "/photos/IMG_5281.jpg", "Flag in the stands", "2026 season", "A Stealth flag waving over the stands during a match", "60% 30%", 2600),
  { ...v("ftc2020-jankbot-rings", "Jankbot fires rings", "FTC 2020–21 · Ultimate Goal, 435-point practice match", "Jankbot shoots a stream of rings at the high goal while intaking rebounds", "50% 55%"), shift: 0.1 },
  { ...v("bordie-f1-shooting", "Bordie, final 1", "Bordie Through Time · Won 572–451", "Jeff shoots a stream of balls into the hub from close range", "50% 50%"), shift: 0 },
  v("ftc2022-7759-hub", "Autonomous Prime scores", "FTC 2021–22 · WA State Championship", "FTC robot 7759 swings its arm over the shipping hub", "70% 50%"),
  v("frc2025-sidd-reef", "Sidd at the reef", "FRC 2025 · Bonney Lake playoffs, won", "Sidd, the 2025 robot, raises its elevator and places coral on the reef"),
  v("ftc2022-13648-arm", "Jankbot reaches", "FTC 2021–22 · WA State Championship", "Jankbot extends a long telescoping arm to the shipping hub", "65% 50%"),
  { ...v("frc2022-casey-hide", "Casey hides a ball", "FRC 2022 · Bordie React, autonomous", "In autonomous, Casey drives under the hangar and spits an opponent's ball out of play", "30% 60%"), shift: 0.28 },
  { ...p("team-banner", "/photos/team-banner-field.jpg", "Glacier Peak winners", "Glacier Peak 2026 · Event title", "The Stealth team on the field with the 2026 Glacier Peak winner banner", "50% 62%", 3400), shift: 0.12 },
]
