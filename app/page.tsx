"use client";

import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import Tabs, { TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";

const statusOptions = ["Not started", "Waiting", "In progress", "Complete"];

export default function SantaCallsDashboard() {
  const [statuses, setStatuses] = useState({
    shell: "Complete",
    parts: "Complete",
    component: "Waiting",
    builder: "Complete",
    shipped: "Not started",
    assembly: "In progress",
    testCall: "Not started",
    app: "Complete",
    firebase: "Not started",
    bland: "Not started",
  });

  const [notes, setNotes] = useState("");

  const updateStatus = (key: string, value: string) => {
    setStatuses({ ...statuses, [key]: value });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🎅 Santa Calls MVP Dashboard</h1>

      {Tabs({
        defaultValue: "project",
        className: "w-full",
        children: (
          <>
            <TabsList className="mb-4 flex flex-wrap gap-2">
              <TabsTrigger value="project">🧭 Project Status</TabsTrigger>
              <TabsTrigger value="hardware">📞 Hardware</TabsTrigger>
              <TabsTrigger value="app">📱 App</TabsTrigger>
              <TabsTrigger value="cloud">☁️ Cloud Backend</TabsTrigger>
              <TabsTrigger value="ai">🧠 AI Integration</TabsTrigger>
              <TabsTrigger value="intel">💬 Talking Points</TabsTrigger>
              <TabsTrigger value="wishlist">🎁 Wishlist (Future)</TabsTrigger>
              <TabsTrigger value="logistics">🚚 Assembly & Logistics</TabsTrigger>
            </TabsList>

            <TabsContent value="project">
              <Card>
                <CardContent className="p-4 space-y-4">
                  <h2 className="text-xl font-semibold">📊 Current Build Progress</h2>
                  <ul className="space-y-3">
                    {Object.entries(statuses).map(([key, value]) => (
                      <li key={key} className="flex items-center gap-4">
                        <span className="w-72 capitalize">
                          {key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
                        </span>
                        <select
                          value={value}
                          onChange={(e) => updateStatus(key, e.target.value)}
                          className="px-2 py-1 border rounded-md text-sm"
                        >
                          {statusOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <h3 className="font-semibold text-lg mb-1">🛠️ Builder Notes</h3>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Enter status notes, builder updates, or reminders here..."
                      className="w-full h-28 p-2 border rounded-md text-sm resize-none"
                      maxLength={500}
                    />
                    <div className="text-right text-xs text-gray-500">
                      {notes.length}/500 characters
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="hardware">
              <Card>
                <CardContent className="p-4 space-y-2">
                  <p>• ESP32 Feather V2 with Wi-Fi</p>
                  <p>• MAX4466 mic + mini speaker</p>
                  <p>• MAX98357 I2S amplifier</p>
                  <p>• Reed switch for pickup detection</p>
                  <p>• LiPo battery + charger board</p>
                  <p>• Vintage Conair SW205 clear phone shell</p>
                  <p>• Fully assembled by Builder #2</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="app">
              <Card>
                <CardContent className="p-4 space-y-2">
                  <p>• Built using Glide or Adalo (no-code)</p>
                  <p>• Screens: Home, Recordings, Transcript Viewer, Intel Input, Settings</p>
                  <p>• Parent-facing dashboard, not directly connected to phone</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cloud">
              <Card>
                <CardContent className="p-4 space-y-2">
                  <p>• Firebase Firestore for call data, transcripts, talking points</p>
                  <p>• Firebase Storage for audio files</p>
                  <p>• Firebase Auth (optional login)</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ai">
              <Card>
                <CardContent className="p-4 space-y-2">
                  <p>• Bland.ai handles voice session, recording, and transcription</p>
                  <p>• ESP32 streams audio in/out over Wi-Fi</p>
                  <p>• Webhook or scheduled sync to Firebase</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="intel">
              <Card>
                <CardContent className="p-4 space-y-2">
                  <p>• Parents input talking points in app (text or voice)</p>
                  <p>• Stored in Firebase under child profile</p>
                  <p>• Injected into Bland.ai prompt before call starts</p>
                  <p>• Example: “Timmy just got a new puppy. Ask him about it.”</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="wishlist">
              <Card>
                <CardContent className="p-4 space-y-2">
                  <p>• Future feature: pull wish items from transcript keywords</p>
                  <p>• Display to parent with Amazon/Walmart links</p>
                  <p>• Opportunity for affiliate revenue</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="logistics">
              <Card>
                <CardContent className="p-4 space-y-2">
                  <p>• All Adafruit parts received</p>
                  <p>• Final part arriving soon</p>
                  <p>• Builder #2 selected and ready</p>
                  <p>• Phone + parts to be shipped with printed instructions & checklist</p>
                </CardContent>
              </Card>
            </TabsContent>
          </>
        )
      })}
    </div>
  );
}
