# Task Manager Application

A modern Next.js task management application with Zustand global state management, featuring real-time updates across all pages.

## Features

✨ **Core Features:**
- ✅ Create new tasks with title, description, priority, and due date
- 🔄 Real-time state updates across the entire application using Zustand
- ✓ Mark tasks as completed/incomplete with instant reflection
- 🗑️ Delete individual tasks or clear all tasks
- 🎯 Priority levels (Low, Medium, High) with visual indicators
- 📅 Due date tracking
- 🎨 Beautiful, responsive UI with Tailwind CSS
- ⚡ Smooth animations and transitions
- 📊 Task statistics (Active, Completed count)

## Project Structure

```
assignment_todo-manager/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout
│   ├── page.js              # Main dashboard page
│   └── favicon.ico
├── components/
│   ├── TaskForm.js          # Form for creating new tasks
│   ├── TaskList.js          # Container for displaying tasks
│   └── TaskItem.js          # Individual task component
├── store/
│   └── taskStore.js         # Zustand global state store
├── public/
├── package.json
├── jsconfig.json            # Path aliases configuration
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.js
└── eslint.config.mjs
```

## State Management with Zustand

### Task Store (`store/taskStore.js`)

The store manages all task-related state and actions:

```javascript
// State
tasks: Array<Task>

// Actions
- addTask(task)      // Add new task with auto-generated ID
- toggleTask(id)     // Toggle task completion status
- deleteTask(id)     // Remove task from store
- clearTasks()       // Remove all tasks
```

**Task Object Structure:**
```javascript
{
  id: Number,              // Unique timestamp-based ID
  title: String,           // Task title (required)
  description: String,     // Task description (optional)
  priority: 'low' | 'medium' | 'high',
  dueDate: String | null,  // ISO date format
  completed: Boolean,      // Task completion status
  createdAt: String        // ISO timestamp
}
```

## Components

### TaskForm Component
- Controlled form with validation
- Supports: title, description, priority, due date
- Loading state during submission
- Form resets after successful task creation
- Accessibility features (labels, ARIA attributes)

### TaskList Component
- Displays all tasks sorted by completion status then date
- Active tasks shown first
- Completed tasks moved to bottom
- Updates instantly when store changes

### TaskItem Component
- Visual task card with all details
- Checkbox for quick toggling
- Priority badges with color coding
- Due date and creation date display
- Delete button with confirmation

## Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Steps

1. **Navigate to project directory:**
   ```bash
   cd assignment_todo-manager
   ```

2. **Install Zustand dependency:**
   ```bash
   npm install zustand
   ```

3. **Install all dependencies:**
   ```bash
   npm install
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   ```
   http://localhost:3000
   ```

## How It Works

### Real-Time State Updates

1. **Form Submission:**
   - User fills and submits the TaskForm
   - Form calls `addTask()` from Zustand store
   - Store updates its `tasks` array
   
2. **Instant UI Updates:**
   - All components subscribed to store automatically re-render
   - No page refresh needed
   - Changes visible immediately across the app

3. **Component Subscription:**
   ```javascript
   // Components subscribe to store changes
   const tasks = useTaskStore((state) => state.tasks);
   // Re-renders automatically when tasks change
   ```

### Priority Color Coding

- 🔴 **High:** Red background (#FF6B6B)
- 🟡 **Medium:** Yellow background (#FFD93D)
- 🟢 **Low:** Green background (#6BCB77)

## Usage Examples

### Creating a Task
1. Fill in the form on the left side
2. Click "Add Task"
3. Task appears instantly in the task list
4. Form clears for next entry

### Managing Tasks
- **Complete Task:** Click checkbox to mark as done
- **Delete Task:** Click ✕ button to remove
- **Clear All:** Use "Clear All" button at top of task list
- **View Details:** All task info visible on each card

## Styling & UI

### Tailwind CSS Classes
- Responsive grid layout (1 column on mobile, 3 columns on desktop)
- Gradient background (blue to indigo)
- Sticky form positioning on desktop
- Smooth hover effects and transitions
- Loading spinner animation
- Disabled state styling

### Responsive Design
- Mobile: Single column layout
- Tablet & Desktop: Two-column layout with sticky form
- Touch-friendly buttons and inputs
- Optimal spacing and readability

## Build & Deployment

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

## Technical Stack

- **Framework:** Next.js 16.0.4
- **React Version:** 19.2.0
- **State Management:** Zustand
- **Styling:** Tailwind CSS 4
- **Font:** Geist (Next.js default)
- **Linting:** ESLint 9

## Best Practices Implemented

✅ **Client Components:** Used `'use client'` directive for interactive components
✅ **Custom Hooks:** Leveraging Zustand hooks for state access
✅ **Component Separation:** Modular component structure
✅ **Accessible Form:** Proper labels and ARIA attributes
✅ **Loading States:** UX feedback during operations
✅ **Form Validation:** Client-side validation
✅ **Error Handling:** User-friendly messages
✅ **Responsive Design:** Mobile-first approach
✅ **Performance:** Optimized re-renders with Zustand selectors

## Future Enhancements

- 💾 Local Storage persistence
- ☁️ Backend API integration
- 🔐 User authentication
- 📧 Email reminders
- 🏷️ Task categories/tags
- 🔍 Search & filter functionality
- 📈 Analytics dashboard
- 🌙 Dark mode
- 📱 Mobile app version

## Troubleshooting

### Tasks not appearing?
- Check browser console for errors
- Ensure Zustand is installed: `npm install zustand`
- Verify `'use client'` directive in components

### Styles not applying?
- Clear `.next` folder: `rm -r .next`
- Rebuild: `npm run build`
- Check Tailwind CSS config

### Port 3000 in use?
- Use different port: `npm run dev -- -p 3001`

## License

MIT - Feel free to use this project for learning and development.

## Author

Created as a skill development project demonstrating modern React patterns with Next.js and Zustand.
