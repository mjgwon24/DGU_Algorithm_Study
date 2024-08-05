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

using System;
using System.Collections.Generic;

namespace _11725 {
    class Program {
        public static void Main(String[] args) {
            int N = Convert.ToInt32(Console.ReadLine());
            List<int>[] tree = new List<int>[N + 1];
            int[] parents = new int[N + 1];

            for (int i = 1; i <= N; i++) {
                tree[i] = new List<int>();
            }

            for (int i = 0; i < N - 1; i++) {
                string[] tokens = Console.ReadLine().Split(' ');
                int a = Convert.ToInt32(tokens[0]);
                int b = Convert.ToInt32(tokens[1]);
                tree[a].Add(b);
                tree[b].Add(a);
            }

            DFS(tree, parents, 1, 0);

            for (int i = 2; i <= N; i++) {
                Console.WriteLine(parents[i]);
            }
        }

        public static void DFS(List<int>[] tree, int[] parents, int node, int parent) {
            parents[node] = parent;

            for (int i = 0; i < tree[node].Count; i++) {
                int next = tree[node][i];
                if (next != parent) {
                    DFS(tree, parents, next, node);
                }
            }
        }
    }
}