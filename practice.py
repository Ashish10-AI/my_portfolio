# functions and recursions

# def sum_of(n):
#     if n == 1:
#         return 1
#     else:
#         return n + sum_of(n-1)

# n = int(input("Enter a number: "))
# print(sum_of (n))
 
# # file i/o 
# (q1)

# f = open ("open.txt")
# content = f.read()
# if ("johny" in content):
#     print ("yes the johny word exists in the file")
# else:
#     print(" the word does not exists")

# f.close()


# q2 high score store
# import random
# def game():
#     score = random.randint(1,101)
#     print(f"your socre is: {score}" )
#     # file fetch
#     with open("hiscore.txt") as f:
#         hiscore = f.read()
#         if (hiscore != ""):
#             hiscore = int(hiscore)
#         else:
#             hiscore = 0
#     # hiscore update
#         if (score>hiscore):
#             with open("hiscore.txt", "w") as f:
#                 f.write(str(score))
        
# game()
        
# q3 2 to 20 mltiplication table
def gentable(n):
    table =""
    for i in range (1,11):
        table += f"{n} x {i} = {n*i}\n"

    with open(f"tables/table-{n}.txt","w") as f:
        f.write(table)

for i in range(2,21):
    gentable(i)