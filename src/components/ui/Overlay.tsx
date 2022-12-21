const Overlay = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-screen bg-[#0000004d] z-10"
      onClick={onClick}
    />
  );
};

export default Overlay;
