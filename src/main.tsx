import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  Award,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  ChevronDown,
  CreditCard,
  Download,
  ExternalLink,
  GraduationCap,
  Landmark,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Play,
  Quote,
  Search,
  Send,
  Share2,
  ShieldCheck,
  Sparkles,
  Sun,
  Trophy,
  Users,
  WalletCards,
  X,
  Zap,
} from 'lucide-react'
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useNavigate,
  useLocation,
  useParams,
} from 'react-router-dom'
import './style.css'

const palette = {
  peach: '#FF9A86',
  coral: '#FFB399',
  gold: '#FFD6A6',
  cream: '#FFF0BE',
}

const images = {
  hero: '/hero-campus.png',
  campus: '/college.jpg',
  students: '/student.jpg',
  founder: '/susant-rout.png',
  principal: '/Director.png',
  principal2: '/Director.png',
  lab: '/class.jpg',
  contact: '/college.jpg',
  classOne: '/class2.jpg',
  classTwo: '/studentclass.webp',
  training: '/Training.png',
  placement: '/studentjob.jpeg',
  group: '/student.jpg',
}

const featuredPrograms = [
  { title: 'BCA', image: '/BCA.png' },
  { title: 'B.Sc CS', image: '/CS.png' },
  { title: 'B.Sc Data Science', image: '/DS.png' },
  { title: 'B.Sc ITM', image: '/ITM.png' },
  { title: '+2 Science', image: '/Science.png' },
  { title: 'Training & Add-on', image: '/Training.png' },
]

const navItems = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['News & Blog', '/news'],
  ['Fee Payment', '/enrollment'],
  ['Reach Us', '/contact'],
]

type DevelopmentCard = [string, string, typeof BriefcaseBusiness]

const developmentCards: DevelopmentCard[] = [
  ['Real World Software Projects', 'Build production-style apps, portfolios, and team solutions.', BriefcaseBusiness],
  ['Computer Programming & AI Development', 'Learn coding, model thinking, and responsible AI workflows.', Bot],
  ['Sports & Athletics', 'Grow discipline, endurance, and confidence through active campus life.', Trophy],
  ['Academic Excellence', 'Mentored study plans, smart classrooms, and exam readiness.', Award],
  ['MNC Placements', 'Career guidance, interview practice, and placement partner exposure.', Landmark],
  ['Cultural Activities', 'Celebrate creativity through festivals, performances, and student clubs.', Sparkles],
  ['Hackathons & Innovation', 'Prototype bold ideas in focused sprints and innovation labs.', Lightbulb],
  ['Leadership & Team Building', 'Student councils, clubs, and live project ownership.', Users],
]

const courseCategories = {
  '+3 Courses': ['BCA', 'B.Sc CS', 'B.Sc ITM (Management)', 'B.Sc Data Science', 'BCA AI & ML'],
  '+2 Higher Secondary': ['Higher Secondary Education (+2)'],
  'AI & Emerging Tech': [
    'An Introduction to AI/Computer Graphics',
    'Artificial Intelligence',
    'Machine Learning',
    'Deep Learning & Natural Language Processing',
    'Big Data Analysis',
    'Cloud Computing',
    'Electricity & Magnetism',
    'Internet of Thinks',
    'Internet of Things',
  ],
  'Business & Management': [
    'Business Accounting',
    'Business Research Methods',
    'Time Series Analysis & Business Forecast',
    'Principle of Management',
    'Digital Marketing',
  ],
  'Programming & CS': [
    'Problem Solving Using C',
    'OOP Using C++',
    'Computer Fundamental',
    'Computer Fundamentals',
    'Software Engineering',
    'Computer Graphics',
    'Data structure using C',
    'Data Structures Using C',
  ],
  'Communication & Reasoning': [
    'PREMIUM Communication',
    'English',
    'English Comunication',
    'Professional Writing',
    'Analytical Thinking & Logical Reasoning',
    'Analytical Thinking',
    'Odia / Hindi',
  ],
  'Data': [
    'Data Analytics',
    'Data Mining',
    'Data Science Using Python',
    'Data Visualization with Power BI/ Tableau',
    'Data Warehousing',
    'Power BI / Tableau',
    'Database Systems',
    'DBMS',
    'Foundation of Data Science & Data Analytics',
  ],
  'Java': [
    'Advance JAVA',
    'Advanced JAVA',
    'JAVA',
    'Java Programming',
    'Programming in JAVA',
  ],
  'Python & R': [
    'Advance Python',
    'Advanced Python',
    'Introduction To CS & Python Programming',
    'Introducton To Python Programming',
    'Python',
    'Python Programming',
    'R',
    'Programming Using R',
    'R Programming',
  ],
  'Robotics & Security': [
    'Robotic Process Automation',
    'Data Security & Compliance',
  ],
  'Web Technology': [
    'Intro. to Programming &Web Tech.',
    'Web Development With PHP',
    'Web Development with PHP',
    'Web Technologies',
    'Web Technology with PHP',
    'Web Technology with REACT',
    'Web Technology With REACT,PHP',
    'Web Technology with React',
    'React + PHP',
  ],
  'Environment & Value Added': [
    'Environmental Education',
    'Environmental Science',
    'Environmental Science & DM',
    'University Paper & Value Added Course',
  ],
  'Projects & Internship': [
    'zz-Project Work',
    'ZZ-Projects',
    'Project Work',
    'ZZ-Internship',
    'Internship Programs',
  ],
}

const eventNames = [
  'Cultural Program',
  'Saraswati Puja',
  'Ganesh Puja',
  'Independence Day',
  'Republic Day',
  'Sports Events',
  'Annual Function',
  'Tech Fest',
  'Marathon',
  'Hackathon',
  'Webinar',
  'Freshers Party',
  'Farewell',
  'Innovation Expo',
]

const eventImages = [
  '/college.jpg',
  '/student.jpg',
  '/lit-logo.webp',
  '/hero-campus.png',
  '/college.jpg',
  '/studentjob.jpeg',
  '/Training.png',
  '/class.jpg',
  '/student1.webp',
  '/studentclass.webp',
  '/class2.jpg',
  '/studentjob.jpeg',
  '/BCA.png',
  '/DS.png',
]

const eventDates = [
  'Jan 18',
  'Feb 05',
  'Sep 07',
  'Aug 15',
  'Jan 26',
  'Dec 12',
  'Nov 24',
  'Oct 06',
  'Jul 14',
  'Apr 19',
  'Mar 28',
  'Aug 02',
  'May 11',
  'Jun 21',
]

const eventAltText = [
  'Students celebrating a cultural program at Lakshya Institute of Technology',
  'Students gathered for Saraswati Puja at Lakshya Institute of Technology',
  'Lakshya Institute of Technology crest used for Ganesh Puja celebration card',
  'Lakshya Institute of Technology campus displayed for Independence Day celebration',
  'Lakshya Institute of Technology campus displayed for Republic Day celebration',
  'Students prepared for sports and placement activities at Lakshya Institute of Technology',
  'Training session and audience for annual function style celebration at Lakshya Institute of Technology',
  'Classroom session representing Tech Fest learning energy at Lakshya Institute of Technology',
  'Students outside campus for marathon and student activity day at Lakshya Institute of Technology',
  'Smart classroom representing hackathon collaboration at Lakshya Institute of Technology',
  'Training session representing webinar participation at Lakshya Institute of Technology',
  'BCA students at Lakshya Institute of Technology during freshers style campus gathering',
  'Data science students at Lakshya Institute of Technology during farewell and closing celebrations',
  'Innovation expo showcase at Lakshya Institute of Technology',
]

