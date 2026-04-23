import React from 'react';

export default function Footer() {
  return (
    <footer className="signoff">
      <div className="signoff-wrap">
        <div className="signoff-copy">
          <span>© {new Date().getFullYear()} · Shops at Landmark District</span>
          <span>Est. 1910 — Old Louisville</span>
        </div>
        <div className="big">LANDMARK</div>
        <div className="signoff-copy">
          <span>Photographs · Archives of Old Louisville</span>
          <span>Site · Redesigned 2026</span>
        </div>
      </div>
    </footer>
  );
}
