#! /bin/bash
# 读取数据
declare -A word_=()
while IFS= read -ra LINE || [ -n "${LINE}" ]; do
  for cell in $LINE; do
    if [[ ! -z ${word_[$cell]} ]]; then
      word_[$cell]=$((word_[$cell] + 1))
    else
      word_[$cell]=1
      words+="${cell/\\\\n/ /} "
    fi
  done
done <words.txt

# max 函数
function max() {
  if [[ ! -z $@ ]]; then
    next_list=''
    max_name=''
    max=0
    for item in $@; do
      if [[ max -lt ${word_[$item]} ]]; then
        max=${word_[$item]}
        max_name=$item
      fi
      next_list+="${item} "
    done
    echo "${max_name} ${max}"
    max ${next_list/$max_name/}
  fi
}

# 遍历降序输出
# max $words
echo $words
# words.txt
# the day is sunny the the
# the sunny is is
