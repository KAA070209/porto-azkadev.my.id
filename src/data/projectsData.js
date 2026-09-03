export const projectsData = [
  {
    id: 'lapor-ob',
    projectNumber: 'PROJECT_01',
    category: 'mobile & Website Desktop',
    title: 'Lapor OB',
    subtitle: 'An application to streamline centralized reporting and task requests to the Office Boy.',
    description:
      'An integrated reporting and task management system for Office Boy operations, featuring a mobile application for employees and Office Boy staff, along with a web-based dashboard for Admin and HR to manage tasks, monitor reports, track work status, and access activity history centrally.',
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
      'Previously, reporting issues or requesting help from the Office Boy was done manually or through unstructured instant messages. This caused difficulties in tracking work status, miscommunication, and reports that were often missed or overlapping.\n\nA centralized system was needed to bridge communication between staff and the Office Boy efficiently, measurably, and with ease of use via mobile devices.',
    solution:
      'I developed an integrated application that facilitates reporting and assignment in real-time. The system was built with a mobile-first approach to ensure high accessibility for all users.',
    coreFeatures: [
      {
        title: 'Authentication',
        description: 'Secure login system for staff, Office Boy, and administrators with clear role separation.',
      },
      {
        title: 'Report Creation',
        description: 'Quick and easy report creation with photo upload and location details.',
      },
      {
        title: 'Status Tracking',
        description: 'Pemantauan status laporan secara real-time dari "Menunggu" hingga "Selesai".',
      },
      {
        title: 'History',
        description: 'Comprehensive report history logging for transparency and evaluation.',
      },
      {
        title: 'Admin Management',
        description: 'Dedicated admin dashboard to monitor operational performance and manage users.',
      },
    ],
    results: [
      { value: '99.9%', label: 'UPTIME' },
      { value: '<10ms', label: 'LATENCY' },
      { value: '5M+', label: 'EVENTS / SEC' },
    ],
    tags: ['Flutter', 'Node.js', 'TypeScript', 'PostgreSQL'],
    codeSnippet: {
      filename: 'report.controller.ts',
      code: `export const createReport = async (req: Request, res: Response) => {
  const { title, description, location } = req.body;
  const userId = req.user.id;

  // Create new report entry
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
    category: 'website',
    title: 'E-Commerce BumiKriya',
    subtitle: 'A modern e-commerce platform for fast and efficient trading of craft raw materials.',
    description:
      'A modern e-commerce platform for buying and selling raw materials, providing a seamless experience for users to browse products, manage their shopping cart, place orders, and track purchases through an intuitive interface.',
    image: '/project-bumikriya.png',
    gallery: [
      '/project-bumikriya.png',
      '/project-bumikriya-2.png',
      '/project-bumikriya-3.png',
    ],
    demoUrl: 'https://bumikriya.azkadev.my.id/',
    sourceUrl: '#',
    challenge:
      'The transition from conventional craft raw material transactions to a digital ecosystem was often hindered by complicated catalog navigation and slow checkout processes.\n\nA reliable, fast, and responsive web system with real-time inventory management and a smooth shopping experience was needed.',
    solution:
      'Built a modern e-commerce web platform using FastAPI on the backend and React.js on the frontend, delivering fast product search, interactive cart management, and sales analytics.',
    coreFeatures: [
      {
        title: 'User Authentication',
        description: 'Fast and secure authentication system for buyers and sellers.',
      },
      {
        title: 'Raw Materials Catalog',
        description: 'Interactive raw materials catalog with category filters and instant search.',
      },
      {
        title: 'Shopping Cart & Orders',
        description: 'Shopping cart management, automatic calculation, and order management.',
      },
      {
        title: 'Order Tracking',
        description: 'Transparent shipment status tracking and purchase history.',
      },
      {
        title: 'Admin Dashboard',
        description: 'Analytics dashboard for product, inventory, and incoming order management.',
      },
    ],
    results: [
      { value: '99.8%', label: 'ACCURACY' },
      { value: '<15ms', label: 'API SPEED' },
      { value: '10K+', label: 'ORDERS / MONTH' },
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
    category: 'web',
    title: 'Website Apotek',
    subtitle: 'Integrated pharmacy management system for drug stock and sales recording.',
    description: 'Pharmacy management web portal for stock tracking, prescriptions, and point of sale.',
    image: '/project-website-apotek-1.svg',
    role: 'Full Stack Developer',
    year: '2023',
    client: 'Local Pharmacy',
    gallery: [
      '/project-website-apotek-1.svg',
      '/project-website-apotek-2.svg',
      '/project-website-apotek-3.svg',
    ],
    demoUrl: '#',
    sourceUrl: '#',
    challenge: 'Manual drug inventory recording risks causing stock errors and expirations.',
    solution: 'Developed a web-based system to track drug supplies automatically and efficiently.',
    coreFeatures: [
      { title: 'Medicine Database', description: 'Recording thousands of medicine types along with expiration dates.' },
      { title: 'POS Billing', description: 'Fast digital cashier for prescription and non-prescription transactions.' },
      { title: 'Stock Alerts', description: 'Notifikasi otomatis saat persediaan obat menipis.' }
    ],
    results: [
      { value: '100%', label: 'ACCURACY' },
      { value: '300ms', label: 'CHECKOUT' },
      { value: '24/7', label: 'AVAILABILITY' }
    ],
    tags: ['React.js', 'Node.js', 'Express', 'MySQL'],
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
    category: 'web',
    title: 'Website Bank Sampah',
    subtitle: 'A digital waste management and savings platform for the community.',
    description: 'Community waste bank system for digital transactions and environmental tracking.',
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
    challenge: 'Transparent and accurate management of residents\' waste weighing transaction data.',
    solution: 'Built a digital waste savings platform with automatic balance recording.',
    coreFeatures: [
      { title: 'Waste Scale Recording', description: 'Input waste weight according to type and qualification.' },
      { title: 'Digital Wallet Balance', description: 'Recording waste bank customers\' savings balances.' },
      { title: 'Recycling Analytics', description: 'Laporan volume sampah yang terdaur ulang.' }
    ],
    results: [
      { value: '10+ Ton', label: 'RECYCLED' },
      { value: '1,000+', label: 'MEMBERS' },
      { value: '100%', label: 'TRANSPARENCY' }
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
  category: 'web',
  title: 'PMR Album Website',
  subtitle: 'A digital documentation gallery and activity archive system for the Youth Red Cross organization.',
  description:
    'A digital gallery platform designed to organize, preserve, and showcase Youth Red Cross activities and organizational documentation.',
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
    'Photos and activity documentation were scattered across different storage locations and lacked a centralized, organized archive system.',
  solution:
    'Developed a centralized web-based album that organizes activity documentation by events, dates, and categories for easier access and long-term preservation.',
  coreFeatures: [
    {
      title: 'Event Gallery',
      description:
        'Organized photo albums categorized by event name, date, and activity documentation.'
    },
    {
      title: 'Digital Archive',
      description:
        'A centralized archive system for preserving organizational activities and historical documentation.'
    }
  ],
  results: [
    { value: '5,000+', label: 'PHOTOS' },
    { value: '50+', label: 'EVENTS' },
    { value: '100%', label: 'DIGITALLY ARCHIVED' }
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
    category: 'web',
    title: 'Website Top Up',
    subtitle: 'Instant game top-up and digital voucher transaction platform.',
    description: 'Instant game currency and digital voucher top-up platform.',
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
    challenge: 'Game voucher transaction process that requires speed and automatic confirmation.',
    solution: 'Integrated instant payment gateway with automatic voucher delivery.',
    coreFeatures: [
      { title: 'Instant Delivery', description: 'Item langsung masuk ke akun pengisi dalam hitungan detik.' },
      { title: 'Payment Gateway', description: 'Support for QRIS, E-Wallet, and Bank Transfer.' }
    ],
    results: [
      { value: '99.9%', label: 'SUCCESS RATE' },
      { value: '<5s', label: 'PROCESS TIME' },
      { value: '24/7', label: 'AUTOMATION' }
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
    category: 'web',
    title: 'Website Logistik',
    subtitle: 'Cargo tracking and intercity goods delivery system.',
    description: 'Logistics cargo management and real-time tracking web portal.',
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
    challenge: 'Kurangnya informasi status lokasi pengiriman kargo bagi pelanggan.',
    solution: 'Integrated tracking number system with periodic courier position updates.',
    coreFeatures: [
      { title: 'Waybill Tracking', description: 'Accurate shipment position tracking using a tracking number.' },
      { title: 'Fleet Management', description: 'Monitoring of truck fleets and delivery routes.' }
    ],
    results: [
      { value: '50K+', label: 'SHIPMENTS' },
      { value: '<100ms', label: 'TRACK SEARCH' },
      { value: '99%', label: 'ON-TIME' }
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
    category: 'web',
    title: 'Website Organization',
    subtitle: 'Profile portal and information hub for student organization activities.',
    description: 'Official portal for organization profiles, events, and announcements.',
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
    challenge: 'Delivery of organization announcements and agendas that lacked structure.',
    solution: 'Modern web portal with a news CMS system and online event registration.',
    coreFeatures: [
      { title: 'Event Registration', description: 'Formulir pendaftaran peserta acara beserta e-ticket.' },
      { title: 'News & Articles', description: 'CMS for publishing articles and official announcements.' }
    ],
    results: [
      { value: '5,000+', label: 'VISITORS' },
      { value: '100%', label: 'RESPONSIVE' },
      { value: '0.8s', label: 'LOAD TIME' }
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
  // Fallback to first project if not found
  return projectsData[0];
}
