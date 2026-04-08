import type { BlogPost } from "@/types/content";

export const post: BlogPost = {
  slug: "12-steps-to-wellness-dr-feintuch",
  title: "The 12 Steps to Wellness: Inside Dr. Feintuch's Signature Program",
  description:
    "How a 30-year chiropractor built a twelve-step framework that transforms employee health, and why every step matters.",
  date: "2025-12-09",
  author: "Dr. Eric Feintuch, DC",
  readingTime: "8 min read",
  category: "Signature Program",
  image:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
  imageAlt: "Group of professionals attending a wellness workshop",
  featured: false,
  content: () => (
    <>
      <p className="lead">
        The 12 Steps to Wellness Workshop is the most-requested program in our portfolio. It is
        the program clients call us about by name. Here is the story of how it came to be, and
        why the framework still works after thirty years.
      </p>

      <h2>How it started</h2>
      <p>
        I started writing the 12 Steps in the mid-1990s, after years of watching the same patient
        problems repeat themselves. Chiropractic patients came in for back pain, but the back
        pain was almost always a symptom of something larger, sleep, stress, posture, hydration,
        movement, food, mindset. I needed a way to talk to patients about all of it without
        overwhelming them.
      </p>

      <p>
        Twelve was the right number. Small enough to be memorable. Large enough to cover the full
        picture. Each step had to be concrete, something a patient could do that day, not a
        philosophy they had to adopt over a year.
      </p>

      <h2>Why a workshop instead of a handout</h2>
      <p>
        I tried the handout version first. It did not work. People nodded politely, took the
        page, and reverted to whatever they were doing the next morning. The workshop format
        changed everything because it added three things a handout cannot give you: a peer group,
        a clinician's voice in the room, and a specific commitment to one habit between sessions.
      </p>

      <h2>Why it scales to corporate workforces</h2>
      <p>
        When I started running the workshop for corporate clients in the 2000s, I expected the
        format to break down at scale. It did the opposite. Employees in the same workplace
        already know each other. The peer accountability is built in. They go back to their
        desks the next day and remind each other which step they were working on.
      </p>

      <p>
        We have run the 12 Steps workshop for audiences from twenty employees to several
        thousand. The dynamic does not change. The workbook does not change. What changes is who
        delivers it: small groups get me directly, larger groups get my trained facilitators with
        my close oversight.
      </p>

      <h2>The structure</h2>
      <p>
        I will not give away every step here, that is what the workshop is for. But the
        framework moves through three arcs: foundation (sleep, hydration, movement), capacity
        (stress, nutrition, posture), and momentum (habit, relationships, mindset). Each step
        builds on the last. Each one is testable in a week.
      </p>

      <h2>What we measure</h2>
      <p>
        Self-reported behavior change at 30, 60, and 90 days. We do not measure attendance. We
        measure whether people are still doing the steps a quarter later. The numbers are good
        and have been consistent across thirty years of delivery.
      </p>

      <h2>How to bring it to your team</h2>
      <p>
        The 12 Steps to Wellness Workshop runs as a standalone program or as the spine of a
        larger custom corporate engagement. To talk about format and pricing for your workforce,
        call us at 1-800-GET-WELL.
      </p>
    </>
  ),
};
