#! /bin/bash
# 读取原有数据
row=0
declare -A rowStr=()
while IFS= read -r LINE || [ -n "$LINE" ]; do
  col=0
  for cell in $LINE; do
    rowStr[$col]+=" $cell"
    col=$((col + 1))
  done
  row=$col
done <file.txt
# 转置处理
for ((i = 0; i < row; i += 1)); do
  echo ${rowStr[$i]}
done

# file.txt
# name age
# alice 21
# ryan 30

# Runtime: 56 ms, faster than 9.44% of Bash online submissions for Transpose File.
# Memory Usage: 3.5 MB, less than 9.89% of Bash online submissions for Transpose File.
