#!/usr/bin/env sh
set -eu
# Anchor status to the repository that owns this command, not the caller's cwd.
repo_root=$(CDPATH= cd -- "$(dirname -- "$0")/../.." && pwd -P)
echo "AIFT repo: ${AIFT_REPO_NAME:-unknown}"
git -C "$repo_root" status --short
