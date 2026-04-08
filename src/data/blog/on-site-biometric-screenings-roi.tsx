import type { BlogPost } from "@/types/content";

export const post: BlogPost = {
  slug: "on-site-biometric-screenings-roi",
  title: "The ROI of On-Site Biometric Screenings (When Done Right)",
  description:
    "What 1,600 employees, one Fortune 500 client, and one disciplined screening program taught us about real wellness ROI.",
  date: "2025-11-04",
  author: "Dr. Eric Feintuch, DC",
  readingTime: "6 min read",
  category: "Case Study",
  image:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
  imageAlt: "Healthcare professional taking a blood pressure reading at an on-site event",
  featured: false,
  content: () => (
    <>
      <p className="lead">
        On-site biometric screenings are a punching bag for wellness skeptics. The argument is
        always the same: they are expensive, they catch things you already know about, and they
        do not change behavior. We have run thousands of them. Here is what they actually
        deliver — and what they do not.
      </p>

      <h2>The Quest Diagnostics event</h2>
      <p>
        A few years ago, our team ran a single-day biometric screening event for over 1,600
        employees of a Quest Diagnostics location in New Jersey. The event ran from early morning
        through the evening shift. Every employee who chose to participate completed the
        screening in under fifteen minutes. Results landed in their inbox within the week.
      </p>

      <p>
        That single day — one disciplined event — generated more individual behavior change in
        the next ninety days than the previous year of wellness emails combined.
      </p>

      <h2>Why it worked</h2>
      <h3>1. The screening was at work</h3>
      <p>
        The reason most employees do not get annual biometrics is friction. Their primary care
        appointment is six weeks out. The lab is across town. The day off costs them PTO. When
        the screening comes to them and takes fifteen minutes of their workday, the friction
        disappears.
      </p>

      <h3>2. The follow-up was tight</h3>
      <p>
        Results in a week. A clinician note for any flagged result. A clear next step for anyone
        in a high-risk band. No PDF mailed eight weeks later that nobody opens.
      </p>

      <h3>3. The data went somewhere useful</h3>
      <p>
        The aggregated results showed the company exactly which conditions were trending in
        their workforce. That informed the next year of wellness programming. The data was not
        a deliverable — it was a lever.
      </p>

      <h2>What does NOT work</h2>
      <ul>
        <li>Screening events with no follow-up plan</li>
        <li>Biometric data dumped to HR with no interpretation</li>
        <li>Screenings run by vendors who disappear the moment the day ends</li>
        <li>Programs that screen but do not refer high-risk employees into care</li>
      </ul>

      <h2>The honest ROI</h2>
      <p>
        When done right, on-site biometric screenings reliably identify undiagnosed
        hypertension, type 2 diabetes, and dyslipidemia in 5–12 percent of a typical workforce.
        Getting those employees into care within 90 days is where the real cost savings come
        from — not from the screening itself.
      </p>

      <h2>Want to run one?</h2>
      <p>
        We coordinate on-site biometric screenings in all 50 states, from single-site events to
        multi-state same-day campaigns. Call 1-800-GET-WELL to talk through what an event would
        look like for your workforce.
      </p>
    </>
  ),
};
