# Pandas 🐼

## Notes

* [`pandas.io.json.json_normalize`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.io.json.json_normalize.html) is a function to _normalize_ structured JSON into a flat `dataframe`. Useful for working with data that comes from an JSON API.

## Snippets

### Connect to a SQL Database

```
from sqlalchemy import create_engine

engine = create_engine("postgresql:///database")

import pandas as pd
import numpy as np

df = pd.read_sql_query("SELECT * FROM table", con=engine)

df.tail()
```

### Python compatible column names with [slugify](https://pypi.python.org/pypi/awesome-slugify)

```
from slugify import slugify

df.columns = [slugify(c, separator="_", to_lower=True) for c in df.columns]
```



