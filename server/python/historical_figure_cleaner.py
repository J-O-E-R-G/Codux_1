import pandas as pd
import os
from bs4 import BeautifulSoup

try:
    df_existing = pd.read_csv(os.path.join('./server/python', 'top100.csv'))
except pd.errors.EmptyDataError:
    df_existing = pd.DataFrame()

df_new = pd.read_csv(os.path.join('./server/python', 'top100_2.csv'))
df_new['name'] = df_new['name'].apply(lambda x: BeautifulSoup(x, 'html.parser').get_text())

for i in df_new.index:
    if df_new['name'][i] not in df_existing['name'].values:
        df_existing = pd.concat([df_existing, df_new.loc[i:i]], ignore_index=True)

df_existing.to_csv(os.path.join('./server/python', 'top100.csv'), index=False)








#df['name'] = df['name'].str.replace("^\d+\. ", "", regex=True)
