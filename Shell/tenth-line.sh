#! /bin/bash
count=0
while IFS= read -r LINE || [ -n "$LINE" ]; do
  let count+=1
  if [ "$count" = "10" ]; then
    echo "${LINE}"
  fi
done <file.txt

# file.txt
# Line 1
# Line 2
# Line 3
# Line 4
# Line 5
# Line 6
# Line 7
# Line 8
# Line 9
# Line 10
