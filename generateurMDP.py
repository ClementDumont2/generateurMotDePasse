import random

def generateurMotDePasse (longueur : int, caracteresSpeciaux : bool) -> str :
    if longueur < 8 :
        choix = input("Êtes-vous sûr de vouloir utiliser un mot de passe de moins de 8 caractères ? o/n")
        if choix == "n" :
            longueur = int(input("Veuillez rentrer la longueur du mot de passe"))

    liste = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789"
    result = ""
    if (caracteresSpeciaux) :
        liste += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

    for i in range(longueur) :
        result += liste[random.randint(0,len(liste)-1)]
    return result

print(generateurMotDePasse(10, True))
