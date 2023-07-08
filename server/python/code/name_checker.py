import pandas as pd
import os
import difflib

def checker():
    try:
        df = pd.read_csv(os.path.join('./server/python/csvs', 'top100.csv'))
    except pd.errors.EmptyDataError:
        df = pd.DataFrame()

    threshold = 0.7
    to_delete = set()

    for i in range(len(df)):
        for j in range(i+1, len(df)):
            name1 = df['name'].iloc[i]
            name2 = df['name'].iloc[j]
            
            similarity = difflib.SequenceMatcher(None, name1, name2).ratio()
            
            if similarity > threshold:
                print(f"The names {name1} and {name2} are {similarity*100}% similar.")
                
                while True:
                    decision = input("Do you want to delete one of these names? (yes/no): ").strip()
                    if decision.lower() == "yes":
                        delete = input(f"Which one do you want to delete? (Choice 0: {name1}, Choice 1: {name2}): ").strip()
                        
                        if delete == "0":
                            to_delete.add(name1)
                            print(f"{name1} will be deleted.")
                            break
                        elif delete == "1":
                            to_delete.add(name2)
                            print(f"{name2} will be deleted.")
                            break
                        else:
                            print("Please enter a valid choice (0 or 1).")
                    elif decision.lower() == "no":
                        break
                    else:
                        print("Please enter 'yes' or 'no'.")

    df = df[~df['name'].isin(to_delete)]
    df.to_csv(os.path.join('./server/python/csvs', 'cleaned_names.csv'), index=False)
    return df 
