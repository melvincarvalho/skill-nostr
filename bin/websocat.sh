#!/usr/bin/env bash

echo '["REQ", "mirror", { kinds: [4]  }]' | websocat -n wss://nostr-pub.wellorder.net | jq -c '[.[0,2]]' -M | websocat ws://localhost:7000
