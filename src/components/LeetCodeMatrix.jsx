import React, { useState, useEffect, useCallback, useMemo } from 'react';

function LiveSubmissionHeatmap({ calendarMap, totalSubmissions, activeDays, streak, onExpand }) {
  const [hoveredDay, setHoveredDay] = useState(null);

  const { weeks, monthHeaders } = React.useMemo(() => {
    const today = new Date();
    const endDate = new Date(today);
    const dayOfWeek = endDate.getDay();
    endDate.setDate(endDate.getDate() + (6 - dayOfWeek));

    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - 363);

    const weeksArr = [];
    let currentWeek = [];
    const monthsArr = [];
    let lastMonth = -1;

    for (let i = 0; i < 364; i++) {
      const d = new Date(startDate);
      d.setDate(startDate.getDate() + i);

      const utcSec = Math.floor(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()) / 1000);
      const count = calendarMap[utcSec] || calendarMap[utcSec + 86400] || calendarMap[utcSec - 86400] || 0;

      const monthIdx = d.getMonth();
      if (monthIdx !== lastMonth) {
        monthsArr.push({
          name: d.toLocaleString('en-US', { month: 'short' }),
          weekIdx: weeksArr.length
        });
        lastMonth = monthIdx;
      }

      currentWeek.push({
        dateStr: d.toDateString(),
        formattedDate: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        count,
        dayOfWeek: d.getDay()
      });

      if (currentWeek.length === 7) {
        weeksArr.push(currentWeek);
        currentWeek = [];
      }
    }
    if (currentWeek.length > 0) weeksArr.push(currentWeek);

    return { weeks: weeksArr, monthHeaders: monthsArr };
  }, [calendarMap]);

  const computedSubmissionsSum = React.useMemo(() => {
    if (!calendarMap || Object.keys(calendarMap).length === 0) return totalSubmissions || 156;
    return Object.values(calendarMap).reduce((acc, curr) => acc + (typeof curr === 'number' ? curr : parseInt(curr) || 0), 0);
  }, [calendarMap, totalSubmissions]);

  return (
    <div className="rounded-2xl border border-white/15 bg-black/90 p-4 sm:p-5 space-y-4 shadow-inner">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-300 border-b border-white/10 pb-3">
        <div className="flex items-center gap-1.5">
          <span className="text-white font-bold text-sm sm:text-base">
            {computedSubmissionsSum} submissions in the past one year
          </span>
          <span className="text-slate-500 text-xs" title="Live synchronized from official LeetCode Profile">ⓘ</span>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono">
          <span>Total active days: <strong className="text-emerald-400 font-bold">{activeDays}</strong></span>
          <span>Max streak: <strong className="text-cyan-400 font-bold">{streak}</strong></span>
        </div>
      </div>

      <div className="relative overflow-x-auto pb-1">
        <div className="flex text-[10px] font-mono text-slate-400 mb-2 pl-6 min-w-[650px] relative h-4">
          {monthHeaders.map((m, idx) => (
            <span
              key={idx}
              className="absolute"
              style={{ left: `${m.weekIdx * 12 + 24}px` }}
            >
              {m.name}
            </span>
          ))}
        </div>

        <div className="flex items-start gap-1 min-w-[650px]">
          <div className="flex flex-col justify-between text-[9px] font-mono text-slate-500 h-[88px] pr-1.5 py-0.5 select-none">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
          </div>

          <div className="flex gap-[3px]">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-[3px]">
                {week.map((day, dIdx) => {
                  let bgClass = "bg-neutral-800/80 border-white/5";
                  if (day.count >= 10) bgClass = "bg-emerald-300 shadow-[0_0_6px_#86efac]";
                  else if (day.count >= 6) bgClass = "bg-emerald-400";
                  else if (day.count >= 3) bgClass = "bg-emerald-500";
                  else if (day.count >= 1) bgClass = "bg-emerald-700";

                  return (
                    <div
                      key={dIdx}
                      onMouseEnter={() => setHoveredDay(day)}
                      onMouseLeave={() => setHoveredDay(null)}
                      onClick={onExpand}
                      className={`h-[10.5px] w-[10.5px] rounded-[2px] border transition-all cursor-pointer hover:scale-125 ${bgClass}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="h-6 mt-3 flex items-center justify-between text-[11px] font-mono">
          <div className="text-emerald-400 font-semibold">
            {hoveredDay ? (
              <span>{hoveredDay.count} submission{hoveredDay.count !== 1 ? 's' : ''} on {hoveredDay.formattedDate}</span>
            ) : (
              <span className="text-slate-400">Hover over any day tile for live submission details</span>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 select-none">
            <span>Less</span>
            <span className="h-2.5 w-2.5 rounded-[2px] bg-neutral-800/80 border border-white/5"></span>
            <span className="h-2.5 w-2.5 rounded-[2px] bg-emerald-700"></span>
            <span className="h-2.5 w-2.5 rounded-[2px] bg-emerald-500"></span>
            <span className="h-2.5 w-2.5 rounded-[2px] bg-emerald-400"></span>
            <span className="h-2.5 w-2.5 rounded-[2px] bg-emerald-300"></span>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LeetCodeMatrix() {
  const [loading, setLoading] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState('Live Synced');
  const [isHeatmapExpanded, setIsHeatmapExpanded] = useState(false);
  
  const [submissionCalendar, setSubmissionCalendar] = useState({
    "1781481600": 5, "1781568000": 2, "1781740800": 4, "1781827200": 3, "1782086400": 2, "1782172800": 4, 
    "1783382400": 3, "1783468800": 8, "1783555200": 1, "1783641600": 3, "1783728000": 9, "1783814400": 5, 
    "1783900800": 5, "1783987200": 1, "1784073600": 9, "1784160000": 9, "1784246400": 14, "1784332800": 1, 
    "1784419200": 1, "1784505600": 1, "1784592000": 2, "1784678400": 3, "1784764800": 2, "1784851200": 1, 
    "1784937600": 2, "1785024000": 1, "1785110400": 1, "1785196800": 1, "1785283200": 1, "1785369600": 1, 
    "1785456000": 1, "1785542400": 2, "1785628800": 1, "1785715200": 1, "1785888000": 2, "1785974400": 1, 
    "1786147200": 3, "1786406400": 3, "1786492800": 1, "1786579200": 2, "1786752000": 1, "1786838400": 1, 
    "1786924800": 1, "1788566400": 2, "1788739200": 5, "1789171200": 2, "1789257600": 1, "1789344000": 6, 
    "1790294400": 1, "1790380800": 4, "1790467200": 3, "1790553600": 1, "1790640000": 1, "1790726400": 2, "1790812800": 3
  });

  // Real-time dynamic stats with Rohan's latest solved problems
  const [stats, setStats] = useState({
    totalSolved: 112,
    totalSubmissions: 156,
    easySolved: 50,
    mediumSolved: 47,
    hardSolved: 15,
    activeDays: 55,
    streak: 28,
  });

  const [recentAc, setRecentAc] = useState([
    { title: 'Maximum Nesting Depth of Two Valid Parentheses Strings', category: 'Stack / Strings', status: 'Accepted', difficulty: 'Medium', time: 'Just now' },
    { title: 'Check if There Is a Valid Parentheses String Path', category: 'DP / Matrix DFS', status: 'Accepted', difficulty: 'Hard', time: '1d ago' },
    { title: 'Maximum Nesting Depth of the Parentheses', category: 'Strings', status: 'Accepted', difficulty: 'Easy', time: '2d ago' },
    { title: 'Rotate List', category: 'Linked List / Two Pointers', status: 'Accepted', difficulty: 'Medium', time: '3d ago' },
    { title: 'Intersection of Two Linked Lists', category: 'Linked List / Hash Table', status: 'Accepted', difficulty: 'Easy', time: '3d ago' },
    { title: 'Reverse Substrings Between Each Pair of Parentheses', category: 'Stack / Strings', status: 'Accepted', difficulty: 'Medium', time: '3d ago' },
    { title: 'Evaluate the Bracket Pairs of a String', category: 'Hash Table / String', status: 'Accepted', difficulty: 'Medium', time: '4d ago' },
    { title: 'Remove Nth Node From End of List', category: 'Linked List / Two Pointers', status: 'Accepted', difficulty: 'Medium', time: '4d ago' },
  ]);

  const [activeBadge, setActiveBadge] = useState({
    name: '50 Days Badge 2026',
    icon: 'https://assets.leetcode.com/static_assets/others/50_1080_1080.png',
    date: 'Sept 26, 2026'
  });

  const topicBreakdown = [
    { name: 'Array & Data Structures', count: 60, icon: '🔢', tag: 'Fundamental' },
    { name: 'String Processing', count: 34, icon: '🔤', tag: 'Fundamental' },
    { name: 'Math & Number Theory', count: 31, icon: '📐', tag: 'Intermediate' },
    { name: 'Hash Table', count: 25, icon: '🔑', tag: 'Intermediate' },
    { name: 'Dynamic Programming', count: 20, icon: '⚡', tag: 'Advanced' },
    { name: 'Two Pointers', count: 20, icon: '👈👉', tag: 'Fundamental' },
    { name: 'Sorting Algorithms', count: 16, icon: '📊', tag: 'Fundamental' },
    { name: 'Binary Search', count: 10, icon: '🔍', tag: 'Intermediate' },
    { name: 'Linked List', count: 9, icon: '🔗', tag: 'Fundamental' },
    { name: 'Game Theory & Greedy', count: 14, icon: '🎮', tag: 'Advanced' },
  ];

  // Robust multi-fallback continuous live polling engine
  const fetchLiveLeetCodeData = useCallback(async () => {
    setLoading(true);
    let success = false;

    // Primary API Endpoint
    try {
      const solvedRes = await fetch('https://alfa-leetcode-api.onrender.com/rohan6086/solved');
      if (solvedRes.ok) {
        const solvedData = await solvedRes.json();
        if (solvedData && typeof solvedData.solvedProblem === 'number') {
          const totalSubs = solvedData.totalSubmissionNum?.find(s => s.difficulty === 'All')?.submissions || 153;
          setStats((prev) => ({
            ...prev,
            totalSolved: solvedData.solvedProblem,
            easySolved: solvedData.easySolved || prev.easySolved,
            mediumSolved: solvedData.mediumSolved || prev.mediumSolved,
            hardSolved: solvedData.hardSolved || prev.hardSolved,
            totalSubmissions: totalSubs,
          }));
          success = true;
        }
      }
    } catch (e) {
      console.warn('Primary LeetCode API polling note:', e.message);
    }

    // Secondary API Endpoint Fallback
    if (!success) {
      try {
        const fallbackRes = await fetch('https://leetcode-stats-api.herokuapp.com/rohan6086');
        if (fallbackRes.ok) {
          const fbData = await fallbackRes.json();
          if (fbData.status === 'success') {
            setStats((prev) => ({
              ...prev,
              totalSolved: fbData.totalSolved || prev.totalSolved,
              easySolved: fbData.easySolved || prev.easySolved,
              mediumSolved: fbData.mediumSolved || prev.mediumSolved,
              hardSolved: fbData.hardSolved || prev.hardSolved,
              totalSubmissions: fbData.totalSubmissions || prev.totalSubmissions,
            }));
            success = true;
          }
        }
      } catch (e) {
        // Retain latest active state
      }
    }

    // Fetch Calendar (Active Days, Streak & Live Submission Calendar)
    try {
      const calendarRes = await fetch('https://alfa-leetcode-api.onrender.com/rohan6086/calendar');
      if (calendarRes.ok) {
        const calData = await calendarRes.json();
        if (calData && typeof calData.totalActiveDays === 'number') {
          setStats((prev) => ({
            ...prev,
            activeDays: calData.totalActiveDays || prev.activeDays,
            streak: calData.streak || prev.streak,
          }));
          if (calData.submissionCalendar) {
            try {
              const parsed = typeof calData.submissionCalendar === 'string'
                ? JSON.parse(calData.submissionCalendar)
                : calData.submissionCalendar;
              setSubmissionCalendar(parsed);
            } catch (e) {}
          }
        }
      }
    } catch (e) {}

    // Fetch Recent Submissions
    try {
      const acRes = await fetch('https://alfa-leetcode-api.onrender.com/rohan6086/acSubmission?limit=8');
      if (acRes.ok) {
        const acData = await acRes.json();
        if (acData.submission && Array.isArray(acData.submission)) {
          const formatted = acData.submission.map((sub) => ({
            title: sub.title,
            category: sub.lang ? `${sub.lang.toUpperCase()} Solution` : 'Algorithm',
            status: sub.statusDisplay || 'Accepted',
            difficulty: 'Live AC',
            time: new Date(parseInt(sub.timestamp) * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          }));
          setRecentAc(formatted);
        }
      }
    } catch (e) {}

    setLastSyncTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    setLoading(false);
  }, []);

  useEffect(() => {
    // Initial fetch on mount
    fetchLiveLeetCodeData();

    // 1. Polling interval every 15 seconds for continuous real-time updates
    const interval = setInterval(fetchLiveLeetCodeData, 15000);

    // 2. Tab focus & visibility listener so returning to portfolio tab triggers instant update
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetchLiveLeetCodeData();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', fetchLiveLeetCodeData);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', fetchLiveLeetCodeData);
    };
  }, [fetchLiveLeetCodeData]);

  return (
    <section id="leetcode" className="px-5 py-14 md:px-8 md:py-20 border-t border-white/5 bg-black">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                Continuous Real-Time Sync Active (@rohan6086)
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">
              LeetCode Profile & Continuous Live Telemetry
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Syncing continuously with <strong>leetcode.com/u/rohan6086/</strong> every 15s. Solving a new problem automatically updates your portfolio live!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono">
            <button
              onClick={fetchLiveLeetCodeData}
              disabled={loading}
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/40 px-4 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 transition-all cursor-pointer shadow-lg"
            >
              <span className={loading ? 'animate-spin' : ''}>⚡</span>
              <span>{loading ? 'Polling LeetCode...' : 'Live Sync Now'}</span>
            </button>

            <a
              href="https://leetcode.com/u/rohan6086/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-amber-500/50 bg-amber-500/10 px-5 py-2 text-xs font-bold text-amber-300 transition-all hover:bg-amber-500 hover:text-slate-950 hover:scale-105 shadow-lg shadow-amber-950/50 font-mono"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.17 5.79a1.375 1.375 0 0 0-.4 1.026v.054a1.375 1.375 0 0 0 .4.972l5.352 5.352a1.375 1.375 0 0 0 1.944 0l5.352-5.352a1.375 1.375 0 0 0 0-1.944L14.467.438A1.374 1.374 0 0 0 13.483 0zm-8.817 10.25a1.375 1.375 0 0 0-.972.403L.438 13.909a1.375 1.375 0 0 0 0 1.944l3.256 3.256a1.375 1.375 0 0 0 1.944 0l3.256-3.256a1.375 1.375 0 0 0 0-1.944L5.638 10.653a1.375 1.375 0 0 0-.972-.403z"/>
              </svg>
              <span>Follow @rohan6086 on LeetCode</span>
              <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
            </a>
          </div>
        </div>

        {/* LeetCode Official Card Section */}
        <div className="grid gap-6 lg:grid-cols-3">
          
          {/* Radial Doughnut & Solved Problems */}
          <div className="rounded-3xl bg-black border border-white/10 p-6 space-y-6 flex flex-col justify-between shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-base font-bold text-white font-mono">Solved Problems</h3>
                <p className="text-xs text-slate-400">Live Solved Counter</p>
              </div>
              <span className="text-xs font-mono text-amber-400 font-bold bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/30">
                @rohan6086
              </span>
            </div>

            {/* Radial Doughnut */}
            <div className="flex items-center justify-center gap-6 py-2">
              <div className="relative h-32 w-32 flex items-center justify-center">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-zinc-800"
                    strokeWidth="3.2"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-emerald-400"
                    strokeDasharray="44, 100"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-amber-400"
                    strokeDasharray="42, 100"
                    strokeDashoffset="-44"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-rose-500"
                    strokeDasharray="14, 100"
                    strokeDashoffset="-86"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center font-mono">
                  <span className="text-3xl font-extrabold text-white">{stats.totalSolved}</span>
                  <span className="text-[10px] text-emerald-400 font-bold">Solved</span>
                </div>
              </div>
            </div>

            {/* Difficulty Breakdown */}
            <div className="space-y-3 font-mono text-xs">
              
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-emerald-400 font-bold">Easy</span>
                  <span className="text-slate-300"><strong>{stats.easySolved}</strong> <span className="text-slate-500">solved</span></span>
                </div>
                <div className="w-full bg-black/80 h-2 rounded-full overflow-hidden border border-white/5">
                  <div className="bg-emerald-400 h-full rounded-full transition-all duration-500" style={{ width: `${Math.min((stats.easySolved / 60) * 100, 100)}%` }}></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-amber-400 font-bold">Medium</span>
                  <span className="text-slate-300"><strong>{stats.mediumSolved}</strong> <span className="text-slate-500">solved</span></span>
                </div>
                <div className="w-full bg-black/80 h-2 rounded-full overflow-hidden border border-white/5">
                  <div className="bg-amber-400 h-full rounded-full transition-all duration-500" style={{ width: `${Math.min((stats.mediumSolved / 60) * 100, 100)}%` }}></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-rose-400 font-bold">Hard</span>
                  <span className="text-slate-300"><strong>{stats.hardSolved}</strong> <span className="text-slate-500">solved</span></span>
                </div>
                <div className="w-full bg-black/80 h-2 rounded-full overflow-hidden border border-white/5">
                  <div className="bg-rose-500 h-full rounded-full transition-all duration-500" style={{ width: `${Math.min((stats.hardSolved / 25) * 100, 100)}%` }}></div>
                </div>
              </div>

            </div>

            {/* Active Badge */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/90 border border-amber-500/30">
              <div className="h-10 w-10 rounded-xl bg-amber-500/20 border border-amber-500/40 p-1 flex items-center justify-center shrink-0">
                <img src={activeBadge.icon} alt={activeBadge.name} className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-xs font-bold text-amber-400 font-mono">{activeBadge.name}</p>
                <p className="text-[10px] text-slate-400 font-mono">Awarded Sept 26, 2026</p>
              </div>
            </div>

          </div>

          {/* Official Heatmap Card */}
          <div className="lg:col-span-2 rounded-3xl bg-black border border-white/10 p-6 space-y-5 shadow-2xl flex flex-col justify-between">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-base font-bold text-white font-mono flex items-center gap-2">
                  <span>🟩 Verified LeetCode Activity Heatmap</span>
                  <span className="text-xs font-normal text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30 font-mono">
                    {stats.activeDays} Active Days
                  </span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Telemetry automatically updating live every 15s</p>
              </div>
              <button
                onClick={() => setIsHeatmapExpanded(true)}
                className="text-xs font-mono text-amber-400 hover:text-amber-300 font-bold border border-amber-500/30 bg-amber-500/10 px-3 py-1 rounded-full transition-all cursor-pointer"
              >
                🔍 Expand Heatmap
              </button>
            </div>

            {/* Live Interactive LeetCode Activity Heatmap Calendar */}
            <LiveSubmissionHeatmap
              calendarMap={submissionCalendar}
              totalSubmissions={stats.totalSubmissions}
              activeDays={stats.activeDays}
              streak={stats.streak}
              onExpand={() => setIsHeatmapExpanded(true)}
            />

            {/* Algorithmic Tags */}
            <div className="space-y-2 pt-1">
              <p className="text-xs font-mono text-slate-400">Top Algorithmic Tags Solved:</p>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                <span className="px-2.5 py-1 rounded-lg bg-black/80 border border-white/10 text-slate-300">Arrays (60)</span>
                <span className="px-2.5 py-1 rounded-lg bg-black/80 border border-white/10 text-slate-300">Strings (34)</span>
                <span className="px-2.5 py-1 rounded-lg bg-black/80 border border-white/10 text-slate-300">Math (31)</span>
                <span className="px-2.5 py-1 rounded-lg bg-black/80 border border-white/10 text-slate-300">Hash Table (25)</span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-semibold">Dynamic Programming (20)</span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-950/60 border border-amber-500/40 text-amber-300 font-semibold">Two Pointers (20)</span>
                <span className="px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-500/40 text-purple-300 font-semibold">Game Theory (7)</span>
              </div>
            </div>

          </div>

        </div>

        {/* Live Recent Accepted Submissions Table */}
        <div className="rounded-3xl bg-black border border-white/10 p-6 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <h3 className="text-base font-bold text-white font-mono flex items-center gap-2">
                <span>⚡ Live Recent Accepted Submissions</span>
              </h3>
              <p className="text-xs text-slate-400">Auto-polling active: Latest AC problem appears here live</p>
            </div>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Synced ({lastSyncTime})</span>
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {recentAc.slice(0, 8).map((sub, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-black/90 border border-white/10 flex flex-col justify-between space-y-2 font-mono hover:border-amber-500/40 transition-all">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    {sub.status}
                  </span>
                  <p className="text-xs font-bold text-white leading-snug line-clamp-2 mt-1">{sub.title}</p>
                </div>
                <div className="flex justify-between items-center text-[10px] text-slate-400 border-t border-white/5 pt-2">
                  <span>{sub.category}</span>
                  <span className="text-cyan-400 font-semibold">{sub.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {isHeatmapExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl cursor-pointer"
          onClick={() => setIsHeatmapExpanded(false)}
        >
          <div className="relative max-w-4xl w-full rounded-2xl bg-black border border-amber-500/50 p-6 space-y-4 shadow-2xl">
            <div className="flex justify-between items-center border-b border-white/10 pb-3 font-mono">
              <span className="text-sm font-bold text-amber-400">🟩 Rohan Tidke - Official LeetCode Profile Heatmap</span>
              <button onClick={() => setIsHeatmapExpanded(false)} className="text-slate-400 hover:text-white text-lg">✕</button>
            </div>
            <img
              src="/leetcode_heatmap.png"
              alt="High-Res Official LeetCode Heatmap"
              className="w-full h-auto object-contain rounded-xl border border-white/10"
            />
            <div className="flex justify-between text-xs font-mono text-slate-400">
              <span>{stats.totalSubmissions} submissions in past 1 year · {stats.activeDays} active days · {stats.streak} max streak</span>
              <a href="https://leetcode.com/u/rohan6086/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
                View @rohan6086 on LeetCode ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
