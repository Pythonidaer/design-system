import {
  Navigation,
  Button,
  Testimonial,
  LogoCloud,
  StatsBlock,
  CaseStudyCard,
  PricingCard,
  Footer,
  Container,
  Stack,
} from '@pythonidaer/ui';
import styles from './App.module.css';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
];

const logos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', alt: 'Amazon' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', alt: 'Google' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', alt: 'Microsoft' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', alt: 'IBM' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg', alt: 'Netflix' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Stripe_Logo%2C_revised_2016.svg', alt: 'Stripe' },
];

const stats = [
  { value: '200+', label: 'Projects Delivered', description: 'Across 12 industries' },
  { value: '98%', label: 'Client Satisfaction', highlighted: true },
  { value: '$40M', label: 'Revenue Generated', description: 'For our clients' },
];

const footerColumns = [
  {
    heading: 'Services',
    links: [
      { label: 'Brand Strategy', href: '#' },
      { label: 'Web Design', href: '#' },
      { label: 'Design Systems', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Case Studies', href: '#work' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Component Library', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
];

function Logo() {
  return <span className={styles.logo}>Jonnovative</span>;
}

export function App() {
  return (
    <div className={styles.page}>
      <Navigation
        logo={<Logo />}
        links={navLinks}
        variant="split"
        ctaLabel="Book a call"
      />

      <section className={styles.hero} aria-labelledby="hero-heading">
        <Container size="lg">
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Design System Studio</p>
            <h1 id="hero-heading" className={styles.heroTitle}>
              Design systems for ambitious brands
            </h1>
            <p className={styles.heroLead}>
              Jonnovative builds production-grade design systems, brand identities, and digital
              experiences that scale with your business.
            </p>
            <div className={styles.heroActions}>
              <Button variant="primary" size="lg">
                Start a project
              </Button>
              <Button variant="outline" size="lg" className={styles.heroOutline}>
                See our work
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section id="services" className={styles.section}>
        <Container size="xl">
          <LogoCloud
            logos={logos}
            title="Trusted by 300+ forward-thinking companies"
            columns={6}
          />
        </Container>
      </section>

      <section className={styles.sectionSubtle} aria-label="Key metrics">
        <Container size="xl">
          <Stack gap="8">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Proof that systematic design works</h2>
              <p className={styles.sectionLead}>
                Measurable outcomes from design systems, brand refreshes, and conversion-focused
                web experiences.
              </p>
            </div>
            <StatsBlock stats={stats} columns={3} />
          </Stack>
        </Container>
      </section>

      <section id="work" className={styles.section} aria-labelledby="work-heading">
        <Container size="xl">
          <Stack gap="10">
            <div className={styles.sectionHeader}>
              <h2 id="work-heading" className={styles.sectionTitle}>
                Selected work
              </h2>
              <p className={styles.sectionLead}>
                Case studies from B2B teams who needed a cohesive system — not another one-off
                redesign.
              </p>
            </div>
            <div className={styles.workGridFeatured}>
              <CaseStudyCard
                featured
                title="Redesigning the Acme Sales Pipeline"
                summary="Overhauled the entire sales workflow with a token-driven design system, cutting deal cycle time and improving win rates across the org."
                metrics={[
                  { value: '40%', label: 'Faster cycles' },
                  { value: '28%', label: 'Higher win rate' },
                ]}
                tags={['CRM', 'B2B', 'Design System']}
                imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                imageAlt="Team collaborating on a sales dashboard redesign"
                ctaHref="#"
                ctaLabel="Explore case study"
              />
              <Stack gap="8">
                <CaseStudyCard
                  title="Design System for TechCorp"
                  summary="Built a scalable component library adopted across 6 product teams in 90 days."
                  metrics={[
                    { value: '6', label: 'Teams aligned' },
                    { value: '60%', label: 'Faster shipping' },
                  ]}
                  tags={['Design System', 'React']}
                  imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  imageAlt="Developer reviewing component documentation"
                  ctaHref="#"
                />
                <CaseStudyCard
                  title="Brand Elevation for Inshur"
                  summary="Complete brand and website transformation that repositioned a digital-first insurer."
                  metrics={[
                    { value: '35%', label: 'Growth' },
                    { value: '800%', label: 'ROI' },
                  ]}
                  tags={['Brand', 'Website']}
                  ctaHref="#"
                />
              </Stack>
            </div>
          </Stack>
        </Container>
      </section>

      <section className={styles.testimonialSection} aria-label="Client testimonial">
        <Container size="md">
          <div className={styles.testimonialWrap}>
            <Testimonial
              dark
              quote="Jonnovative transformed our entire brand identity. The systematic approach delivered exceptional results in six weeks — and the design system keeps paying dividends."
              name="Sarah Chen"
              title="Head of Design"
              company="Acme Corp"
              avatarSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&q=80"
              avatarAlt="Sarah Chen, Head of Design at Acme Corp"
            />
          </div>
        </Container>
      </section>

      <section id="pricing" className={styles.section} aria-labelledby="pricing-heading">
        <Container size="xl">
          <div className={styles.pricingIntro}>
            <h2 id="pricing-heading" className={styles.sectionTitleCenter}>
              Simple, transparent pricing
            </h2>
            <p className={`${styles.sectionLead} ${styles.sectionLeadCenter}`}>
              Flexible engagement models for teams at every stage — from a focused audit to a
              full-scale system build.
            </p>
          </div>
          <div className={styles.pricingGrid}>
            <PricingCard
              title="Starter"
              price="$29"
              description="For small teams getting started with systematic design."
              features={[
                { text: 'Up to 5 projects', included: true },
                { text: 'Priority support', included: false },
                { text: 'Custom branding', included: false },
              ]}
              ctaLabel="Get started"
            />
            <PricingCard
              title="Pro"
              price="$79"
              description="For growing teams who need a scalable foundation."
              features={[
                { text: 'Unlimited projects', included: true },
                { text: 'Priority support', included: true },
                { text: 'Custom branding', included: true },
              ]}
              featured
              badge="Most Popular"
              ctaLabel="Start free trial"
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              billingPeriod=""
              description="For large organizations with complex product surfaces."
              features={[
                { text: 'Everything in Pro', included: true },
                { text: 'Dedicated account manager', included: true },
                { text: 'SLA guarantee', included: true },
              ]}
              ctaLabel="Contact sales"
            />
          </div>
        </Container>
      </section>

      <Footer
        logo={<Logo />}
        tagline="Building exceptional digital products for forward-thinking companies."
        columns={footerColumns}
        legalLinks={[
          { label: 'Privacy Policy', href: '#' },
          { label: 'Terms of Service', href: '#' },
        ]}
        newsletter
      />
    </div>
  );
}
