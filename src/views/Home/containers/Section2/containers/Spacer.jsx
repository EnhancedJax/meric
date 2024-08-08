export default function Spacer({ isVisible = true, height }) {
  return (
    <>
      {isVisible && (
        <div
          style={{
            height,
          }}
        />
      )}
    </>
  );
}
