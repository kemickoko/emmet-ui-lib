type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
};

export const Button = ({ children, onClick, variant = 'primary', disabled = false }: ButtonProps) => (
  <button
    disabled={disabled}
    className={`px-4 py-2 rounded ${
      variant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-black'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);