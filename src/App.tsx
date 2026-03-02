import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  ExternalLink, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Users, 
  TreePine, 
  Lock, 
  Flame, 
  BarChart3, 
  Map, 
  Cpu, 
  Coins, 
  Vote,
  Twitter,
  Send,
  Youtube,
  Instagram,
  Facebook,
  Mail,
  MessageSquare
} from 'lucide-react';

// --- Types ---
type Language = 'EN' | 'ID';

interface NavItem {
  label: { EN: string; ID: string };
  href: string;
}

const navItems: NavItem[] = [
  { label: { EN: 'About', ID: 'Tentang' }, href: '#about' },
  { label: { EN: 'Tokenomics', ID: 'Tokenomik' }, href: '#tokenomics' },
  { label: { EN: 'Roadmap', ID: 'Peta Jalan' }, href: '#roadmap' },
  { label: { EN: 'NFT', ID: 'NFT' }, href: '#nft' },
  { label: { EN: 'Team', ID: 'Tim' }, href: '#team' },
  { label: { EN: 'FAQ', ID: 'FAQ' }, href: '#faq' },
];

// --- Components ---

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-display font-bold mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-gray-400 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="w-20 h-1 bg-brand-green mx-auto mt-6 rounded-full" />
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string; key?: React.Key }) => (
  <div className={`glass rounded-2xl p-6 hover:border-brand-green/30 transition-colors duration-300 ${className}`}>
    {children}
  </div>
);

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void; key?: React.Key }) => (
  <div className="border-b border-white/10 last:border-0">
    <button 
      onClick={onClick}
      className="w-full py-6 flex items-center justify-between text-left hover:text-brand-green transition-colors"
    >
      <span className="font-medium text-lg pr-8">{question}</span>
      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pb-6 text-gray-400 leading-relaxed whitespace-pre-line">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function App() {
  const [lang, setLang] = useState<Language>('EN');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = (key: { EN: string; ID: string }) => key[lang];

  const content = {
    hero: {
      title: "TREE SOUL GENESIS (TSG)",
      desc: {
        EN: "TSG is a green energy token focused on stability, ecosystems, and sustainable growth. Our mission is to create long-term value by connecting blockchain technology and inspiration for nature conservation.",
        ID: "TSG adalah token energi hijau yang berfokus pada stabilitas, ekosistem, dan pertumbuhan berkelanjutan. Misi kami adalah menciptakan nilai jangka panjang dengan menghubungkan teknologi blockchain dan inspirasi untuk konservasi alam."
      },
      founderDesc: {
        EN: "Resa leads the long-term vision of Tree Soul Genesis (TSG). With a commitment to green technology and blockchain-based innovation, Resa built TSG from a simple idea into a project running on a strong foundation, an active community, and a real, ever-evolving roadmap.",
        ID: "Resa memimpin visi jangka panjang Tree Soul Genesis (TSG). Dengan komitmen pada teknologi hijau dan inovasi berbasis blockchain, Resa membangun TSG dari ide sederhana menjadi proyek yang berjalan di atas fondasi yang kuat, komunitas yang aktif, dan peta jalan nyata yang terus berkembang."
      }
    },
    about: {
      title: { EN: "About TSG", ID: "Tentang TSG" },
      text: {
        EN: "Tree Soul Genesis (TSG) is a Monad Network (ERC-20) based green ecosystem project that aims to create long-term value through stability, transparency, and community participation. With a total supply of 93,000,000 TSG, the project adopts a gradual, strong, and sustainable tree-growing philosophy to reflect the growth journey of Web3 projects.",
        ID: "Tree Soul Genesis (TSG) adalah proyek ekosistem hijau berbasis Monad Network (ERC-20) yang bertujuan untuk menciptakan nilai jangka panjang melalui stabilitas, transparansi, dan partisipasi komunitas. Dengan total pasokan 93.000.000 TSG, proyek ini mengadopsi filosofi pertumbuhan pohon yang bertahap, kuat, dan berkelanjutan untuk mencerminkan perjalanan pertumbuhan proyek Web3."
      },
      text2: {
        EN: "TSG connects nature and blockchain technology, delivering a healthy, stable, and community-friendly ecosystem through utilities, NFTs, reward systems, and future Web3 features.",
        ID: "TSG menghubungkan alam dan teknologi blockchain, menghadirkan ekosistem yang sehat, stabil, dan ramah komunitas melalui utilitas, NFT, sistem penghargaan, dan fitur Web3 masa depan."
      }
    },
    vision: {
      title: { EN: "Vision & Mission", ID: "Visi & Misi" },
      vision: {
        EN: "Building a sustainable Web3 ecosystem inspired by green energy and natural balance, with a focus on long-term stability, real utility, and positive value for the global community.",
        ID: "Membangun ekosistem Web3 berkelanjutan yang terinspirasi oleh energi hijau dan keseimbangan alam, dengan fokus pada stabilitas jangka panjang, utilitas nyata, dan nilai positif bagi komunitas global."
      },
      mission: [
        { EN: "Building a sustainable Web3 ecosystem with a tree philosophy.", ID: "Membangun ekosistem Web3 berkelanjutan dengan filosofi pohon." },
        { EN: "Connecting blockchain with the concepts of green energy and environmental education.", ID: "Menghubungkan blockchain dengan konsep energi hijau dan pendidikan lingkungan." },
        { EN: "Developing nature-themed utilities: tree NFTs, reward systems, airdrops, and mini-games.", ID: "Mengembangkan utilitas bertema alam: NFT pohon, sistem penghargaan, airdrop, dan mini-game." },
        { EN: "Creating a “digital forest” where every holder is an important part of the growth.", ID: "Menciptakan “hutan digital” di mana setiap pemegang adalah bagian penting dari pertumbuhan." },
        { EN: "Maintaining a balance between growth, utility, and price stability.", ID: "Menjaga keseimbangan antara pertumbuhan, utilitas, dan stabilitas harga." },
        { EN: "Bringing the visual and philosophical values of nature to the digital world.", ID: "Membawa nilai-nilai visual dan filosofis alam ke dunia digital." }
      ]
    },
    tokenomics: {
      title: { EN: "Tokenomics", ID: "Tokenomik" },
      data: [
        { label: { EN: "Liquidity", ID: "Likuiditas" }, value: "50%", amount: "43,000,000", icon: <Coins className="w-5 h-5 text-emerald-400" /> },
        { label: { EN: "Marketing & Partnership", ID: "Pemasaran & Kemitraan" }, value: "10%", amount: "10,000,000", icon: <Users className="w-5 h-5 text-emerald-400" /> },
        { label: { EN: "Future Development", ID: "Pengembangan Masa Depan" }, value: "10%", amount: "10,000,000", icon: <Cpu className="w-5 h-5 text-emerald-400" /> },
        { label: { EN: "Team (Locked)", ID: "Tim (Terkunci)" }, value: "10%", amount: "10,000,000", icon: <Lock className="w-5 h-5 text-emerald-400" /> },
        { label: { EN: "Community Rewards", ID: "Hadiah Komunitas" }, value: "10%", amount: "10,000,000", icon: <TreePine className="w-5 h-5 text-emerald-400" /> },
        { label: { EN: "Reserve Sustainability Fund", ID: "Dana Keberlanjutan Cadangan" }, value: "10%", amount: "10,000,000", icon: <ShieldCheck className="w-5 h-5 text-emerald-400" /> },
      ]
    },
    roadmap: {
      title: { EN: "Roadmap", ID: "Peta Jalan" },
      phases: [
        {
          title: { EN: "Phase 1: Foundation", ID: "Fase 1: Fondasi" },
          items: [
            { EN: "Smart contract deployed", ID: "Kontrak pintar diluncurkan" },
            { EN: "Uniswap Listing", ID: "Listing di Uniswap" },
            { EN: "Website v1", ID: "Situs web v1" },
            { EN: "Public whitepaper", ID: "Whitepaper publik" },
            { EN: "Early active community", ID: "Komunitas aktif awal" }
          ]
        },
        {
          title: { EN: "Phase 2: Green Community Growth", ID: "Fase 2: Pertumbuhan Komunitas Hijau" },
          items: [
            { EN: "Web3 Education + Green Energy", ID: "Edukasi Web3 + Energi Hijau" },
            { EN: "Reveal NFT tree", ID: "Pengungkapan pohon NFT" },
            { EN: "Growth reward system", ID: "Sistem hadiah pertumbuhan" },
            { EN: "Small-medium partnership", ID: "Kemitraan kecil-menengah" }
          ]
        },
        {
          title: { EN: "Phase 3: Ecosystem Utilities", ID: "Fase 3: Utilitas Ekosistem" },
          items: [
            { EN: "NFT Launch", ID: "Peluncuran NFT" },
            { EN: "Airdrop Season 1", ID: "Airdrop Musim 1" },
            { EN: "CoinMarketCap & CoinGecko Listings", ID: "Listing di CoinMarketCap & CoinGecko" },
            { EN: "Expansion of the Asian community", ID: "Ekspansi komunitas Asia" }
          ]
        },
        {
          title: { EN: "Phase 4: Expansion & Sustainability", ID: "Fase 4: Ekspansi & Keberlanjutan" },
          items: [
            { EN: "Green energy mini-game", ID: "Mini-game energi hijau" },
            { EN: "Mini marketplace", ID: "Mini marketplace" },
            { EN: "Global partnership", ID: "Kemitraan global" },
            { EN: "Feature upgrades", ID: "Peningkatan fitur" }
          ]
        }
      ]
    },
    utility: {
      title: { EN: "Token Utility", ID: "Utilitas Token" },
      items: [
        {
          title: { EN: "Community Rewards", ID: "Hadiah Komunitas" },
          desc: { EN: "Active holders get Growth Points, airdrops, and special rewards.", ID: "Pemegang aktif mendapatkan Poin Pertumbuhan, airdrop, dan hadiah spesial." }
        },
        {
          title: { EN: "Ecosystem Access", ID: "Akses Ekosistem" },
          desc: { EN: "TSG is used for NFT mint, in-game currency, marketplace fees, and governance votes.", ID: "TSG digunakan untuk mint NFT, mata uang dalam game, biaya marketplace, dan voting tata kelola." }
        },
        {
          title: { EN: "Staking & Growth (Future)", ID: "Staking & Pertumbuhan (Masa Depan)" },
          desc: { EN: "Holders can “grow trees” for incremental rewards.", ID: "Pemegang dapat “menanam pohon” untuk hadiah tambahan." }
        },
        {
          title: { EN: "Governance Rights", ID: "Hak Tata Kelola" },
          desc: { EN: "Holders help decide the direction of the project through community voting.", ID: "Pemegang membantu menentukan arah proyek melalui voting komunitas." }
        }
      ]
    },
    team: {
      title: { EN: "Team", ID: "Tim" },
      members: [
        {
          name: "Resa Alvaro putra Alfarizii",
          role: { EN: "Founder & CEO", ID: "Pendiri & CEO" },
          desc: { EN: "Building TSG's vision with a philosophy of nature and green energy.", ID: "Membangun visi TSG dengan filosofi alam dan energi hijau." },
          img: "https://i.imgur.com/hbVKff2.jpeg"
        },
        {
          name: "Henry Gerlad",
          role: { EN: "Lead Developer & Community Manager", ID: "Pengembang Utama & Manajer Komunitas" },
          img: "https://i.imgur.com/tRnCYlm.png"
        },
        {
          name: "Seralune Khoirunnisa",
          role: { EN: "Creative Designer", ID: "Desainer Kreatif" },
          img: "https://i.imgur.com/NjsgamX.png"
        }
      ]
    },
    nft: {
      title: "TSG Genesis NFT",
      img: "https://i.imgur.com/AFCVwoK.jpeg",
      desc: {
        EN: "The TSG Genesis NFT represents the first on-chain identity of the Tree Soul Genesis ecosystem. It is created as a symbolic foundation, not as a speculative asset. The Genesis NFT reflects early belief in TSG’s long-term vision: building a transparent, organic, and sustainable Web3 ecosystem.",
        ID: "TSG Genesis NFT mewakili identitas on-chain pertama dari ekosistem Tree Soul Genesis. Ini diciptakan sebagai fondasi simbolis, bukan sebagai aset spekulatif. Genesis NFT mencerminkan keyakinan awal pada visi jangka panjang TSG: membangun ekosistem Web3 yang transparan, organik, dan berkelanjutan."
      },
      points: [
        { EN: "Deployed on the Monad network", ID: "Diluncurkan di jaringan Monad" },
        { EN: "Limited supply", ID: "Pasokan terbatas" },
        { EN: "No profit guarantees or financial promises", ID: "Tidak ada jaminan keuntungan atau janji finansial" },
        { EN: "Serves as an early supporter identity", ID: "Berfungsi sebagai identitas pendukung awal" }
      ]
    },
    faq: {
      title: { EN: "Community FAQ", ID: "FAQ Komunitas" },
      items: [
        {
          q: { EN: "What is Tree Soul Genesis (TSG)?", ID: "Apa itu Tree Soul Genesis (TSG)?" },
          a: { 
            EN: "Tree Soul Genesis (TSG) is a Web3 green ecosystem project built on the Monad Network, focused on stability, transparency, and long-term community growth. TSG follows a “grow slow, grow strong” philosophy — just like a tree.",
            ID: "Tree Soul Genesis (TSG) adalah proyek ekosistem hijau Web3 yang dibangun di atas Jaringan Monad, berfokus pada stabilitas, transparansi, dan pertumbuhan komunitas jangka panjang. TSG mengikuti filosofi “tumbuh perlahan, tumbuh kuat” — persis seperti pohon."
          }
        },
        {
          q: { EN: "Is TSG a long-term project?", ID: "Apakah TSG proyek jangka panjang?" },
          a: {
            EN: "Yes. TSG is designed with a gradual and realistic approach, without instant promises. Our long-term focus includes ecosystem stability, an active and healthy community, and sustainable development.",
            ID: "Ya. TSG dirancang dengan pendekatan bertahap dan realistis, tanpa janji instan. Fokus jangka panjang kami meliputi stabilitas ekosistem, komunitas yang aktif dan sehat, serta pengembangan berkelanjutan."
          }
        },
        {
          q: { EN: "Does TSG promise profits?", ID: "Apakah TSG menjanjikan keuntungan?" },
          a: {
            EN: "No. TSG is not financial advice and does not guarantee profits. Token value depends on adoption, community activity, and ecosystem development. Always do your own research (DYOR).",
            ID: "Tidak. TSG bukan saran finansial dan tidak menjamin keuntungan. Nilai token bergantung pada adopsi, aktivitas komunitas, dan pengembangan ekosistem. Selalu lakukan riset Anda sendiri (DYOR)."
          }
        },
        {
          q: { EN: "Is the liquidity (LP) safe?", ID: "Apakah likuiditas (LP) aman?" },
          a: {
            EN: "Liquidity is managed with a long-term stability mindset. Currently, liquidity is not locked via a smart contract, however: Liquidity is not withdrawn arbitrarily, it is not used for personal purposes, and all actions are handled transparently. Liquidity locking options will be considered as the project matures.",
            ID: "Likuiditas dikelola dengan pola pikir stabilitas jangka panjang. Saat ini, likuiditas tidak dikunci melalui kontrak pintar, namun: Likuiditas tidak ditarik secara sewenang-wenang, tidak digunakan untuk tujuan pribadi, dan semua tindakan ditangani secara transparan. Opsi penguncian likuiditas akan dipertimbangkan seiring matangnya proyek."
          }
        },
        {
          q: { EN: "Why does the largest wallet look so big?", ID: "Mengapa dompet terbesar terlihat sangat besar?" },
          a: {
            EN: "The largest wallet shown on explorers is the liquidity wallet, not a personal developer wallet. This is a common structure in blockchain projects to maintain market depth and trading stability.",
            ID: "Dompet terbesar yang ditampilkan di explorer adalah dompet likuiditas, bukan dompet pengembang pribadi. Ini adalah struktur umum dalam proyek blockchain untuk menjaga kedalaman pasar dan stabilitas perdagangan."
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen selection:bg-brand-green selection:text-black">
      {/* --- Navbar --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0 m-4 rounded-2xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://i.imgur.com/cE829Db.png" alt="TSG Logo" className="w-10 h-10 rounded-full coin-glow" referrerPolicy="no-referrer" />
            <span className="font-display font-bold text-xl hidden sm:block">TSG</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-gray-400 hover:text-brand-green transition-colors">
                {t(item.label)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'EN' ? 'ID' : 'EN')}
              className="text-xs font-bold px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
            >
              {lang}
            </button>
            <a 
              href="https://app.uniswap.org/explore/tokens/monad/0x053686b5b9fd004f17f042e553d14dc0c56c108a?inputCurrency=NATIVE" 
              target="_blank"
              className="hidden sm:flex items-center gap-2 bg-brand-green text-black px-5 py-2 rounded-xl font-bold text-sm hover:scale-105 transition-transform"
            >
              Buy TSG
            </a>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="w-6 h-0.5 bg-white mb-1.5" />
              <div className="w-6 h-0.5 bg-white mb-1.5" />
              <div className="w-6 h-0.5 bg-white" />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-20 left-0 right-0 glass rounded-2xl mx-4 p-6 flex flex-col gap-4"
            >
              {navItems.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-brand-green"
                >
                  {t(item.label)}
                </a>
              ))}
              <a 
                href="https://app.uniswap.org/explore/tokens/monad/0x053686b5b9fd004f17f042e553d14dc0c56c108a?inputCurrency=NATIVE"
                className="bg-brand-green text-black p-4 rounded-xl font-bold text-center"
              >
                Buy TSG
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- Hero Section --- */}
      <section className="pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-sm font-bold mb-6">
              <Zap className="w-4 h-4" />
              <span>Monad Network (ERC-20)</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
              {content.hero.title}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
              {t(content.hero.desc)}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.uniswap.org/explore/tokens/monad/0x053686b5b9fd004f17f042e553d14dc0c56c108a?inputCurrency=NATIVE" target="_blank" className="bg-brand-green text-black px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all">
                Buy on Uniswap
              </a>
              <a href="https://www.geckoterminal.com/monad/pools/0xf86e7124d2e0cfdf3c9dd07416b835daeb6983b3" target="_blank" className="glass px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                View Chart
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-green/20 blur-[120px] rounded-full" />
            <img 
              src="https://i.imgur.com/GuSqb3D.jpeg" 
              alt="TSG Hero" 
              className="relative z-10 rounded-[2.5rem] shadow-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* --- Quick Access --- */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "Whitepaper", icon: <BarChart3 />, href: "https://drive.google.com/file/d/1D4l_b2-rlA0Uf0ux0xg1rfCZ7HC5WfhZ/view?usp=drivesdk" },
              { label: "Telegram", icon: <Send />, href: "https://t.me/treeSoulGenesis" },
              { label: "Twitter (X)", icon: <Twitter />, href: "https://x.com/tree_genesis?t=_GREljE2HNfMY6UNE_hwCw&s=09" },
              { label: "MonadScan", icon: <Globe />, href: "https://monadscan.com/token/0x053686b5b9Fd004f17f042e553d14DC0C56C108A" },
              { label: "Liquidity", icon: <Lock />, href: "https://app.uncx.network/lockers/manage/lockers-v3?service=edit&locker=0x40f6301edb774e8B22ADC874f6cb17242BaEB8c4&pool=0x6e6E63a8ae7894F1d2d0163E3D879b1ad57B5f81&lock=874&index=0&wallet=0x28f162583f8af2C443E8e78A4d58735453071c47&chain=137" },
              { label: "Burn TX", icon: <Flame />, href: "https://monadscan.com/tx/0x2fab9f3cdd0078f96dfc44f5335d47016085627be8527bf1611727ca2452b132" },
            ].map((link, i) => (
              <a key={i} href={link.href} target="_blank" className="glass p-4 rounded-2xl flex flex-col items-center gap-3 hover:bg-white/10 transition-all group">
                <div className="text-brand-green group-hover:scale-110 transition-transform">{link.icon}</div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="py-24 px-6 bg-brand-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading subtitle={t(content.about.text2)}>
                {t(content.about.title)}
              </SectionHeading>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                {t(content.about.text)}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 glass rounded-2xl">
                  <div className="text-3xl font-bold text-brand-green mb-1">93M</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest">Total Supply</div>
                </div>
                <div className="p-6 glass rounded-2xl">
                  <div className="text-3xl font-bold text-brand-green mb-1">Monad</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest">Network</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Zap className="text-brand-green" /> {t({ EN: "Vision", ID: "Visi" })}
                </h3>
                <p className="text-gray-400 leading-relaxed">{t(content.vision.vision)}</p>
              </Card>
              <Card>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Map className="text-brand-green" /> {t({ EN: "Mission", ID: "Misi" })}
                </h3>
                <ul className="space-y-3">
                  {content.vision.mission.map((m, i) => (
                    <li key={i} className="flex gap-3 text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5 shrink-0" />
                      {t(m)}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* --- Contract Info --- */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="!p-8 md:!p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShieldCheck className="w-32 h-32" />
            </div>
            <h2 className="text-3xl font-display font-bold mb-8">{t({ EN: "Contract Information", ID: "Informasi Kontrak" })}</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">Network</div>
                <div className="text-lg font-medium">Monad</div>
              </div>
              <div>
                <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">Token Type</div>
                <div className="text-lg font-medium">ERC-20</div>
              </div>
              <div>
                <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">Symbol</div>
                <div className="text-lg font-medium">TSG</div>
              </div>
              <div>
                <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">Decimals</div>
                <div className="text-lg font-medium">18</div>
              </div>
            </div>
            <div className="p-4 bg-black/40 rounded-xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="font-mono text-sm break-all text-gray-300">
                0x053686b5b9Fd004f17f042e553d14DC0C56C108A
              </div>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText("0x053686b5b9Fd004f17f042e553d14DC0C56C108A");
                  alert("Copied!");
                }}
                className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-xs font-bold transition-colors shrink-0"
              >
                COPY ADDRESS
              </button>
            </div>
          </Card>
        </div>
      </section>

      {/* --- Tokenomics --- */}
      <section id="tokenomics" className="py-24 px-6 bg-brand-card/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Distribution is made to maintain long-term stability & organic growth.">
            {t(content.tokenomics.title)}
          </SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.tokenomics.data.map((item, i) => (
              <Card key={i} className="flex flex-col justify-between">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-brand-green/10 rounded-xl">{item.icon}</div>
                  <div className="text-2xl font-bold text-brand-green">{item.value}</div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t(item.label)}</h3>
                  <p className="text-gray-500 text-sm font-mono">{item.amount} TSG</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- Roadmap --- */}
      <section id="roadmap" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading>
            {t(content.roadmap.title)}
          </SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.roadmap.phases.map((phase, i) => (
              <div key={i} className="relative">
                <div className="text-brand-green font-bold text-sm mb-4 uppercase tracking-widest">Phase {i+1}</div>
                <Card className="h-full">
                  <h3 className="text-xl font-bold mb-6">{t(phase.title)}</h3>
                  <ul className="space-y-4">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5 shrink-0" />
                        {t(item)}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Ecosystem Overview --- */}
      <section className="py-24 px-6 bg-brand-card/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="All elements are interconnected to create a complete digital green ecosystem.">
            Ecosystem Overview
          </SectionHeading>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <Coins className="w-12 h-12 text-brand-green mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">TSG Token</h3>
              <p className="text-gray-400 text-sm">The core of the ecosystem, providing utility and value across all platforms.</p>
            </Card>
            <Card className="text-center">
              <TreePine className="w-12 h-12 text-brand-green mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Tree Soul NFT</h3>
              <p className="text-gray-400 text-sm">Digital identities representing early supporters and unlocking unique rewards.</p>
            </Card>
            <Card className="text-center">
              <Zap className="w-12 h-12 text-brand-green mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Green Mini-game</h3>
              <p className="text-gray-400 text-sm">Play-to-earn mechanics focused on environmental education and growth.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* --- Token Utility --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading>
            {t(content.utility.title)}
          </SectionHeading>
          <div className="grid md:grid-cols-2 gap-8">
            {content.utility.items.map((item, i) => (
              <Card key={i} className="flex gap-6 items-start">
                <div className="p-4 bg-brand-green/10 rounded-2xl text-brand-green shrink-0">
                  {i === 0 && <Users />}
                  {i === 1 && <Globe />}
                  {i === 2 && <Zap />}
                  {i === 3 && <Vote />}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t(item.title)}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{t(item.desc)}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- Team --- */}
      <section id="team" className="py-24 px-6 bg-brand-card/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading>
            {t(content.team.title)}
          </SectionHeading>
          <div className="grid md:grid-cols-3 gap-12">
            {content.team.members.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-8 inline-block">
                  <div className="absolute inset-0 bg-brand-green/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-48 h-48 rounded-full object-cover border-4 border-white/5 relative z-10 grayscale group-hover:grayscale-0 transition-all"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <div className="text-brand-green font-bold text-sm uppercase tracking-widest mb-4">{t(member.role)}</div>
                {member.desc && <p className="text-gray-400 text-sm max-w-xs mx-auto">{t(member.desc)}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NFT Section --- */}
      <section id="nft" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-[3rem] overflow-hidden grid lg:grid-cols-2 items-center">
            <div className="p-12 md:p-20">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">{content.nft.title}</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-10">
                {t(content.nft.desc)}
              </p>
              <ul className="space-y-4 mb-12">
                {content.nft.points.map((p, i) => (
                  <li key={i} className="flex gap-4 items-center text-gray-300">
                    <ShieldCheck className="text-brand-green w-5 h-5" />
                    {t(p)}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <a href="https://magiceden.io/collections/monad/0x06665110f3bca9c671aa469c6062865483f0d3af" target="_blank" className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 transition-all flex items-center gap-2">
                  View on Magic Eden <ExternalLink className="w-4 h-4" />
                </a>
                <a href="https://monadscan.com/token/0x06665110f3bCA9c671AA469c6062865483F0D3aF" target="_blank" className="glass px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">
                  Explorer
                </a>
              </div>
            </div>
            <div className="p-12 lg:p-0">
              <img 
                src={content.nft.img} 
                alt="TSG NFT" 
                className="w-full h-full object-cover rounded-3xl lg:rounded-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section id="faq" className="py-24 px-6 bg-brand-card/30">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>
            {t(content.faq.title)}
          </SectionHeading>
          <div className="space-y-2">
            {content.faq.items.map((item, i) => (
              <FAQItem 
                key={i}
                question={t(item.q)}
                answer={t(item.a)}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- Trust Section --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <ShieldCheck className="w-12 h-12 text-brand-green mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Transparency</h3>
              <p className="text-gray-400 text-sm">All actions and liquidity management are handled with full transparency to the community.</p>
            </div>
            <div className="text-center">
              <Lock className="w-12 h-12 text-brand-green mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Security</h3>
              <p className="text-gray-400 text-sm">Built on the robust Monad Network with a focus on long-term asset protection.</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-brand-green mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Community Driven</h3>
              <p className="text-gray-400 text-sm">A project built by the community, for the community, with real utility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Socials --- */}
      <section className="py-24 px-6 bg-brand-card/30">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeading subtitle="Join our growing community and stay updated with the latest news.">
            Community & Socials
          </SectionHeading>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <Twitter />, label: "Twitter", href: "https://x.com/tree_genesis" },
              { icon: <Send />, label: "Telegram", href: "https://t.me/TREESOULGENESIS" },
              { icon: <Youtube />, label: "YouTube", href: "https://youtube.com/@TreesoulGenesis" },
              { icon: <Instagram />, label: "Instagram", href: "https://instagram.com/treesoulgenesis" },
              { icon: <Facebook />, label: "Facebook", href: "https://facebook.com/TreesoulGenesis" },
              { icon: <MessageSquare />, label: "Discord", href: "#" },
              { icon: <Mail />, label: "Email", href: "mailto:treesoulgenesis@gmail.com" },
            ].map((social, i) => (
              <a key={i} href={social.href} target="_blank" className="glass p-6 rounded-2xl flex flex-col items-center gap-3 hover:text-brand-green hover:border-brand-green/50 transition-all min-w-[120px]">
                {social.icon}
                <span className="text-xs font-bold uppercase tracking-widest">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="https://i.imgur.com/cE829Db.png" alt="TSG Logo" className="w-8 h-8 rounded-full" referrerPolicy="no-referrer" />
                <span className="font-display font-bold text-xl">TSG</span>
              </div>
              <p className="text-gray-500 text-sm max-w-md leading-relaxed">
                Tree Soul Genesis is a green energy token focused on stability, ecosystems, and sustainable growth. Connecting nature and blockchain technology.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl">
              <h4 className="font-bold mb-4 flex items-center gap-2 text-red-400">
                <ShieldCheck className="w-4 h-4" /> Legal Disclaimer
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                TSG is a high-risk digital asset. There is no guarantee of profit. TSG is not a stock or security. All plans are subject to change based on the needs of the ecosystem. Participation involves risk. Always do your own research (DYOR).
              </p>
            </div>
          </div>
          <div className="text-center text-gray-600 text-xs border-t border-white/5 pt-8">
            © 2026 Tree Soul Genesis (TSG). All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
