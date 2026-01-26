import { set } from "date-fns";

export const weddingDate = new Date("2026-05-31 00:00:00 GMT-0400");
export const rsvpDate = new Date("2026-04-01 00:00:00 GMT-0400");
export const venueMapHref = "https://maps.app.goo.gl/RyRjoQsDTzFjBgZN6";
export const hotelMapHref = "https://maps.app.goo.gl/Q6MRJ6W2utcNVrDC8";
export const hotelSiteHref =
  "https://www.wyndhamhotels.com/en-ca/wingate/matthews-north-carolina/wingate-matthews-charlotte/overview";

export const schedule = {
  arrivalAndCeremony: set(weddingDate, {
    hours: 13,
    minutes: 30,
  }),
  iDo: set(weddingDate, { hours: 14 }),
  socialHour: set(weddingDate, { hours: 14, minutes: 30 }),
  reception: set(weddingDate, { hours: 15, minutes: 30 }),
  dinner: set(weddingDate, { hours: 16 }),
  dancing: set(weddingDate, { hours: 18, minutes: 30 }),
  _reception: [
    set(weddingDate, { hours: 15, minutes: 30 }),
    set(weddingDate, { hours: 19 }),
  ],
} as const;

export const timeline: { year: number; src: string }[] = [
  2025, 2024, 2023, 2022, 2021,
].map((year) => ({ year, src: placeholder() }));

export function placeholder(width: number = 200, height: number = 200): string {
  return `https://placehold.co/${width}x${height}`;
}
