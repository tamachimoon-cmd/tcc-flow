import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import { NewProjectForm } from "@/components/new-project-form";

export const metadata: Metadata = {
  title: "Novo projeto",
};

export default function NewProjectPage() {
  return (
    <AppShell active="project">
      <header className="page-header narrow">
        <div>
          <span className="eyebrow">Etapa 1 de 4</span>
          <h1>Contexto acadêmico</h1>
          <p>
            Essas informações permitem que a orientação respeite seu curso,
            prazo e formato de trabalho.
          </p>
        </div>
      </header>
      <NewProjectForm />
    </AppShell>
  );
}
