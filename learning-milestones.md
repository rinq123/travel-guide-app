# Travel Guide App — Learning Milestones

This is a build-and-learn roadmap, not a deadline. Complete each milestone by doing the work yourself before moving to the next one.

**Progress:** check a task only when you can explain what it does. I can guide, review, and troubleshoot each unchecked item with you.

## Ground rules

- Write the code yourself. Use documentation first, then ask AI to explain a concept, review your approach, or help diagnose a specific error.
- Do not copy a complete feature you do not understand. If you use an example, rewrite it and explain each part in your own words.
- Commit working progress to Git after every milestone.
- Keep a short `notes` section in each commit or issue: what you learned, what broke, and how you fixed it.
- Build the content site before touching authentication, databases, payments, or calendars.

## Phase 0 — Prepare your development environment

**Learn**: Node.js, npm, Git, GitHub, VS Code, browser developer tools, and environment variables.

**Tasks**:

- [x] Install the current LTS version of Node.js and confirm `node --version` and `npm --version` work in the terminal. *(Verified 12 August 2026: Node v24.16.0, npm v11.13.0.)*
- [x] Configure Git with your name/email. *(Verified 12 August 2026.)*
- [ ] Create a GitHub account and repository for the project.
- [x] Install VS Code extensions for ESLint, Prettier, and Tailwind CSS IntelliSense. *(Installed 12 August 2026.)*
- [ ] Learn the everyday Git loop: `status`, `add`, `commit`, `push`, and reading diffs.

**Complete when**: [ ] You can make a small text change in a practice repo, commit it, and see it on GitHub.

## Phase 1 — Start a Next.js project

**Learn**: Next.js App Router, TypeScript basics, the `app` directory, pages, layouts, and development versus production builds.

**Tasks**:

- [ ] Create a new project with `create-next-app`, choosing TypeScript, Tailwind CSS, ESLint, and App Router.
- [ ] Run the development server, edit the home page, and inspect it in the browser.
- [ ] Create routes for `/about`, `/guides`, `/destinations`, and `/contact` using folders and `page.tsx` files.
- [ ] Add a shared navigation and footer through the root layout.

**Complete when**: [ ] You can explain why `app/about/page.tsx` becomes the `/about` page and can run `npm run build` without errors.

