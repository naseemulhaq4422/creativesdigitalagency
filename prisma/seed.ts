import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database for Creatives Digital Agency & Institute...");

  // Clean old records
  await prisma.service.deleteMany();
  await prisma.course.deleteMany();
  await prisma.project.deleteMany();
  await prisma.testimonial.deleteMany();
  await prisma.stat.deleteMany();

  // 1. Stats
  await prisma.stat.createMany({
    data: [
      { label: "Projects Delivered", value: 150, suffix: "+", description: "High-impact digital solutions delivered across various industries", order: 1 },
      { label: "Client Satisfaction", value: 99, suffix: "%", description: "Unmatched quality, speed, and proven ROI for our partners", order: 2 },
      { label: "Students Trained", value: 500, suffix: "+", description: "Absolute beginners turned into high-earning digital professionals", order: 3 },
      { label: "Global Tech Partners", value: 15, suffix: "+", description: "Trusted technology and marketing platforms worldwide", order: 4 },
    ],
  });

  // 2. Services
  await prisma.service.createMany({
    data: [
      {
        slug: "digital-marketing-seo",
        title: "Digital Marketing & SEO",
        category: "Growth & Traffic",
        description: "Dominate search engine rankings and supercharge multi-platform social media growth (YouTube, TikTok, Facebook) with custom 4K thumbnails and viral funnels.",
        icon: "TrendingUp",
        features: JSON.stringify([
          "Full-Spectrum Search Engine Optimization (SEO)",
          "YouTube Channel Optimization & 4K CTR Thumbnails",
          "Facebook, Instagram & TikTok Paid Ad Campaigns",
          "Local Google Business Profile Ranking",
          "Conversion Rate Optimization (CRO)",
        ]),
        popular: true,
      },
      {
        slug: "web-app-development",
        title: "Web & App Development",
        category: "Engineering",
        description: "Full-stack development, modern SaaS architecture, high-converting agency landing pages, and lightning-fast web applications built on Next.js & modern stacks.",
        icon: "Code2",
        features: JSON.stringify([
          "Custom Next.js & React High-Speed Web Applications",
          "Full-Stack Web Portals & Custom CMS Integration",
          "Mobile-First Responsive UI with Glassmorphic Aesthetics",
          "API Architecture, Database Setup & Hostinger Deployment",
          "E-Commerce & Payment Gateway Integration",
        ]),
        popular: true,
      },
      {
        slug: "branding-3d-design",
        title: "Branding & 3D Design",
        category: "Creative & Visuals",
        description: "Distinctive 3D logos, comprehensive corporate identities, vector illustration, commercial marketing visuals, and 3D product renders that set your brand apart.",
        icon: "Palette",
        features: JSON.stringify([
          "Custom 3D & 2D Vector Logo Design",
          "Complete Brand Identity & Typography Guidelines",
          "Commercial 3D Product Mockups & Rendering",
          "Marketing Collaterals, Brochures & Billboards",
          "High-Impact Social Media Visual Kits",
        ]),
        popular: false,
      },
      {
        slug: "social-media-video",
        title: "Social Media & Video Production",
        category: "Content Creation",
        description: "Short-form viral content (Reels, TikToks, Shorts), high-definition commercial promos, and video editing that captivates audiences and drives organic reach.",
        icon: "Video",
        features: JSON.stringify([
          "High-Retention YouTube & TikTok Video Editing",
          "Commercial Video Promos & Product Showcases",
          "Custom Motion Graphics & Animated Intros",
          "Monthly Social Media Management & Posting Calendar",
          "Audience Engagement & Community Building",
        ]),
        popular: false,
      },
      {
        slug: "ui-ux-design",
        title: "UI/UX & Product Design",
        category: "Design Strategy",
        description: "User-centric interface design and intuitive interactive user journeys in Figma, crafted to maximize engagement, delight users, and boost conversions.",
        icon: "Layers",
        features: JSON.stringify([
          "Wireframing & Interactive Interactive Prototypes",
          "Modern Design Systems & Component Libraries",
          "Mobile App (iOS & Android) UI/UX Design",
          "SaaS Dashboard & Admin Portal Experience",
          "User Testing & Conversion Flow Audits",
        ]),
        popular: false,
      },
      {
        slug: "ecommerce-solutions",
        title: "E-Commerce & Digital Stores",
        category: "Online Sales",
        description: "Turn casual visitors into loyal customers with optimized checkout flows, inventory management, fast catalog load times, and custom shopping experiences.",
        icon: "ShoppingBag",
        features: JSON.stringify([
          "Custom Next.js & Shopify High-Performance Stores",
          "Automated Inventory & Multi-Currency Checkout",
          "Product Upselling & Cart Abandonment Recovery",
          "Localized Payment Integrations",
          "Speed Optimization & Mobile-First Shopping",
        ]),
        popular: false,
      },
    ],
  });

  // 3. Courses (Institute)
  await prisma.course.createMany({
    data: [
      {
        slug: "graphic-design-3d-branding",
        title: "Graphic Design & 3D Branding Mastery",
        level: "Beginner Friendly (Zero to Hero)",
        duration: "8 Weeks (Live Practical Classes)",
        description: "Start from absolute zero and master Adobe Photoshop, Illustrator, 3D mockup tools, and modern logo creation without needing any prior design background.",
        badge: "🔥 Most Enrolled for Beginners",
        price: "Rs. 15,000 / Batch",
        upcomingBatch: "Starting 1st of Next Month",
        icon: "PenTool",
        popular: true,
        syllabus: JSON.stringify([
          "Module 1: Design Fundamentals, Color Theory & Typography",
          "Module 2: Adobe Photoshop Core Tools & Photo Manipulation",
          "Module 3: Adobe Illustrator Vector Mastery & Logo Design",
          "Module 4: 3D Product Mockups & Realistic Renderings",
          "Module 5: Social Media Post Kits & 4K YouTube Thumbnails",
          "Module 6: Building a Winning Portfolio & Freelancing Setup",
        ]),
      },
      {
        slug: "digital-social-media-marketing",
        title: "Digital & Social Media Marketing Professional",
        level: "Beginner to Advanced",
        duration: "10 Weeks (Practical Live Projects)",
        description: "Learn how to generate real sales and viral reach using Google SEO, Facebook Ads, Instagram Growth, TikTok Marketing, and YouTube Optimization.",
        badge: "🚀 High-Income Skill",
        price: "Rs. 18,000 / Batch",
        upcomingBatch: "Starting 1st of Next Month",
        icon: "Megaphone",
        popular: true,
        syllabus: JSON.stringify([
          "Module 1: Market Research, Customer Avatars & Brand Positioning",
          "Module 2: Search Engine Optimization (SEO) & Google Ranking",
          "Module 3: Meta Ads (Facebook & Instagram Ads Manager Mastery)",
          "Module 4: TikTok Ads & Organic Short-Form Viral Strategy",
          "Module 5: YouTube Growth, Tags, Algorithms & CTR Optimization",
          "Module 6: Client Acquisition & Retainer Contracts Strategy",
        ]),
      },
      {
        slug: "web-development-fundamentals",
        title: "Full-Stack Web Development Fundamentals",
        level: "Absolute Beginner Friendly",
        duration: "12 Weeks (Hands-on Coding)",
        description: "Build modern, fast, responsive websites from scratch using HTML5, CSS3, JavaScript, Tailwind CSS, and Next.js without complicated computer science jargon.",
        badge: "💻 High Demand",
        price: "Rs. 22,000 / Batch",
        upcomingBatch: "Starting 1st of Next Month",
        icon: "Terminal",
        popular: false,
        syllabus: JSON.stringify([
          "Module 1: HTML5 Semantics & CSS3 Modern Flexbox/Grid",
          "Module 2: Tailwind CSS & Dark Mode Glassmorphic Styling",
          "Module 3: JavaScript Essentials, DOM Manipulation & Events",
          "Module 4: React Basics, Components & State Management",
          "Module 5: Next.js App Router, SSR & API Integrations",
          "Module 6: Live Deployment on Hostinger & Vercel + Git/GitHub",
        ]),
      },
      {
        slug: "freelancing-client-closing",
        title: "Freelancing & International Client Mastery",
        level: "All Skill Levels",
        duration: "4 Weeks (Bonus Masterclass)",
        description: "Learn how to land high-paying clients on Upwork, Fiverr, LinkedIn, and via cold outreach, complete with proposal templates and closing scripts.",
        badge: "⭐ Guaranteed Value",
        price: "Rs. 10,000 / Batch",
        upcomingBatch: "Starting 15th of Every Month",
        icon: "DollarSign",
        popular: false,
        syllabus: JSON.stringify([
          "Module 1: Optimizing Upwork & Fiverr Profiles for 100% Ranking",
          "Module 2: Writing Irresistible Bids & Proposals that Get Replies",
          "Module 3: LinkedIn B2B Outreach & Direct Client Pitching",
          "Module 4: Pricing Your Services, Invoicing & International Banking",
        ]),
      },
    ],
  });

  // 4. Projects (Portfolio)
  await prisma.project.createMany({
    data: [
      {
        title: "Sazgar & Road Prince 200cc Loader Campaign",
        client: "Sazgar & Road Prince Mobility Dealers",
        category: "Commercial Vehicles & Mobility",
        description: "Complete viral social media growth campaign, high-converting video promotional edits, and custom 4K CTR YouTube thumbnails that generated over 250+ direct buyer leads in 30 days.",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
        tags: "Commercial Vehicles, 4K Thumbnails, Video Marketing, Lead Gen",
        deliverables: "4K YouTube Thumbnails, Video Promo Campaigns, Meta Ads Funnel, Localized Outreach",
        featured: true,
      },
      {
        title: "Tariq Autos Electric Mobility Scooters",
        client: "Tariq Autos & EV Mobility",
        category: "Commercial Vehicles & Mobility",
        description: "Comprehensive brand launch package including modern logo identity, social media visual assets, spec-sheet 3D infographics, and targeted digital advertising for new electric scooters.",
        image: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?q=80&w=1200&auto=format&fit=crop",
        tags: "Electric Vehicles, Brand Identity, Social Assets, Ad Campaign",
        deliverables: "Visual Branding, Social Media Content Kit, Ad Funnel, Product Feature Cards",
        featured: true,
      },
      {
        title: "ROS Engineering Works 3D Brand & Web",
        client: "ROS Engineering Works",
        category: "Industrial & Engineering",
        description: "Custom 3D structural logo design, engineering corporate identity manual, industrial project portfolio, and responsive high-speed corporate web portal.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
        tags: "Industrial, 3D Logo Design, Corporate Identity, Web Portal",
        deliverables: "3D Structural Logo, Corporate Identity Guide, Website Design, Industrial Catalog",
        featured: true,
      },
      {
        title: "Frosty's Ice Cream & Premium Perfume Retailers",
        client: "Frosty's Retail Brands",
        category: "Retail & FMCG",
        description: "Localized Google Business ranking strategy, 4K high-definition product imagery, festive promotion banners, and social engagement funnels that boosted walk-in customers by 85%.",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1200&auto=format&fit=crop",
        tags: "Retail & FMCG, Google Business SEO, 4K Product Imagery, Social Ads",
        deliverables: "Google Business Top-3 Ranking, 4K Product Visuals, Ad Creatives, Promotion Kits",
        featured: true,
      },
      {
        title: "MCI Consultancy & Global Visa Portal",
        client: "Multichoice Immigration Consultancy",
        category: "Web & Branding",
        description: "High-performance immigration portal with appointment scheduling, lead qualification funnel, elegant glassmorphic corporate UI, and full-scale SEO audit.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
        tags: "Corporate Portal, UI/UX Design, Lead Funnel, SEO Strategy",
        deliverables: "Web Application, Appointment Booking System, Brand Kit, Search Optimization",
        featured: false,
      },
      {
        title: "Hanif Autos Spares & Industrial Parts",
        client: "Hanif Autos Commercial Spares",
        category: "Industrial & Engineering",
        description: "Digital spare parts catalog, localized search engine optimization, and direct WhatsApp ordering system for commercial automotive spare parts buyers.",
        image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1200&auto=format&fit=crop",
        tags: "Automotive Parts, Digital Catalog, Local SEO, WhatsApp Ordering",
        deliverables: "Digital Parts Showcase, WhatsApp Sales Flow, Local Search Strategy",
        featured: false,
      },
    ],
  });

  // 5. Testimonials
  await prisma.testimonial.createMany({
    data: [
      {
        name: "Muhammad Tariq",
        role: "Managing Director",
        company: "Tariq Autos & EV Mobility",
        content: "Creatives Digital Agency transformed our commercial vehicle brand visibility completely! Their 4K promotional graphics and targeted digital campaigns brought dozens of direct showroom buyers.",
        rating: 5,
        type: "client",
        verified: true,
      },
      {
        name: "Hamza Shafiq",
        role: "Student Graduate (Batch 3)",
        company: "Freelance Graphic Designer & Marketer",
        content: "I joined the institute with zero tech knowledge. The step-by-step guidance took me from absolute scratch to landing my first international clients on Upwork. Highly recommended for beginners!",
        rating: 5,
        type: "student",
        verified: true,
      },
      {
        name: "Engr. Rashid Usman",
        role: "CEO & Founder",
        company: "ROS Engineering Works",
        content: "The 3D structural logo and corporate branding developed by Creatives Digital Agency exceeded our highest expectations. It elevated our market stature among industrial contractors.",
        rating: 5,
        type: "client",
        verified: true,
      },
      {
        name: "Ayesha Malik",
        role: "Student Graduate (Batch 4)",
        company: "Social Media Manager",
        content: "Before joining the institute, I didn't even know how social media ads worked. The instructors taught everything in simple, practical Urdu/English. Today I manage accounts for 3 local brands!",
        rating: 5,
        type: "student",
        verified: true,
      },
    ],
  });

  console.log("Database seeded successfully with all Agency & Institute records!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
