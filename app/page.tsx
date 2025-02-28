import Hero from "@/components/home/hero";

export default function Home() {
  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth();
  const isMyBirthday = todayDay === 26 && todayMonth === 8; // 0-based months (26 September)

  return (
    <>
      <Hero />
      {isMyBirthday && <script src="/confetti.js"></script>}
    </>
  );
}
