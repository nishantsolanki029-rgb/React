import React, { useState } from "react";
import { Plus, Trash2, ClipboardList, Notebook } from "lucide-react"; // Assuming lucide-react for icons
  
const App = () => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [tasks, setTasks] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    if (!title.trim() || !notes.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      notes,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setTasks([newTask, ...tasks]);
    setTitle("");
    setNotes("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 selection:bg-indigo-500/30 font-sans">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row min-h-screen">
        
        {/* Sidebar: Control Panel */}
        <aside className="lg:w-80 w-full bg-[#111] border-r border-white/5 p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <ClipboardList size={24} className="text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">DevStack<span className="text-indigo-500">.</span></h1>
          </div>

          <form onSubmit={submitForm} className="space-y-5">
            <div>
              <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2 block">Task Title</label>
              <input
                type="text"
                placeholder="e.g., Refactor Auth API"
                className="w-full bg-[#1a1a1a] border border-white/10 p-3 rounded-xl outline-none focus:border-indigo-500 transition-all text-sm"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2 block">Description</label>
              <textarea
                rows={4}
                placeholder="Break down the steps..."
                className="w-full bg-[#1a1a1a] border border-white/10 p-3 rounded-xl outline-none focus:border-indigo-500 transition-all text-sm resize-none"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 active:scale-[0.98]"
            >
              <Plus size={18} />
              Create Task
            </button>
          </form>

          <div className="mt-auto pt-8 border-t border-white/5 hidden lg:block">
            <p className="text-xs text-gray-500">© 2024 DevStack Productivity</p>
          </div>
        </aside>

        {/* Main Content: Dashboard */}
        <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
          <header className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white">Project Backlog</h2>
              <p className="text-gray-400 mt-1">You have {tasks.length} active tasks today.</p>
            </div>
          </header>

          {tasks.length === 0 ? (
            <div className="h-[60vh] flex flex-col items-center justify-center text-center border-2 border-dashed border-white/5 rounded-3xl">
              <div className="bg-white/5 p-4 rounded-full mb-4">
                <Notebook size={40} className="text-gray-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-300">Clean Slate</h3>
              <p className="text-gray-500 max-w-xs mx-auto mt-2">
                No tasks found. Start your sprint by adding a new requirement on the left.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="group bg-[#161616] border border-white/5 p-6 rounded-2xl hover:border-indigo-500/50 hover:bg-[#1c1c1c] transition-all duration-300 relative"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded font-mono">
                      ID: {task.id.toString().slice(-4)}
                    </span>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="text-gray-600 hover:text-red-400 transition-colors p-1"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {task.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-4">
                    {task.notes}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <span className="text-xs text-gray-500 italic">Added {task.createdAt}</span>
                    <span className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;