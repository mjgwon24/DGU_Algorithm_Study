# /**
# * 2007년
# * 문제: 2007년 x월 y일은 무슨 요일인지 구하라
# * 입력: x, y (1 ≤ x ≤ 12, 1 ≤ y ≤ 31)
# * 출력: MON, TUE, WED, THU, FRI, SAT, SUN
# */

x, y = map(int, input().split())
days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

def get_day(x, y):
    total_days = 0
    for i in range(1, x):
        if i in [1, 3, 5, 7, 8, 10, 12]:
            total_days += 31
        elif i in [4, 6, 9, 11]:
            total_days += 30
        else:
            total_days += 28
    total_days += y
    return days[total_days % 7 - 1]

print(get_day(x, y))

# /**
# * [요일을 구하는 방법]
# * 1. 1월 1일은 월요일이다.
# * 2. 1월 1일부터 x월 y일까지의 총 일수를 구한다.
# * 3. 총 일수를 7로 나눈 나머지를 구한다.
# * 4. 나머지가 1이면 MON, 2이면 TUE, 3이면 WED, 4이면 THU, 5이면 FRI, 6이면 SAT, 0이면 SUN
# */