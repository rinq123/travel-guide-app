# Travel-guide website and phased booking system

## Summary

Launch a polished content-led site first, then add a limited private-guide booking system once the business process is proven. This keeps the first paid project realistic under the client’s sub-£2k budget while leaving a clean path to add guides later.

## Stack and delivery

- Build the website with **Next.js, TypeScript, and Tailwind CSS**; host it on **Vercel**.
- Use **Sanity CMS** so the business team can update destinations, offerings, guide/team profiles, and page content without asking you to edit code.
- Include Home, destinations/offering listings and detail pages, guide/team, About, Contact, mobile layout, basic SEO, and a contact/enquiry form with transactional email via **Resend**.
- Add bookings as phase two in the same app: **Supabase** for staff login, availability, bookings, and data; **Stripe Checkout** and verified webhooks for deposits; Resend for confirmations.
- Model bookings as **private guide slots**. Each guide has services, working availability, and blackout dates; adding guides later requires creating their profile and availability, not redesigning the system.
- Staff approve each request before Stripe sends the customer a deposit checkout link. A paid Stripe webhook confirms the booking and emails both sides.

## Quote

- Quote **£1,500 fixed** for phase one, paid 50% upfront, 30% on staging approval, and 20% at launch.
- Include two reasonable design/content revision rounds; client supplies final copy, photos, branding, legal text, domain, and business email access.
- Quote out-of-scope changes at **£25/hour**, agreed in writing before work starts.
- Do not include phase-two booking in the £1,500 quote. Charge **£300 for booking discovery/prototype**, then quote the build at **£2,800–£4,000** once the business confirms its operational rules. This is a real application, not a small add-on.
- Client owns and pays for all accounts: domain, Vercel, Sanity, Supabase, Stripe, and Resend. Current production-level Vercel and Supabase plans start around $20/month and $25/month respectively; Stripe charges transaction fees, currently starting at 1.5% + 20p for standard UK online card payments. [Vercel](https://vercel.com/pricing), [Supabase](https://supabase.com/pricing), [Stripe](https://stripe.com/gb/pricing)

## Booking boundaries and tests

- Include guide availability, booking requests, staff approval, deposit checkout, confirmation email, and staff booking status.
- Exclude group tours, external Google/Outlook calendar sync, customer accounts, automated refunds/rescheduling, multi-currency pricing, and full-payment checkout from v1.
- Test content editing, mobile layouts, contact delivery, admin-only access, unavailable-slot prevention, Stripe test payments/webhook verification, cancelled or expired deposit links, and confirmation emails.
- Before booking goes live, the business must supply written cancellation, refund, deposit, and privacy policies; take legal/accounting advice where needed.

## Assumptions

- The business operates in the UK and takes GBP deposits.
- It starts with one guide, one internal availability calendar, and manual approval of bookings.
- Your relationship is a paid contractor arrangement, not an equity arrangement.
- Include 30 days of defect fixes after launch; ongoing maintenance or new features are separately agreed.
