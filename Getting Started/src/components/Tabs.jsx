export default function Tabs({ chidlren, buttons, ButtonsContainer = "menu" }) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {chidlren}
    </>
  );
}
