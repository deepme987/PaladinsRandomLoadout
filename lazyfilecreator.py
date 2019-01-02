f = open("Champions.txt", "r")
lines = f.read().split(", ")
for i in lines:
    f1 = open("Loadouts/"+i+".txt", "r")
    lines = f1.read().split(" || ")
    lc = lines[0].split(", ")
    cards = lines[1].split(", ")
    if len(lc)!=4 or len(cards)!=16:
        print(i)
    f1.close()
f.close()