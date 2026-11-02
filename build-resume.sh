if ! command -v typst; then
  curl -fsSL https://github.com/typst/typst/releases/download/v0.15.1/typst-x86_64-unknown-linux-musl.tar.xz |
    tar -xJ --strip-components=1 -C /tmp typst-x86_64-unknown-linux-musl/typst &&
    /tmp/typst compile resume.typ public/resume.pdf
fi
