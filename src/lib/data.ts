export const skills = {
  frontend: [
    { name: "React", icon: "SiReact" },
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "HTML", icon: "SiHtml5" },
    { name: "CSS", icon: "SiCss3" },
  ],
  backend: [
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Java", icon: "SiJava" },
    { name: "Spring Boot", icon: "SiSpringboot" },
    { name: "Python", icon: "SiPython" },
    { name: "PHP", icon: "SiPhp" },
  ],
  database: [
    { name: "PostgreSQL", icon: "SiPostgresql" },
    { name: "MySQL", icon: "SiMysql" },
    { name: "Oracle", icon: "FaDatabase" },
    { name: "Firebase", icon: "SiFirebase" },
  ],
  tools: [
    { name: "Git", icon: "SiGit" },
    { name: "GitHub", icon: "SiGithub" },
    { name: "Figma", icon: "SiFigma" },
    { name: "VS Code", icon: "SiVisualstudiocode" },
  ],
  mobile: [
    { name: "Flutter", icon: "SiFlutter" },
    { name: "React Native", icon: "SiReact" },
  ],
};

export const experiences = [
  {
    company: "Lote Mobile",
    role: {
      pt: "Desenvolvedor Front-end",
      en: "Front-end Developer",
    },
    period: "Set 2025 — Presente",
    periodEn: "Sep 2025 — Present",
    description: {
      pt: "Atuo no desenvolvimento e evolução de um sistema de gestão de lotes, sendo responsável pela implementação e otimização de relatórios complexos envolvendo vendas, previsões financeiras e contas a pagar. Construo novas features, integrações externas e melhorias de UX, garantindo responsividade para mobile e tablet. Trabalho com React em SPA, utilizando Vite, React Router DOM, Context API e hooks customizados. Utilizo PrimeReact para componentes ricos como DataTables, modais e formulários, com exportações para Excel e PDF. Integro APIs REST com cache e tratamento de fluxos de negócio complexos.",
      en: "Working on the development and evolution of a lot management system, responsible for implementing and optimizing complex reports involving sales, financial forecasts, and accounts payable. Build new features, external integrations, and UX improvements, ensuring responsiveness for mobile and tablet. Work with React SPA using Vite, React Router DOM, Context API, and custom hooks. Use PrimeReact for rich components like DataTables, modals, and forms, with Excel and PDF exports. Integrate REST APIs with caching and complex business flow handling.",
    },
    tags: ["React", "Vite", "PrimeReact", "JavaScript", "REST API", "Git"],
  },
  {
    company: "Lote Mobile",
    role: {
      pt: "Suporte Técnico & Desenvolvedor",
      en: "Technical Support & Developer",
    },
    period: "Nov 2024 — Set 2025",
    periodEn: "Nov 2024 — Sep 2025",
    description: {
      pt: "Atuei no suporte e manutenção de uma versão legada do sistema de gestão de lotes, responsável pelo atendimento a clientes, treinamentos e reuniões via Google Meet. Paralelamente, desenvolvi correções de bugs e melhorias em múltiplas instâncias isoladas por cliente. O sistema era um monólito PHP procedural com MySQL, hospedado na HostGator com WHM/cPanel. Trabalhei com integrações bancárias, geração de documentos (DOMPDF), automações por cron e jQuery/DataTables no frontend.",
      en: "Provided support and maintenance for a legacy lot management system, handling client onboarding, training sessions, and Google Meet meetings. In parallel, developed bug fixes and improvements across multiple isolated client instances. The system was a procedural PHP monolith with MySQL, hosted on HostGator with WHM/cPanel. Worked with banking integrations, document generation (DOMPDF), cron automations, and jQuery/DataTables on the frontend.",
    },
    tags: ["PHP", "MySQL", "jQuery", "DOMPDF", "PHPMailer", "WHM/cPanel"],
  },
  // {
  //   company: "Pinelo",
  //   role: {
  //     pt: "Coordenador de Controle de Estoque",
  //     en: "Inventory Control Coordinator",
  //   },
  //   period: "Fev 2024 — Dez 2024",
  //   periodEn: "Feb 2024 — Dec 2024",
  //   description: {
  //     pt: "Coordenei a equipe de estoque, gerenciando recebimento de mercadorias, conferência de notas fiscais e lançamentos no sistema de gestão. Responsável pela acuracidade do inventário, ajustes de estoque, distribuição de tarefas e monitoramento do desempenho da equipe.",
  //     en: "Coordinated the inventory team, managing merchandise receiving, invoice verification, and management system entries. Responsible for inventory accuracy, stock adjustments, task distribution, and team performance monitoring.",
  //   },
  //   tags: ["Gestão de Equipe", "Controle de Estoque", "ERP"],
  // },
  // {
  //   company: "Pinelo",
  //   role: {
  //     pt: "Assistente de Estoque",
  //     en: "Stock Assistant",
  //   },
  //   period: "Nov 2022 — Fev 2024",
  //   periodEn: "Nov 2022 — Feb 2024",
  //   description: {
  //     pt: "Atendimento e processamento de trocas para clientes, contagem e controle de estoque, e gerenciamento da expedição de mercadorias para loja física e e-commerce, garantindo envios corretos dentro dos prazos.",
  //     en: "Customer service and exchange processing, inventory counting and control, and shipment management for physical store and e-commerce, ensuring correct deliveries within deadlines.",
  //   },
  //   tags: ["E-commerce", "Logística", "Expedição"],
  // },
  // {
  //   company: "Pinelo",
  //   role: {
  //     pt: "Auxiliar de Estoque",
  //     en: "Stock Assistant (Junior)",
  //   },
  //   period: "Abr 2021 — Out 2022",
  //   periodEn: "Apr 2021 — Oct 2022",
  //   description: {
  //     pt: "Reposição de mercadorias nas prateleiras, organização do estoque para facilitar a localização dos itens, e colaboração na organização do layout da loja conforme os padrões da empresa.",
  //     en: "Merchandise restocking, inventory organization to facilitate item location, and collaboration on store layout organization following company standards.",
  //   },
  //   tags: ["Organização", "Trabalho em equipe", "Logística"],
  // },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    slug: "ecommerce",
    description: {
      pt: "Plataforma completa de e-commerce com dashboard administrativo, gestão de estoque em tempo real, integração com gateways de pagamento e sistema de avaliações.",
      en: "Full-featured e-commerce platform with admin dashboard, real-time inventory management, payment gateway integration, and review system.",
    },
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&auto=format",
    demoUrl: "#",
    githubUrl: "#",
    year: "2024",
    category: "Full Stack",
  },
  {
    title: "TaskFlow — SaaS de Gestão",
    slug: "taskflow",
    description: {
      pt: "Aplicação SaaS de gestão de tarefas e projetos com colaboração em tempo real, notificações push, dashboards analíticos e integração com Slack e GitHub.",
      en: "Task and project management SaaS with real-time collaboration, push notifications, analytics dashboards, and Slack & GitHub integrations.",
    },
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop&auto=format",
    demoUrl: "#",
    githubUrl: "#",
    year: "2024",
    category: "Full Stack",
  },
  {
    title: "HealthTrack API",
    slug: "healthtrack",
    description: {
      pt: "API REST robusta para aplicativo de saúde e bem-estar. Inclui autenticação JWT, controle de acesso por roles, histórico de métricas e relatórios em PDF.",
      en: "Robust REST API for a health and wellness app. Includes JWT auth, role-based access control, metrics history, and PDF reports.",
    },
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop&auto=format",
    demoUrl: "#",
    githubUrl: "#",
    year: "2023",
    category: "Backend",
  },
  {
    title: "RealTime Chat",
    slug: "realtime-chat",
    description: {
      pt: "Aplicação de chat em tempo real com salas públicas e privadas, compartilhamento de arquivos, reações a mensagens e status de leitura.",
      en: "Real-time chat application with public and private rooms, file sharing, message reactions, and read receipts.",
    },
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=500&fit=crop&auto=format",
    demoUrl: "#",
    githubUrl: "#",
    year: "2023",
    category: "Full Stack",
  },
  {
    title: "Analytics Dashboard",
    slug: "analytics",
    description: {
      pt: "Dashboard analítico com visualizações de dados interativas, filtros dinâmicos, exportação de relatórios e dark mode. Consome API própria com dados sintéticos.",
      en: "Analytics dashboard with interactive data visualizations, dynamic filters, report export, and dark mode. Powered by a custom API with synthetic data.",
    },
    tags: ["React", "TypeScript", "Recharts", "Python"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format",
    demoUrl: "#",
    githubUrl: "#",
    year: "2022",
    category: "Frontend",
  },
  {
    title: "DevBlog CMS",
    slug: "devblog",
    description: {
      pt: "CMS headless para blog técnico com editor Markdown, sistema de tags, busca full-text, RSS feed e suporte a múltiplos autores com controle de publicação.",
      en: "Headless CMS for a tech blog with Markdown editor, tag system, full-text search, RSS feed, and multi-author support with publishing control.",
    },
    tags: ["Next.js", "Prisma", "PostgreSQL", "MDX"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop&auto=format",
    demoUrl: "#",
    githubUrl: "#",
    year: "2022",
    category: "Full Stack",
  },
];
