import random


def dias(kms: int):
    if kms < 100:
        return 0
    if kms < 200:
        return dias(kms=(kms-100)) + 1
    return dias(kms=(kms-100)) + dias(kms=(kms-200))


kms = random.randint(0, 2000)
days = dias(kms=kms)
print(f'Será entregado en: {days} días. Distancia: {kms}')


