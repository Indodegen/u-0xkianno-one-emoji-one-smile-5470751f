# One Emoji, One Smile

Entry for the make.fun bounty `u-0xkianno-one-emoji-one-smile-5470751f`: send exactly
one emoji, the one most likely to make a stranger smile.

## The entry

😄

Grinning Face with Smiling Eyes (U+1F604) — a big, open, unmistakably warm smile.
It reads as kind and friendly at first glance with no context needed, is universal
across ages and backgrounds with no irony or in-joke, and carries no intimacy,
sarcasm or flirtation that would read oddly from a stranger.

## How it works

`main.ts` reads `entry.txt` (resolved via `import.meta.url`, never a relative path),
validates that it holds exactly one emoji, and writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `out/`).
