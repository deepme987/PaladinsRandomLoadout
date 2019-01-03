import random

def getChamp():
    global champ
    champ = input("\nEnter a champ name(blank for random!): ")
    if champ=="":
        try:
            f = open(".data/Champions.dat", "r")
            f.seek(0)
            lines = f.read().split(', ')
            f.close()
            champ = random.choice(lines)
        except:
            print("Error finding all files, try reinstalling or contact the developer.")
            input()
            exit()
def getLoadout():
    global lc
    global cards
    try:
        f = open(".data/Loadouts/"+champ+".dat", "r")
        lines = f.read().split(" || ")
        lc = lines[0].split(", ")
        cards = lines[1].split(", ")
    except:
        print("Wrong champion name, try again...\n")
        run()
        exit()

def getItems():
    global items
    items = []
    try:
        f = open(".data/items.dat", "r")
        f.seek(0)
        lines = f.read().split(', ')
        f.close()

        f = open(".data/item_deft.dat", "r")
        f.seek(0)
        lines_deft = f.read().split(', ')
        f.close()

        for i in range(4):
            temp_item = random.choice(lines)
            while temp_item=="Deft Hands" and champ in lines_deft or temp_item in items:
                temp_item = random.choice(lines)
            items.append(temp_item)
    except:
        print("Error finding all files, try reinstalling or contact the developer.")

def randomize():
    global lc
    global cards
    global total
    global temp
    global leg

    temp = dict()
    total = 0
    leg = random.choice(lc)

    values = [i for i in range(1,4)]
    temp_card = random.choice(cards)

    for i in range(5):
        while temp_card in temp:
            temp_card=random.choice(cards)
        temp_value = random.choice(values)
        total += temp_value
        temp[temp_card]=temp_value

    while total < 15:
        rand = random.choice(list(temp.keys()))
        if temp[rand] < 5:
            temp[rand] += 1
            total += 1

def result():
    # f = open("Result.txt", "w+")
    # f.write("Champion: " + champ +  "\nTalent: "+ leg + "\nLoadout:")
    print("\nChampion: " + champ + "\nTalent: " + leg + "\nLoadout:")
    for i in temp:
        line = str(i)+str(" - ")+ str(temp[i])
        # f.write("\n"+line)
        print(line)
    print(items)
    # f.close()


def run():
    getChamp()
    getLoadout()
    getItems()
    randomize()
    result()

print("Welcome to Paladins Random Loadout Generator!")
n=""
while n=="":
    run()
    # getItems()
    n = input("\n\nPress enter to reroll, any key to exit: ")