const faculty = [
  ['Dr. Ananya Mishra', 'Principal, +3', 'Computer Science', images.principal],
  ['Prof. Rakesh Nayak', 'Assistant Professor', 'AI & Data Science', 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=900&q=85'],
  ['Ms. Priyanka Sahoo', 'Lecturer', 'Management', '/Add.png'],
  ['Mr. Debasis Mohanty', 'Lab Coordinator', 'Programming', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85'],
  ['Dr. Meera Patnaik', 'Academic Mentor', 'Higher Secondary', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85'],
  ['Prof. Arjun Das', 'Placement Trainer', 'Career Development', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85'],
]

const news = [
  {
    slug: 'ai-lab-launch',
    title: 'LIT Launches Applied AI and Innovation Lab',
    category: 'Innovation',
    date: 'May 12, 2026',
    image: images.lab,
    excerpt: 'A new lab gives students hands-on exposure to AI, cloud computing, automation, and product prototyping.',
    body: 'Lakshya Institute of Technology has opened an Applied AI and Innovation Lab designed for project-based learning. Students will work on real datasets, automation workflows, prototype apps, and capstone projects guided by faculty mentors and industry speakers.',
    tags: ['AI', 'Lab', 'Innovation'],
  },
  {
    slug: 'placement-week-2026',
    title: 'Placement Readiness Week Connects Students with Recruiters',
    category: 'Placements',
    date: 'April 28, 2026',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85',
    excerpt: 'Mock interviews, resume clinics, aptitude practice, and technical rounds help students prepare for hiring.',
    body: 'The placement cell hosted a focused readiness week with resume reviews, communication workshops, coding practice, and recruiter interaction sessions. The initiative supports students aiming for software, analytics, and business operations roles.',
    tags: ['Career', 'MNC', 'Training'],
  },
  {
    slug: 'tech-fest-odisha',
    title: 'Students Showcase Projects at LIT Tech Fest',
    category: 'Campus Life',
    date: 'March 18, 2026',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=85',
    excerpt: 'Teams presented apps, IoT demos, dashboards, and AI concepts during a vibrant campus innovation day.',
    body: 'The annual Tech Fest brought together students from multiple programs to demonstrate technical creativity. Projects included web platforms, data visualization dashboards, IoT prototypes, and AI-assisted learning tools.',
    tags: ['Tech Fest', 'Projects', 'Students'],
  },
  {
    slug: 'scholarship-drive',
    title: 'Admissions Team Announces Merit Scholarship Counseling',
    category: 'Admissions',
    date: 'February 06, 2026',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=85',
    excerpt: 'Parents and students can connect with counselors to understand programs, fees, and scholarship options.',
    body: 'LIT has announced a scholarship counseling window for eligible students. Counselors will guide applicants through course selection, eligibility, enrollment steps, and fee planning.',
    tags: ['Scholarship', 'Admissions', 'Counseling'],
  },
]

const partners = ['TCS', 'Infosys', 'Wipro', 'Deloitte', 'Capgemini', 'Accenture']
const formSubmitEmail = 'paridaniharika006@gmail.com'
const formSubmitEndpoint = `https://formsubmit.co/ajax/${formSubmitEmail}`
const alphabetPattern = '^[A-Za-z ]+$'
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
type StudentAccount = { name: string; email: string; password: string; createdAt: string }
type CurrentUser = { name: string; email: string }
const phoneRules = {
  IN: { label: 'India (+91)', code: '+91', pattern: /^\d{10}$/, hint: 'Enter exactly 10 digits for an Indian phone number.' },
  US: { label: 'USA (+1)', code: '+1', pattern: /^\d{10}$/, hint: 'Enter 10 digits for a USA phone number.' },
  UK: { label: 'UK (+44)', code: '+44', pattern: /^\d{10,11}$/, hint: 'Enter 10 or 11 digits for a UK phone number.' },
  AE: { label: 'UAE (+971)', code: '+971', pattern: /^\d{9}$/, hint: 'Enter 9 digits for a UAE phone number.' },
  OTHER: { label: 'Other Country', code: '', pattern: /^\d{7,15}$/, hint: 'Enter 7 to 15 digits for an international phone number.' },
}

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function createOtp() {
  return String(Math.floor(100000 + Math.random() * 900000))
}

function getStoredStudents(): StudentAccount[] {
  try {
    return JSON.parse(window.localStorage.getItem('lit-student-accounts') ?? '[]') as StudentAccount[]
  } catch {
    return []
  }
}

function saveStoredStudents(students: StudentAccount[]) {
  window.localStorage.setItem('lit-student-accounts', JSON.stringify(students))
}

function getCurrentUser(): CurrentUser | null {
  try {
    return JSON.parse(window.localStorage.getItem('lit-current-user') ?? 'null') as CurrentUser | null
  } catch {
    return null
  }
}

function saveCurrentUser(user: CurrentUser | null) {
  if (user) {
    window.localStorage.setItem('lit-current-user', JSON.stringify(user))
  } else {
    window.localStorage.removeItem('lit-current-user')
  }
}

async function sendFormSubmit(form: HTMLFormElement, subject: string) {
  const data = new FormData(form)
  data.append('_subject', subject)
  data.append('_captcha', 'false')
  data.append('_template', 'table')

  const response = await fetch(formSubmitEndpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: data,
  })

  if (!response.ok) {
    throw new Error('Form submission failed')
  }
}

async function sendFormSubmitEvent(subject: string, fields: Record<string, string>) {
  const data = new FormData()
  Object.entries(fields).forEach(([key, value]) => data.append(key, value))
  data.append('_subject', subject)
  data.append('_captcha', 'false')
  data.append('_template', 'table')

  const response = await fetch(formSubmitEndpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: data,
  })

  if (!response.ok) {
    throw new Error('Form submission failed')
  }
}

function SEO() {
  return null
}

function App() {
  const [dark, setDark] = useState(false)
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(() => getCurrentUser())

  function handleAuthChange(user: CurrentUser | null) {
    saveCurrentUser(user)
    setCurrentUser(user)
  }

  return (
    <BrowserRouter>
      <SEO />
      <ScrollToTop />
      <div className={cn('min-h-screen bg-lit-surface text-slate-950 antialiased', dark && 'dark')}>
        <LoadingScreen />
        <Navbar dark={dark} setDark={setDark} currentUser={currentUser} onAuthChange={handleAuthChange} />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:slug" element={<NewsDetail />} />
              <Route path="/enrollment" element={<Enrollment mode="login" currentUser={currentUser} onAuthChange={handleAuthChange} />} />
              <Route path="/enrollment/login" element={<Enrollment mode="login" currentUser={currentUser} onAuthChange={handleAuthChange} />} />
              <Route path="/enrollment/signup" element={<Enrollment mode="signup" currentUser={currentUser} onAuthChange={handleAuthChange} />} />
              <Route path="/enrollment/forgot-password" element={<Enrollment mode="forgot" currentUser={currentUser} onAuthChange={handleAuthChange} />} />
              <Route path="/contact" element={<Contact currentUser={currentUser} />} />
            </Routes>
          </AnimatePresence>
        </main>
        <FloatingActions />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

function ScrollToTop() {
  const location = useLocation()
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])
  return null
}

function LoadingScreen() {
  const [show, setShow] = useState(true)
  React.useEffect(() => {
    const id = window.setTimeout(() => setShow(false), 950)
    return () => window.clearTimeout(id)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.div className="fixed inset-0 z-[80] grid place-items-center bg-[#100f16]" exit={{ opacity: 0 }} transition={{ duration: 0.55 }}>
          <motion.div initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
            <img src="/lit-logo.webp" alt="Lakshya Institute of Technology logo" className="mx-auto mb-4 h-24 w-24 rounded-full object-contain shadow-glow" />
            <div className="loading-bar" />
            <p className="mt-4 text-sm uppercase tracking-[0.35em] text-white/70">Loading Excellence</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Navbar({ dark, setDark, currentUser, onAuthChange }: { dark: boolean; setDark: (value: boolean) => void; currentUser: CurrentUser | null; onAuthChange: (user: CurrentUser | null) => void }) {
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const navBlur = useTransform(scrollY, [0, 180], ['blur(18px)', 'blur(28px)'])
  const navShadow = useTransform(scrollY, [0, 180], ['0 0 0 rgba(15,23,42,0)', '0 18px 55px rgba(15,23,42,.14)'])
  return (
    <motion.header style={{ backdropFilter: navBlur, boxShadow: navShadow }} initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/72 backdrop-blur-2xl dark:bg-slate-950/72">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)} aria-label="Lakshya Institute of Technology home">
          <motion.img whileHover={{ rotate: 8, scale: 1.08 }} whileTap={{ scale: 0.96 }} src="/lit-logo.webp" alt="Lakshya Institute of Technology logo" className="h-12 w-12 rounded-full object-contain shadow-soft" />
          <span>
            <span className="block text-sm font-black uppercase tracking-[0.18em] dark:text-white">Lakshya</span>
            <span className="block text-xs text-slate-600 dark:text-slate-300">Institute of Technology</span>
          </span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(([label, href]) => (
            <NavLink key={href} to={href} className={({ isActive }) => cn('nav-link', isActive && 'nav-link-active')}>
              {label}
            </NavLink>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <motion.button whileHover={{ rotate: 12, scale: 1.06 }} whileTap={{ scale: 0.94 }} onClick={() => setDark(!dark)} className="icon-btn" aria-label="Toggle dark mode">{dark ? <Sun size={18} /> : <Moon size={18} />}</motion.button>
          {currentUser ? (
            <>
              <span className="nav-user">{currentUser.name || currentUser.email}</span>
              <button onClick={() => onAuthChange(null)} className="btn-muted">Sign Out</button>
            </>
          ) : (
            <>
              <Link to="/enrollment/login" className="btn-muted">Login</Link>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}><Link to="/enrollment/signup" className="btn-primary">Sign Up <ArrowRight size={17} /></Link></motion.div>
            </>
          )}
        </div>
        <button className="icon-btn lg:hidden" onClick={() => setOpen(!open)} aria-label="Open navigation">{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden border-t border-white/20 bg-white/92 px-5 py-4 dark:bg-slate-950/95 lg:hidden">
            <div className="grid gap-2">
              {navItems.map(([label, href]) => (
                <NavLink key={href} to={href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 font-semibold dark:text-white">
                  {label}
                </NavLink>
              ))}
              {currentUser ? (
                <button onClick={() => { onAuthChange(null); setOpen(false) }} className="btn-muted justify-center">Sign Out</button>
              ) : (
                <Link to="/enrollment/login" onClick={() => setOpen(false)} className="btn-primary justify-center">Login / Sign Up</Link>
              )}
              <button onClick={() => setDark(!dark)} className="btn-muted justify-center">{dark ? 'Light Mode' : 'Dark Mode'}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function Page({ children }: { children: React.ReactNode }) {
  return <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>{children}</motion.div>
}

function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow?: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={cn('text-3xl font-black tracking-tight md:text-5xl', light ? 'text-white' : 'text-slate-950 dark:text-white')}>{title}</h2>
      {text && <p className={cn('mt-4 text-base leading-8', light ? 'text-white/72' : 'text-slate-600 dark:text-slate-300')}>{text}</p>}
    </div>
  )
}

function Home() {
  return (
    <Page>
      <Hero />
      <StudentDevelopment />
      <VideoTour />
      <Founder />
      <Events />
      <Courses />
      <SuccessStories />
      <FAQ />
      <ReachStrip />
    </Page>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 text-white">
      <img src={images.hero} alt="Students on a modern college campus" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,9,20,.92),rgba(7,9,20,.58),rgba(255,154,134,.28))]" />
      <div className="hero-animated-veil" />
      <div className="hero-grid" />
      <div className="orb left-[8%] top-[22%]" />
      <div className="orb right-[12%] top-[16%] animation-delay-500" />
      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center px-5 py-16 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm backdrop-blur-xl">
            <Sparkles size={16} /> Premium Education + Technology + Innovation
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">Shape Your Future with Lakshya Institute of Technology</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">Empowering students with innovation, technology, leadership, and real-world skills.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}><Link to="/enrollment" className="btn-primary btn-xl">Apply Now <ArrowRight size={19} /></Link></motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}><a href="#courses" className="btn-ghost btn-xl">Explore Courses <BookOpen size={19} /></a></motion.div>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
            {['3000+ Students', '45+ Courses', '92% Placement Support'].map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 + index * 0.12 }} className="glass-tile">{item}</motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function StudentDevelopment() {
  return (
    <section className="section bg-white dark:bg-slate-950">
      <SectionHeading eyebrow="Student Development" title="How LIT Students Are Building Their Future" text="A campus culture shaped around applied learning, creativity, discipline, leadership, and career confidence." />
      <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {developmentCards.map(([title, desc, Icon], index) => (
          <motion.article key={title as string} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -8, rotateX: 2 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="premium-card group">
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-lit-gradient text-slate-950 shadow-soft"><Icon /></div>
            <h3 className="text-lg font-black dark:text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function VideoTour() {
  return (
    <section className="section relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,#FF9A86,transparent_32%),radial-gradient(circle_at_80%_30%,#FFD6A6,transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Campus Tour" title="Take a Tour of Lakshya Institute of Technology" text="Step into classrooms, labs, events, mentoring spaces, and a campus built for ambitious learners." light />
        <div className="grid gap-8 lg:grid-cols-[1.35fr_.65fr]">
          <div className="video-shell">
            <img src={images.classOne} alt="Students in a smart classroom at Lakshya Institute of Technology" className="h-full w-full object-cover" loading="lazy" />
            <div className="play-badge"><Play fill="currentColor" /></div>
          </div>
          <div className="grid gap-4">
            <TestimonialSlider />
            <div className="grid grid-cols-2 gap-4">
              {[
                ['Students', 3000],
                ['Courses', 45],
                ['Placements', 720],
                ['Faculty Members', 65],
              ].map(([label, value]) => <Counter key={label as string} label={label as string} value={value as number} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Counter({ label, value }: { label: string; value: number }) {
  return (
    <motion.div whileInView={{ scale: [0.96, 1] }} viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
      <p className="text-3xl font-black text-[#FFD6A6]">{value}+</p>
      <p className="mt-1 text-sm text-white/70">{label}</p>
    </motion.div>
  )
}

function TestimonialSlider() {
  const testimonials = [
    ['LIT helped me convert classroom learning into live project confidence.', 'BCA Student'],
    ['The faculty mentors push us to think, present, build, and lead.', 'Data Science Student'],
    ['Placement practice made interviews feel less intimidating and more structured.', 'Final Year Student'],
  ]
  const [active, setActive] = useState(0)
  React.useEffect(() => {
    const id = window.setInterval(() => setActive((value) => (value + 1) % testimonials.length), 3200)
    return () => window.clearInterval(id)
  }, [])
  return (
    <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
      <Quote className="mb-5 text-[#FFB399]" />
      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
          <p className="text-xl font-bold leading-8">{testimonials[active][0]}</p>
          <p className="mt-5 text-sm text-white/62">{testimonials[active][1]}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function Founder() {
  return (
    <section className="section bg-lit-soft dark:bg-slate-900">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
        <motion.img whileInView={{ opacity: [0, 1], x: [-30, 0] }} viewport={{ once: true }} src={images.founder} alt="Founder SUSANT K. ROUT" className="h-[520px] w-full rounded-[2rem] object-cover shadow-2xl" loading="lazy" />
        <motion.div whileInView={{ opacity: [0, 1], y: [24, 0] }} viewport={{ once: true }}>
          <p className="eyebrow text-left">Founder Message</p>
          <h2 className="mt-3 text-4xl font-black dark:text-white md:text-6xl">SUSANT K. ROUT</h2>
          <div className="my-7 rounded-3xl border-l-4 border-[#FF9A86] bg-white/70 p-6 shadow-soft dark:bg-white/8">
            <p className="text-xl font-bold leading-9 dark:text-white">Education must do more than award certificates. It must build courage, discipline, imagination, and the ability to solve real problems.</p>
          </div>
          <p className="text-lg leading-9 text-slate-650 dark:text-slate-300">His vision for Lakshya Institute of Technology is to create a modern learning ecosystem where students from Odisha can access strong academics, industry-relevant technology, responsible innovation, and a culture of personal excellence. LIT encourages students to master fundamentals, build practical projects, communicate confidently, and become professionals who contribute with integrity.</p>
          <div className="mt-8 font-signature text-4xl text-[#FF9A86]">Susant K. Rout</div>
        </motion.div>
      </div>
    </section>
  )
}

function Events() {
  return (
    <section className="section bg-white dark:bg-slate-950">
      <SectionHeading eyebrow="Events & Celebrations" title="Life at LIT" text="A campus rhythm full of learning, festivals, sports, innovation, friendship, and memorable milestones." />
      <div className="masonry mx-auto max-w-7xl px-5 lg:px-8">
        {eventNames.map((name, index) => (
          <motion.article key={name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="gallery-card">
            <img src={eventImages[index]} alt={eventAltText[index]} loading="lazy" />
            <span>{eventDates[index]}</span>
            <h3>{name}</h3>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function Courses() {
  const [tab, setTab] = useState('+3 Courses')
  const [query, setQuery] = useState('')
  const visible = courseCategories[tab as keyof typeof courseCategories].filter((course) => course.toLowerCase().includes(query.toLowerCase()))
  return (
    <section id="courses" className="section bg-slate-950 text-white">
      <SectionHeading eyebrow="Programs & Courses" title="Our Programs & Courses" text="Explore degree pathways, higher secondary education, and specialized technology skill programs." light />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/8 p-4 backdrop-blur lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {Object.keys(courseCategories).map((name) => <button key={name} onClick={() => setTab(name)} className={cn('tab-btn', tab === name && 'tab-active')}>{name}</button>)}
          </div>
          <label className="relative block lg:w-80 lg:shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/45" size={18} />
            <input className="input-dark pl-12" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search courses" aria-label="Search courses" />
          </label>
        </div>
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPrograms.map((program, index) => (
            <motion.article key={program.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="program-showcase">
              <img src={program.image} alt={program.title} loading="lazy" />
              <div className="program-showcase-copy">
                <span>{program.title}</span>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((course, index) => <motion.div key={course} initial={{ opacity: 0, y: 18, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ y: -6, scale: 1.025 }} viewport={{ once: true }} transition={{ delay: index * 0.015 }} className="course-card"><GraduationCap size={20} /> {course}</motion.div>)}
        </div>
      </div>
    </section>
  )
}

function SuccessStories() {
  return (
    <section className="section bg-white dark:bg-slate-950">
      <SectionHeading eyebrow="Student Outcomes" title="Success Stories & Placement Partners" text="A career-forward environment with internships, practical portfolios, and guided placement preparation." />
      <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-3 lg:px-8">
        {[
          ['Built a React + PHP admission portal during internship.', images.training],
          ['Presented a Power BI dashboard for a business analytics case.', images.placement],
          ['Won a college hackathon with an IoT safety prototype.', images.group],
        ].map(([story, image]) => <div key={story as string} className="premium-card overflow-hidden"><img src={image as string} alt={story as string} className="mb-5 h-52 w-full rounded-2xl object-cover" loading="lazy" /><Sparkles className="text-[#FF9A86]" /><p className="mt-5 text-lg font-bold leading-8 dark:text-white">{story}</p></div>)}
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-center gap-4 px-5 lg:px-8">
        {partners.map((partner) => <div key={partner} className="partner-logo">{partner}</div>)}
      </div>
    </section>
  )
}

function FAQ() {
  const items = [
    ['How can I apply for admission?', 'Use the Apply Now button or submit the enquiry form. The admissions team will guide course selection, eligibility, and enrollment steps.'],
    ['Does LIT offer placement support?', 'Yes. Students receive resume guidance, mock interviews, technical preparation, communication training, and placement exposure.'],
    ['Are specialized technology courses available?', 'Yes. LIT offers AI, ML, Python, Java, React, data analytics, cloud, IoT, database, and professional skill programs.'],
  ]
  const [open, setOpen] = useState(0)
  return (
    <section className="section bg-lit-soft dark:bg-slate-900">
      <SectionHeading eyebrow="FAQ" title="Questions Parents and Students Ask" />
      <div className="mx-auto max-w-3xl px-5">
        {items.map(([question, answer], index) => (
          <div key={question} className="faq-item">
            <button onClick={() => setOpen(open === index ? -1 : index)}><span>{question}</span><ChevronDown className={cn(open === index && 'rotate-180')} /></button>
            <AnimatePresence>{open === index && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>{answer}</motion.p>}</AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}

function ReachStrip() {
  return (
    <section className="section bg-white dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
        <div>
          <p className="eyebrow text-left">Reach Us</p>
          <h2 className="text-4xl font-black dark:text-white">Plan your visit to LIT</h2>
          <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">Plot -5A, Infocity, Chandrasekharpur, Bhubaneswar, Odisha 751024</p>
          <Link to="/contact" className="btn-primary mt-7 inline-flex">Admission Enquiry <ArrowRight size={18} /></Link>
        </div>
        <MapFrame />
      </div>
    </section>
  )
}

function About() {
  const [dept, setDept] = useState('All')
  const departments = ['All', ...Array.from(new Set(faculty.map((item) => item[2])))]
  const filtered = dept === 'All' ? faculty : faculty.filter((item) => item[2] === dept)
  return (
    <Page>
      <SubHero image={images.campus} title="About Lakshya Institute of Technology" subtitle="A student-focused technology institute in Odisha shaped around excellence, discipline, innovation, and future-ready skills." />
      <section className="section bg-white dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-3 lg:px-8">
          {[
            ['College History', 'LIT was built with a clear objective: give ambitious students access to modern technology education, practical mentoring, and a growth-oriented campus culture.'],
            ['Vision & Mission', 'To develop confident professionals who combine strong academics, ethical leadership, digital skills, and real-world problem solving.'],
            ['Infrastructure', 'Smart classrooms, computing labs, project spaces, seminar halls, placement support, and collaborative learning zones support daily student growth.'],
          ].map(([title, text]) => <div key={title} className="premium-card"><h2 className="text-2xl font-black dark:text-white">{title}</h2><p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">{text}</p></div>)}
        </div>
      </section>
      <Founder />
      <PrincipalSection title="Director" image={images.principal2} text="The director's academic mission is to strengthen fundamentals, build confidence, and prepare students for higher education and industry with disciplined guidance, technology exposure, and student-first leadership." flip />
      <section className="section bg-white dark:bg-slate-950">
        <SectionHeading eyebrow="Faculty" title="Meet Our Faculty Members" text="A mentoring team across computer science, management, analytics, programming, and career development." />
        <div className="mx-auto mb-8 flex max-w-7xl flex-wrap justify-center gap-2 px-5">
          {departments.map((name) => <button key={name} onClick={() => setDept(name)} className={cn('chip', dept === name && 'chip-active')}>{name}</button>)}
        </div>
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {filtered.map(([name, role, department, photo]) => (
            <article key={name} className="faculty-card">
              <img src={photo} alt={name} loading="lazy" />
              <div className="p-5">
                <h3 className="text-xl font-black dark:text-white">{name}</h3>
                <p className="mt-1 text-sm font-semibold text-[#FF9A86]">{role}</p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{department}</p>
            <div className="mt-4 flex gap-2"><Share2 size={18} /><Send size={18} /><Mail size={18} /></div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Page>
  )
}

function PrincipalSection({ title, text, image, flip = false }: { title: string; text: string; image: string; flip?: boolean }) {
  return (
    <section className="section bg-lit-soft dark:bg-slate-900">
      <div className={cn('mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:px-8', flip && 'lg:[&>img]:order-2')}>
        <img src={image} alt={title} className="h-[420px] w-full rounded-[2rem] object-cover shadow-2xl" loading="lazy" />
        <div>
          <p className="eyebrow text-left">Leadership</p>
          <h2 className="text-4xl font-black dark:text-white">{title}</h2>
          <p className="mt-5 text-lg leading-9 text-slate-600 dark:text-slate-300">{text}</p>
          <p className="mt-5 font-bold dark:text-white">Qualification: M.Sc, MCA, Ph.D. guided academic leadership</p>
        </div>
      </div>
    </section>
  )
}

function News() {
  const [query, setQuery] = useState('')
  const filtered = news.filter((item) => `${item.title} ${item.category} ${item.excerpt}`.toLowerCase().includes(query.toLowerCase()))
  return (
    <Page>
      <SubHero image={images.students} title="News & Blog" subtitle="Campus updates, student achievements, admissions notices, technology events, and institute announcements." />
      <section className="section bg-white dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_320px] lg:px-8">
          <div>
            <label className="relative mb-8 block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input className="input-light pl-12" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search news, categories, tags" aria-label="Search news" />
            </label>
            <div className="grid gap-6 sm:grid-cols-2">
              {filtered.map((item) => <NewsCard key={item.slug} item={item} />)}
            </div>
            <div className="mt-10 flex justify-center gap-2"><button className="page-btn page-active">1</button><button className="page-btn">2</button><button className="page-btn">3</button></div>
          </div>
          <aside className="space-y-5">
            <Sidebar title="Trending News" items={news.slice(0, 3).map((item) => item.title)} />
            <Sidebar title="Latest Announcements" items={['Admissions open for 2026 batch', 'Scholarship counseling window active', 'Webinar on AI careers this Friday']} />
            <AdminPanel />
          </aside>
        </div>
      </section>
    </Page>
  )
}

function NewsCard({ item }: { item: typeof news[number] }) {
  return (
    <article className="news-card">
      <img src={item.image} alt={item.title} loading="lazy" />
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-2"><span className="badge">{item.category}</span><span className="text-xs text-slate-500">{item.date}</span></div>
        <h2 className="text-xl font-black dark:text-white">{item.title}</h2>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.excerpt}</p>
        <Link to={`/news/${item.slug}`} className="mt-5 inline-flex items-center gap-2 font-bold text-[#FF6F58]">Read More <ExternalLink size={16} /></Link>
      </div>
    </article>
  )
}

function NewsDetail() {
  const { slug } = useParams()
  const item = news.find((entry) => entry.slug === slug) ?? news[0]
  return (
    <Page>
      <article className="pt-24">
        <section className="relative min-h-[58vh] overflow-hidden text-white">
          <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="relative mx-auto flex min-h-[58vh] max-w-5xl flex-col justify-end px-5 pb-16">
            <span className="badge w-fit">{item.category}</span>
            <h1 className="mt-5 text-4xl font-black md:text-6xl">{item.title}</h1>
            <p className="mt-4 text-white/70">{item.date}</p>
          </div>
        </section>
        <section className="section bg-white dark:bg-slate-950">
          <div className="mx-auto max-w-3xl px-5">
            <p className="text-xl leading-10 text-slate-700 dark:text-slate-200">{item.body}</p>
            <div className="mt-8 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}</div>
          </div>
        </section>
      </article>
    </Page>
  )
}

function Sidebar({ title, items }: { title: string; items: string[] }) {
  return <div className="side-card"><h3>{title}</h3>{items.map((item) => <p key={item}>{item}</p>)}</div>
}

function AdminPanel() {
  return <div className="side-card"><h3>CMS-ready Admin</h3><p>Draft, categorize, and publish news from a future admin dashboard structure.</p><button className="btn-muted mt-3 w-full justify-center">Open Admin</button></div>
}

function Enrollment({ mode, currentUser, onAuthChange }: { mode: 'login' | 'signup' | 'forgot'; currentUser: CurrentUser | null; onAuthChange: (user: CurrentUser | null) => void }) {
  const navigate = useNavigate()
  const [authed, setAuthed] = useState(Boolean(currentUser))
  const [success, setSuccess] = useState(false)
  const [studentName, setStudentName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [otp, setOtp] = useState('')
  const [generatedOtp, setGeneratedOtp] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otpVerified, setOtpVerified] = useState(false)
  const [authError, setAuthError] = useState('')
  const [authNotice, setAuthNotice] = useState('')
  const [submitting, setSubmitting] = useState(false)

  React.useEffect(() => {
    setAuthed(Boolean(currentUser))
    if (currentUser?.email) {
      setEmail(currentUser.email)
    }
  }, [currentUser])

  function resetOtpFlow(nextEmail = email) {
    setOtp('')
    setGeneratedOtp('')
    setOtpSent(false)
    setOtpVerified(false)
    setAuthNotice('')
    setAuthError(nextEmail && !emailPattern.test(nextEmail) ? 'Enter a valid email address first.' : '')
  }

  function sendOtp() {
    if (!emailPattern.test(email)) {
      setAuthError('Enter a valid email address to receive OTP.')
      return
    }
    const nextOtp = createOtp()
    setGeneratedOtp(nextOtp)
    setOtpSent(true)
    setOtpVerified(false)
    setOtp('')
    setAuthError('')
    setAuthNotice(`OTP generated for ${email}. Demo OTP: ${nextOtp}`)
  }

  function verifyOtp() {
    if (!otpSent || !generatedOtp) {
      setAuthError('Please request an OTP first.')
      return
    }
    if (otp.trim() !== generatedOtp) {
      setAuthError('Invalid OTP. Please check and try again.')
      return
    }
    setOtpVerified(true)
    setAuthError('')
    setAuthNotice('Email verified successfully.')
  }

  function signOut() {
    setAuthed(false)
    setSuccess(false)
    onAuthChange(null)
  }

  const screenMeta = {
    login: {
      title: 'Student Login',
      description: 'Access your student dashboard securely with your registered email and password.',
      eyebrow: 'Portal Access',
    },
    signup: {
      title: 'Create Student Account',
      description: 'Register once, verify your email OTP, and activate your student dashboard profile.',
      eyebrow: 'New Registration',
    },
    forgot: {
      title: 'Forgot Password',
      description: 'Verify your email with OTP and create a fresh password for your student dashboard.',
      eyebrow: 'Account Recovery',
    },
  }[mode]

  return (
    <Page>
      <section className="auth-shell">
        <div className="auth-backdrop" />
        <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-5 py-28 lg:grid-cols-[.82fr_1.18fr] lg:px-8">
          <div className="auth-aside">
            <p className="eyebrow text-left">{screenMeta.eyebrow}</p>
            <h1>{screenMeta.title}</h1>
            <p>{screenMeta.description}</p>
            <div className="auth-aside-list">
              {[
                'Student-friendly secure access',
                'Clean verification and recovery flow',
                'Fast dashboard access after authentication',
              ].map((item) => <div key={item}>{item}</div>)}
            </div>
          </div>
          <div className="auth-card premium-card">
            <ShieldCheck className="text-[#FF9A86]" />
            <h2 className="mt-4 text-3xl font-black dark:text-white">{screenMeta.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{screenMeta.description}</p>
            <form
              onSubmit={async (event) => {
                event.preventDefault()
                setAuthError('')
                setAuthNotice('')
                setSubmitting(true)
                if (!emailPattern.test(email)) {
                  setAuthError('Enter a valid email address.')
                  setSubmitting(false)
                  return
                }
                if (mode === 'forgot') {
                  if (!otpVerified) {
                    sendOtp()
                    setAuthNotice('Reset OTP generated. Please verify it below.')
                    setSubmitting(false)
                    return
                  }
                  if (!passwordPattern.test(password)) {
                    setAuthError('New password must be alphanumeric with at least one letter and one number.')
                    setSubmitting(false)
                    return
                  }
                  if (password !== confirmPassword) {
                    setAuthError('New password and confirm password must match.')
                    setSubmitting(false)
                    return
                  }
                  const students = getStoredStudents()
                  const normalizedEmail = email.trim().toLowerCase()
                  const studentIndex = students.findIndex((student) => student.email === normalizedEmail)
                  if (studentIndex < 0) {
                    setAuthError('No account found for this email. Please sign up first.')
                    setSubmitting(false)
                    return
                  }
                  students[studentIndex] = { ...students[studentIndex], password }
                  saveStoredStudents(students)
                  setAuthNotice('Password reset successful. Please login with your new password.')
                  setSubmitting(false)
                  navigate('/enrollment/login')
                  return
                }
                if (!passwordPattern.test(password)) {
                  setAuthError('Password must be at least 6 characters and contain both letters and numbers. Only alphabets and digits are allowed.')
                  setSubmitting(false)
                  return
                }
                if (mode === 'signup' && password !== confirmPassword) {
                  setAuthError('Password and confirm password must match.')
                  setSubmitting(false)
                  return
                }
                if (mode === 'signup' && !otpVerified) {
                  setAuthError('Verify your email OTP before continuing.')
                  setSubmitting(false)
                  return
                }

                const students = getStoredStudents()
                const normalizedEmail = email.trim().toLowerCase()
                if (mode === 'signup') {
                  if (!/^[A-Za-z ]+$/.test(studentName.trim())) {
                    setAuthError('Student name should contain alphabets and spaces only.')
                    setSubmitting(false)
                    return
                  }
                  if (students.some((student) => student.email === normalizedEmail)) {
                    setAuthError('This email is already registered. Please login.')
                    setSubmitting(false)
                    return
                  }
                  const createdAt = new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
                  const signedUser = { name: studentName.trim(), email: normalizedEmail }
                  saveStoredStudents([...students, { ...signedUser, password, createdAt: new Date().toISOString() }])
                  let signUpNotice = 'Account created successfully. Please login with your new credentials.'
                  try {
                    await sendFormSubmitEvent('New LIT Student Sign Up', {
                      Action: 'Student Sign Up',
                      'Student Name': studentName.trim(),
                      'Email Address': normalizedEmail,
                      'OTP Verified': 'Yes',
                      'Submitted From': 'LIT Fee Payment & Enrollment Page',
                      Time: createdAt,
                    })
                  } catch {
                    signUpNotice = 'Account created successfully. FormSubmit notification was not delivered, but you can login now.'
                  }
                  setAuthNotice(signUpNotice)
                  setSubmitting(false)
                  setStudentName('')
                  setPassword('')
                  setConfirmPassword('')
                  setOtp('')
                  setGeneratedOtp('')
                  setOtpSent(false)
                  setOtpVerified(false)
                  navigate('/enrollment/login')
                  return
                }

                const matchedStudent = students.find((student) => student.email === normalizedEmail && student.password === password)
                if (!matchedStudent) {
                  setAuthError('No matching account found. Please sign up first or check your password.')
                  setSubmitting(false)
                  return
                }
                onAuthChange({ name: matchedStudent.name || 'LIT Student', email: normalizedEmail })
                setAuthed(true)
                let loginNotice = 'Login successful. Login notification sent.'
                try {
                  await sendFormSubmitEvent('LIT Student Login Alert', {
                    Action: 'Student Login',
                    'Student Name': matchedStudent.name || 'Registered Student',
                    'Email Address': normalizedEmail,
                    'OTP Verified': 'Yes',
                    'Submitted From': 'LIT Fee Payment & Enrollment Page',
                    Time: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
                  })
                } catch {
                  loginNotice = 'Login successful. FormSubmit login notification was not delivered, but your dashboard is available.'
                }
                setAuthNotice(loginNotice)
                setSubmitting(false)
              }}
              className="mt-6 grid gap-4"
            >
              {mode === 'signup' && <input className="input-light auth-input" required pattern={alphabetPattern} value={studentName} onChange={(event) => setStudentName(event.target.value)} title="Only alphabets and spaces are allowed." placeholder="Student Name" />}
              <input className="input-light auth-input" required type="email" value={email} onChange={(event) => { setEmail(event.target.value); resetOtpFlow(event.target.value) }} placeholder="Email Address" />
              {mode !== 'forgot' && <input className="input-light auth-input" required type="password" value={password} onChange={(event) => setPassword(event.target.value)} pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}" title="Password must be alphanumeric with at least one letter and one number." placeholder="Password" />}
              {mode === 'signup' && <input className="input-light auth-input" required type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder="Confirm Password" />}
              {mode === 'login' && <Link to="/enrollment/forgot-password" className="auth-inline-link">Forgot Password?</Link>}
              {mode === 'signup' && (
                <div className="otp-box">
                  <button type="button" onClick={sendOtp} className="btn-muted justify-center">Send Email OTP</button>
                  <div className="otp-inline">
                    <input className="input-light auth-input" value={otp} onChange={(event) => setOtp(event.target.value)} inputMode="numeric" maxLength={6} placeholder="Enter OTP" />
                    <button type="button" onClick={verifyOtp} className="btn-muted justify-center">Verify OTP</button>
                  </div>
                  {otpVerified && <p className="text-sm font-bold text-emerald-600 dark:text-emerald-300">Email verified. You can create your account.</p>}
                </div>
              )}
              {mode === 'forgot' && (
                <div className="otp-box">
                  <button type="button" onClick={sendOtp} className="btn-muted justify-center">Send OTP</button>
                  <div className="otp-inline">
                    <input className="input-light auth-input" value={otp} onChange={(event) => setOtp(event.target.value)} inputMode="numeric" maxLength={6} placeholder="Enter OTP" />
                    <button type="button" onClick={verifyOtp} className="btn-muted justify-center">Verify OTP</button>
                  </div>
                  <input className="input-light auth-input" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="New Password" />
                  <input className="input-light auth-input" type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder="Confirm Password" />
                  {otpVerified && <p className="text-sm font-bold text-emerald-600 dark:text-emerald-300">OTP verified. You can reset your password.</p>}
                </div>
              )}
              <button disabled={submitting} className="btn-primary auth-submit justify-center">{submitting ? 'Please wait...' : mode === 'forgot' ? 'Reset Password' : mode === 'signup' ? 'Create Account' : 'Login Securely'}</button>
            </form>
            {authError && <p className="mt-4 rounded-2xl bg-red-500/12 p-4 text-sm text-red-700 dark:text-red-200">{authError}</p>}
            {authNotice && <p className="mt-4 rounded-2xl bg-emerald-500/12 p-4 text-sm text-emerald-700 dark:text-emerald-200">{authNotice}</p>}
            {authed && <button onClick={signOut} className="btn-muted mt-5 w-full justify-center">Sign Out</button>}
          </div>
          <div className="premium-card min-h-[520px]">
            {!authed ? (
              <div className="grid h-full place-items-center text-center">
                <div><WalletCards className="mx-auto mb-4 text-[#FF9A86]" size={52} /><h2 className="text-3xl font-black dark:text-white">Login to view student dashboard</h2><p className="mt-4 text-slate-600 dark:text-slate-300">Create an account, verify OTP, and login. Your demo student account is saved locally in this browser.</p></div>
              </div>
            ) : (
              <StudentDashboard success={success} setSuccess={setSuccess} email={email} />
            )}
          </div>
        </div>
      </section>
    </Page>
  )
}

function StudentDashboard({ success, setSuccess, email }: { success: boolean; setSuccess: (value: boolean) => void; email: string }) {
  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div><p className="eyebrow text-left">Student Dashboard</p><h2 className="text-3xl font-black dark:text-white">Welcome, LIT Student</h2><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{email}</p></div>
        <button className="btn-muted"><Download size={17} /> Download Receipt</button>
      </div>
      <div className="mt-7 grid gap-4 sm:grid-cols-3">
        {['Course Enrolled: BCA AI & ML', 'Pending Fees: Rs 18,500', 'Payment History: 3 Receipts'].map((item) => <div key={item} className="dash-tile">{item}</div>)}
      </div>
      <div className="mt-8 rounded-3xl bg-slate-950 p-6 text-white">
        <h3 className="text-2xl font-black">Secure Payment</h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-4">
          {['UPI', 'Credit Card', 'Debit Card', 'Net Banking'].map((method) => <button key={method} className="pay-method"><CreditCard size={18} /> {method}</button>)}
        </div>
        <button onClick={() => setSuccess(true)} className="btn-primary mt-6 w-full justify-center">Pay Now</button>
      </div>
      <AnimatePresence>{success && <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} className="mt-6 rounded-3xl bg-emerald-500/15 p-5 text-emerald-700 dark:text-emerald-200"><ShieldCheck className="mb-2" /> Payment successful. Enrollment confirmed and receipt generated.</motion.div>}</AnimatePresence>
    </div>
  )
}

function Contact({ currentUser }: { currentUser: CurrentUser | null }) {
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)
  const [country, setCountry] = useState<keyof typeof phoneRules>('IN')
  const selectedPhoneRule = phoneRules[country]
  return (
    <Page>
      <SubHero image={images.contact} title="Reach Us" subtitle="Admissions, campus visits, parent queries, student support, and fast counseling assistance in one place." />
      <section className="contact-band bg-lit-soft dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="contact-command">
            <p className="eyebrow text-left">Admissions Help Desk</p>
            <h2>Speak with LIT</h2>
            <p>Get quick support for admission guidance, fee queries, course selection, campus visits, placement support, and parent counseling.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <a className="contact-action" href="tel:+916747100200"><Phone /> Call Admissions</a>
              <a className="contact-action" href="mailto:paridaniharika006@gmail.com"><Mail /> Email Counsellor</a>
              <a className="contact-action" href="https://wa.me/919338169966"><Send /> WhatsApp Now</a>
              <a className="contact-action" href="#lit-map"><MapPin /> View Campus Map</a>
            </div>
            <div className="admission-steps">
              {['Submit enquiry', 'Counsellor callback', 'Course guidance', 'Campus visit or enrollment'].map((step, index) => (
                <div key={step}><span>{index + 1}</span>{step}</div>
              ))}
            </div>
          </motion.div>
          {currentUser ? (
            <form
              onSubmit={async (event) => {
              event.preventDefault()
              setError('')
              setDone(false)
              const form = event.currentTarget
              const fullName = String(new FormData(form).get('Full Name') ?? '').trim()
              const phone = String(new FormData(form).get('Phone Number') ?? '').replace(/\D/g, '')
              if (!/^[A-Za-z ]+$/.test(fullName)) {
                setError('Full Name should contain alphabets and spaces only.')
                return
              }
              if (!selectedPhoneRule.pattern.test(phone)) {
                setError(selectedPhoneRule.hint)
                return
              }
              try {
                setSending(true)
                await sendFormSubmit(form, 'New LIT contact form message')
                form.reset()
                setCountry('IN')
                setDone(true)
              } catch {
                setError('Could not send your message right now. Please try again in a moment.')
              } finally {
                setSending(false)
              }
              }}
              className="contact-form-card premium-card"
            >
            <p className="eyebrow text-left">Contact Form</p>
            <h2 className="text-3xl font-black dark:text-white">Tell us how we can help</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Signed in as {currentUser.email}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input className="input-light" name="Full Name" required pattern={alphabetPattern} title="Only alphabets and spaces are allowed." placeholder="Full Name*" />
              <select className="input-light" name="Country Code" value={country} onChange={(event) => setCountry(event.target.value as keyof typeof phoneRules)} aria-label="Country Code">
                {Object.entries(phoneRules).map(([value, rule]) => <option key={value} value={value}>{rule.label}</option>)}
              </select>
              <input className="input-light" name="Phone Number" required type="tel" inputMode="numeric" pattern={selectedPhoneRule.pattern.source} title={selectedPhoneRule.hint} placeholder="Phone Number*" />
              <input className="input-light" name="Email Address" required type="email" placeholder="Email Address*" />
              <input className="input-light" name="Reason for Contact" required placeholder="Reason for Contact*" />
              <textarea className="input-light min-h-36 sm:col-span-2" name="Message" placeholder="Any specific concerns, requests, or student interests?" />
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{selectedPhoneRule.hint}</p>
            <button disabled={sending} className="btn-primary mt-5">{sending ? 'Sending Message...' : 'Submit Message'} <ArrowRight size={18} /></button>
            {done && <p className="mt-4 rounded-2xl bg-emerald-500/12 p-4 text-emerald-700 dark:text-emerald-200">Message sent successfully. Our team will contact you shortly.</p>}
            {error && <p className="mt-4 rounded-2xl bg-red-500/12 p-4 text-red-700 dark:text-red-200">{error}</p>}
            </form>
          ) : (
            <div className="contact-form-card premium-card grid content-center">
              <ShieldCheck className="mb-5 text-[#FF9A86]" size={46} />
              <p className="eyebrow text-left">Login Required</p>
              <h2 className="text-3xl font-black dark:text-white">Please login before filling the contact form</h2>
              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">For student safety and better follow-up, Reach Us form submissions are available only after login or sign up.</p>
              <Link to="/enrollment" className="btn-primary mt-6 w-fit">Login / Sign Up <ArrowRight size={18} /></Link>
            </div>
          )}
        </div>
      </section>
      <section className="section bg-white dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-3 lg:px-8">
            <ContactCard icon={Mail} title="Talk to Admissions" lines={['info@saiinternational.edu.in', 'admissions@saiinternational.edu.in']} />
            <ContactCard icon={Phone} title="Connect by Phone" lines={['+91 6747100200', '+91 9338169966']} />
            <ContactCard icon={MapPin} title="Visit Our Campus" lines={['Plot -5A, Infocity, Chandrasekharpur, Bhubaneswar, Odisha 751024']} />
        </div>
      </section>
      <section id="lit-map" className="bg-white px-5 pb-20 dark:bg-slate-950 lg:px-8"><div className="mx-auto max-w-7xl"><MapFrame /></div></section>
    </Page>
  )
}

function ContactCard({ icon: Icon, title, lines }: { icon: typeof Mail; title: string; lines: string[] }) {
  return <div className="premium-card"><Icon className="text-[#FF9A86]" /><h3 className="mt-4 text-2xl font-black dark:text-white">{title}</h3>{lines.map((line) => <p key={line} className="mt-2 text-slate-600 dark:text-slate-300">{line}</p>)}</div>
}

function SubHero({ image, title, subtitle }: { image: string; title: string; subtitle: string }) {
  return (
    <section className="relative min-h-[64vh] overflow-hidden pt-24 text-white">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,9,20,.92),rgba(7,9,20,.48))]" />
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} className="relative mx-auto flex min-h-[calc(64vh-6rem)] max-w-7xl flex-col justify-center px-5 lg:px-8">
        <p className="eyebrow text-left">Lakshya Institute of Technology</p>
        <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{subtitle}</p>
      </motion.div>
    </section>
  )
}

function MapFrame() {
  return <iframe title="LIT campus map" className="h-[420px] w-full rounded-[2rem] border-0 shadow-2xl" loading="lazy" src="https://www.google.com/maps?q=Infocity%20Chandrasekharpur%20Bhubaneswar%20Odisha&output=embed" />
}

type ChatMessage = { role: 'bot' | 'user'; text: string }

function getAdmissionReply(question: string) {
  const text = question.toLowerCase()
  if (text.includes('fee') || text.includes('payment') || text.includes('cost')) {
    return 'Fee details vary by program. Open the Fee Payment page to review student payment options, and our admissions team can confirm the latest structure for BCA, B.Sc CS, ITM, Data Science, and +2 Science.'
  }
  if (text.includes('course') || text.includes('program') || text.includes('bca') || text.includes('data science') || text.includes('science')) {
    return 'LIT offers BCA, B.Sc CS, B.Sc ITM, B.Sc Data Science, BCA AI & ML, higher secondary (+2), plus skill programs in AI, Python, Java, analytics, web technology, and internships.'
  }
  if (text.includes('admission') || text.includes('apply') || text.includes('enroll') || text.includes('eligibility')) {
    return 'For admission help, start from the Sign Up or Enrollment page, then prepare your academic details, active email, and phone number. The institute can guide you on eligibility, branch selection, and next steps after enquiry.'
  }
  if (text.includes('placement') || text.includes('job') || text.includes('internship')) {
    return 'LIT highlights placement preparation through live projects, internships, interview practice, and industry-focused training in software, analytics, and communication skills.'
  }
  if (text.includes('contact') || text.includes('phone') || text.includes('email') || text.includes('reach')) {
    return 'You can use the Reach Us page after logging in, call +91 6747100200 or +91 9338169966, and contact the institute through the admissions support details shown on the site.'
  }
  if (text.includes('hostel') || text.includes('campus') || text.includes('facility') || text.includes('lab')) {
    return 'The campus experience focuses on smart classrooms, computing labs, project spaces, academic mentoring, and a modern student learning environment in Odisha.'
  }
  return 'I can help with courses, admissions, fees, placements, campus facilities, and contact details. Try asking something like "What courses are available?" or "How do I apply for admission?"'
}

function FloatingActions() {
  const [chat, setChat] = useState(false)
  const [chatInput, setChatInput] = useState('')
  const [chatLoading, setChatLoading] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'bot',
      text: 'Hello! I am your LIT admission assistant. Ask me about courses, fees, admissions, placements, or campus facilities.',
    },
  ])

  const submitChat = async (event?: React.FormEvent) => {
    event?.preventDefault()
    const question = chatInput.trim()
    if (!question || chatLoading) return
    setMessages((current) => [...current, { role: 'user', text: question }])
    setChatInput('')
    setChatLoading(true)
    await new Promise((resolve) => window.setTimeout(resolve, 450))
    setMessages((current) => [...current, { role: 'bot', text: getAdmissionReply(question) }])
    setChatLoading(false)
  }

  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="float-btn" aria-label="Scroll to top"><ArrowRight className="-rotate-90" /></button>
        <a href="https://wa.me/919338169966" className="float-btn" aria-label="WhatsApp admissions"><Phone /></a>
        <button onClick={() => setChat(!chat)} className="float-btn" aria-label="Open AI admission chatbot"><Bot /></button>
      </div>
      <AnimatePresence>
        {chat && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="chatbot">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3"><Bot className="text-[#FF9A86]" /><strong>AI Admission Help</strong></div>
              <button type="button" onClick={() => setChat(false)} className="rounded-full p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900" aria-label="Close chatbot"><X size={18} /></button>
            </div>
            <p className="mt-3 text-sm text-slate-600">Ask about courses, fees, eligibility, hostel support, or placement preparation. A live counselor can follow up after enquiry submission.</p>
            <div className="chatbot-messages mt-4">
              {messages.map((message, index) => (
                <div key={`${message.role}-${index}`} className={message.role === 'user' ? 'chat-bubble chat-bubble-user' : 'chat-bubble chat-bubble-bot'}>
                  {message.text}
                </div>
              ))}
              {chatLoading && <div className="chat-bubble chat-bubble-bot">Typing...</div>}
            </div>
            <form onSubmit={submitChat} className="mt-4 flex items-end gap-2">
              <input
                className="input-light"
                placeholder="Type your question..."
                value={chatInput}
                onChange={(event) => setChatInput(event.target.value)}
              />
              <button type="submit" className="btn-primary shrink-0" disabled={!chatInput.trim() || chatLoading}>
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="notification"><Zap size={16} /> Admissions open for 2026 batch</div>
    </>
  )
}

function Footer() {
  const [sub, setSub] = useState(false)
  const [error, setError] = useState('')
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.1fr_.8fr_.8fr_1fr] lg:px-8">
        <div><img src="/lit-logo.webp" alt="Lakshya Institute of Technology logo" className="mb-4 h-14 w-14 rounded-full object-contain" /><p className="leading-8 text-white/62">Lakshya Institute of Technology, Odisha. Premium education for technology, leadership, and real-world student success.</p></div>
        <div><h3 className="footer-title">Quick Links</h3>{navItems.map(([label, href]) => <Link key={href} to={href} className="footer-link">{label}</Link>)}</div>
        <div><h3 className="footer-title">Contact</h3><p className="footer-link">+91 6747100200</p><p className="footer-link">+91 9338169966</p><p className="footer-link">admissions@saiinternational.edu.in</p></div>
        <div><h3 className="footer-title">Newsletter</h3><form onSubmit={async (event) => { event.preventDefault(); setError(''); try { await sendFormSubmit(event.currentTarget, 'New LIT newsletter subscription'); event.currentTarget.reset(); setSub(true) } catch { setError('Subscription failed. Please try again.') } }} className="mt-4 flex gap-2"><input className="input-dark" name="Newsletter Email" type="email" required placeholder="Email address" /><button className="btn-primary">Join</button></form>{sub && <p className="mt-3 text-sm text-emerald-300">Subscribed successfully.</p>}{error && <p className="mt-3 text-sm text-red-300">{error}</p>}<div className="mt-5 flex gap-3"><Share2 /><Send /><Mail /></div></div>
      </div>
    </footer>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
