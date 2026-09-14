#!/usr/bin/env python3
"""Build TSEF wordmark / badge / banner PNGs from the approved lockups."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
BRAND = ROOT / "public" / "brand"
PUBLIC = ROOT / "public"
FONTS = ROOT / "scripts" / "fonts"

INK = (17, 17, 17, 255)
ORANGE = (232, 92, 4, 255)
WHITE = (255, 255, 255, 255)
CLEAR = (255, 255, 255, 0)

# Geometry shared by the official stacked mark.
STEM = 0.175
BAR = 0.22


def load_font(size: int) -> ImageFont.FreeTypeFont:
    candidates = [
        FONTS / "ArchivoBlack-Regular.ttf",
        Path("/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf"),
        Path("/usr/share/fonts/truetype/macos/Inter-Bold.ttf"),
    ]
    for path in candidates:
        if path.exists():
            return ImageFont.truetype(str(path), size=size)
    return ImageFont.load_default()


def rounded_rect(
    draw: ImageDraw.ImageDraw,
    box: tuple[int, int, int, int],
    fill: tuple[int, ...],
    radius: int = 0,
) -> None:
    draw.rounded_rectangle(box, radius=radius, fill=fill)


def draw_t(draw: ImageDraw.ImageDraw, x: int, y: int, w: int, h: int, color: tuple[int, ...]) -> None:
    stem = max(2, int(w * STEM))
    bar = max(2, int(h * BAR * 1.15))
    rounded_rect(draw, (x, y, x + w, y + bar), color)
    rounded_rect(draw, (x, y, x + stem, y + h), color)


def draw_f(draw: ImageDraw.ImageDraw, x: int, y: int, w: int, h: int, color: tuple[int, ...]) -> None:
    stem = max(2, int(w * STEM))
    bar = max(2, int(h * BAR * 1.05))
    mid_w = int(w * 0.58)
    mid_y = y + int(h * 0.52)
    rounded_rect(draw, (x, y, x + w, y + bar), color)
    rounded_rect(draw, (x, y, x + stem, y + h), color)
    rounded_rect(draw, (x + stem, mid_y, x + mid_w, mid_y + bar), color)


def draw_letter(
    img: Image.Image,
    letter: str,
    x: int,
    y: int,
    height: int,
    color: tuple[int, ...],
) -> int:
    """Draw a heavy gothic letter; returns rendered width."""
    font = load_font(int(height * 1.18))
    draw = ImageDraw.Draw(img)
    bbox = draw.textbbox((0, 0), letter, font=font)
    draw.text((x, y - bbox[1]), letter, font=font, fill=color)
    return bbox[2] - bbox[0]


def draw_official_mark(
    img: Image.Image,
    origin: tuple[int, int],
    width: int,
    colors: dict[str, tuple[int, ...]] | None = None,
) -> int:
    """Official lockup: black T/S/E, orange F. Returns mark height."""
    colors = colors or {"t": INK, "s": INK, "e": INK, "f": ORANGE}
    x, y = origin
    height = int(width * 0.9)
    gap = max(2, int(width * 0.025))
    half = (height - gap) // 2
    draw = ImageDraw.Draw(img)
    # T
    draw_t(draw, x, y, width, half, colors["t"])
    # S + E under the T bar, sized to fill the remaining counter
    inner_x = x + int(width * STEM) + max(2, int(width * 0.015))
    inner_right = x + width
    letter_h = int(half * 0.86)
    letter_y = y + int(half * BAR * 1.15) + max(1, int(width * 0.01))
    s_w = draw_letter(img, "S", inner_x, letter_y, letter_h, colors["s"])
    draw_letter(
        img,
        "E",
        inner_x + s_w + max(1, int(width * 0.01)),
        letter_y,
        letter_h,
        colors["e"],
    )
    _ = inner_right
    # F
    draw_f(draw, x, y + half + gap, width, half, colors["f"])
    return height


def fit_text(
    draw: ImageDraw.ImageDraw,
    text: str,
    max_width: int,
    start_size: int,
) -> ImageFont.FreeTypeFont:
    size = start_size
    while size > 8:
        font = load_font(size)
        if draw.textlength(text, font=font) <= max_width:
            return font
        size -= 2
    return load_font(8)


def build_official(path: Path, transparent: bool = False) -> None:
    w, h = 1600, 420
    img = Image.new("RGBA", (w, h), CLEAR if transparent else WHITE)
    mark_w = 320
    mark_h = draw_official_mark(img, (40, 48), mark_w)
    draw = ImageDraw.Draw(img)
    text_x = 40 + mark_w + 56
    text_w = w - text_x - 40
    top_font = fit_text(draw, "TEXAS SUPPORT", text_w, 92)
    bot_font = fit_text(draw, "EVENTS FOUNDATION", text_w, 92)
    # Vertically center the two lines against the mark.
    top_bbox = draw.textbbox((0, 0), "TEXAS SUPPORT", font=top_font)
    bot_bbox = draw.textbbox((0, 0), "EVENTS FOUNDATION", font=bot_font)
    line_h = (top_bbox[3] - top_bbox[1]) + 18 + (bot_bbox[3] - bot_bbox[1])
    text_y = 48 + (mark_h - line_h) // 2
    draw.text((text_x, text_y), "TEXAS SUPPORT", font=top_font, fill=INK)
    draw.text(
        (text_x, text_y + (top_bbox[3] - top_bbox[1]) + 18),
        "EVENTS FOUNDATION",
        font=bot_font,
        fill=ORANGE,
    )
    img = crop_tight(img, pad=24)
    img.save(path, "PNG")


def build_badge(path: Path) -> None:
    size = 1024
    img = Image.new("RGBA", (size, size), CLEAR)
    draw = ImageDraw.Draw(img)
    draw.ellipse((16, 16, size - 16, size - 16), fill=WHITE, outline=INK, width=18)
    mark_w = 560
    mark_x = (size - mark_w) // 2
    mark_y = 210
    draw_official_mark(img, (mark_x, mark_y), mark_w)
    img.save(path, "PNG")


def build_banner(path: Path) -> None:
    w, h = 1200, 630
    img = Image.new("RGBA", (w, h), WHITE)
    # Banner lockup: T/S/F black, E orange.
    mark_w = 280
    mark_h = draw_official_mark(
        img,
        (70, 175),
        mark_w,
        colors={"t": INK, "s": INK, "e": ORANGE, "f": INK},
    )
    draw = ImageDraw.Draw(img)
    text_x = 70 + mark_w + 48
    texas_font = fit_text(draw, "TEXAS", w - text_x - 70, 168)
    sub_font = fit_text(draw, "SUPPORT EVENTS FOUNDATION", w - text_x - 70, 36)
    draw.text((text_x, 175 + 28), "TEXAS", font=texas_font, fill=INK)
    texas_box = draw.textbbox((text_x, 175 + 28), "TEXAS", font=texas_font)
    sub_y = texas_box[3] + 18
    draw.text((text_x, sub_y), "SUPPORT EVENTS FOUNDATION", font=sub_font, fill=ORANGE)
    sub_box = draw.textbbox((text_x, sub_y), "SUPPORT EVENTS FOUNDATION", font=sub_font)
    draw.rectangle((text_x, sub_box[3] + 16, text_x + (sub_box[2] - text_x), sub_box[3] + 19), fill=INK)
    img.save(path, "PNG")


def crop_tight(img: Image.Image, pad: int = 0) -> Image.Image:
    bbox = img.getbbox()
    if not bbox:
        return img
    left, top, right, bottom = bbox
    left = max(0, left - pad)
    top = max(0, top - pad)
    right = min(img.width, right + pad)
    bottom = min(img.height, bottom + pad)
    return img.crop((left, top, right, bottom))


def main() -> None:
    BRAND.mkdir(parents=True, exist_ok=True)
    build_official(BRAND / "tsef-logo-official.png", transparent=False)
    build_official(BRAND / "tsef-b-transparent.png", transparent=True)
    build_badge(BRAND / "tsef-b-badge-only.png")
    build_banner(PUBLIC / "tsef-b-banner.png")
    badge = Image.open(BRAND / "tsef-b-badge-only.png")
    badge.resize((64, 64), Image.Resampling.LANCZOS).save(PUBLIC / "favicon.png", "PNG")
    badge.resize((180, 180), Image.Resampling.LANCZOS).save(BRAND / "apple-touch-icon.png", "PNG")
    print("wrote", BRAND / "tsef-logo-official.png")
    print("wrote", BRAND / "tsef-b-transparent.png")
    print("wrote", BRAND / "tsef-b-badge-only.png")
    print("wrote", PUBLIC / "tsef-b-banner.png")


if __name__ == "__main__":
    main()
