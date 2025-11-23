import Header from './components/Header';
import MarketOverview from './components/MarketOverview';
import AiRecommendations from './components/AiRecommendations';
import NewsSentiment from './components/NewsSentiment';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(158,127,255,0.3),rgba(255,255,255,0))] -z-10"></div>
      
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <MarketOverview />
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AiRecommendations />
          </div>
          <div>
            <NewsSentiment />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
