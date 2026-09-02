import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = ({ toast, onClose }) => {
  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 size={18} color="#10b981" />,
    error: <AlertCircle size={18} color="#ef4444" />,
    info: <Info size={18} color="#3b82f6" />,
  };

  return (
    <div className="toast-container">
      <div className={`toast ${toast.type || 'info'}`}>
        {icons[toast.type] || icons.info}
        <span style={{ flexGrow: 1 }}>{toast.message}</span>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer',
            padding: 0,
            display: 'flex',
          }}
          aria-label="Dismiss toast"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
};
