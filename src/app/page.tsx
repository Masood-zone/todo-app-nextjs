import SplashScreen from "./todos/ui/splash-screen";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <SplashScreen />
      <Footer />
    </main>
  );
}
