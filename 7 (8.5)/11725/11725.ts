/**
 * 트리의 부모 찾기
 * 문제: 루트 없는 트리가 주어진다. 이때, 트리의 루트를 1이라고 정했을 때, 각 노드의 부모를 구하는 프로그램을 작성하시오.
 * 입력: 첫째 줄에 노드의 개수 N (2 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N-1개의 줄에 트리 상에서 연결된 두 정점이 주어진다.
 * 출력: 첫째 줄부터 N-1개의 줄에 각 노드의 부모 노드 번호를 2번 노드부터 순서대로 출력한다.
 */

/**
 * 1. 노드 개수 N 입력
 * 2. 그래프 표현을 위한 ArrayList배열 tree, 부모 노드 저장을 위한 parents 배열 생성 및 초기화
 * 3. 각 노드간 연결 관계를 입력받아 그래프 구성
 * 4. 깊이 우선 탐색으로 각 노드의 부모 노드 설정
 * 5. 2번 노드부터 부모 노드 출력
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);
const tree = Array.from(Array(N + 1), () => Array());
const parents = Array(N + 1).fill(0);

for (let i = 1; i < N; i++) {
  const [node1, node2] = input[i].split(' ').map(Number);
  tree[node1].push(node2);
  tree[node2].push(node1);
}

const dfs = (start) => {
  for (const node of tree[start]) {
    if (!parents[node]) {
      parents[node] = start;
      dfs(node);
    }
  }
};

dfs(1);
for (let i = 2; i <= N; i++) {
  console.log(parents[i]);
}