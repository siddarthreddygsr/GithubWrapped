import { Github, Share2 } from 'lucide-react'
// import { Button } from "@/components/ui/button"
import ContributionGraph from '@/components/ContributionGraph'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Github className="w-6 h-6" />
            <span className="font-bold">GitHub Wrapped</span>
          </div>
          {/* <Button variant="ghost" size="icon">
            <Share2 className="w-5 h-5" />
          </Button> */}
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Main Stats Card */}
          <div className="md:col-span-2 rounded-3xl bg-gradient-to-br from-fuchsia-600 to-pink-600 p-8 aspect-square flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.8),rgba(0,0,0,0))]" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2">Total Contributions</h2>
              <div className="text-8xl font-bold">3,721</div>
            </div>
            <div className="relative z-10">
              <p className="text-sm opacity-80">That puts you in the top 1% of contributors worldwide.</p>
            </div>
          </div>

          {/* Streak Card */}
          <div className="rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-600 p-6 aspect-square flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.8),rgba(0,0,0,0))]" />
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-2">Longest Streak</h2>
              <div className="text-6xl font-bold">21</div>
              <p className="text-sm opacity-80 mt-2">consecutive days</p>
            </div>
          </div>

          {/* Contribution Graph - Full Width */}
          <div className="md:col-span-3">
            <ContributionGraph />
          </div>

          {/* Busiest Day Card */}
          <div className="md:col-span-2 rounded-3xl bg-gradient-to-br from-cyan-600 to-blue-600 p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.8),rgba(0,0,0,0))]" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2">Your Biggest Day</h2>
              <div className="text-6xl font-bold mb-2">October 15</div>
              <p className="text-xl opacity-80">42 contributions in one day!</p>
            </div>
          </div>

          {/* Activity Pattern Card */}
          <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-600 p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.8),rgba(0,0,0,0))]" />
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-2">Most Active Time</h2>
              <div className="text-4xl font-bold mb-2">11 PM</div>
              <p className="text-sm opacity-80">Night owl coding sessions</p>
            </div>
          </div>

          {/* Languages Card */}
          <div className="md:col-span-2 rounded-3xl bg-gradient-to-br from-orange-600 to-red-600 p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.8),rgba(0,0,0,0))]" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">Top Languages</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-4xl font-bold mb-1">TypeScript</div>
                  <p className="text-sm opacity-80">60% of commits</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">Python</div>
                  <p className="text-sm opacity-80">25% of commits</p>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Pattern Card */}
          <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.8),rgba(0,0,0,0))]" />
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-2">Favorite Day</h2>
              <div className="text-4xl font-bold mb-2">Wednesday</div>
              <p className="text-sm opacity-80">Mid-week productivity peak</p>
            </div>
          </div>
        </div>

        {/* Share Button */}
        <div className="mt-8 text-center">
          {/* <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 transition-opacity">
            <Share2 className="w-4 h-4 mr-2" />
            Share Your Wrapped
          </Button> */}
        </div>
      </div>
    </div>
  )
}

