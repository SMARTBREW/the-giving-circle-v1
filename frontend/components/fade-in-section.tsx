export default function FadeInSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  amount?: "some" | "all" | number;
}) {
  return <div className={className}>{children}</div>;
}
