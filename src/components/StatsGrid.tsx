const stats = [
    { title: "Longest Streak", value: "21 days", color: "from-pink-500 to-purple-500" },
    { title: "Highest Commits", value: "42", color: "from-purple-500 to-indigo-500" },
    { title: "Total Contributions", value: "3,721", color: "from-indigo-500 to-blue-500" },
    { title: "Busiest Day", value: "Wednesday", color: "from-blue-500 to-green-500" },
  ]
  
  export default function StatsGrid() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="border border-gray-800 rounded-lg p-6 transition-all hover:scale-105">
            <h3 className="text-lg font-medium mb-2">{stat.title}</h3>
            <p className={`text-4xl font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    )
  }
  
  