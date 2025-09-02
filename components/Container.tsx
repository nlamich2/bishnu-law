export default function Container({ children }: { children: React.ReactNode }) {
    return <section className="mx-auto max-w-7xl px-6 py-16">{children}</section>;
  }