const Burger = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 22 22"
      stroke="currentColor"
      {...props}
    >
      <rect
        x="0.199951"
        y="1.28"
        width="21.6"
        height="3.24"
        rx="1.5"
        fill="#121B21"
      />
      <rect
        x="0.199951"
        y="16.4"
        width="21.6"
        height="3.24"
        rx="1.5"
        fill="#121B21"
      />
      <rect
        x="0.199951"
        y="8.84003"
        width="21.6"
        height="3.24"
        rx="1.5"
        fill="#121B21"
      />
    </svg>
  );
};

export default Burger;
