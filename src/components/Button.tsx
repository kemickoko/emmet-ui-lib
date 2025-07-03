type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button
    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    onClick={onClick}
  >
    {children}
  </button>
);