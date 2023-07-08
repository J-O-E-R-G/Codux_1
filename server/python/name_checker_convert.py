import sys
import os
sys.path.insert(0, './server/python')

import name_checker

def main():
    df = name_checker.checker()
    decision = input("Is the cleaned_names.csv file correct? (yes/no): ").strip()
    if decision.lower() == "yes":
        df.to_csv(os.path.join('./server/python', 'top100.csv'))         
    else:
        pass

if __name__ == '__main__':
     main()