# Mídia original

Arquivos-fonte em qualidade máxima, guardados para reeditar ou reencodar. Esta pasta
fica fora de `public/` e não é publicada no site.

| Arquivo | Versão publicada | Como foi gerada |
| --- | --- | --- |
| `TNVideoBG_2.mp4` (1280×720, 60 fps, 12,6 MB) | `public/TNVideoBG_2.mp4` (2 MB) e `public/TNVideoBG_2-poster.webp` | `ffmpeg -i TNVideoBG_2.mp4 -an -vf "fps=30,scale=1280:-2" -c:v libx264 -preset slow -crf 28 -profile:v high -pix_fmt yuv420p -movflags +faststart saida.mp4`. Pôster: primeiro quadro, em WebP qualidade 70. |
