# Static site served by nginx behind Coolify's Traefik (Hetzner + Coolify + Cloudflare).
# Security headers, caching and the www -> apex redirect live here, versioned and testable.
# The server config is inlined (heredocs) so no config file ever sits in the web root or the build context.
#
# Only an explicit allow-list reaches the image (see .dockerignore: it ignores everything by default).
# The repo also holds agent instructions, workflows and the talk's Node examples; none of that is published.
FROM nginx:alpine

# Included by every location that sets its own add_header (nginx does not inherit add_header across levels).
COPY <<'EOF' /etc/nginx/snippets/security-headers.conf
add_header Strict-Transport-Security "max-age=31536000" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()" always;
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Resource-Policy "same-origin" always;
# Third parties: Google Fonts (index.html) and api.qrserver.com (QR image on the last slide of the talk).
add_header Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; img-src 'self' data: https://api.qrserver.com; font-src https://fonts.gstatic.com; connect-src 'none'; form-action 'none'; frame-ancestors 'none'; base-uri 'self'; object-src 'none'" always;
EOF

COPY <<'EOF' /etc/nginx/conf.d/default.conf
server_tokens off;

server {
  listen 80;
  server_name _;
  root /usr/share/nginx/html;
  index index.html;

  # One canonical host (TLS is terminated by Traefik in front of this container).
  if ($host = www.demismeneghetti.com.br) {
    return 301 https://demismeneghetti.com.br$request_uri;
  }

  include /etc/nginx/snippets/security-headers.conf;

  # Dotfiles are hidden, except /.well-known/ (security.txt, ACME-style files).
  location ^~ /.well-known/ {
    include /etc/nginx/snippets/security-headers.conf;
    try_files $uri =404;
  }

  location ~ /\. {
    return 404;
  }

  # Images: cache for a week (file names are not content-hashed, so no "immutable").
  location ~* \.(png|jpe?g|svg|ico|webp|avif|woff2)$ {
    include /etc/nginx/snippets/security-headers.conf;
    add_header Cache-Control "public, max-age=604800" always;
    try_files $uri =404;
  }

  # HTML, CSS and JS: always revalidate (cheap with ETag), so a deploy shows up immediately.
  location / {
    include /etc/nginx/snippets/security-headers.conf;
    add_header Cache-Control "no-cache" always;
    try_files $uri $uri/ =404;
  }
}
EOF

COPY . /usr/share/nginx/html

EXPOSE 80
