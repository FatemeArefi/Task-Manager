import React, { useState } from "react";

interface EditTaskFormProps {
  taskId: number;
  currentTitle: string;
  saveEdit: (id: number, newTitle: string) => void;
  cancelEdit: () => void;
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({
  taskId,
  currentTitle,
  saveEdit,
  cancelEdit,
}) => {
  const [newTitle, setNewTitle] = useState<string>(currentTitle);

  const handleSave = () => {
    if (newTitle.trim()) {
      saveEdit(taskId, newTitle);
    }
  };

  return (
    <div className="mb-4 bg-white p-4 rounded-lg shadow">
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
      />
      <div className="flex gap-2 mt-3">
        <button
          onClick={handleSave}
          className="w-full p-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition"
        >
          Save
        </button>
        <button
          onClick={cancelEdit}
          className="w-full p-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditTaskForm;
