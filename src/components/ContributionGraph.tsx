'use client'

import { useState } from 'react'
import axios from 'axios';

const DAYS = ['Mon', 'Wed', 'Fri']
const MONTHS = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec-End']

const generateFakeData = () => {
  const data = []
  const startDate = new Date('2023-12-01')
  
  // Generate 53 weeks of data
  for (let week = 0; week < 53; week++) {
    const weekData = []
    // Generate 7 days for each week
    for (let day = 0; day < 7; day++) {
      const date = new Date(startDate)
      date.setDate(date.getDate() + (week * 7) + day)
      weekData.push({
        date,
        contributionCount: Math.floor(Math.random() * 10)
      })
    }
    data.push(weekData)
  }
  console.log(data)
  return data
}

export default function ContributionGraph() {
  interface DayData {
    date: Date;
    contributionCount: number;
  }
  
  const [hoveredDay, setHoveredDay] = useState<DayData | null>(null)
  const contributionData = generateFakeData()

  const getColor = (contributionCount: number) => {
    if (contributionCount === 0) return 'bg-gray-800'
    if (contributionCount < 3) return 'bg-emerald-900/50'
    if (contributionCount < 6) return 'bg-emerald-600/50'
    if (contributionCount < 9) return 'bg-emerald-400/50'
    return 'bg-emerald-300'
  }

  return (
    <div className="rounded-3xl bg-gradient-to-br from-emerald-900/20 to-teal-900/20 p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.8),rgba(0,0,0,0))]" />
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-6">Contribution Graph</h2>
        
        <div className="flex">
          {/* Month labels */}
          <div className="w-8" /> {/* Spacer for day labels */}
          <div className="flex flex-1 justify-between text-xs text-gray-400 mb-2">
            {MONTHS.map(month => (
              <div key={month}>{month}</div>
            ))}
          </div>
        </div>

        <div className="flex">
          {/* Day labels */}
          <div className="flex flex-col justify-between text-xs text-gray-400 mr-2">
            {DAYS.map(day => (
              <div key={day} className="h-3 mb-[10px]">{day}</div>
            ))}
          </div>

          {/* Contribution grid */}
          <div className="flex-1">
            <div className="grid grid-flow-col gap-[2px]">
              {contributionData.map((week, weekIndex) => (
                <div key={weekIndex} className="grid grid-rows-7 gap-[2px]">
                  {week.map((day, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`w-3 h-3 ${getColor(day.contributionCount)} rounded-sm transition-all duration-200 hover:scale-150 hover:z-10`}
                      onMouseEnter={() => setHoveredDay(day)}
                      onMouseLeave={() => setHoveredDay(null)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-end mt-4 text-xs text-gray-400 gap-2">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-gray-800 rounded-sm" />
            <div className="w-3 h-3 bg-emerald-900/50 rounded-sm" />
            <div className="w-3 h-3 bg-emerald-600/50 rounded-sm" />
            <div className="w-3 h-3 bg-emerald-400/50 rounded-sm" />
            <div className="w-3 h-3 bg-emerald-300 rounded-sm" />
          </div>
          <span>More</span>
        </div>

        {/* Tooltip */}
        {hoveredDay && (
          <div className="absolute bottom-4 left-4 bg-black/90 px-3 py-2 rounded-lg text-sm">
            <div className="font-medium">{hoveredDay.date.toDateString()}</div>
            <div className="text-gray-400">{hoveredDay.contributionCount} contributions</div>
          </div>
        )}
      </div>
    </div>
  )
}