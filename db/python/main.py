from updateComic.updateComic import updateComic
from deleteComic.deleteComic import deleteComic
from readComic.readComics import readComics

def mainMenuPrint():
    print("- - - - - - - - - - - - - -")
    print()
    print('1. Read all comics')
    print('2. Create a new comic')
    print('3. Update a comic')
    print('4. Delete a comic')
    print('5. Exit')
    print()
    print("- - - - - - - - - - - - - -")
    print()

def main():
    mainMenuPrint()
    choice = int(input("Hva ætlaru að gera: "))
    conn = createConnection('./db/comics.db')

    if choice == '1':
        # read all users
        readComics(conn)
    elif choice == '2':
        # create a new user
        createComic(conn)
    elif choice == '3':
        # update a user
        updateComic(conn)
    elif choice == '4':
        # exit the program
        print('Exiting program...')
        exit()
    else:
        # invalid action choice
        print('Invalid choice choice. Please try again.')
        continue

main()