export default function Footer() {
  return (
    <footer className="signoff" data-theme="dark">
      <div className="signoff-wrap">
        <div className="signoff-copy">
          <span>© {new Date().getFullYear()} · Shops at Landmark District</span>
          <span>Est. 1910 · Old Louisville</span>
        </div>
        <div className="signoff-mark" aria-hidden="true">Landmark</div>
        <div className="signoff-copy">
          <span>Photographs · Archives of Old Louisville</span>
          <span>Site · Redesigned 2026</span>
        </div>
      </div>
    </footer>
  );
}
