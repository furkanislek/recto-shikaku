/** Small rectangle-mosaic mark echoing the in-app Shikaku logo. */
export default function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="2" y="2" width="20" height="27" rx="7" fill="#43A860" />
      <rect x="26" y="2" width="20" height="13" rx="6.5" fill="#E87A55" />
      <rect x="26" y="19" width="20" height="27" rx="7" fill="#5B8DEF" />
      <rect x="2" y="33" width="20" height="13" rx="6.5" fill="#EDAE3B" />
    </svg>
  );
}
