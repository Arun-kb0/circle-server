#!/usr/bin/env bash
set -euo pipefail

# script need to be fixed
SERVICE_YAML="media-soup-svc.yml"
# Temporary file for the new ports block
PORTS_TMP=$(mktemp)

# 1) Generate the ports block for MediaSoup
for p in $(seq 4000 4020); do
  cat <<EOF >>"$PORTS_TMP"
    - name: media-soup-$p
      port: $p
      targetPort: $p
      protocol: UDP
EOF
done
# 2) Remove all entries under the `ports` section
sed -i '/^  ports:/,/^$/d' "$SERVICE_YAML"

# 3) Re-add the `ports` section and append the new ports block
sed -i '/^spec:/a \  ports:' "$SERVICE_YAML"
sed -i '/^  ports:/r '"$PORTS_TMP" "$SERVICE_YAML"

# 4) Cleanup the temporary file
rm -f "$PORTS_TMP"

echo "✅ MediaSoup UDP ports 4000–4020 added under '#mediasoup-ports' in $SERVICE_YAML"
