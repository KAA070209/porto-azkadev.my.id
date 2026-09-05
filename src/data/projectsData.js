export const projectsData = [
  {
    id: 'lapor-ob',
    projectNumber: 'PROJECT_01',
    category: 'Mobile & Web Dashboard',
    title: 'Lapor OB',
    subtitle: 'A centralized reporting and task management system for Office Boy operations.',
    description:
      'An integrated reporting and task management platform that streamlines communication between employees and Office Boy staff. The system features a mobile application for employees to submit reports and requests, a dedicated app for Office Boy staff to manage assigned tasks, and a web-based admin dashboard for HR and administrators to monitor operations, track work status, and access activity history in real-time.',
    image: '/project-lapor-ob.png',
    role: 'Full Stack Developer',
    year: '2024',
    client: 'Internal / Corporate',
    gallery: [
      '/project-lapor-ob.png',
      '/project-lapor-ob-2.png',
      '/project-lapor-ob-3.png',
    ],
    demoUrl: '#',
    sourceUrl: '#',
    challenge:
      'Previously, employees reported issues or requested assistance from the Office Boy through unstructured WhatsApp messages or face-to-face communication. This manual process led to frequent miscommunication, lost reports, duplicated requests, and zero visibility into task progress. There was no accountability trail, making it impossible for management to evaluate team performance or identify recurring issues.\n\nThe organization needed a centralized, trackable, and mobile-friendly solution to replace the fragmented communication workflow while maintaining ease of use for non-technical staff.',
    solution:
      'I designed and developed a full-stack mobile and web application using Flutter for the mobile clients and Node.js with TypeScript for the backend API. The system implements a role-based architecture with three distinct user types — Employee, Office Boy, and Admin — each with tailored interfaces and permissions. Real-time status updates ensure all parties stay informed, while the admin dashboard provides analytical insights into operational efficiency.',
    coreFeatures: [
      {
        title: 'Multi-Role Authentication',
        description: 'Secure JWT-based login system with role separation for Employees, Office Boy staff, and Administrators. Each role has a customized dashboard and permission scope.',
      },
      {
        title: 'Report Submission',
        description: 'Streamlined report creation with photo attachments, category selection, and optional location pinning — designed for quick submission in under 30 seconds.',
      },
      {
        title: 'Real-Time Status Tracking',
        description: 'Live status updates from submission ("Pending") through assignment ("In Progress") to completion ("Resolved"), with push notifications at each stage.',
      },
      {
        title: 'Activity History & Logs',
        description: 'Complete audit trail of all reports, assignments, and status changes — available to both submitters and administrators for transparency and performance reviews.',
      },
      {
        title: 'Admin Dashboard',
        description: 'Web-based management panel displaying operational metrics, pending workload, staff performance, and report category analytics for data-driven decisions.',
      },
    ],
    results: [
      { value: '95%', label: 'FASTER RESPONSE' },
      { value: '100%', label: 'REPORT VISIBILITY' },
      { value: '3x', label: 'PRODUCTIVITY GAIN' },
    ],
    tags: ['Flutter', 'Node.js', 'TypeScript', 'PostgreSQL'],
    codeSnippet: {
      filename: 'report.controller.ts',
      code: `export const createReport = async (req: Request, res: Response) => {
  const { title, description, location } = req.body;
  const userId = req.user.id;

  const newReport = await prisma.report.create({
    data: {
      title,
      description,
      location,
      reporterId: userId,
      status: 'PENDING'
    }
  });

  return res.status(201).json(newReport);
};`,
    },
  },
  {
    id: 'e-commerce-bumikriya',
    projectNumber: 'PROJECT_02',
    category: 'E-Commerce Platform',
    title: 'E-Commerce BumiKriya',
    subtitle: 'A modern e-commerce platform for seamless trading of craft raw materials.',
    description:
      'A full-featured e-commerce web application built to digitize the buying and selling of craft raw materials. The platform provides an intuitive product browsing experience with advanced filtering, an interactive shopping cart, secure checkout with integrated payment gateways, and a comprehensive admin dashboard for inventory and sales management — all designed to accelerate transactions in the traditional craft supply industry.',
    image: '/project-bumikriya.png',
    gallery: [
      '/project-bumikriya.png',
      '/project-bumikriya-2.png',
      '/project-bumikriya-3.png',
    ],
    demoUrl: 'https://bumikriya.azkadev.my.id/',
    sourceUrl: '#',
    challenge:
      'The craft raw materials market relied on manual ordering through phone calls, WhatsApp, or in-person visits to warehouses. Catalog navigation was disorganized — buyers had no way to browse products systematically, compare options, or track their orders. Inventory management was entirely manual, leading to overselling, stock discrepancies, and delayed order fulfillment.\n\nThe business needed a reliable, fast, and responsive digital platform that could handle real-time inventory updates, provide a smooth shopping experience across devices, and automate the checkout-to-delivery pipeline.',
    solution:
      'I engineered a full-stack e-commerce platform using FastAPI (Python) for high-performance backend APIs and React.js with Tailwind CSS for a responsive, modern frontend. The system integrates Midtrans for secure payment processing, features real-time inventory synchronization to prevent overselling, and includes an analytics dashboard that gives the business owner actionable insights into sales trends and stock levels.',
    coreFeatures: [
      {
        title: 'User Authentication & Roles',
        description: 'JWT-based authentication with buyer and seller role separation. Buyers can browse and purchase, while sellers manage their product listings and view sales data.',
      },
      {
        title: 'Product Catalog & Search',
        description: 'Interactive catalog with category filters, instant keyword search, and product detail pages — supporting thousands of raw material SKUs with images and specifications.',
      },
      {
        title: 'Shopping Cart & Checkout',
        description: 'Persistent shopping cart with real-time stock validation, automatic price calculation, and a streamlined multi-step checkout flow with address and payment selection.',
      },
      {
        title: 'Payment Integration',
        description: 'Secure payment processing via Midtrans supporting QRIS, e-wallets, bank transfers, and credit cards — with automatic payment confirmation and order status updates.',
      },
      {
        title: 'Admin Analytics Dashboard',
        description: 'Real-time analytics for total revenue, order volume, top-selling products, and low-stock alerts — enabling data-driven inventory and business decisions.',
      },
    ],
    results: [
      { value: '40%', label: 'ORDER INCREASE' },
      { value: '<200ms', label: 'API RESPONSE' },
      { value: '10K+', label: 'MONTHLY ORDERS' },
    ],
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'React.js', 'Tailwind CSS', 'Midtrans'],
    codeSnippet: {
      filename: 'orders.router.py',
      code: `@router.post("/orders", response_model=OrderOut)
async def create_order(
    order_in: OrderCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    # Verify inventory and create order
    order = await order_service.process_checkout(
        db=db, 
        user_id=current_user.id, 
        items=order_in.items
    )
    return order`,
    },
  },
  {
    id: 'website-apotek',
    projectNumber: 'PROJECT_03',
    category: 'Pharmacy Management System',
    title: 'Website Apotek',
    subtitle: 'An integrated pharmacy management system for drug stock tracking and point-of-sale.',
    description:
      'A comprehensive pharmacy management web application designed to streamline daily operations of local pharmacies. The system covers drug inventory management with expiration tracking, a fast point-of-sale interface for prescription and over-the-counter transactions, automated low-stock alerts, and reporting dashboards — enabling pharmacists to focus on patient care instead of manual bookkeeping.',
    image: '/project-website-apotek.png',
    role: 'Full Stack Developer',
    year: '2026',
    client: 'Local Pharmacy',
    gallery: [
      '/project-website-apotek.png',
      '/project-website-apotek-1.png',
      '/project-website-apotek-2.png',
    ],
    demoUrl: '/contact',
    sourceUrl: '#',
    challenge:
      'The pharmacy managed its drug inventory using handwritten ledgers and spreadsheets, which made it extremely difficult to track stock levels accurately, identify expiring medications, and prevent revenue loss from expired or expired products. Point-of-sale transactions were slow and error-prone, leading to long queues during peak hours. There was no automated system for alerts when stock ran low, causing frequent out-of-stock situations for essential medicines.',
    solution:
      'I developed a web-based pharmacy management system using Flask and PostgreSQL for reliable data handling, with a responsive Bootstrap and Tailwind CSS interface. The system features a real-time inventory dashboard with color-coded stock levels, automatic expiration date monitoring with configurable alert thresholds, and a fast digital POS system that can process transactions in seconds.',
    coreFeatures: [
      {
        title: 'Drug Inventory Database',
        description: 'Comprehensive database managing thousands of medicine types with dosage forms, suppliers, batch numbers, and expiration dates — with search and filter capabilities.',
      },
      {
        title: 'Point-of-Sale Billing',
        description: 'Fast digital cashier supporting both prescription and non-prescription items, with barcode scanning, automatic price calculation, and receipt generation.',
      },
      {
        title: 'Stock Alert System',
        description: 'Automated notifications when medicine stock falls below configurable thresholds, plus expiration date alerts to prevent dispensing expired medications.',
      },
    ],
    results: [
      { value: '100%', label: 'INVENTORY ACCURACY' },
      { value: '<2s', label: 'TRANSACTION TIME' },
      { value: '24/7', label: 'SYSTEM UPTIME' },
    ],
    tags: ['Python', 'Flask', 'PostgreSQL', 'Bootstrap', 'Jinja2', 'Tailwind CSS'],
    codeSnippet: {
      filename: 'stock.controller.js',
      code: `exports.updateStock = async (req, res) => {
  const { medicineId, quantity } = req.body;
  const updated = await StockService.decrement(medicineId, quantity);
  res.json({ success: true, data: updated });
};`
    }
  },
  {
    id: 'website-bank-sampah',
    projectNumber: 'PROJECT_04',
    category: 'Community Waste Management',
    title: 'Website Bank Sampah',
    subtitle: 'A digital waste bank platform for community-based recycling and savings.',
    description:
      'A community-oriented web platform that digitizes the waste bank workflow — from recording resident waste deposits to managing digital savings balances. The system enables transparent tracking of recycled waste volumes, automatic balance calculations based on waste type and weight, and provides analytics dashboards for community leaders to monitor environmental impact and member participation.',
    image: '/project-website-bank-sampah-1.svg',
    role: 'Full Stack Developer',
    year: '2023',
    client: 'Community Organization',
    gallery: [
      '/project-website-bank-sampah-1.svg',
      '/project-website-bank-sampah-2.svg',
      '/project-website-bank-sampah-3.svg',
    ],
    demoUrl: '#',
    sourceUrl: '#',
    challenge:
      'The community waste bank operated entirely on paper-based recording. Residents brought recyclable waste, staff manually weighed and categorized items, and balances were calculated by hand in physical notebooks. This led to frequent calculation errors, disputes about member balances, lack of historical data for environmental reporting, and zero visibility into recycling impact over time.\n\nThe organization needed a transparent, digital-first system that could automate balance calculations, maintain accurate records, and generate reports that demonstrate the community\'s environmental contribution.',
    solution:
      'I built a web-based waste bank management platform using Laravel (PHP) for robust backend logic and Vue.js for a reactive, user-friendly interface. The system automates the entire deposit-to-balance workflow: staff input waste type and weight, the system calculates the balance credit instantly, and members can view their savings history. Analytics dashboards track total recycled volume, community participation rates, and environmental impact metrics.',
    coreFeatures: [
      {
        title: 'Waste Deposit Recording',
        description: 'Digital input of waste weight by type (organic, plastic, paper, metal, etc.) with automatic price-per-kg calculation based on current market rates.',
      },
      {
        title: 'Digital Savings Wallet',
        description: 'Each member has a digital wallet showing real-time balance, transaction history, and cumulative earnings from waste deposits over time.',
      },
      {
        title: 'Recycling Analytics',
        description: 'Dashboard visualizing total waste recycled by weight, member participation trends, category distribution, and monthly environmental impact reports.',
      },
    ],
    results: [
      { value: '10+ Ton', label: 'WASTE RECYCLED' },
      { value: '1,000+', label: 'ACTIVE MEMBERS' },
      { value: '100%', label: 'DATA TRANSPARENCY' },
    ],
    tags: ['Vue.js', 'PHP', 'Laravel', 'MySQL'],
    codeSnippet: {
      filename: 'DepositController.php',
      code: `public function store(DepositRequest $request) {
    $deposit = Deposit::createTransaction($request->validated());
    return response()->json($deposit, 201);
}`
    }
  },
  {
    id: 'website-album-pmr',
    projectNumber: 'PROJECT_05',
    category: 'Digital Gallery & Archive',
    title: 'PMR Album Website',
    subtitle: 'A centralized digital gallery and archive system for Youth Red Cross activities.',
    description:
      'A web-based digital gallery and documentation archive built for the Youth Red Cross (PMR) organization at SMKN 2 Cimahi. The platform organizes thousands of activity photos into categorized event albums, provides a searchable archive of past events, and serves as a long-term digital preservation solution for the organization\'s historical documentation.',
    image: '/project-website-album-pmr.png',
    role: 'Frontend Developer',
    year: '2024',
    client: 'PMR SMKN 2 Cimahi',
    gallery: [
      '/project-website-album-pmr-1.png',
      '/project-website-album-pmr-2.png',
      '/project-website-album-pmr-3.png',
    ],
    demoUrl: 'https://pmrsmkn2cimahi.my.id/galeri',
    sourceUrl: '#',
    challenge:
      'The organization\'s activity documentation — photos, event records, and historical archives — was scattered across multiple platforms: personal Google Drive accounts, WhatsApp chat histories, and local device storage. Over years of operation, finding specific event photos became nearly impossible, files were duplicated or lost, and there was no centralized way for current members to access the organization\'s history.\n\nA centralized, searchable, and visually appealing digital archive was needed to preserve the organization\'s legacy and make documentation easily accessible to all members.',
    solution:
      'I developed a React.js-based gallery web application with Firebase for backend storage and hosting. The platform features event-based album organization with cover images, date-based browsing, and a clean gallery interface optimized for photo viewing. All data is stored in Firebase Firestore, ensuring fast access and reliable long-term preservation.',
    coreFeatures: [
      {
        title: 'Event-Based Gallery',
        description: 'Photo albums organized by event name, date, and category — each with cover thumbnails, photo counts, and descriptive titles for easy browsing.',
      },
      {
        title: 'Digital Archive System',
        description: 'A centralized archive preserving organizational activities, historical documentation, and milestones — searchable by keyword and filterable by year.',
      },
    ],
    results: [
      { value: '5,000+', label: 'PHOTOS ARCHIVED' },
      { value: '50+', label: 'EVENTS CATALOGED' },
      { value: '100%', label: 'DIGITALLY PRESERVED' },
    ],
    tags: ['React.js', 'Tailwind CSS', 'Firebase'],
    codeSnippet: {
      filename: 'gallery.service.js',
      code: `export const getEventAlbum = async (eventId) => {
  const snapshot = await db.collection('albums').doc(eventId).get();
  return snapshot.data();
};`
    }
  },
  {
    id: 'website-top-up',
    projectNumber: 'PROJECT_06',
    category: 'Digital Transaction Platform',
    title: 'Website Top Up',
    subtitle: 'An instant game top-up and digital voucher transaction platform.',
    description:
      'A fast and reliable web platform for purchasing game currency, digital vouchers, and in-game items. The system features instant automated delivery after payment confirmation, support for multiple payment methods via Midtrans integration, and a real-time order tracking interface — designed to deliver vouchers in seconds rather than minutes.',
    image: '/project-website-top-up-1.svg',
    role: 'Full Stack Developer',
    year: '2025',
    client: 'Gaming Startup',
    gallery: [
      '/project-website-top-up-1.svg',
      '/project-website-top-up-2.svg',
      '/project-website-top-up-3.svg',
    ],
    demoUrl: '#',
    sourceUrl: '#',
    challenge:
      'Game voucher transactions demanded extreme speed and reliability — players purchasing in-game currency expect instant delivery, and any delay directly impacts their gaming experience. Traditional top-up methods involved manual verification by staff, causing delays of minutes to hours. Payment failures were common with no automated retry mechanism, leading to customer complaints and lost revenue.\n\nThe platform needed fully automated payment verification and instant voucher delivery with zero manual intervention, while supporting high concurrent transaction volumes during peak gaming hours.',
    solution:
      'I engineered a Next.js application with TypeScript for type-safe, performant frontend rendering, Prisma ORM for efficient database operations, and Midtrans payment gateway for automated transaction processing. The system uses webhook-based payment confirmation — when Midtrans confirms a successful payment, the system instantly triggers voucher delivery without any human intervention, achieving sub-5-second end-to-end processing.',
    coreFeatures: [
      {
        title: 'Instant Voucher Delivery',
        description: 'Automated voucher and game currency delivery within seconds of payment confirmation — no manual verification required, supporting high-volume concurrent orders.',
      },
      {
        title: 'Multi-Method Payment',
        description: 'Seamless payment integration via Midtrans supporting QRIS, e-wallets (GoPay, OVO, Dana), bank transfers, and credit/debit cards with automatic reconciliation.',
      },
    ],
    results: [
      { value: '99.9%', label: 'SUCCESS RATE' },
      { value: '<5s', label: 'DELIVERY TIME' },
      { value: '24/7', label: 'AUTOMATED' },
    ],
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Midtrans'],
    codeSnippet: {
      filename: 'payment.ts',
      code: `export async function handleWebhook(payload: WebhookPayload) {
  const status = await midtrans.verify(payload);
  if (status.isSuccess) {
    await processVoucherDelivery(payload.orderId);
  }
}`
    }
  },
  {
    id: 'website-logistik',
    projectNumber: 'PROJECT_07',
    category: 'Logistics & Tracking',
    title: 'Website Logistik',
    subtitle: 'A cargo tracking and delivery management system with real-time map visualization.',
    description:
      'A logistics management web portal for tracking cargo shipments and monitoring delivery fleets. The system provides customers with real-time shipment tracking via interactive maps, while giving logistics operators tools for route planning, fleet management, and delivery status updates — improving transparency and efficiency across the entire delivery pipeline.',
    image: '/project-website-logistik-1.svg',
    role: 'Full Stack Developer',
    year: '2024',
    client: 'Logistics Company',
    gallery: [
      '/project-website-logistik-1.svg',
      '/project-website-logistik-2.svg',
      '/project-website-logistik-3.svg',
    ],
    demoUrl: '#',
    sourceUrl: '#',
    challenge:
      'Customers had no way to track their cargo shipments in real-time — they relied on phone calls to customer service for status updates, which were often delayed or inaccurate. The logistics team managed delivery routes manually, leading to suboptimal routing and missed delivery windows. There was no centralized system for monitoring fleet positions or viewing shipment history.\n\nThe company needed a modern tracking system with map-based visualization that would serve both customers (for self-service tracking) and operators (for fleet and route management).',
    solution:
      'I built a full-stack logistics platform using React.js for the frontend, Express.js for the backend API, PostgreSQL for data storage, and Leaflet.js for interactive map rendering. The system assigns tracking numbers to each shipment and provides real-time GPS position updates from delivery vehicles. Customers enter their tracking number to see live shipment location and delivery history on an interactive map.',
    coreFeatures: [
      {
        title: 'Real-Time Shipment Tracking',
        description: 'Interactive map-based tracking using Leaflet.js — customers enter a tracking number to see live shipment position, route history, and estimated delivery time.',
      },
      {
        title: 'Fleet Management Dashboard',
        description: 'Operator view showing all active delivery vehicles on a single map, with route visualization, driver status, and delivery assignment capabilities.',
      },
    ],
    results: [
      { value: '50K+', label: 'SHIPMENTS TRACKED' },
      { value: '<100ms', label: 'TRACK LOOKUP' },
      { value: '99%', label: 'ON-TIME DELIVERY' },
    ],
    tags: ['React.js', 'Express', 'PostgreSQL', 'Leaflet'],
    codeSnippet: {
      filename: 'tracking.js',
      code: `app.get('/api/track/:resi', async (req, res) => {
  const logs = await TrackingService.getLogs(req.params.resi);
  res.json({ resi: req.params.resi, history: logs });
});`
    }
  },
  {
    id: 'website-organization',
    projectNumber: 'PROJECT_08',
    category: 'Organization Portal',
    title: 'Website Organization',
    subtitle: 'A profile portal and information hub for student organization activities.',
    description:
      'A modern, responsive web portal serving as the official digital presence for a student organization. The platform consolidates organization profiles, event announcements, news articles, and online registration into a single, fast-loading interface — replacing the previous fragmented communication across social media and messaging apps.',
    image: '/project-website-organization-1.svg',
    role: 'Frontend Developer',
    year: '2023',
    client: 'Student Organization',
    gallery: [
      '/project-website-organization-1.svg',
      '/project-website-organization-2.svg',
      '/project-website-organization-3.svg',
    ],
    demoUrl: '#',
    sourceUrl: '#',
    challenge:
      'Organization announcements and event information were posted across multiple scattered channels — Instagram stories, WhatsApp group messages, and verbal announcements during meetings. This made it difficult for members to find information later, resulted in low event participation due to missed announcements, and created an inconsistent and unprofessional public image for the organization.\n\nThe organization needed a centralized, professional-looking web portal that could serve as a single source of truth for all activities, news, and events.',
    solution:
      'I developed a high-performance single-page application using React.js with Vite as the build tool and Tailwind CSS for rapid, consistent styling. The portal features dedicated sections for organization profile, event listings with online registration forms, news articles, and an announcement feed — all optimized for fast loading and full responsiveness across devices.',
    coreFeatures: [
      {
        title: 'Event Registration System',
        description: 'Online event registration forms with participant capacity limits, automatic confirmation messages, and e-ticket generation for registered attendees.',
      },
      {
        title: 'News & Announcements CMS',
        description: 'A lightweight content management section for publishing articles, official announcements, and activity reports with formatted text and image support.',
      },
    ],
    results: [
      { value: '5,000+', label: 'PAGE VISITORS' },
      { value: '100%', label: 'MOBILE RESPONSIVE' },
      { value: '0.8s', label: 'FULL LOAD TIME' },
    ],
    tags: ['React.js', 'Tailwind CSS', 'Vite'],
    codeSnippet: {
      filename: 'events.jsx',
      code: `export function EventCard({ title, date, location }) {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <p>{date} • {location}</p>
    </div>
  );
}`
    }
  }
];

export function getProjectById(id) {
  const found = projectsData.find((p) => p.id.toLowerCase() === id.toLowerCase());
  if (found) return found;
  return projectsData[0];
}
