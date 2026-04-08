import { Badge } from "@/components/ui/badge";
import { UnsplashImage } from "@/components/shared/UnsplashImage";

export function DoctorBioHero() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[5fr,7fr]">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-secondary/20 via-accent to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-accent/30 to-secondary/10 shadow-soft">
              {/* Real photo of Dr. Eric Feintuch, sourced from pictureperfecthealth.com */}
              <UnsplashImage
                src="https://pictureperfecthealth.com/Eric3.jpg"
                alt="Portrait of Dr. Eric Feintuch, DC, founder of Picture Perfect Health"
                priority
                className="aspect-[4/5] object-contain"
              />
            </div>
          </div>

          <div>
            <Badge variant="secondary" className="mb-4">
              Founder & President · 40 years in practice
            </Badge>
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
              Meet Dr. Eric Feintuch, DC
            </h1>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Dr. Eric Hal Feintuch is a Doctor of Chiropractic with{" "}
                <strong className="text-foreground">four decades of clinical practice</strong>,
                a Certified Chiropractic Sports Diplomate (CCSD), and the founder of Picture
                Perfect Health, LLC. He earned his doctorate from New York Chiropractic College
                (now Northeast College of Health Sciences),{" "}
                <strong className="text-foreground">graduating with honors in 1986</strong>, after
                completing a Bachelor of Arts in Political Science, Literature, and English at
                Binghamton University.
              </p>
              <p>
                In <strong className="text-foreground">June 2006</strong>, he founded Picture
                Perfect Health and began bringing his clinical experience to corporate workforces
                that needed it most. Nearly twenty years later, his programs have served United
                Airlines, GE Healthcare, Quest Diagnostics, federal agencies, and Fortune 500
                employers across all 50 states — workforces ranging from 50 to over 250,000
                people.
              </p>
              <p>
                Dr. Feintuch is also a working chiropractor at Finetouch Chiropractic in Valley
                Stream, NY, and a lifelong technologist. He created{" "}
                <strong className="text-foreground">The Remote Patient</strong>, a pulmonary care
                at-home program for monitoring patients between office visits, and built{" "}
                <strong className="text-foreground">ChiroVision</strong> — the diagnostic imaging
                software platform that ships to chiropractic clinics nationwide.
              </p>
              <p>
                His work has earned recognition far beyond the clinic: in 2022 he was a guest of
                U.S. Senator Ron Johnson in Washington, D.C., and he previously served as a
                delegate to the organizing committee for the Korean Olympics. He has logged
                hundreds of hours of expert interviews and courtroom testimony, translating
                complex science into language people actually use.
              </p>
              <p>
                And before any of it, he was a boxer — which is a longer story, told a bit
                further down this page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
