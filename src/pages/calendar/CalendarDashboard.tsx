import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { useState } from "react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const times = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "01:00"
];

const events = [
  { day: 5, label: "Shipping via MTS", color: "bg-blue-100 text-blue-800" },
  { day: 5, label: "Therapist Meeting", color: "bg-yellow-100 text-yellow-800" },
  { day: 5, label: "Shipping Charges MTS", color: "bg-blue-100 text-blue-800" },
  { day: 10, label: "Meeting with HR", color: "bg-purple-100 text-purple-800" },
  { day: 10, label: "Therapist Meeting", color: "bg-yellow-100 text-yellow-800" },
  { day: 17, label: "Meeting with HR", color: "bg-purple-100 text-purple-800" },
  { day: 17, label: "Shipping Charges MTS", color: "bg-blue-100 text-blue-800" },
  { day: 20, label: "Shipping Charges MTS", color: "bg-blue-100 text-blue-800" },
  { day: 27, label: "Therapist Meeting", color: "bg-yellow-100 text-yellow-800" },
  { day: 27, label: "Meeting with HR", color: "bg-purple-100 text-purple-800" },
  { day: 29, label: "Meeting with HR", color: "bg-purple-100 text-purple-800" },
  { day: 29, label: "Therapist Meeting", color: "bg-yellow-100 text-yellow-800" },
  { day: 29, label: "Shipping Charges MTS", color: "bg-blue-100 text-blue-800" },
];

function getEventsForDay(day: number) {
  return events.filter((e) => e.day === day);
}

export default function CalendarDashboard() {
  const [selectedStart, setSelectedStart] = useState("");
  const [selectedEnd, setSelectedEnd] = useState("");
  const daysInMonth = 31;
  const firstDayOfWeek = 0; // Sunday

  // Build calendar grid
  const calendarCells = [];
  let day = 1;
  for (let i = 0; i < 6; i++) {
    // 6 weeks
    const week = [];
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDayOfWeek) || day > daysInMonth) {
        week.push(<div key={`empty-${i}-${j}`} className="h-24" />);
      } else {
        week.push(
          <Card key={day} className="h-24 p-2 flex flex-col gap-1">
            <div className="text-xs font-semibold text-gray-500 mb-1">{day}</div>
            <div className="flex flex-col gap-1">
              {getEventsForDay(day).map((event, idx) => (
                <span
                  key={idx}
                  className={`rounded px-1 py-0.5 text-xs font-medium ${event.color}`}
                >
                  {event.label}
                </span>
              ))}
            </div>
          </Card>
        );
        day++;
      }
    }
    calendarCells.push(
      <div key={i} className="grid grid-cols-7 gap-2">
        {week}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-muted">
      {/* Header */}
      
      {/* Main Content */}
      <div className="flex-1 flex flex-row gap-8 px-8 py-6">
        {/* Calendar */}
        <div className="flex-1 bg-white rounded-lg p-6 shadow-sm flex flex-col">
          <div className="grid grid-cols-7 mb-2">
            {daysOfWeek.map((d) => (
              <div key={d} className="text-center text-sm font-medium text-gray-500 pb-2">{d}</div>
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-2">
            {calendarCells}
          </div>
        </div>
        {/* Select Time Panel */}
        <Card className="w-80 p-6 h-fit self-start">
          <div className="font-semibold text-lg mb-4">Select Time</div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Start with</label>
              <Select value={selectedStart} onValueChange={setSelectedStart}>
                <SelectTrigger>
                  <SelectValue placeholder="00.00 AM" />
                </SelectTrigger>
                <SelectContent>
                  {times.map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">End with</label>
              <Select value={selectedEnd} onValueChange={setSelectedEnd}>
                <SelectTrigger>
                  <SelectValue placeholder="00.00 AM" />
                </SelectTrigger>
                <SelectContent>
                  {times.map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button className="mt-2">Confirm Booking</Button>
          </div>
        </Card>
      </div>
      {/* Footer */}
      
    </div>
  );
} 