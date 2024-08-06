export default function H1({ children }) {
  return (
    <div className="flex items-center gap-5 py-2.5 w-full justify-center h-min ">
      <div className="w-2 h-2 rounded-full bg-text" />
      <h1 className="text-xl font-bold text-text">{children}</h1>
      <div className="w-2 h-2 rounded-full bg-text" />
    </div>
  );
}
