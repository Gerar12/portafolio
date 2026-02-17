import { Github, Linkedin, Mail } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      padding: '3rem 1.5rem',
      backgroundColor: 'var(--bg-secondary)',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-muted)' }}>
          <a href="https://github.com/gerar-arevalo" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s' }}>
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/gerar-arevalo" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
          <a href="mailto:gerar@example.com">
            <Mail size={20} />
          </a>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Gerar Arévalo. Built with Next.js 15.
        </p>
      </div>
    </footer>
  );
}
