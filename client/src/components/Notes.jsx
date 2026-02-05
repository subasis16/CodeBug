import React, { useState, useEffect } from 'react';
import { FiPlus, FiTrash2, FiSave, FiEdit3 } from 'react-icons/fi';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../context/useAuth';

const Notes = () => {
  const { user } = useAuth();
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeNote, setActiveNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('notes')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setNotes(data || []);
      } catch (error) {
        console.error('Error fetching notes:', error.message);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchNotes();
    }
  }, [user]);

  const handleCreateNote = async () => {
    try {
      const newNote = {
        title: 'Untitled Note',
        content: '',
        user_id: user.id
      };

      const { data, error } = await supabase
        .from('notes')
        .insert([newNote])
        .select();

      if (error) throw error;

      if (data && data.length > 0) {
        setNotes([data[0], ...notes]);
        handleEditNote(data[0]);
      }
    } catch (error) {
      console.error('Error creating note:', error.message);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      const { error } = await supabase
        .from('notes')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setNotes(notes.filter(note => note.id !== id));
      if (activeNote && activeNote.id === id) {
        setActiveNote(null);
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Error deleting note:', error.message);
    }
  };

  const handleEditNote = (note) => {
    setActiveNote(note);
    setEditTitle(note.title || '');
    setEditContent(note.content || '');
    setIsEditing(true);
  };

  const handleSaveNote = async () => {
    if (!activeNote) return;

    try {
      setSaving(true);
      const updates = {
        title: editTitle,
        content: editContent,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from('notes')
        .update(updates)
        .eq('id', activeNote.id);

      if (error) throw error;

      // Update local state
      const updatedNotes = notes.map(note =>
        note.id === activeNote.id
          ? { ...note, ...updates }
          : note
      );
      setNotes(updatedNotes);
      setIsEditing(false);
      setActiveNote(null);
    } catch (error) {
      console.error('Error updating note:', error.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="h-full flex flex-col md:flex-row gap-6">

      {/* Sidebar / List of Notes */}
      <div className="w-full md:w-1/3 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">My Notes</h2>
          <div className="relative group">
            <button
              onClick={handleCreateNote}
              className="flex items-center gap-2 px-3 py-1.5 bg-ossium-accent/10 border border-ossium-accent/20 rounded-lg text-ossium-accent hover:bg-ossium-accent/20 transition-colors text-sm font-medium"
            >
              <FiPlus /> New Note
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {loading ? (
            <div className="text-center py-10 text-ossium-muted text-sm">Loading notes...</div>
          ) : notes.length === 0 ? (
            <div className="text-center py-10 text-ossium-muted text-sm border-2 border-dashed border-white/5 rounded-xl">
              No notes yet. Create one!
            </div>
          ) : (
            notes.map(note => (
              <div
                key={note.id}
                onClick={() => handleEditNote(note)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${activeNote?.id === note.id
                  ? 'bg-white/5 border-ossium-accent/50'
                  : 'bg-[#121212] border-white/5 hover:border-white/10'
                  }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`font-bold truncate ${activeNote?.id === note.id ? 'text-ossium-accent' : 'text-white'}`}>
                    {note.title || 'Untitled Note'}
                  </h3>
                  <span className="text-[10px] text-ossium-muted font-mono">
                    {new Date(note.created_at || Date.now()).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-xs text-ossium-muted line-clamp-2 leading-relaxed">
                  {note.content || 'No content...'}
                </p>
                <div className="mt-3 flex justify-end">
                  <button
                    onClick={(e) => { e.stopPropagation(); handleDeleteNote(note.id); }}
                    className="p-1.5 text-ossium-muted hover:text-red-400 transition-colors rounded-lg hover:bg-white/5"
                  >
                    <FiTrash2 size={14} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex-1 bg-[#121212] border border-white/5 rounded-xl p-6 flex flex-col h-[calc(100vh-140px)]">
        {isEditing ? (
          <>
            <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                placeholder="Note Title"
                className="bg-transparent text-2xl font-bold text-white focus:outline-none placeholder-white/20 w-full"
              />
              <div className="relative group">
                <button
                  onClick={handleSaveNote}
                  disabled={saving}
                  className="flex items-center gap-2 px-4 py-2 bg-ossium-accent text-ossium-darker rounded-lg font-bold hover:bg-ossium-accent-hover transition-colors disabled:opacity-50"
                >
                  <FiSave /> {saving ? 'Saving...' : 'Save'}
                </button>
              </div>
            </div>
            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              placeholder="Write something... Use Markdown, paste commands, or generic text."
              className="flex-1 bg-transparent text-gray-300 font-mono text-sm leading-relaxed resize-none focus:outline-none scrollbar-thin scrollbar-thumb-white/10"
            />
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-ossium-muted opacity-50">
            <FiEdit3 size={48} className="mb-4" />
            <p className="text-lg">Select a note to view or edit</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Notes;
