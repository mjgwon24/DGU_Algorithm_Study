# 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력
# input: 4\n1 3 5 7, output: 3

N = int(input())
nums = list(map(int, input().split()))
count = 0

def is_prime(num):
    if num == 1:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True

for num in nums:
    if is_prime(num):
        count += 1

print(count)

# int(num ** 0.5) + 1: 제곱근까지만 확인하면 소수인지 아닌지 알 수 있다.
# + 1:  range()는 미만으로 동작하기 때문에 제곱근까지만 확인하려면 +1을 해줘야 한다.