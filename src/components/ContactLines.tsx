interface ContactLinesProps {
  email: string;
  phone: string;
}

export function ContactLines({ email, phone }: ContactLinesProps) {
  return (
    <div className="flex flex-col gap-2 text-[var(--text)]">
      <div className="inline-flex items-center gap-2 break-all">
        <svg
          className="w-4.5 h-4.5 fill-[var(--accent-strong)] drop-shadow-[0_4px_12px_rgba(77,212,182,0.42)]"
          viewBox="0 0 24 24"
          aria-hidden="true">
          <path d="M4.5 6.2 10 10c1.2.8 2.8.8 4 0l5.5-3.8c.3-.2.5-.5.5-.9 0-.7-.6-1.3-1.3-1.3H5.3C4.6 4 4 4.6 4 5.3c0 .3.2.7.5.9ZM20 8.3l-4.7 3.3a4.8 4.8 0 0 1-5.6 0L5 8.3V16c0 1 .8 1.8 1.8 1.8h11.4c1 0 1.8-.8 1.8-1.8V8.3Z" />
        </svg>
        <span>{email}</span>
      </div>
      <div className="inline-flex items-center gap-2 break-all">
        <svg
          className="w-4.5 h-4.5 fill-[var(--accent-strong)] drop-shadow-[0_4px_12px_rgba(77,212,182,0.42)]"
          viewBox="0 0 24 24"
          aria-hidden="true">
          <path d="M6.6 3.5c.3-.7 1-1 1.7-.8l1.9.6c.7.2 1.2.9 1 1.6l-.5 1.9a1.5 1.5 0 0 1-.7.9 12 12 0 0 0 5 5c.3-.2.6-.5.9-.7l1.9-.5c.7-.2 1.4.2 1.6 1l.6 1.9c.2.7-.1 1.4-.8 1.7l-1.5.7c-.6.3-1.4.4-2 .1A17.2 17.2 0 0 1 4.8 9.1c-.3-.6-.2-1.3.1-2l.7-1.6Z" />
        </svg>
        <span>{phone}</span>
      </div>
    </div>
  );
}
