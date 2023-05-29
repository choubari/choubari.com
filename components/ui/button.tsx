import Link from "next/link";

interface ButtonProps {
  route: string;
  label: string;
}
export default function Button({ route, label }: ButtonProps) {
  return (
    <div className="text-center">
      <Link href={route}>
        <p className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-violina via-rosalina to-orangina text-white text-sm font-semibold">
          {label}
        </p>
      </Link>
    </div>
  );
}
