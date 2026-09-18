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
            description: "Plusieurs campus, plusieurs pays",
            href: "/solutions/groupe-de-formation",
          },
          {
            icon: "domain",
            label: "Entreprise",
            description: "Alternants et stagiaires",
            href: "/solutions/entreprise",
          },
          {
            icon: "corporate_fare",
            label: "Organisme de formation",
            description: "Formation continue hors alternance",
            href: "/solutions/organisme-de-formation",
            soon: true,
          },
        ],
      },
      {
        title: "Par type de contrat",
        items: [
          {
            icon: "workspace_premium",
            label: "Apprentissage",
            description: "Cerfa 10103 et financement OPCO",
            href: "/solutions/apprentissage",
          },
          {
            icon: "badge",
            label: "Professionnalisation",
            description: "Contrat pro et Pro-A",
            href: "/solutions/professionnalisation",
          },
          {
            icon: "work",
            label: "Stage",
            description: "Y compris à l’étranger",
            href: "/solutions/stage",
          },
          {
            icon: "pending",
            label: "Apprenti sans contrat",
            description: "Cerfa P2S, rupture et recherche",
            href: "/solutions/apprenti-sans-contrat",
          },
        ],
      },
    ],
    features: [
      {
        kicker: "Boîte à outils",
        title: "Simulateur de facturation oubliée",
        description: "Estimation de la trésorerie non facturée",
        href: "/ressources/simulateur-facturation-oubliee",
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
            label: "Convention & Cerfa",
            description: "Tous dispositifs, France et étranger",
            href: "/produit/convention-cerfa",
          },
          {
            icon: "draw",
            label: "Signature électronique",
            description: "École, entreprise et apprenant",
            href: "/produit/signature-electronique",
          },
        ],
      },
      {
        title: "Trésorerie",
        tone: "tangerine",
        items: [
          {
            icon: "euro",
            label: "Facturation OPCO",
            description: "Envoi et suivi Convergence",
            href: "/produit/facturation-opco",
          },
          {
            icon: "donut_small",
            label: "Créances récupérables",
            description: "Dossiers exécutés jamais facturés",
            href: "/produit/creances-recuperables",
          },
          {
            icon: "search",
            label: "Audit gratuit de facturation",
            description: "Restitution chiffrée sous 24 h",
            href: "/produit/audit-gratuit",
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
            description: "Sessions, salles et intervenants",
            href: "/produit/planning",
            soon: true,
          },
          {
            icon: "fact_check",
            label: "Livret de suivi",
            description: "Compétences et évaluations",
            href: "/produit/livret-de-suivi",
          },
          {
            icon: "check_circle",
            label: "Émargement",
            description: "Présence mobile horodatée",
            href: "/produit/emargement",
            soon: true,
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
            description: "Vue 360° et dossiers bloqués",
            href: "/produit/tableaux-de-bord",
          },
          {
            icon: "diamond",
            label: "Consolidation multi-campus",
            description: "Écoles et pays, une vue unique",
            href: "/produit/consolidation-multi-campus",
          },
          {
            icon: "hub",
            label: "Outils connectés",
            description: "Tous les outils de l’école",
            href: "/produit/outils-connectes",
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
        title: "Boîte à outils",
        items: [
          {
            icon: "functions",
            label: "Simulateur NPEC",
            description: "Montant de prise en charge par certification",
            href: "/ressources/simulateur-npec",
          },
          {
            icon: "radio_button_unchecked",
            label: "Simulateur de facturation oubliée",
            description: "Estimation de la trésorerie non facturée",
            href: "/ressources/simulateur-facturation-oubliee",
          },
          {
            icon: "search",
            label: "Audit gratuit de facturation",
            description: "Restitution chiffrée sous 24 h",
            href: "/ressources/audit-gratuit",
          },
          {
            icon: "menu_book",
            label: "Recherche réglementaire",
            description: "Textes, Cerfa et règles OPCO",
            href: "/ressources/recherche-reglementation",
          },
        ],
      },
      {
        title: "S’informer",
        items: [
          {
            icon: "push_pin",
            label: "Blog",
            description: "Décryptages réglementaires et fiches pratiques",
            href: "/ressources/blog",
          },
          {
            icon: "play_arrow",
            label: "Webinaires",
            description: "Sessions live et replays",
            href: "/ressources/webinaires",
          },
          {
            icon: "asterisk",
            label: "Presse",
            description: "Communiqués et actualités",
            href: "/ressources/presse",
          },
          {
            icon: "question_mark",
            label: "Aide en ligne",
            description: "Réponses aux questions fréquentes",
            href: "/ressources/aide",
          },
        ],
      },
    ],
    features: [
      {
        kicker: "Boîte à outils",
        title: "Simulateur NPEC",
        description: "Montant de prise en charge par certification",
        href: "/ressources/simulateur-npec",
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
