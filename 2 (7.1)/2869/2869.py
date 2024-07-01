# 달팽이가 높이 V미터인 나무 막대를올라간다.
# 낮에는 A미터 올라가고 밤에는 B미터 미끄러진다.
# 정상에 도달하려면 며칠이 걸리는지 구하시오.
# input: 2 1 5, output: 4
# input: 5 1 6, output: 2

A, B, V = map(int, input().split())

day = (V - B) / (A - B)
print(int(day) if day == int(day) else int(day) + 1)
