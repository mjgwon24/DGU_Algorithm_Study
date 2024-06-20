# 문자열의 단어 개수 세기

count = 0
input_data = input().split(' ')

for i in range(len(input_data)):
    if input_data[i] != '':
        count += 1

print(count)