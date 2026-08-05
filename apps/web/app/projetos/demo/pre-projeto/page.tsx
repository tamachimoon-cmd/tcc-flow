import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import { PreProjectEditor } from "@/components/pre-project-editor";

export const metadata: Metadata = {
  title: "Pré-projeto",
};

export default function PreProjectPage() {
  return (
    <AppShell active="preproject">
      <header className="page-header narrow">
        <div>
          <span className="eyebrow">Etapa 3 de 4</span>
          <h1>Construa uma base coerente.</h1>
          <p>
            Revise o problema, o objetivo e a metodologia antes de seguir para
            o cronograma.
          </p>
        </div>
      </header>
      <PreProjectEditor />
    </AppShell>
  );
}
