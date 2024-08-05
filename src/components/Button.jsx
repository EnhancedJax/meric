export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-10 py-2.5 bg-secondary rounded-tl-[35px] rounded-br-[35px] flex items-center"
    >
      <span className="font-bold text-white">{children}</span>
    </button>
  );
}
