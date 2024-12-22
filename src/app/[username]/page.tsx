import ContributionGraph from "@/components/ContributionGraph";

const UserProfileRoute = ({ params }: { params: { username: string } }) => {
  const username = params.username;
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased p-2 sm:p-4">
      <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
        {/* Total Contributions */}
        <div className="col-span-2 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-fuchsia-600 to-purple-800 p-4 sm:p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.8),rgba(0,0,0,0))]" />
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-base sm:text-xl font-medium mb-1 sm:mb-2">Total Contributions</h2>
              <div className="text-4xl sm:text-7xl font-bold">3,721</div>
            </div>
            <p className="text-xs sm:text-sm opacity-80 mt-2 sm:mt-4">
              That puts you in the top 1% of contributors worldwide.
            </p>
          </div>
        </div>

        {/* Longest Streak */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 p-4 sm:p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.8),rgba(0,0,0,0))]" />
          <div className="h-full flex flex-col justify-between">
            <h2 className="text-base sm:text-xl font-medium mb-1 sm:mb-2">Longest Streak</h2>
            <div>
              <div className="text-3xl sm:text-6xl font-bold mb-1">21</div>
              <p className="text-xs sm:text-sm opacity-80">consecutive days</p>
            </div>
          </div>
        </div>

        {/* Contribution Graph - Full Width */}
        <div className="col-span-2 sm:col-span-3 rounded-2xl sm:rounded-3xl bg-[#0D1117]">
          <ContributionGraph username={username}/>
        </div>

        {/* Biggest Day */}
        <div className="col-span-2 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-cyan-600 to-blue-700 bg-[#0D1117] p-4 sm:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.8),rgba(0,0,0,0))]" />
          <div className="h-full flex flex-col justify-between">
            <h2 className="text-base sm:text-xl font-medium mb-1 sm:mb-2">Your Biggest Day</h2>
            <div>
              <div className="text-3xl sm:text-5xl font-bold mb-2">October 15</div>
              <p className="text-sm sm:text-lg opacity-80">42 contributions in one day!</p>
            </div>
          </div>
        </div>

        {/* Most Active Time */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-4 sm:p-8">
          <div className="h-full flex flex-col justify-between">
            <h2 className="text-base sm:text-xl font-medium mb-1 sm:mb-2">Most Active Time</h2>
            <div>
              <div className="text-3xl sm:text-5xl font-bold mb-1">11 PM</div>
              <p className="text-xs sm:text-sm opacity-80">Night owl coding sessions</p>
            </div>
          </div>
        </div>

        {/* Favorite Day */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-violet-600 to-purple-700 p-4 sm:p-8">
          <div className="h-full flex flex-col justify-between">
            <h2 className="text-base sm:text-xl font-medium mb-1 sm:mb-2">Favorite Day</h2>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-1">Wednesday</div>
              <p className="text-xs sm:text-sm opacity-80">Mid-week productivity peak</p>
            </div>
          </div>
        </div>

        {/* Top Languages */}
        <div className="col-span-2 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-orange-600 to-red-700 p-4 sm:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.8),rgba(0,0,0,0))]" />
          <h2 className="text-base sm:text-xl font-medium mb-3 sm:mb-4">Top Languages</h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-8">
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-1">TypeScript</div>
              <p className="text-xs sm:text-sm opacity-80">60% of commits</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-1">Python</div>
              <p className="text-xs sm:text-sm opacity-80">25% of commits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfileRoute;