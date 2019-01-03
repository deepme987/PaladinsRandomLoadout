f = open(".data/Champions.dat", "r")
lines = f.read().split(", ")
j = 0
for i in lines:
    f1 = open(".data/Loadouts/"+i+".dat", "r")
    lines = f1.read().split(" || ")
    # lc = lines[0].split(", ")
    cards = lines[1].split(", ")
    print(j,":", cards, ",")
    j+=1
    f1.close()
f.close()