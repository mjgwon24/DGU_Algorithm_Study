# N개의 수가 주어졌을 때, 이를 오름차순 정렬
# 첫재쭐 N에 수가 주어지고, 둘째 줄부터 N개의 수가 주어진다.
# input: 5\n5\n2\n3\n4\n1, output: 1 2 3 4 5

N = int(input())
nums = [int(input()) for _ in range(N)]
nums.sort()
for num in nums:
    print(num)

# sort() 함수를 사용해 오름차순으로 정렬한 뒤 출력