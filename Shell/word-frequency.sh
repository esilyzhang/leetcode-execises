#! /bin/bash
# 读取数据
declare -A word_=()
while IFS= read -ra LINE || [ -n "${LINE}" ]; do
  LINE=$(echo $LINE | sed "s/[\W]/ /g")
  for cell in $LINE; do
    if [[ ! -z ${word_[$cell]} ]]; then
      word_[$cell]=$((word_[$cell] + 1))
    else
      word_[$cell]=1
      words+="%${cell}% "
    fi
  done
done <words.txt

# max 函数
function max() {
  if [[ ! -z $@ ]]; then
    next_list=''
    max_name=''
    item_name=''
    max=0
    for item in $@; do
      item_name=$(echo $item | sed "s/%//g")
      if [[ max -lt ${word_[$item_name]} ]]; then
        max=${word_[$item_name]}
        max_name=$item_name
      fi
      next_list+="${item} "
    done
    echo "${max_name} ${max}"
    next_list=$(echo $next_list | sed "s/%$max_name%/ /g")
    max $next_list
  fi
}

# 遍历降序输出
max $words
# words.txt
# the day is sunny the the
# the sunny is is

# words.txt #2
# how many cans can a canner can if a canner can can cans\na canner can can as many cans as a canner can if a canner can can a can\na canner can can as many cans as a canner can cans

# result
# Runtime: 72 ms, faster than 6.96% of Bash online submissions for Word Frequency.
# Memory Usage: 3.7 MB, less than 57.25% of Bash online submissions for Word Frequency.
