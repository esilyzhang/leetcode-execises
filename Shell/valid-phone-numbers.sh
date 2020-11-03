#! /bin/bash
while IFS= read -r LINE || [ -n "$LINE" ]; do
  if [[ "$LINE" =~ ^([0-9]{3}-|\([0-9]{3}\)\ )[0-9]{3}-[0-9]{4}$ ]]; then
    echo "${LINE}"
  fi
done <file.txt

# file.txt
# 987-123-4567
# 123 456 7890
# (123) 456-7890
