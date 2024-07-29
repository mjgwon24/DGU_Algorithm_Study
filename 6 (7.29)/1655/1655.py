# /**
# * 가운데를 말해요
# * 문제: 정수가 주어질때마다 해당 수 중에서 중간값을 출력한다. 만약 중간값이 두개라면 두 수 중 작은 수를 출력한다.
# * 입력: 첫째 줄에는 수의 개수 N이 주어진다. N은 1보다 크거나 같고, 100,000보다 작거나 같은 자연수이다. 그 다음 N줄에 걸쳐 정수가 주어진다.
# * 출력: 한 줄에 하나씩 중간값을 출력한다.
# */

import heapq
import sys

input = sys.stdin.read
data = input().split()

N = int(data[0])
min_heap = []
max_heap = []

results = []
for i in range(1, N + 1):
    num = int(data[i])

    if not max_heap or num <= -max_heap[0]:
        heapq.heappush(max_heap, -num)
    else:
        heapq.heappush(min_heap, num)

    if len(max_heap) > len(min_heap) + 1:
        heapq.heappush(min_heap, -heapq.heappop(max_heap))
    elif len(min_heap) > len(max_heap):
        heapq.heappush(max_heap, -heapq.heappop(min_heap))

    results.append(-max_heap[0])

print("\n".join(map(str, results)) + "\n")
