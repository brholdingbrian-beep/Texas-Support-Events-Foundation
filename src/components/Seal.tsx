export default function Seal() {
  return (
    <svg className="seal" viewBox="0 0 80 80" aria-hidden="true">
      <circle cx="40" cy="40" r="38" fill="#111" />
      <circle cx="40" cy="40" r="33" fill="none" stroke="#f6f4f0" strokeWidth="1" />
      <text
        x="40"
        y="28"
        textAnchor="middle"
        fill="#f6f4f0"
        fontSize="6"
        fontWeight="700"
        letterSpacing="1.4"
        fontFamily="Inter, sans-serif"
      >
        AUSTIN VETERANS
      </text>
      <text
        x="40"
        y="44"
        textAnchor="middle"
        fill="#e63427"
        fontSize="9"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        RANGE
      </text>
      <text
        x="40"
        y="56"
        textAnchor="middle"
        fill="#f6f4f0"
        fontSize="9"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        DAY
      </text>
    </svg>
  );
}
