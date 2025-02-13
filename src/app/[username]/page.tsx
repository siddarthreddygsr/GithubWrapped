"use client"

import ContributionGraph from "@/components/ContributionGraph"
import axios from 'axios';
import { useState, useEffect } from 'react'
import html2canvas from 'html2canvas';
import { Share } from "lucide-react";

const UserProfileRoute = ({ params }: { params: { username: string } }) => {
  interface Stats {
    highest_contributions: number;
    highest_contributions_date: string;
    longest_streak: number;
    total_contributions: number;
    busiest_day: string;
    busiest_month_contributions: number;
    busiest_month: string;
    adjective: string,
    contribution_difference: number,
    contribution_percentage: number
  }
  const username = params.username;
const [, setIsLoading] = useState(true)
  const [, setError] = useState<string | null>(null)
  const [accountStats, setAccountStats] = useState<Stats>({
    highest_contributions: 0,
    highest_contributions_date: 'NA',
    longest_streak: 0,
    total_contributions: 0,
    busiest_day: 'NA',
    busiest_month_contributions: 0,
    busiest_month: "NA",
    adjective: "",
    contribution_difference: 0,
    contribution_percentage: 0.0
  });

  useEffect(() => {
    const fetchAccountStats = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(`https://githubwrapped-backend.onrender.com/account_stats`, {
          params: { username }
        });
        setAccountStats(response.data);
        setIsLoading(false)
      } catch (err) {
        console.error('Error fetching contribution data:', err);
        setError('Failed to fetch contribution data')
        setIsLoading(false)
      }
    };

    fetchAccountStats();
  }, [username]);
  
  const handleShareScreenshot = () => {
    const statsComponent = document.querySelector('.stats-component');
    if (statsComponent) {
      html2canvas(statsComponent as HTMLElement, {
        useCORS: true,
        backgroundColor: '#000000'
      }).then(canvas => {
        canvas.toBlob(async (blob) => {
          if (blob) {
            const file = new File([blob], `${params.username}_github_stats.png`, { type: 'image/png' });
            
            // Check for Web Share API support
            if (navigator.share) {
              try {
                await navigator.share({
                  title: `${params.username}'s GitHub Stats`,
                  text: 'Check out my GitHub contributions!',
                  files: [file]
                });
              } catch (error) {
                console.error('Sharing failed:', error);
                alert('Sharing was cancelled or failed');
              }
            } else {
              // Fallback: Open system share dialog or provide alternative
              alert('Sharing not supported on this device. Please manually share the screenshot.');
            }
          }
        });
      });
    }
  };
  
  
  

  return (
    <main>
      <div className="min-h-screen bg-black text-white font-sans antialiased p-2 sm:p-4 stats-component">
        <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
          <button 
            className="col-span-2 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-fuchsia-600 to-purple-800 p-4 sm:p-8 relative overflow-hidden group outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all"
            aria-label="Total Contributions: 3,721. Top 1% worldwide"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.8),rgba(0,0,0,0))]" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-white/10 transition-opacity" />
            <div className="relative h-full flex flex-col justify-between">
              <div>
                <h2 className="text-base sm:text-xl font-medium mb-1 sm:mb-2">Total Contributions</h2>
                <div className="text-4xl sm:text-7xl font-bold">{accountStats.total_contributions}</div>
              </div>
            </div>
          </button>

          <button 
            className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 p-4 sm:p-8 relative overflow-hidden group outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all"
            aria-label="Longest Streak: 21 consecutive days"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.8),rgba(0,0,0,0))]" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-white/10 transition-opacity" />
            <div className="relative h-full flex flex-col justify-between">
              <h2 className="text-base sm:text-xl font-medium mb-1 sm:mb-2">Longest Streak</h2>
              <div>
                <div className="text-3xl sm:text-6xl font-bold mb-1">{accountStats.longest_streak}</div>
                <p className="text-xs sm:text-sm opacity-80">consecutive days</p>
              </div>
            </div>
          </button>

          <button 
            className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 p-4 sm:p-8 relative overflow-hidden group outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all md:hidden"
            aria-label="Longest Streak: 21 consecutive days"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.8),rgba(0,0,0,0))]" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-white/10 transition-opacity" />
            <div className="relative h-full flex flex-col justify-center items-center">
              <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Create your recap</h2>
              <div>
                <p className="text-sm sm:text-sm opacity-80">at githubrecap.tech</p>
              </div>
            </div>
          </button>

          <div className="col-span-2 sm:col-span-3 rounded-2xl sm:rounded-3xl bg-[#0D1117]">
            <ContributionGraph username={username} />
          </div>

          <button 
            className="col-span-2 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-cyan-600 to-blue-700 p-4 sm:p-8 relative overflow-hidden group outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all"
            aria-label="Your Biggest Day: October 15 with 42 contributions"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.8),rgba(0,0,0,0))]" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-white/10 transition-opacity" />
            <div className="relative h-full flex flex-col justify-between">
              <h2 className="text-base sm:text-xl font-medium mb-1 sm:mb-2">Your Biggest Day</h2>
              <div>
                <div className="text-3xl sm:text-5xl font-bold mb-2">{accountStats.highest_contributions_date}</div>
                <p className="text-sm sm:text-lg opacity-80">{accountStats.highest_contributions} contributions in one day!</p>
              </div>
            </div>
          </button>

          <button 
            className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-4 sm:p-8 relative overflow-hidden group outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all"
            aria-label="Most Active Time: 11 PM, Night owl coding sessions"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.8),rgba(0,0,0,0))]" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-white/10 transition-opacity" />
            <div className="relative h-full flex flex-col">
              <h2 className="text-base sm:text-xl font-medium mb-1 sm:mb-2">Your busiest month</h2>
              <div>
                <div className="text-3xl sm:text-5xl font-bold mb-2">{accountStats.busiest_month}</div>
                <p className="text-sm sm:text-lg opacity-80">{accountStats.busiest_month_contributions} contributions!</p>
              </div>
            </div>
          </button>

          <button 
            className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-violet-600 to-purple-700 p-4 sm:p-8 relative overflow-hidden group outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all"
            aria-label="Favorite Day: Wednesday, Mid-week productivity peak"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.8),rgba(0,0,0,0))]" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-white/10 transition-opacity" />
            <div className="relative h-full flex flex-col justify-center items-center">
              <h2 className="text-base sm:text-xl font-medium mb-1 sm:mb-2">Busiest Day</h2>
              <div className="text-3xl sm:text-4xl font-bold mb-1">{accountStats.busiest_day}</div>
            </div>
          </button>

          <button 
            className="col-span-2 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-orange-600 to-red-700 p-4 sm:p-8 relative overflow-hidden group outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all"
            aria-label="Top Languages: TypeScript 60% of commits, Python 25% of commits"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.8),rgba(0,0,0,0))]" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-white/10 transition-opacity" />
            <div className="relative h-full flex flex-col">
              <h2 className="text-base sm:text-xl font-medium mb-1 sm:mb-2">Your made</h2>
              <div>
                <div className="text-3xl sm:text-5xl font-bold mb-2">{accountStats.contribution_difference}</div>
                <p className="text-sm sm:text-lg opacity-80">{accountStats.adjective} contributions than last year</p>
                <p className="text-sm sm:text-lg opacity-80">That is {accountStats.contribution_percentage}% {accountStats.adjective}!</p>
              </div>
            </div>
          </button>
        </div>
      </div>
      <button 
        onClick={handleShareScreenshot}
        className="fixed bottom-4 right-4 bg-purple-600 text-white p-2 rounded-full z-50"
      >
      <Share />
    </button>
  </main>
  )
}

export default UserProfileRoute