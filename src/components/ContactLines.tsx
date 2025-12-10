interface ContactLinesProps {
  email: string;
}

export function ContactLines({ email }: ContactLinesProps) {
  return (
    <div className="flex flex-col gap-2 text-[var(--text)] break-all">{email}</div>
  );
}
