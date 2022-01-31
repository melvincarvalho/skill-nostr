#!/usr/bin/env bash

mkdir -p ~/.nostr/data
docker pull scsibug/nostr-rs-relay
docker run -p 7000:8080 v ~/.nostr/data:/usr/src/app/db scsibug/nostr-rs-relay


