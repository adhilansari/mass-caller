
export const features = [
  {
    id: 1,
    title: "Contact Management",
    description: "Create groups manually or import contacts from your phone. Upload Excel files with just a click.",
    icon: "contacts",
  },
  {
    id: 2,
    title: "Voice Campaign Builder",
    description: "Record your own voice messages or use text-to-speech to create professional announcements.",
    icon: "voice",
  },
  {
    id: 3,
    title: "One-Tap Mass Calling",
    description: "Press 'Start Call' – and we automatically dial all selected contacts in sequence.",
    icon: "call",
  },
  {
    id: 4,
    title: "Smart Call Workflows",
    description: "Use IVR options for customers to confirm or reschedule with simple keypresses.",
    icon: "workflow",
  },
  {
    id: 5,
    title: "Real-Time Analytics",
    description: "Track answered, busy, missed, and rejected calls with detailed reports and charts.",
    icon: "analytics",
  },
  {
    id: 6,
    title: "Cloud Dashboard",
    description: "Access all your campaigns, groups and reports from anywhere with team-based controls.",
    icon: "cloud",
  },
];

export const howItWorks = [
  {
    id: 1,
    step: "1",
    title: "Create Group",
    description: "Add numbers via phone contacts or upload Excel/CSV files with contact information.",
    icon: "group",
  },
  {
    id: 2,
    step: "2",
    title: "Record Voice Message",
    description: "Upload a custom voice message or use text-to-speech for professional announcements.",
    icon: "voice",
  },
  {
    id: 3,
    step: "3",
    title: "Start Calling",
    description: "Press start and the app automatically calls each contact in sequence and tracks results.",
    icon: "call",
  },
];

export const testimonials = [
  {
    id: 1,
    quote: "Helped us close 4x more confirmations for our event in half the time. The auto-redial feature alone saved us countless hours.",
    author: "Rahul Sharma",
    role: "Event Manager, Mumbai",
    avatarInitial: "R",
  },
  {
    id: 2,
    quote: "We saved 10+ hours every week using this tool for customer callbacks. The analytics help us optimize our call timing too.",
    author: "Priya Patel",
    role: "Sales Head, Delhi Marketing Co.",
    avatarInitial: "P",
  },
  {
    id: 3,
    quote: "After trying several call automation tools, this is the only one that actually delivered consistent results without technical issues.",
    author: "Amit Kumar",
    role: "Business Owner, Bangalore",
    avatarInitial: "A",
  },
];

export const pricing = [
  {
    id: 1,
    name: "Free",
    price: "₹0",
    description: "For individuals and small teams",
    features: [
      "Up to 50 contacts",
      "Basic reports",
      "Manual calling only",
      "Standard support",
    ],
    isPopular: false,
  },
  {
    id: 2,
    name: "Pro",
    price: "₹999",
    billingPeriod: "per month",
    description: "For growing businesses",
    features: [
      "Up to 1,000 contacts",
      "Advanced analytics",
      "Voice message recording",
      "Auto-redial features",
      "Premium support",
    ],
    isPopular: true,
  },
  {
    id: 3,
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited contacts",
      "Custom integrations",
      "Team management",
      "API access",
      "Dedicated account manager",
    ],
    isPopular: false,
  },
];

export const useCases = [
  {
    id: 1,
    title: "Marketing & Advertising",
    description: "Automate follow-up calls to leads and potential customers.",
    icon: "marketing",
  },
  {
    id: 2,
    title: "Event Management",
    description: "Send reminders and get confirmations for upcoming events.",
    icon: "event",
  },
  {
    id: 3,
    title: "Corporate Sales",
    description: "Streamline outreach to prospects and clients.",
    icon: "sales",
  },
  {
    id: 4,
    title: "Educational Institutions",
    description: "Notify parents about school events and attendance.",
    icon: "education",
  },
];

export const faqs = [
  {
    id: 1,
    question: "How does pay-per-answered-call work?",
    answer: "You only pay for calls that are actually answered by your contacts. We don't charge for calls that go to voicemail, are rejected, or receive no answer.",
  },
  {
    id: 2,
    question: "Can I import contacts from Excel or CSV?",
    answer: "Yes! You can easily import contacts from Excel or CSV files. Our system will automatically format the data and add it to your selected group.",
  },
  {
    id: 3,
    question: "How do I record a custom voice message?",
    answer: "In the calling interface, you can record a voice message directly through your device microphone. Premium users can save and reuse voice templates.",
  },
  {
    id: 4,
    question: "Is my data secure?",
    answer: "Absolutely. We use industry-standard encryption to protect your contacts and call data. Your information is never shared with third parties.",
  },
];
