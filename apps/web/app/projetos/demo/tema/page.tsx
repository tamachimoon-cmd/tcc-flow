import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import { ThemeAssistant } from "@/components/theme-assistant";

export const metadata: Metadata = {
  title: "Assistente de tema",
};

export default function ThemePage() {
  return (
    <AppShell active="theme">
      <header className="page-header narrow">
        <div>
          <span className="eyebrow">Etapa 2 de 4</span>
          <h1>Transforme interesse em pesquisa.</h1>
          <p>
            A IA sugere caminhos. Você escolhe, ajusta e assume a decisão.
          </p>
        </div>
      </header>
      <ThemeAssistant />
    </AppShell>
  );
}
