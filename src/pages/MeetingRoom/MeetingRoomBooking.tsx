import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const days = [
  { label: "Sun", date: 1 },
  { label: "Mon", date: 2 },
  { label: "Tue", date: 3 },
  { label: "Wed", date: 4 },
  { label: "Thu", date: 5 },
  { label: "Fri", date: 6 },
  { label: "Sat", date: 7 },
];

const rooms = [
  { img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80", label: "ML16" },
  { img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", label: "ML16" },
  { img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", label: "ML16" },
  { img: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80", label: "ML16" },
  { img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80", label: "ML16" },
  { img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", label: "ML16" },
  { img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80", label: "ML16" },
];

const bookedSlots = [
  "9:00 AM - 10:00 AM",
  "9:00 AM - 10:00 AM",
  "9:00 AM - 10:00 AM",
  "9:00 AM - 10:00 AM",
  "9:00 AM - 10:00 AM",
  "9:00 AM - 10:00 AM",
  "9:00 AM - 10:00 AM",
];

const times = [
  "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM"
];

const dependencies = ["MD", "Chairman"];

export default function MeetingRoomBooking() {
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [selectedStart, setSelectedStart] = useState("");
  const [selectedEnd, setSelectedEnd] = useState("");
  const [meetingTitle, setMeetingTitle] = useState("");
  const [meetingAgenda, setMeetingAgenda] = useState("");
  const [selectedDeps, setSelectedDeps] = useState<string[]>([]);

  function toggleDep(dep: string) {
    setSelectedDeps((prev) =>
      prev.includes(dep) ? prev.filter((d) => d !== dep) : [...prev, dep]
    );
  }

  return (
    <div className="min-h-screen bg-muted flex flex-col p-6 gap-6">
      {/* Header */}
      <div className="text-2xl font-bold mb-2">Start Booking a Meeting Room</div>
      {/* Date & Week Selector */}
      <div className="flex items-center gap-4 mb-2">
        <div className="text-xl font-semibold">December 2024</div>
        <Badge variant="outline" className="bg-purple-100 text-purple-700 ml-2">This Week</Badge>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <Button variant="outline" size="icon">&#60;</Button>
        {days.map((d) => (
          <Button
            key={d.date}
            variant={selectedDay === d.date ? "default" : "outline"}
            className={`flex flex-col items-center px-3 ${selectedDay === d.date ? "bg-blue-100 text-blue-700" : ""}`}
            onClick={() => setSelectedDay(d.date)}
          >
            <span className="text-xs font-medium">{d.label}</span>
            <span className="text-lg font-bold">{d.date.toString().padStart(2, "0")}</span>
          </Button>
        ))}
        <Button variant="outline" size="icon">&#62;</Button>
        <Button variant="outline" size="icon" className="ml-2">📅</Button>
      </div>
      {/* Room Gallery */}
      <div className="flex gap-4 overflow-x-auto pb-2 mb-6">
        {rooms.map((room, idx) => (
          <Card
            key={idx}
            className={`min-w-[120px] max-w-[120px] p-2 flex flex-col items-center border-2 ${selectedRoom === idx ? "border-blue-500" : "border-transparent"}`}
            onClick={() => setSelectedRoom(idx)}
            style={{ cursor: "pointer" }}
          >
            <img src={room.img} alt={room.label} className="w-20 h-16 object-cover rounded mb-2" />
            <div className="text-xs font-medium">{room.label}</div>
          </Card>
        ))}
      </div>
      {/* Booked Room Section */}
      <Card className="p-6 mb-6">
        <div className="font-semibold mb-4">Booked Room</div>
        <div className="flex flex-wrap gap-2 mb-4">
          {bookedSlots.map((slot, idx) => (
            <Button key={idx} variant="outline" disabled className="opacity-60 cursor-not-allowed">
              {slot}
            </Button>
          ))}
        </div>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">Book Meeting Room +</Button>
      </Card>
      {/* Booking Form */}
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <Label className="mb-1">Select Time</Label>
            <div className="flex gap-4">
              <div className="flex flex-col gap-1 w-1/2">
                <Label className="text-xs">Start with</Label>
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
              <div className="flex flex-col gap-1 w-1/2">
                <Label className="text-xs">End with</Label>
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
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Label className="mb-1">Dependency</Label>
            <div className="flex gap-2">
              {dependencies.map((dep) => (
                <Badge
                  key={dep}
                  className={`cursor-pointer px-4 py-2 ${selectedDeps.includes(dep) ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"}`}
                  onClick={() => toggleDep(dep)}
                >
                  {dep}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="flex flex-col gap-2">
            <Label>Meeting Title</Label>
            <Input value={meetingTitle} onChange={e => setMeetingTitle(e.target.value)} placeholder="Enter meeting title" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Meeting Agenda</Label>
            <Input value={meetingAgenda} onChange={e => setMeetingAgenda(e.target.value)} placeholder="Enter meeting agenda" />
          </div>
        </div>
        <Button className="mt-6 bg-gray-200 text-gray-500 cursor-not-allowed" disabled>Submit</Button>
      </Card>
    </div>
  );
} 