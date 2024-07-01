# 팩토리얼 함수 구현
# 0! = 1

def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)

print(factorial(int(input())))
