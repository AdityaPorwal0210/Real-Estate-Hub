# Virtual Real-Estate Property Tour — Skyline Residence

An interactive, browser-based 3D virtual tour application built for academic demonstration. This application allows prospective homebuyers and clients to explore a modern 3 BHK luxury residential apartment in real-time 3D, inspect furniture, view detailed room metrics, switch between day and night lighting, use a first-person walkthrough, and interact with a 2D architectural floor plan.

![Skyline Residence Virtual Tour](https://img.shields.io/badge/Three.js-3D%20Tour-indigo?style=for-the-badge)
![React & Vite](https://img.shields.io/badge/React%2019-Vite-blue?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS%20v4-sky?style=for-the-badge)

---

## 🌟 Key Features

1. **Interactive 3D Procedural Apartment Model**:
   - Fully textured and lit 3 BHK modern residential layout spanning ~1,850 sq ft (172 m²).
   - Features 9 distinct spaces: **Living Room**, **Modular Kitchen**, **Dining Area**, **Master Bedroom Suite**, **Bedroom 2**, **Master Bath (En-Suite)**, **Common Bath**, **Panoramic Balcony**, and **Entrance / Foyer**.
   - Includes procedural furniture (L-shaped sectional sofa, dining set, modular quartz kitchen, king bed, glass shower stalls, outdoor lounge, TV wall unit).

2. **Dual Navigation Modes**:
   - **Orbit Mode**: Smooth 360° rotation, panning, and zooming with camera lerp transitions when changing rooms.
   - **First-Person Walkthrough Mode**: Walk through doorway cutouts at eye level (~1.6m) using `W`, `A`, `S`, `D` keys or on-screen touch buttons for mobile.

3. **Room Navigation & Side Drawer**:
   - Dedicated side panel listing all rooms with category quick filters (Living, Bedrooms, Baths, Balcony).
   - Clicking a room triggers a smooth camera fly-through transition to that room.

4. **2D Interactive Architectural Floor Plan**:
   - Top-down precision SVG rendering showing room boundaries, dimensions, door openings, and furniture outlines.
   - Live room selection and quick teleport trigger.

5. **Interactive 3D Furniture & Hotspots**:
   - Clickable 3D marker pins and furniture pieces (Sofa, TV unit, Dining set, Quartz kitchen island, King bed, Wardrobe, Rain shower).
   - Displays full specifications, materials, and estimated dimensions upon inspection.

6. **Automated Guided Tour Mode**:
   - Hands-free guided walkthrough cycling sequentially through all property spaces with play, pause, skip, and progress bar HUD.

7. **Day & Night Environment Toggle**:
   - Seamlessly switch between bright natural sunlight with soft shadow mapping and evening twilight with warm recessed interior spotlights and ambient lamps.

8. **Dimensions & Measurement Mode**:
   - Visual dimension lines and area callouts overlaying room boundaries.

---

## 🛠️ Technology Stack

- **Frontend Core**: React 19, TypeScript, Vite
- **3D Graphics & Engine**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Styling**: Tailwind CSS v4, Lucide React Icons
- **State & Transitions**: React Hooks, Three.js vector lerp interpolation

---

## 🚀 Installation & How to Run

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### 1. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 2. Run Development Server
```bash
npm run dev:client
```
Then open your browser and navigate to `http://localhost:5000` (or the port specified in terminal).

### 3. Build for Production
```bash
npm run build
```

---

## 🎮 User Controls

| Mode / View | Desktop Interaction | Mobile Interaction |
| :--- | :--- | :--- |
| **Orbit Mode** | Mouse Drag (Rotate) • Scroll Wheel (Zoom) • Right Drag (Pan) | One Finger Drag (Rotate) • Pinch (Zoom) |
| **Walkthrough** | `W` `A` `S` `D` / Arrow Keys + Mouse Look | On-Screen Touch Virtual Directional D-Pad |
| **Interactive Objects** | Left Click on glowing 3D Hotspot / Furniture | Tap on 3D Hotspot / Furniture |
| **Floor Plan** | Click room rect on 2D map to fly camera | Tap room rect on 2D map |

---

## 📁 Project Structure

```
client/src/
├── components/
│   ├── PropertyViewer/
│   │   ├── 3D/
│   │   │   ├── ApartmentModel.tsx       # Procedural 3D walls, floors & furniture
│   │   │   ├── CameraController.tsx     # Lerp transitions & WASD walkthrough controller
│   │   │   ├── InteractiveHotspots.tsx  # 3D floating markers & click listeners
│   │   │   └── LightingEnvironment.tsx  # Day/Night lighting & sky tones
│   │   ├── ViewerCanvas.tsx             # R3F Canvas container & WebGL wrapper
│   │   └── WebGLFallback.tsx            # Graceful WebGL error handling view
│   ├── FloorPlan/
│   │   └── FloorPlanModal.tsx           # 2D Interactive SVG Floor Plan
│   ├── GuidedTour/
│   │   └── GuidedTourControls.tsx       # Automated tour player HUD
│   └── UI/
│       ├── Header.tsx                   # Top navigation & quick actions
│       ├── RoomNavDrawer.tsx            # Left room selection sidebar
│       ├── RoomInfoPanel.tsx            # Right room specifications panel
│       ├── ObjectDetailModal.tsx        # Furniture item specs modal
│       ├── PropertyOverviewModal.tsx    # Skyline Residence property brochure
│       ├── WelcomeModal.tsx             # Initial landing intro modal
│       ├── FirstPersonControlsHelp.tsx  # FPS control HUD & touch d-pad
│       └── BottomControls.tsx           # Bottom toolbar buttons
├── data/
│   └── propertyData.ts                  # Room info, dimensions, hotspots, & brochure details
├── App.tsx                              # Main app state orchestration
├── main.tsx                             # Entry point
└── index.css                            # Styling & Tailwind setup
```

---

## 🎓 Academic Project Disclaimer

This application was developed as an academic demonstration project. All property prices, area metrics, dimensions, and specifications are fictional demo data created for illustrative educational evaluation.
