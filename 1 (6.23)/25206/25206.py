# 전공평점 계산

gradePoint = {
    "A+": 4.5,
    "A0": 4.0,
    "B+": 3.5,
    "B0": 3.0,
    "C+": 2.5,
    "C0": 2.0,
    "D+": 1.5,
    "D0": 1.0,
    "F": 0.0
}

total = 0
totalCredits = 0
yourGPA = 0

for i in range(20):
    inputs = input().split(' ')

    if inputs[2] == 'P':
        continue

    total += double(inputs[1]) * gradePoint[inputs[2]]
    totalCredits += double(inputs[1])

yourGPA = total / totalCredits

# 소수점 6째자리까지 출력
print('%.6f' % yourGPA)