Reference: [Next.js Getting Started](https://nextjs.org/docs/app/getting-started)

## Phase 2 — Build a static content site

**Learn**: reusable React components, props, arrays with `map`, responsive Tailwind CSS, images, links, and basic accessibility.

**Tasks**:

- [ ] Build a mobile-first homepage with a hero, introduction, featured destinations, and enquiry call to action.
- [ ] Create reusable cards for destinations and guides.
- [ ] Store initial content in local TypeScript data files; make destination detail pages from that data.
- [ ] Add proper page titles/descriptions, image alt text, keyboard-friendly navigation, and a responsive menu.

**Complete when**: [ ] The entire site works on a phone-sized screen, every navigation link works, and adding a destination only requires changing the local data file.

## Phase 3 — Design polish and content readiness

**Learn**: visual hierarchy, spacing, typography, loading performance, image optimisation, and content requirements.

**Tasks**:

- [ ] Apply the business’s colours, logo, fonts, photography, and tone consistently.
- [ ] Ask the client for final destination information, guide biographies, contact details, images, and legal-page text.
- [ ] Create Privacy, Terms, and Cancellation pages as content supplied or approved by the business.
- [ ] Test in Chrome, Edge, and mobile browser emulation; fix obvious layout and accessibility issues.

**Complete when**: [ ] A stranger can understand what is offered, who the guide is, where to enquire, and how to contact the business within one minute.

## Phase 4 — Add editable content with Sanity

**Learn**: headless CMS concepts, content schemas, fetching CMS data, environment variables, and preview versus production content.

**Tasks**:

- [ ] Create a Sanity project owned by the business.
- [ ] Define content types for destination, guide, service, and standard pages.
- [ ] Replace local static data with CMS content one type at a time.
- [ ] Invite the business team and teach them how to edit a test destination safely.

**Complete when**: [ ] A non-technical team member can add or edit a destination and see it on the deployed website without a code change.

## Phase 5 — Contact and enquiry flow

**Learn**: form validation, server-side handling, spam protection, transactional email, and safe secret handling.

**Tasks**:

- [ ] Build a contact/enquiry form that collects name, email, preferred destination/date, group size, and message.
- [ ] Validate inputs both in the browser and on the server.
- [ ] Send the enquiry to the business through Resend or a comparable email provider.
- [ ] Add basic spam protection and a useful success/error state.

**Complete when**: [ ] Test submissions reach the business inbox, invalid submissions are rejected, and no email key is exposed to the browser.

## Phase 6 — Deploy the content site

**Learn**: Git-based deployment, domains, DNS, deployment logs, production environment variables, and basic analytics.

**Tasks**:

- [ ] Create Vercel and connect the GitHub repository under an account owned by the business.
- [ ] Deploy a preview, test it, then deploy production.
- [ ] Point the client-owned domain at the deployment and enable HTTPS.
- [ ] Configure production environment variables and basic analytics.

**Complete when**: [ ] The client can visit the live custom domain, edit content, and receive enquiries.

## Phase 7 — Booking discovery, before booking code

**Learn**: turning an operational workflow into requirements and designing a data model.

**Tasks**:

- [ ] Draw the exact booking journey: choose guide/service/date/time → request → staff approval → deposit link → payment → confirmation.
- [ ] Agree the business rules for duration, lead time, deposits, availability, payment deadlines, cancellations, refunds, and no-shows.
- [ ] Sketch admin screens for guides, services, availability, blackout dates, booking requests, and booking statuses.
- [ ] Write the phase-two scope and price before development begins.

**Complete when**: [ ] The business can run the same workflow manually from the written rules with no unanswered decisions.

## Phase 8 — Booking foundations

**Learn**: relational databases, Supabase, authentication, authorization, and row-level security.

**Tasks**:

- [ ] Create a separate Supabase project owned by the business.
- [ ] Model guides, services, availability rules, blackout periods, booking requests, and booking statuses.
- [ ] Add staff-only authentication and ensure public visitors cannot view or change internal records.
- [ ] Build a small staff admin area before building the customer calendar.

**Complete when**: [ ] Staff can sign in, manage one guide’s availability, and view booking requests; public users cannot access the admin area.

## Phase 9 — Availability and booking requests

**Learn**: date/time handling, time zones, validation, race conditions, and server-side booking checks.

**Tasks**:

- [ ] Show available private-guide slots based on staff-managed availability and blackout dates.
- [ ] Let a customer select a guide, service, date, and time and submit a request.
- [ ] Re-check availability on the server before saving; never trust only the browser calendar.
- [ ] Give staff approve, decline, and expired statuses.

**Complete when**: [ ] A booked or staff-reserved slot cannot be accepted twice, including when two test requests are submitted at almost the same time.

## Phase 10 — Deposits, confirmations, and launch checks

**Learn**: Stripe Checkout, webhooks, idempotency, payment states, and email notifications.

**Tasks**:

- [ ] On staff approval, create a Stripe Checkout deposit link with booking metadata and an expiry time.
- [ ] Verify Stripe webhooks server-side; mark a booking confirmed only after a verified successful payment event.
- [ ] Send customer and staff confirmation emails, with clear next steps.
- [ ] Test successful, failed, abandoned, expired, repeated, and delayed webhook cases in Stripe test mode.

**Complete when**: [ ] A test payment produces exactly one confirmed booking and exactly one confirmation message to each recipient.

## Not in the first booking release

- [ ] Group-tour capacities and scheduled departures
- [ ] Google or Outlook calendar synchronisation
- [ ] Customer accounts
- [ ] Automated refunds or rescheduling
- [ ] Multiple currencies and full-payment checkout
- [ ] Native mobile apps

Add these only after the business has real bookings and can describe the need precisely.
