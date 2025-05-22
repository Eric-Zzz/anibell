// components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">欢迎来到我们的猫舍</h1>
          <p className="text-lg">专注于健康、可爱、性格温顺的布偶猫繁育</p>
        </div>
      </div>
    </section>
  );
}
