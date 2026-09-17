export const navItems = [
  {
    id: "pourquoi",
    type: "link",
    label: "Pourquoi Filiz ?",
    href: "/pourquoi-filiz",
  },
  {
    id: "solutions",
    type: "mega",
    label: "Solutions",
    columns: [
      {
        title: "Par profil",
        items: [
          {
            icon: "school",
            label: "École / CFA",
            description: "1 ou 2 sites",
            href: "/solutions/ecole-cfa",
          },
          {
            icon: "apartment",
            label: "Groupe de formation",
            description: "Plusieurs campus",
            href: "/solutions/groupe-de-formation",
          },
          {
            icon: "domain",
            label: "Entreprise",
            description: "Alternants et stagiaires",
            href: "/solutions/entreprise",
          },
        ],
      },
      {
        title: "Par type de contrat",
        items: [
          {
            icon: "workspace_premium",
            label: "Apprentissage",
            description: "CERFA et OPCO",
            href: "/solutions/apprentissage",
          },
          {
            icon: "badge",
            label: "Professionnalisation",
            description: "Contrats pro, Cerfa P2S",
            href: "/solutions/professionnalisation",
          },
          {
            icon: "work",
            label: "Stage",
            description: "Y compris à l’étranger",
            href: "/solutions/stage",
          },
        ],
      },
    ],
    features: [
      {
        kicker: "Webinaire",
        title: "Piloter un groupe de formation multi-sites",
        description: "Organisation, process et outils.",
        href: "/ressources/webinaires/groupe-multi-sites",
      },
    ],
  },
  {
    id: "produit",
    type: "mega",
    label: "Produit",
    columns: [
      {
        title: "Contractualisation",
        tone: "cornflower",
        items: [
          {
            icon: "description",
            label: "Contrats & CERFA",
            description: "Signatures et envoi OPCO",
            href: "/produit/contrats-cerfa",
          },
          {
            icon: "receipt_long",
            label: "Facturation OPCO",
            description: "Envoi et suivi Convergence",
            href: "/produit/facturation-opco",
          },
          {
            icon: "handshake",
            label: "Conventions de stage",
            description: "Y compris à l’étranger",
            href: "/produit/conventions-de-stage",
          },
        ],
      },
      {
        title: "Pédagogie",
        tone: "honeydew",
        items: [
          {
            icon: "calendar_month",
            label: "Planning",
            description: "Sessions et intervenants",
            href: "/produit/planning",
          },
          {
            icon: "person_search",
            label: "Suivi de l’apprenant",
            description: "Parcours, absences, livret",
            href: "/produit/suivi-apprenant",
          },
          {
            icon: "how_to_reg",
            label: "Émargement",
            description: "Présence digitalisée",
            href: "/produit/emargement",
          },
        ],
      },
      {
        title: "Recouvrement",
        tone: "tangerine",
        items: [
          {
            icon: "search",
            label: "Audit gratuit",
            description: "Trésorerie non facturée",
            href: "/produit/audit-gratuit",
          },
          {
            icon: "account_balance",
            label: "Recouvrement OPCO",
            description: "Paiements et relances",
            href: "/produit/recouvrement-opco",
          },
          {
            icon: "groups",
            label: "Externalisation administrative",
            description: "Filiz opère à votre place",
            href: "/produit/externalisation",
          },
        ],
      },
      {
        title: "Pilotage",
        tone: "lilac",
        items: [
          {
            icon: "dashboard",
            label: "Tableaux de bord",
            description: "Vue 360° et blocages",
            href: "/produit/tableaux-de-bord",
          },
          {
            icon: "notifications",
            label: "Relances automatiques",
            description: "Emails en cas de retard",
            href: "/produit/relances",
          },
          {
            icon: "verified",
            label: "Vérification des données",
            description: "95% acceptés du 1er coup",
            href: "/produit/verification",
          },
          {
            icon: "hub",
            label: "API & intégrations",
            description: "CRM, ERP, Campus Skills",
            href: "/produit/api-integrations",
          },
        ],
      },
    ],
    banner: {
      icon: "support_agent",
      title: "Équipe dédiée Filiz",
      subtitle: "Filiz peut opérer ces modules pour vous",
      cta: "Voir l’accompagnement",
      href: "/accompagnement",
      tone: "jade",
    },
  },
  {
    id: "ressources",
    type: "mega",
    label: "Ressources",
    columns: [
      {
        title: "Ressources",
        items: [
          { icon: "article", label: "Blog", description: "Actu et produit", href: "/ressources/blog" },
          { icon: "videocam", label: "Webinaires", description: "Sessions live CFA", href: "/ressources/webinaires" },
          { icon: "newspaper", label: "Presse", description: "Kit média", href: "/ressources/presse" },
          { icon: "help", label: "FAQ", description: "Questions du quotidien", href: "/ressources/faq" },
        ],
      },
    ],
    features: [
      {
        kicker: "Blog",
        title: "5 erreurs CERFA qui bloquent l’OPCO",
        description: "Les contrôles avant envoi.",
        href: "/ressources/blog/cerfa-erreurs-opco",
      },
      {
        kicker: "Webinaire",
        title: "Émargement digital en CFA",
        description: "Déroulé type pour une rentrée.",
        href: "/ressources/webinaires/emargement-digital",
      },
    ],
  },
  {
    id: "clients",
    type: "link",
    label: "Clients",
    href: "/clients",
  },
  {
    id: "tarifs",
    type: "link",
    label: "Tarifs",
    href: "/tarifs",
  },
];
