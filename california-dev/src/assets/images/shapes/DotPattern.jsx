export const DotPattern = ({ className, id }) => {

  if (!id) {
    console.error("No className or id provided for DotPattern");
    id = "pattern";
  }

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="108"
      height="108"
    >
      <defs>
        <pattern
          id={id}
          width="18"
          height="18"
          x="0"
          y="0"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="9" cy="9" r="2" fill="red" />
        </pattern>
      </defs>
      <path fill={`url(#${id})` } d="M0 0h108v108H0z" />
    </svg>
  );
};
