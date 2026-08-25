# Travel-experience website and phased trip-request system

## Summary

Launch a polished content-led site first, then add a limited bespoke-trip request system once the business process is proven. Guides are destination specialists who can travel with customers; this keeps the first paid project realistic under the client’s sub-£2k budget while leaving a clean path to add guides and destinations later.

## Stack and delivery

- Build the website with **Next.js, TypeScript, and Tailwind CSS**; host it on **Vercel**.
- Use **Sanity CMS** so the business team can update destination expertise, offerings, guide/team profiles, and page content without asking you to edit code.
- Include Home, destinations/experience listings and detail pages, guide/team, About, Contact, mobile layout, basic SEO, and a bespoke-trip enquiry form with transactional email via **Resend**.
- Model each guide with a home base, specialist destinations, and subject expertise; the guide is not assumed to live in the destination.
- Add the internal trip-request workflow as phase two: **Supabase** for staff login, guide availability, trip requests, proposal status, and notes; Resend for updates.
- Staff review the request and coordinate flights/accommodation through an approved third-party travel provider. The first app release does not take online payment for flights or accommodation.

## Quote

- Quote **£1,500 fixed** for phase one, paid 50% upfront, 30% on staging approval, and 20% at launch.
- Include two reasonable design/content revision rounds; client supplies final copy, photos, branding, legal text, domain, and business email access.
- Quote out-of-scope changes at **£25/hour**, agreed in writing before work starts.
- Do not include phase-two trip requests in the £1,500 quote. Charge **£300 for trip-workflow discovery/prototype**, then quote the internal workflow separately once the third-party provider, customer contract, payment responsibilities, and operational rules are confirmed.
- Client owns and pays for all accounts: domain, Vercel, Sanity, Supabase, Stripe, and Resend. Current production-level Vercel and Supabase plans start around $20/month and $25/month respectively; Stripe charges transaction fees, currently starting at 1.5% + 20p for standard UK online card payments. [Vercel](https://vercel.com/pricing), [Supabase](https://supabase.com/pricing), [Stripe](https://stripe.com/gb/pricing)

## Trip-request boundaries and tests

- Include bespoke trip requests, staff review/proposal status, guide availability, and customer/staff email updates.
- Exclude online bookings or payments for flights/accommodation, third-party provider API integrations, group tours, external Google/Outlook calendar sync, customer accounts, automated refunds/rescheduling, and multi-currency checkout from v1.
- Test content editing, mobile layouts, enquiry delivery, admin-only access, unavailable-guide prevention, staff status updates, and customer/staff emails.
- Before accepting payment or advertising an inclusive trip, confirm in writing who contracts with the customer and obtain legal/accounting advice plus the third-party provider's required agreement/process. UK package-travel and ATOL obligations can apply when travel services are combined or flight-inclusive travel is sold. [GOV.UK business guidance](https://www.gov.uk/government/publications/package-holidays-complying-with-regulations-guidance-for-businesses), [CAA ATOL guidance](https://www.caa.co.uk/newsroom/blogs/what-is-atol/)

## Assumptions

- The business operates in the UK, starts with one guide, and uses one internal availability calendar.
- Flights and accommodation are arranged through an approved third-party provider under a process and contract the business has confirmed.
- The first release collects trip enquiries rather than taking payment for third-party travel services.
- Your relationship is a paid contractor arrangement, not an equity arrangement.
- Include 30 days of defect fixes after launch; ongoing maintenance or new features are separately agreed.
