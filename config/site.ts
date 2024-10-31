export const siteConfig = {
  name: "Medical Booking System",
  description: "Book your medical appointments easily",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "https://your-domain.com/og.jpg",
  links: {
    twitter: "https://twitter.com/your-handle",
    github: "https://github.com/your-repo",
  },
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Book Appointment",
      href: "/book-appointment",
    },
    {
      title: "Medical Centers",
      href: "/medical-centers",
    },
    {
      title: "Medical Status",
      href: "/medical-status",
    },
  ],
};

export type SiteConfig = typeof siteConfig; 