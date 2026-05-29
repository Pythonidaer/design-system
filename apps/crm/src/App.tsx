import { Button, Card, Navigation, Footer, StatsBlock } from '@jonnovative/ui';

const navLinks = [
  { label: 'Dashboard', href: '/', current: true },
  { label: 'Contacts', href: '/contacts' },
  { label: 'Deals', href: '/deals' },
  { label: 'Reports', href: '/reports' },
];

const stats = [
  { value: '1,284', label: 'Active Contacts' },
  { value: '47', label: 'Open Deals', highlighted: true },
  { value: '$284K', label: 'Pipeline Value' },
];

const Logo = () => (
  <span style={{ fontWeight: 600, fontSize: '1.125rem', color: 'var(--color-primary-600)' }}>
    Jonnovative CRM
  </span>
);

export function App() {
  return (
    <div>
      <Navigation
        logo={<Logo />}
        links={navLinks}
        variant="split"
        ctaLabel="New Deal"
      />

      <main style={{ padding: 'var(--space-8)', maxWidth: 1280, margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'var(--font-family-base)', fontSize: 'var(--font-size-3xl)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-neutral-900)', marginBottom: 'var(--space-8)' }}>
          Dashboard
        </h1>

        <StatsBlock stats={stats} columns={3} />

        <div style={{ marginTop: 'var(--space-8)', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-6)' }}>
          <Card variant="bordered" padding="md">
            <h2 style={{ fontFamily: 'var(--font-family-base)', fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-neutral-900)', marginBottom: 'var(--space-4)' }}>
              Recent Activity
            </h2>
            <p style={{ fontFamily: 'var(--font-family-base)', color: 'var(--color-neutral-600)', marginBottom: 'var(--space-4)' }}>
              No recent activity to display.
            </p>
            <Button variant="outline" size="sm">View All</Button>
          </Card>

          <Card variant="bordered" padding="md">
            <h2 style={{ fontFamily: 'var(--font-family-base)', fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-neutral-900)', marginBottom: 'var(--space-4)' }}>
              Upcoming Tasks
            </h2>
            <p style={{ fontFamily: 'var(--font-family-base)', color: 'var(--color-neutral-600)', marginBottom: 'var(--space-4)' }}>
              No upcoming tasks scheduled.
            </p>
            <Button variant="primary" size="sm">Add Task</Button>
          </Card>
        </div>
      </main>

      <Footer
        logo={<Logo />}
        tagline="Your business relationships, organized."
        copyright="© 2026 Jonnovative Designs."
        variant="simple"
      />
    </div>
  );
}
