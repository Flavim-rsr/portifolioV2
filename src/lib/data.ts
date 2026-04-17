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
    title: "Purchase",
    slug: "purchase",
    description: {
      pt: "Aplicativo mobile de lista de compras desenvolvido em React Native com Expo. Permite adicionar e remover itens, filtrar por status (pendente ou comprado), limpar a lista com confirmação e persistência local via AsyncStorage. Projeto focado em praticar componentização, hooks (useState/useEffect), FlatList e integração com armazenamento nativo.",
      en: "Mobile shopping list app built with React Native and Expo. Users can add and remove items, filter by status (pending or purchased), clear the list with confirmation, and persist data locally via AsyncStorage. Focused on practicing component composition, hooks (useState/useEffect), FlatList, and native storage integration.",
    },
    tags: ["React Native", "Expo", "TypeScript", "AsyncStorage", "Lucide"],
    image: "/projects/purchaseImg.png",
    modalImage: "/projects/purchaseImgMockup.png",
    orientation: "vertical",
    demoUrl: "",
    githubUrl: "https://github.com/Flavim-rsr/purchase",
    year: "2026",
    category: "Mobile",
  },
  {
    title: "Secret Word",
    slug: "secret-word",
    description: {
      pt: "Jogo de adivinhação de palavras desenvolvido em React para praticar componentização, estado, efeitos e formulários. O jogador recebe uma categoria, tenta descobrir a palavra letra por letra, acumula pontos ao acertar e perde quando as tentativas acabam.",
      en: "Word guessing game built with React to practice component composition, state, effects, and form handling. The player receives a category, tries to reveal the word one letter at a time, earns points for correct answers, and loses when the attempts run out.",
    },
    tags: ["React 19", "Vite", "JavaScript", "CSS", "HTML", "ESLint"],
    image: "/projects/secret-word-screenshot.png",
    orientation: "horizontal",
    demoUrl: "https://secretworddev.vercel.app/",
    githubUrl: "https://github.com/Flavim-rsr/secret-word",
    year: "2026",
    category: "Frontend",
  },
  {
    title: "Ebook",
    slug: "ebook",
    orientation: "horizontal",
    description: {
      pt: "Landing page construida no curso da Alura, desenvolvida com abordagem mobile-first usando apenas HTML e CSS. O projeto explora responsividade, menu hambúrguer sem JavaScript e carrossel com Swiper.js para destacar livros e seções promocionais.",
      en: "Alura Books inspired landing page built with a mobile-first approach using only HTML and CSS. The project focuses on responsive layout, a JavaScript-free hamburger menu, and a Swiper.js carousel to showcase books and promotional sections.",
    },
    tags: ["HTML", "CSS", "Swiper.js", "Mobile First"],
    image: "/projects/ebook.png",
    demoUrl: "https://study-mobile-first.vercel.app/",
    githubUrl: "https://github.com/Flavim-rsr/study-mobile-first",
    year: "2024",
    category: "Frontend",
  },
  {
    title: "Lista de compra",
    slug: "lista-de-compra",
    description: {
      pt: "Aplicação web para organizar itens de compra de forma dinâmica, permitindo cadastrar, editar, excluir e marcar produtos como comprados. Cada item registra data e horário de criação, reforçando a prática de manipulação do DOM e validações com JavaScript.",
      en: "Web application for organizing shopping items dynamically, allowing users to add, edit, delete, and mark products as purchased. Each item stores its creation date and time, reinforcing DOM manipulation and validation techniques with JavaScript.",
    },
    tags: ["JavaScript", "HTML", "CSS", "DOM"],
    image: "/projects/lista-de-compra-screenshot.png",
    orientation: "horizontal",
    demoUrl: "https://lista-compra-sage.vercel.app/",
    githubUrl: "https://github.com/Flavim-rsr/lista-compra",
    year: "2024",
    category: "Frontend",
  },
];
