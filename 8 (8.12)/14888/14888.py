# /**
# * 연산자 끼워넣기
# * 문제: N개의 수와 N-1개의 연산자가 주어졌을 때, 만들 수 있는 식의 결과가 최대인 것과 최소인 것을 구하는 프로그램을 작성하시오.
# * 입력: 첫째 줄에 수의 개수 N(2 ≤ N ≤ 11)가 주어진다. 둘째 줄에는 A1, A2, ..., AN이 주어진다. (1 ≤ Ai ≤ 100) 셋째줄에는 합이 N-1인 4개의 정수가 주어지는데, 차례대로 덧셈(+)의 개수, 뺄셈(-)의 개수, 곱셈(×)의 개수, 나눗셈(÷)의 개수이다.
# * 출력: 첫째 줄에 만들 수 있는 식의 결과의 최댓값을, 둘째 줄에는 최솟값을 출력한다.
# */

def calc(a, b, op):
    if op == '+':
        return a + b
    elif op == '-':
        return a - b
    elif op == '*':
        return a * b
    else:
        if a < 0:
            return -(-a // b)
        return a // b

def dfs(i, res):
    global max_res, min_res
    if i == N:
        max_res = max(max_res, res)
        min_res = min(min_res, res)
        return
    for j in range(4):
        if op[j] > 0:
            op[j] -= 1
            dfs(i+1, calc(res, num[i], operator[j]))
            op[j] += 1

N = int(input())
num = list(map(int, input().split()))
op = list(map(int, input().split()))
operator = ['+', '-', '*', '/']
max_res = -1000000000
min_res = 1000000000

dfs(1, num[0])
print(max_res)
print(min_res)
