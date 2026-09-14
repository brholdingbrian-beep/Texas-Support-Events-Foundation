#!/usr/bin/env bash
# Copy official TSEF PNGs into site paths when they exist on disk.
# Expected sources (first hit wins):
#   ./br-holding-brand-assets/
#   $OFFICIAL_ASSET_DIR
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
src="${OFFICIAL_ASSET_DIR:-$root/br-holding-brand-assets}"
need=(
  tsef-logo-official.png
  tsef-b-transparent.png
  tsef-b-badge-only.png
  tsef-b-banner.png
)
missing=0
for f in "${need[@]}"; do
  if [[ ! -f "$src/$f" ]]; then
    echo "missing $src/$f" >&2
    missing=1
  fi
done
if [[ "$missing" -ne 0 ]]; then
  echo "Official PNGs are not on disk. Drop the four files into $src and rerun." >&2
  exit 1
fi
mkdir -p "$root/public/brand"
cp -f "$src/tsef-logo-official.png" "$root/public/brand/tsef-logo-official.png"
cp -f "$src/tsef-b-transparent.png" "$root/public/brand/tsef-b-transparent.png"
cp -f "$src/tsef-b-badge-only.png" "$root/public/brand/tsef-b-badge-only.png"
cp -f "$src/tsef-b-banner.png" "$root/public/brand/tsef-b-banner.png"
cp -f "$src/tsef-b-banner.png" "$root/public/tsef-b-banner.png"
python3 - <<PY
from pathlib import Path
from PIL import Image
root = Path("$root")
badge = Image.open(root / "public/brand/tsef-b-badge-only.png")
badge.convert("RGBA").resize((64, 64), Image.Resampling.LANCZOS).save(root / "public/favicon.png", "PNG")
badge.convert("RGBA").resize((180, 180), Image.Resampling.LANCZOS).save(root / "public/brand/apple-touch-icon.png", "PNG")
print("installed official assets + favicon/apple-touch from badge")
for p in [
    root / "public/brand/tsef-logo-official.png",
    root / "public/brand/tsef-b-transparent.png",
    root / "public/brand/tsef-b-badge-only.png",
    root / "public/tsef-b-banner.png",
]:
    im = Image.open(p)
    print(f"{p.name}: {p.stat().st_size} bytes, {im.size[0]}x{im.size[1]} {im.mode}")
PY
