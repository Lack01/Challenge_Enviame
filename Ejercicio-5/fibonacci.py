a, b = 1,1
contador = 0
while(a > 0):
    print(a, end=' ')
    a, b = b, a + b
    for i in range(a, a+1):
        if a % i == 0:
            contador += 1
    if contador > 1000:
        print("El número",a ,"tiene 1000 divisores")
        a = 0
    
