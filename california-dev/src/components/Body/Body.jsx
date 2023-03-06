export function Body({ theme }) {
  const capitalizeThemeTitle = theme.replace(/^\w/, (firstChar) =>
    firstChar.toUpperCase()
  );

  return (
    <main style={{ paddingLeft: "10rem" }} id="main">
      <h1>This is {capitalizeThemeTitle} Theme</h1>
    </main>
  );
}
