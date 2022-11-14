# n = int(input("enter no of rows"))
# for i in range(0,n): #regular
#     for j in range(0,n-i-1):
#         print(end = " ") #spaces
#     for j in range(0,i+1):
#         print("*", end=" ") # priting *
#     print()
# for i in range(n,0,-1):   #mirror
#     for j in range(0,n-i):
#         print(end = " ") #spaces
#     for j in range(0,i):
#         print("*", end=" ") # priting *
#     print()
def alternate_universe_factorial(n, m):
    fact_n = 1
    fact_m = 1
    for num in range(1, n+1):
        fact_n = fact_n*num
        for num in range(1, m+1):
            fact_m = fact_m*num
            alt = alternate_universe_factorial(26, 35)
            print(alt)

























