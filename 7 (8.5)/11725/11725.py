# /**
# * 트리의 부모 찾기
# * 문제: 루트 없는 트리가 주어진다. 이때, 트리의 루트를 1이라고 정했을 때, 각 노드의 부모를 구하는 프로그램을 작성하시오.
# * 입력: 첫째 줄에 노드의 개수 N (2 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N-1개의 줄에 트리 상에서 연결된 두 정점이 주어진다.
# * 출력: 첫째 줄부터 N-1개의 줄에 각 노드의 부모 노드 번호를 2번 노드부터 순서대로 출력한다.
# */
#
# /**
# * 1. 노드 개수 N 입력
# * 2. 그래프 표현을 위한 ArrayList배열 tree, 부모 노드 저장을 위한 parents 배열 생성 및 초기화
# * 3. 각 노드간 연결 관계를 입력받아 그래프 구성
# * 4. 깊이 우선 탐색으로 각 노드의 부모 노드 설정
# * 5. 2번 노드부터 부모 노드 출력
# */

import sys
from collections import defaultdict

def dfs(start):
    visited[start] = True
    for i in tree[start]:
        if not visited[i]:
            parent[i] = start
            dfs(i)

N = int(sys.stdin.readline())
tree = defaultdict(list)
parent = [0 for _ in range(N+1)]
visited = [False for _ in range(N+1)]

for _ in range(N-1):
    a, b = map(int, sys.stdin.readline().split())
    tree[a].append(b)
    tree[b].append(a)

dfs(1)

for i in range(2, N+1):
    print(parent[i])