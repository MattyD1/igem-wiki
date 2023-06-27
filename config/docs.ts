import { MainNavItem, SidebarNavItem } from "types/nav"

interface DocsConfig {
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
      ],
    },
    {
      title: "Wet Lab",
      items: [
        {
          title: "Notebook",
          href: "/docs/wet-lab",
          items: [],
        },
        {
          title: "Experiments",
          href: "/docs/wet-lab/experiments",
          items: [],
        },

        {
          title: "Protocol",
          href: "/docs/wet-lab/protocol",
          items: [],
        },
      ],
    },
    {
      title: "Project",
      items: [
        {
          title: "Description",
          href: "/docs/project",
          items: [],
        },
        {
          title: "Engineering",
          href: "/docs/project/engineering",
          items: [],
        },
        {
          title: "Results",
          href: "/docs/project/results",
          items: [],
        },
        {
          title: "Proof of Concept",
          href: "/docs/project/proof-of-concept",
          items: [],
        },
        {
          title: "Implementation",
          href: "/docs/project/implementation",
          items: [],
        },
        {
          title: "Contribution",
          href: "/docs/project/contribution",
          items: [],
        },
      ],
    },

    {
      title: "Model",
      items: [
        {
          title: "Description",
          href: "/docs/model",
          items: [],
        },
        {
          title: "Design",
          href: "/docs/model/design",
          items: [],
        },
      ],
    },
    {
      title: "Parts",
      items: [
        {
          title: "Description",
          href: "/docs/parts",
          items: [],
        },
        {
          title: "Collection",
          href: "/docs/parts/collection",
          items: [],
        },
      ],
    },
  ],
}
