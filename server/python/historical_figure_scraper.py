import pandas as pd

df = pd.read_csv("top100_1.csv")

df['name'].replace("<br />","")
df['name'].replace("<P>","")