import Link from "next/link";
import type { ReactNode } from "react";
import { Brand } from "@/components/brand";

type AppShellProps = {
  children: ReactNode;
  active?: "dashboard" | "project" | "theme" | "preproject";
};

const navigation = [
  { id: "dashboard", label: "Visão geral", href: "/dashboard" as const },
  { id: "project", label: "Meu projeto", href: "/projetos/novo" as const },
  { id: "theme", label: "Tema e recorte", href: "/projetos/demo/tema" as const },
  {
    id: "preproject",
    label: "Pré-projeto",
    href: "/projetos/demo/pre-projeto" as const,
  },
];

export function AppShell({ children, active = "dashboard" }: AppShellProps) {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <Brand />
        <nav className="sidebar-nav" aria-label="Navegação do projeto">
          {navigation.map((item) => (
            <Link
              className={item.id === active ? "nav-link is-active" : "nav-link"}
              href={item.href}
              key={item.id}
            >
              <span className="nav-dot" aria-hidden="true" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="sidebar-note">
          <span className="eyebrow">Princípio do produto</span>
          <p>A IA orienta. A decisão acadêmica continua sendo sua.</p>
        </div>
      </aside>
      <main className="app-main">{children}</main>
    </div>
  );
}
